---
title: Agentic Coding
description: Leverage AI coding assistants to build higher quality NativeScript applications faster
contributors:
  - NathanWalker
---

Agentic coding refers to using AI-powered coding assistants that can autonomously perform complex multi-step development tasks. These tools go beyond simple code completion; they can understand your entire codebase, make architectural decisions, write tests, and implement features end-to-end.

## Why Agentic Coding for NativeScript?

NativeScript's architecture provides the following:

- **Direct native API access** - AI agents need to understand both JavaScript/TypeScript and native iOS/Android APIs
- **Cross-platform patterns** - Agents must generate code that works correctly on multiple platforms
- **Framework flexibility** - Code generation should adapt to Angular, Vue, Solid, Svelte, React, or plain TypeScript
- **Performance considerations** - Agents should follow best practices for native mobile performance

By providing proper context, AI coding assistants can generate high-quality NativeScript code that follows best practices and leverages the full power of the platform.

## The NATIVESCRIPT.md Context File

NativeScript provides a comprehensive context file that can be used with any AI coding assistant to dramatically improve code generation quality. This file contains:

- Project structure conventions
- Core API patterns and imports
- UI component reference
- Best practices for performance
- Platform-specific code patterns
- Framework integration examples
- Custom view creation patterns

### Getting the Context File

The `NATIVESCRIPT.md` file is available for download:

**[Download NATIVESCRIPT.md](https://docs.nativescript.org/assets/agentic/NATIVESCRIPT.md)**

You can also download it via the command line:

```bash
curl -o CLAUDE.md https://docs.nativescript.org/assets/agentic/NATIVESCRIPT.md
```

## Using with Claude Code

[Claude Code](https://code.claude.com) is Anthropic's agentic coding tool that runs in your terminal. It uses `CLAUDE.md` files to understand project context.

### Setup

1. Download the NativeScript context file to your project root:

```bash
curl -o CLAUDE.md https://docs.nativescript.org/assets/agentic/NATIVESCRIPT.md
```

2. Optionally, add project-specific instructions at the top of the file:

```markdown
# Project Context

This is a NativeScript Vue 3 application for managing recipes.

## Project-Specific Patterns
- We use Pinia for state management
- API calls go through `src/services/api.ts`
- All components are in `src/components/`

---

# NativeScript AI Agent Context
... (rest of NATIVESCRIPT.md content)
```

3. Start Claude Code in your project:

```bash
cd your-nativescript-project
claude
```

Claude will automatically read the `CLAUDE.md` file and use it to inform all code generation.

### Example Prompts

With the context file in place, you can give high-level instructions:

```
Create a settings page with switches for notifications, dark mode, and location tracking. 
Save preferences using ApplicationSettings.
```

```
Build a ListView that shows products with images, names, and prices. 
Use template selectors for featured vs regular items.
```

```
Create a custom native view that wraps Android's MaterialCardView and iOS's UIVisualEffectView.
```

## Using with Other AI Tools

The `NATIVESCRIPT.md` context file works with any AI coding assistant that supports custom context:

### GitHub Copilot

Download and add to your workspace's `.github/copilot-instructions.md`:

```bash
curl -o .github/copilot-instructions.md https://docs.nativescript.org/assets/agentic/NATIVESCRIPT.md
```

### Cursor

Add to your `.cursorrules` file or include in your project's context settings.

### Windsurf

Add to your workspace's `.windsurfrules` file.

### ChatGPT / Claude.ai Web

Copy the relevant sections into your conversation as context before asking NativeScript-related questions.

## Best Practices for AI-Assisted NativeScript Development

### 1. Be Specific About Your Framework

When prompting, specify which framework you're using:

```
Using NativeScript with Vue 3, create a component that...
```

```
In my Angular NativeScript app, implement a service that...
```

```
Using NativeScript with SolidJS, build a custom directive that...
```

```
While using NativeScript with React, create a functional component that...
```

```
Using NativeScript with Svelte, create a store that...
```

### 2. Reference Platform When Needed

For platform-specific features, mention the target:

```
Create an iOS-specific implementation that uses UIBlurEffect. You can reference it here https://developer.apple.com/documentation/uikit/uiblureffect?language=objc
```

```
Add Android haptic feedback using the native Vibrator API. You can reference it here https://developer.android.com/reference/android/os/Vibrator
```

### 3. Mention Performance Requirements

Help the AI understand performance constraints:

```
This will be used in a ListView with 1000+ items, so optimize for scroll performance.
```

```
This animation runs during user interaction, keep it on the UI thread.
```

### 4. Describe the User Experience

Provide UX context for better implementations:

```
Create a pull-to-refresh list that shows a loading indicator while fetching new data.
```

```
Build a form that validates on blur and shows inline error messages.
```

### 5. Request Tests When Appropriate

```
Create unit tests for the data transformation logic in this service.
```

## Extending the Context File

For team projects, consider extending the base context file with project-specific information:

### Create a Project-Specific Section

```markdown
# Project: Recipe Manager App

## Architecture
- Feature-based folder structure (`src/features/recipes/`, `src/features/auth/`)
- Shared components in `src/shared/components/`
- All API calls through `src/core/api/client.ts`

## Conventions
- Use `const` for all variables unless reassignment is needed
- Prefer composition over inheritance
- All async operations use async/await (no raw promises)

## State Management
- Pinia stores in `src/stores/`
- Each feature has its own store

---

@CLAUDE.md
```

The `@` import syntax (supported in Claude Code) lets you reference the base file without duplicating its contents. Just ensure you've downloaded `NATIVESCRIPT.md` as `CLAUDE.md` in your project root.

### Add Framework-Specific Rules

If your team uses specific patterns, document them:

```markdown
## Vue Component Patterns

- Use `<script setup lang="ts">` for all components
- Props must have TypeScript types defined
- Emit events using `defineEmits` with typed payloads
- Use `v-model` for two-way binding with form inputs
```

## Security Considerations

When using AI coding assistants:

- **Never include secrets** in context files (API keys, passwords)
- **Review generated code** before committing, especially for security-sensitive features
- **Validate native API usage** - ensure proper permissions are requested
- **Test on real devices** - Even if something runs in emulators, always verify on actual devices

## Troubleshooting

### AI Generates Web-Specific Code

If the AI generates DOM-based code instead of NativeScript:

- Ensure the context file is properly loaded
- Explicitly mention "NativeScript" in your prompts
- Specify the target platforms (iOS/Android/visionOS)

### Generated Code Uses Outdated APIs

- Update to the latest `@nativescript/core` to get the current context file
- Mention the NativeScript version you're using in prompts

### Framework-Specific Syntax Issues

- Verify your context file includes the correct framework examples
- Add your framework's specific patterns to the context

## Resources

- [Download NATIVESCRIPT.md](https://docs.nativescript.org/assets/agentic/NATIVESCRIPT.md)
- [Claude Code Documentation](https://code.claude.com/docs)
- [NativeScript Best Practices](/best-practices/)
- [Creating Custom Elements](/guide/create-custom-native-elements)
