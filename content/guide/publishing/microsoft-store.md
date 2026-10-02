---
title: Publishing to the Microsoft Store
description: Build signed MSIX packages for sideloading, or upload packages for the Microsoft Store.
category: Publishing
categoryLink: /guide/publishing/
prev: /guide/publishing/
next: false
contributors:
  - triniwiz
breadcrumbs:
  - name: 'Publishing'
    href: '/guide/publishing/'
  - name: 'Publishing to the Microsoft Store'
---

::: warning Experimental
The Windows platform is experimental. See [Developing for Windows](/guide/windows/).
:::

NativeScript Windows apps are packaged as [MSIX](https://learn.microsoft.com/windows/msix/overview). A release build produces one of:

| Package                | Use                                                        | Command                                                            |
| ---------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| `.msix` (signed)       | Sideloading, distributing outside of the Store, enterprise | `ns build windows --release --certificate <path.pfx>`              |
| `.msixbundle` (signed) | Same as above, as a bundle                                 | `ns build windows --release --certificate <path.pfx> --msixbundle` |
| `.msixupload`          | Submitting to the Microsoft Store                          | `ns build windows --release --store-upload`                        |

Packages are written to `platforms/windows/<ProjectName>/AppPackages/`. Use `--copy-to <path>` to copy the resulting package to a different location.

## Preparing the app

### App identity and version

The package identity, version, display name and publisher are defined in `App_Resources/Windows/Package.appxmanifest`:

```xml
<Identity
  Name="org.nativescript.myapp"
  Publisher="CN=My Company"
  Version="1.0.0.0" />

<Properties>
  <DisplayName>My App</DisplayName>
  <PublisherDisplayName>My Company</PublisherDisplayName>
  <Logo>Assets\StoreLogo.png</Logo>
</Properties>
```

- `Name` defaults to your app id ([`id`](/configuration/nativescript#id) or [`windows.id`](/configuration/nativescript#windows-id)).
- `Version` must be a four part version number (`Major.Minor.Build.Revision`). Increase it for every release.
- `Publisher` must match the subject of the certificate used to sign the package. For Store submissions, use the values shown in Partner Center (see below).

### Icons

Replace the logos in `App_Resources/Windows/Assets/` with your own. See [App_Resources › Windows](/project-structure/app-resources#windows-specific-resources).

### Architecture

Each build targets a single architecture, `x64` by default. Use `--arch` to build for `arm64`:

```bash
ns build windows --release --store-upload --arch arm64
```

### Protecting your source code

Optionally, enable [`windows.sourceProtect`](/configuration/nativescript#windows-sourceprotect) (or pass `--source-protect`) to ship your bundled JavaScript encrypted instead of as plain text files.

## Sideloading (outside of the Store)

MSIX packages must be signed with a certificate that's trusted on the machine installing the app.

Sign with a `.pfx` file:

```bash
ns build windows --release --certificate ./certs/my-app.pfx --certificate-password <password>
```

Or with a certificate installed in your certificate store, identified by its thumbprint:

```bash
ns build windows --release --certificate-thumbprint <thumbprint>
```

The certificate's subject (for example `CN=My Company`) must match the `Publisher` in `Package.appxmanifest`. See [Create a certificate for package signing](https://learn.microsoft.com/windows/msix/package/create-certificate-package-signing) for how to create a certificate for testing.

::: warning Unsigned packages
A `--release` build without `--certificate`, `--certificate-thumbprint` or `--store-upload` produces an **unsigned** `.msix`, which can't be installed until it is signed.
:::

The signed package can be installed by double clicking it, or with PowerShell:

```powershell
Add-AppxPackage -Path .\MyApp_1.0.0.0_x64.msix
```

## Publishing to the Microsoft Store

### 1. Reserve your app name in Partner Center

Sign in to [Partner Center](https://partner.microsoft.com/dashboard) with a [Microsoft developer account](https://learn.microsoft.com/windows/apps/publish/partner-center/open-a-developer-account), create a new app and reserve its name.

Under **Product management › Product identity** you'll find the values for `Package/Identity/Name`, `Package/Identity/Publisher` and `Package/Properties/PublisherDisplayName`. Copy them into the matching attributes in `App_Resources/Windows/Package.appxmanifest`.

### 2. Build a Store upload package

```bash
ns build windows --release --store-upload
```

This produces an unsigned `.msixupload` package in `platforms/windows/<ProjectName>/AppPackages/`. You don't need a certificate, the Store signs the package for you.

### 3. Submit the package

In Partner Center, create a new submission for your app, upload the `.msixupload` file under **Packages**, fill in the Store listing, and submit it for certification.

See [Publish your app in the Microsoft Store](https://learn.microsoft.com/windows/apps/publish/) for more details on the submission process.
