---
title: Integrations
description: NativeScript is a celebration of native platforms resulting in a liberating development experience which includes the ability to integrate with anything that runs on each target platform. Explore a few highlights of such integrations enabling you to develop the way you want using any solution together with NativeScript to meet the demands of the case in front of you.
contributors: false
prev: false
next: false
---

## Explore

<script lang="ts" setup>
  const integrations = [
  {
    id: 1,
    title: "React Native",
    href: "https://blog.nativescript.org/nativescript-with-react-native/",
    description: "Use React Native Modules with NativeScript",
    categories: [
      {
        title: "React Native",
        href: "https://reactnative.dev/",
      },
    ],
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png",
  },
  {
    id: 2,
    title: "Flutter",
    href: "https://github.com/NathanWalker/NativeScript-Flutter-Example",
    description: "Use Flutter with NativeScript",
    categories: [
      {
        title: "Flutter",
        href: "https://flutter.dev/",
      },
      { title: "Dart", href: "https://dart.dev/" },
      { title: "Example", href: "https://x.com/NativeScript/status/1790399780621037950"}
    ],
    imageUrl: "https://hydraulic.dev/assets/images/blog/flutter.webp",
  },
  {
    id: 3,
    title: "SwiftUI",
    href: "https://blog.nativescript.org/create-a-nativescript-checkbox-for-ios-with-swiftui/",
    description: "Use SwiftUI with a NativeScript app.",
    categories: [
      {
        title: "SwiftUI",
        href: "https://developer.apple.com/xcode/swiftui/",
      },
    ],
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*w9Qx-_oReedtEJctJ9bDNg.jpeg",
  },
  {
    id: 4,
    title: "Jetpack Compose",
    href: "https://dev.to/valorsoftware/introduction-to-jetpack-compose-for-nativescript-54d7",
    description: "Use Jetpack Compose with a NativeScript app.",
    categories: [{ title: "Jetpack Compose", href: "https://developer.android.com/develop/ui/compose" }, { title: 'Example', href: 'https://github.com/NativeScript/android-compose-example'}],
    imageUrl: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Jetpack%20Compose%20logo%20horizontal_W0quv7g.png",
  },
  {
    id: 5,
    title: "Capacitor",
    href: "https://capacitor.nativescript.org/",
    description: "Use Capacitor with NativeScript or use NativeScript with a Capacitor app.",
    categories: [{ title: "Capacitor", href: "https://capacitorjs.com/" }, { title: "Portals", href: "https://docs.nativescript.org/plugins/ionic-portals" }],
    imageUrl: "https://capacitorjs.com/og.png",
  },
  // {
  //   id: 6,
  //   title: "Rive",
  //   href: "https://stackblitz.com/edit/nativescript-text-from-image?file=src%2Fapp%2Fhome%2Fhome.component.ts",
  //   description: "Use Rive with a NativeScript app.",
  //   categories: [
  //     {
  //       title: "Angular",
  //       href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
  //     },
  //     {
  //       title: "iOS Vision Framework",
  //       href: "https://developer.apple.com/documentation/vision?language=objc",
  //     },
  //   ],
  //   videoUrl: "https://youtube.com/embed/cCqqXezvfWs",
  //   videoTitle: "iOS Recognize Text from an Image",
  // },
  // {
  //   id: 7,
  //   title: "Lottie",
  //   href: "https://stackblitz.com/edit/nativescript-pdfview-via-ios-pdfkit?file=src%2Fapp%2Fnative-pdfview%2Fnative-pdfview.ts",
  //   description: "Use Lottie with a NativeScript app.",
  //   categories: [
  //     {
  //       title: "Angular",
  //       href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
  //     },
  //     {
  //       title: "iOS PDFKit",
  //       href: "https://developer.apple.com/documentation/pdfkit?language=objc",
  //     },
  //   ],
  //   videoUrl: "https://youtube.com/embed/ucmAXFaFbY0",
  //   videoTitle: "iOS PDFKit",
  // },
];

</script>

<SnackList :snacks="integrations" />
