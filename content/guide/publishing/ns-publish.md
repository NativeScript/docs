---
title: Publishing with ns publish
category: Publishing
categoryLink: /guide/publishing/
prev: /guide/publishing/
next: false
contributors:
  - rigor789
  - NathanWalker
breadcrumbs:
  - name: 'Publishing'
    href: '/guide/publishing/'
  - name: 'Using ns publish'
---

You may want to review a few specific store preparation details in the following before using `ns publish`:
- [Publishing to Google Play](/guide/publishing/android-google-play)
- [Publishing to Apple App Store](/guide/publishing/apple-app-store)

You can execute the following command inside a NativeScript project using the CLI:

```bash
ns publish ios
```

The command will prompt for your `Apple ID` and `Password` for authentication with [iTunes Connect](https://itunesconnect.apple.com) and then produce a `release` build and proceed to upload it to iTunes Connect.

Alternatively, you can use an existing build by running the following command:

```bash
ns publish ios --ipa <path-to-ipa>
```

All of the parameters needed for publishing can be passed to the `publish` command directly:

```bash
ns publish ios [<Apple ID> [<Password> [<Mobile Provisioning Profile Identifier> [<Code Sign Identity>]]]]]
```

For example, assuming that you want to issue a build using a mobile provision with an identifier _d5d40f61-b303-4fc8-aea3-fbb229a8171c_, you could run:

```bash
ns publish ios my-apple-id my-password d5d40f61-b303-4fc8-aea3-fbb229a8171c "iPhone Distribution"
```

Note that the `Code Sign Identity` can be set to something generic like _iPhone Distribution_ in order to let the build automatically detect a code sign identity.

You can also automate the uploads of already built packages:

```bash
ns publish ios my-apple-id my-password --ipa /tmp/build/myIpa.ipa
```

For more information, run the following command:

```bash
ns help publish ios
```

Some tools that allow the submission process to be automated:

- https://blog.nativescript.org/automatic-nativescript-app-deployments-with-fastlane/
- https://github.com/fastlane/fastlane
