---
title: Publishing to Google Play
category: Publishing
categoryLink: /guide/publishing/
prev: /guide/publishing/
next: false
contributors:
  - rigor789
breadcrumbs:
  - name: 'Publishing'
    href: '/guide/publishing/'
  - name: 'Publishing to Google Play'
---

Publishing a NativeScript is generally the same as publishing any other Android app, documented in the [Official Android Docs](https://developer.android.com/studio/publish)

## Prerequisites

Before following this guide, make sure you have a valid Google Play developer account.

1. Set your application id <!-- todo: link to nativescript.config.ts docs -->
2. Set your application Name <!-- todo: link to guide/changing-the-application-name docs -->
3. Change your launcher icons <!-- todo: link to guide/changing-the-application-icon -->
4. Change your launch screen <!-- todo: link to guide/changing-the-launch-screen -->

### Generating an upload keystore

To upload `.apk` or `.aab` files to Google Play, you must first sign them with an upload key. To be able to sign, you need to generate a keystore if you don't already have one. Follow the [Android docs to generate a new keystore for your app](https://developer.android.com/studio/publish/app-signing#generate-key).

### Building an `.aab` (or `.apk`)

The following commands will build your app in release mode, and copy the result to the `dist/` folder since we are passing in the `--copy-to` flag.

<!-- tab: .aab -->

```cli
ns build android --release \
  --key-store-path <path-to-your-keystore> \
  --key-store-password <your-key-store-password> \
  --key-store-alias <your-alias-name> \
  --key-store-alias-password <your-alias-password> \
  --aab \
  --copy-to dist/build.aab
```

<!-- tab: .apk -->

```cli
ns build android --release \
  --key-store-path <path-to-your-keystore> \
  --key-store-password <your-key-store-password> \
  --key-store-alias <your-alias-name> \
  --key-store-alias-password <your-alias-password> \
  --apk \
  --copy-to dist/build.apk
```
<!--  -->

<!-- tab: Example Windows -->

```cli
ns build android --release \
  --key-store-path C:\projects\app\upload.keystore \
  --key-store-password example_password \
  --key-store-alias upload \
  --key-store-alias-password example_password \
  --aab \
  --copy-to dist\build.aab
```

<!-- tab: Example macOS/Linux -->

```cli
ns build android --release \
  --key-store-path ~/projects/app/upload.keystore \
  --key-store-password example_password \
  --key-store-alias upload \
  --key-store-alias-password example_password \
  --aab \
  --copy-to dist/build.aab
```

### Uploading to Google Play

Once you've successfully built your `.aab` or `.apk` head over to the Google Play developer console, and create a draft release. Upload your `.aab` or `.apk`.