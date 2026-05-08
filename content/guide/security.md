---
title: Security
description: Security configuration for NativeScript applications
contributors:
  - NathanWalker
---

NativeScript provides security configuration options to help you control sensitive runtime behaviors, particularly around remote code execution via ES module imports.

## Remote ES Module Security

NativeScript supports loading ES modules from remote HTTP(S) URLs via dynamic `import()`. While this is extremely useful during development (enabling features like plugin prototyping, Hot Module Replacement and more...), it carries security implications in production that you should understand.

### Why This Matters for NativeScript Apps

When you `await import("https://...")` in a NativeScript application, you're loading and executing code that wasn't bundled with your app. This has significant implications:

#### 1. Full Native API Access

Unlike browser JavaScript which is sandboxed, NativeScript code has **direct access to native platform APIs**:

- File system read/write
- Keychain/secure storage
- Network APIs (including internal network access)
- Camera, contacts, location services
- Any native framework or API exposed to your app

A compromised remote module can access anything your app can access.

#### 2. Supply Chain Risk

Even if you control the remote URL, you've created a path for:

- Code changes deploying without an App Store review
- Compromised CDN or build infrastructure affecting your users
- Cache poisoning or version inconsistencies across devices
- Third-party dependencies within the remote module being compromised

#### 3. No Platform Gatekeeping

App Store and Play Store reviews examine your bundled code. Remote modules bypass this entirely, which could:

- Violate store policies
- Introduce functionality that would have been rejected
- Create liability issues for your organization

### Default Behavior

| Mode | Remote Modules |
|------|----------------|
| **Debug** (local development) | ✅ Always allowed |
| **Production** (Release builds) | ❌ Blocked by default |

This design ensures development workflows (like HMR with a dev server) work seamlessly while production apps are secure by default.

### Enabling Remote Modules in Production

If you have a legitimate need for remote ES modules in production, you must explicitly opt-in via your `nativescript.config.ts`:

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'com.example.myapp',
  appPath: 'src',
  // ... other config
  
  security: {
    allowRemoteModules: true
  }
} as NativeScriptConfig
```

### Using an Allowlist (Recommended)

Rather than allowing all remote URLs, restrict to specific trusted origins using `remoteModuleAllowlist`:

```typescript
import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'com.example.myapp',
  main: 'bundle.mjs',
  
  security: {
    allowRemoteModules: true,
    remoteModuleAllowlist: [
      'https://cdn.yourcompany.com/modules/',
      'https://esm.sh/',
      'https://unpkg.com/@yourorg/'
    ]
  }
} as NativeScriptConfig
```

The allowlist uses **prefix matching** — a URL is allowed if it starts with any entry in the list.

#### Allowlist Examples

| Allowlist Entry | Allowed URLs | Blocked URLs |
|-----------------|--------------|--------------|
| `https://cdn.example.com/` | `https://cdn.example.com/mod.js` | `https://other.com/mod.js` |
| `https://esm.sh/@myorg/` | `https://esm.sh/@myorg/pkg` | `https://esm.sh/@other/pkg` |
| `https://unpkg.com/` | `https://unpkg.com/lodash` | `http://unpkg.com/lodash` (http blocked) |

### Configuration Reference

```typescript
interface SecurityConfig {
  /**
   * Enable remote ES module loading in production.
   * Default: false
   * 
   * When false, any attempt to import("https://...") in production
   * will throw an error.
   */
  allowRemoteModules?: boolean
  
  /**
   * Restrict remote modules to specific URL prefixes.
   * Only used when allowRemoteModules is true.
   * 
   * If empty or not provided, all HTTPS URLs are allowed
   * (not recommended for production).
   */
  remoteModuleAllowlist?: string[]
}
```

### Error Messages

When remote module loading is blocked, you'll see clear error messages:

```
// Remote modules disabled
Remote ES modules are not allowed in production. URL: https://example.com/mod.js. 
Enable via security.allowRemoteModules in nativescript.config.ts

// URL not in allowlist
Remote URL not in security.remoteModuleAllowlist: https://untrusted.com/mod.js
```

## Best Practices

### 1. Keep Production Secure by Default

Don't enable `allowRemoteModules` unless you have a specific, justified need. Ask yourself:

- Can this code be bundled with the app instead?
- Is the convenience worth the security trade-off?
- What's the blast radius if this remote source is compromised?

### 2. Use Narrow Allowlists

If you must allow remote modules:

```typescript
// ❌ Too broad - allows any HTTPS URL
security: {
  allowRemoteModules: true
  // No allowlist = everything allowed
}

// ✅ Specific paths only
security: {
  allowRemoteModules: true,
  remoteModuleAllowlist: [
    'https://cdn.yourcompany.com/nativescript-modules/v2/'
  ]
}
```

### 3. Pin Versions in URLs

Prefer immutable, versioned URLs over mutable endpoints:

```typescript
// ❌ Mutable - content can change without your knowledge
import('https://cdn.example.com/latest/module.js')

// ✅ Immutable - content hash in filename
import('https://cdn.example.com/module.a1b2c3d4.js')

// ✅ Version pinned
import('https://esm.sh/lodash@4.17.21')
```

### 4. Plan for Failure

Remote imports can fail due to network issues, CDN outages, or policy blocks:

```typescript
async function loadOptionalModule() {
  try {
    const mod = await import('https://cdn.example.com/analytics.js')
    return mod
  } catch (error) {
    console.warn('Optional module failed to load:', error.message)
    // App continues without this module
    return null
  }
}
```

### 5. Never Use User-Controlled URLs

```typescript
// 🚨 NEVER do this - injection vulnerability
const moduleUrl = getUserInput()
await import(moduleUrl)

// 🚨 Also dangerous - config could be tampered
const config = await fetchRemoteConfig()
await import(config.moduleUrl)
```

### 6. Consider Code Signing

For high-security applications, consider implementing your own verification:

```typescript
async function loadVerifiedModule(url: string, expectedHash: string) {
  // Fetch as text first
  const response = await fetch(url)
  const code = await response.text()
  
  // Verify integrity
  const actualHash = await computeHash(code)
  if (actualHash !== expectedHash) {
    throw new Error('Module integrity check failed')
  }
  
  // Safe to execute (you'd need a mechanism to evaluate the verified code)
  // This is illustrative - actual implementation depends on your setup
}
```

## Summary

| Scenario | Configuration | Security Level |
|----------|---------------|----------------|
| Development | Automatic | Open - for dev convenience |
| Production | No config needed | Secure - remote blocked |
| Production with remote | `allowRemoteModules: true` | ⚠️ Use with caution |
| Production with allowlist | Both options set | Recommended if remote needed |

The security configuration gives you control over the trade-off between flexibility and security. Default to the most secure option and only relax restrictions when you understand the implications and have implemented appropriate safeguards.
