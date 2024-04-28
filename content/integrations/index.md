---
title: Integrations
description: NativeScript is a celebration of native platforms resulting in a liberating development experience which includes the ability to integrate with anything that runs on each target platform. Explore a few highlights of such integrations enabling you to develop the way you want using any solution that meets the demands of the case in front of you.
contributors: false
prev: false
next: false
---

## Integrations

<script lang="ts" setup>
  const integrations = [
  {
    id: 1,
    title: "React Native",
    href: "https://stackblitz.com/edit/nativescript-spaceman-transition-example?file=app%2Fspace-view.xml",
    description: "Use React Native Modules with NativeScript",
    categories: [
      {
        title: "Shared Elements",
        href: "https://docs.nativescript.org/guide/shared-element-transitions",
      },
      {
        title: "TypeScript",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-plain-typescript",
      },
    ],
    videoUrl: "https://youtube.com/embed/hHqlEbU8o2o?si=7SgSCaNuqtRB9-ej",
    videoTitle: "Spaceman using just TypeScript",
  },
  {
    id: 2,
    title: "Flutter",
    href: "https://stackblitz.com/edit/nativescript-vue3-spaceman-transition-example?file=app%2Fcomponents%2FSpaceView.vue",
    description: "Use Flutter views in your NativeScript app or use NativeScript in your Flutter app.",
    categories: [
      {
        title: "Shared Elements",
        href: "https://docs.nativescript.org/guide/shared-element-transitions",
      },
      { title: "Vue", href: "https://nativescript-vue.org" },
    ],
    videoUrl: "https://youtube.com/embed/hHqlEbU8o2o?si=7SgSCaNuqtRB9-ej",
    videoTitle: "Spaceman using just Vue 3",
  },
  {
    id: 3,
    title: "SwiftUI",
    href: "https://stackblitz.com/edit/nativescript-music-player-transition-example?file=app%2Fmain-view.xml",
    description: "Use SwiftUI with a NativeScript app.",
    categories: [
      {
        title: "Shared Elements",
        href: "https://docs.nativescript.org/guide/shared-element-transitions",
      },
      {
        title: "TypeScript",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-plain-typescript",
      },
    ],
    videoUrl: "https://youtube.com/embed/KatL9m7E2XI?feature=share",
    videoTitle: "Music Player UI",
  },
  {
    id: 4,
    title: "Jetpack Compose",
    href: "https://stackblitz.com/edit/nativescript-reflective-ui?file=src%2Fapp%2Fitem%2Fitems.component.ts",
    description: "Use Jetpack Compose with a NativeScript app.",
    categories: [{ title: "iOS AVCaptureSession", href: "https://developer.apple.com/documentation/avfoundation/avcapturesession?language=objc" }],
    videoUrl: "https://youtube.com/embed/rbF6mYfwnck",
    videoTitle: "NativeScript Reflective UI",
  },
  {
    id: 5,
    title: "Capacitor",
    href: "https://stackblitz.com/edit/ns-tetris?file=src%2Fcomponents%2FHome.vue",
    description: "Use Capacitor with NativeScript or use NativeScript with a Capacitor app.",
    categories: [{ title: "Vue", href: "https://nativescript-vue.org" }],
    videoUrl: "https://youtube.com/embed/To_bycK6BGY",
    videoTitle: "A Tetris Game built with Vue 3",
  },
  {
    id: 6,
    title: "Rive",
    href: "https://stackblitz.com/edit/nativescript-text-from-image?file=src%2Fapp%2Fhome%2Fhome.component.ts",
    description: "Use Rive with a NativeScript app.",
    categories: [
      {
        title: "Angular",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
      },
      {
        title: "iOS Vision Framework",
        href: "https://developer.apple.com/documentation/vision?language=objc",
      },
    ],
    videoUrl: "https://youtube.com/embed/cCqqXezvfWs",
    videoTitle: "iOS Recognize Text from an Image",
  },
  {
    id: 7,
    title: "Lottie",
    href: "https://stackblitz.com/edit/nativescript-pdfview-via-ios-pdfkit?file=src%2Fapp%2Fnative-pdfview%2Fnative-pdfview.ts",
    description: "Use Lottie with a NativeScript app.",
    categories: [
      {
        title: "Angular",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
      },
      {
        title: "iOS PDFKit",
        href: "https://developer.apple.com/documentation/pdfkit?language=objc",
      },
    ],
    videoUrl: "https://youtube.com/embed/ucmAXFaFbY0",
    videoTitle: "iOS PDFKit",
  },
];

</script>

<SnackList :snacks="integrations" />
