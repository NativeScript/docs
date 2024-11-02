---
title: Snacks
description: Discover the power and flexibility of NativeScript through our curated selection of 'Snacks' - bite-sized projects designed to inspire and educate.
contributors: false
prev: false
next: false
---

Each Snack reveals NativeScript's power, from UI tricks to platform SDK usages to flavor implementations all through [StackBlitz](https://stackblitz.com/). Get a peek 👀 at what's possible.

## Explore Snacks

<script lang="ts" setup>
  const snacks = [
  {
    id: 1,
    title: "Spaceman using just TypeScript",
    href: "https://stackblitz.com/edit/nativescript-spaceman-transition-example?file=app%2Fspace-view.xml",
    description: "Shared Element Transitions using TypeScript.",
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
    title: "Spaceman using just Vue 3",
    href: "https://stackblitz.com/edit/nativescript-vue3-spaceman-transition-example?file=app%2Fcomponents%2FSpaceView.vue",
    description: "Shared Element Transitions using Vue 3.",
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
    title: "Music Player UI",
    href: "https://stackblitz.com/edit/nativescript-music-player-transition-example?file=app%2Fmain-view.xml",
    description: "Music Player UI with Shared Element Transitions.",
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
    title: "Reflective UI",
    href: "https://stackblitz.com/edit/nativescript-reflective-ui?file=src%2Fapp%2Fitem%2Fitems.component.ts",
    description: "Using iOS AVCaptureSession to create live reflective UI mask. Try with your phone in Dark Mode, it's neat!",
    categories: [{ title: "iOS AVCaptureSession", href: "https://developer.apple.com/documentation/avfoundation/avcapturesession?language=objc" }],
    videoUrl: "https://youtube.com/embed/rbF6mYfwnck",
    videoTitle: "NativeScript Reflective UI",
  },
  {
    id: 5,
    title: "Tetris Game with Vue 3",
    href: "https://stackblitz.com/edit/ns-tetris?file=src%2Fcomponents%2FHome.vue",
    description: "Tetris Game with Vue 3.",
    categories: [{ title: "Vue", href: "https://nativescript-vue.org" }],
    videoUrl: "https://youtube.com/embed/To_bycK6BGY",
    videoTitle: "A Tetris Game built with Vue 3",
  },
  {
    id: 6,
    title: "iOS Recognize Text from an Image",
    href: "https://stackblitz.com/edit/nativescript-text-from-image?file=src%2Fapp%2Fhome%2Fhome.component.ts",
    description: "Recognizing text from an Image on iOS.",
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
    title: "iOS PDFKit",
    href: "https://stackblitz.com/edit/nativescript-pdfview-via-ios-pdfkit?file=src%2Fapp%2Fnative-pdfview%2Fnative-pdfview.ts",
    description: "Generating and previewing PDFs using iOS PDFKit.",
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
  {
    id: 8,
    title: "PDF w/ WKWebView & AndroidPdfViewer",
    href: "https://stackblitz.com/edit/nativescript-pdfviewer?file=src%2Fapp%2Fnative-pdfview%2Findex.ios.ts",
    description: "Rendering PDF with WKWebView on iOS.",
    categories: [
      {
        title: "Angular",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
      },
      {
        title: "iOS WKWebView",
        href: "https://developer.apple.com/documentation/webkit/wkwebview",
      },
      {
        title: "Gradle AndroidPdfViewer",
        href: "https://github.com/barteksc/AndroidPdfViewer",
      },
    ],
  },
  {
    id: 9,
    title: "Autogrow Textfield",
    href: "https://stackblitz.com/edit/nativescript-ng-textview-autogrow-vs-textfield?file=src%2Fapp%2Fitem%2Fitems.component.html",
    description: "Autogrowing Textfield as you type.",
    categories: [
      {
        title: "Angular",
        href: "https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular",
      },
      { title: "TextView", href: "https://docs.nativescript.org/ui/text-view" },
    ],
  },
  {
    id: 10,
    title: "Text to Speech",
    href: "https://stackblitz.com/edit/nativescript-text-to-speech?file=src%2Fapp%2Fspeech%2Findex.ios.ts",
    description: "Simple Text to Speech.",
    categories: [
      {
        title: "Android TextToSpeech",
        href: "https://developer.android.com/reference/android/speech/tts/TextToSpeech",
      },
      {
        title: "iOS AVSpeechUtterance",
        href: "https://developer.apple.com/documentation/avfaudio/avspeechutterance?language=objc",
      },
    ],
  },
  {
    id: 11,
    title: "Battery Level Check",
    href: "https://stackblitz.com/edit/nativescript-battery-level-check?file=app%2Fbattery%2Findex.ios.ts",
    description: "Getting the current battery level.",
    categories: [
      {
        title: "Android Battery Monitoring",
        href: "https://developer.android.com/training/monitoring-device-state/battery-monitoring",
      },
      {
        title: "iOS UIDevice",
        href: "https://developer.apple.com/documentation/uikit/uidevice?language=objc",
      },
    ],
  },
  {
    id: 12,
    title: "Toggle Device Light",
    href: "https://stackblitz.com/edit/nativescript-torch?file=src%2Fapp%2Ftorch%2Findex.ios.ts",
    description: "Toggling the Device Light on and off.",
    categories: [
      {
        title: "Android CameraManager",
        href: "https://developer.android.com/reference/android/hardware/camera2/CameraManager",
      },
      {
        title: "iOS AVCaptureDevice",
        href: "https://developer.apple.com/documentation/avfoundation/avcapturedevice?language=objc",
      },
    ],
  },
  {
    id: 13,
    title: "Using local image assets",
    href: "https://stackblitz.com/edit/nativescript-local-image-asset?file=package.json,src%2Fapp%2Fitem%2Fitems.component.html",
    description: "Using local image assets.",
    categories: [
      { title: "Image", href: "https://docs.nativescript.org/ui/image" },
    ],
  },
  {
    id: 14,
    title: "Checkbox",
    href: "https://stackblitz.com/edit/nativescript-checkbox-example?file=src%2Fapp%2Fitem%2Fitems.component.html",
    description: "Using checkbox components.",
    categories: [
      {
        title: "CheckBox",
        href: "https://github.com/nstudio/nativescript-plugins/blob/main/packages/nativescript-checkbox/README.md",
      },
    ],
  },
  {
    id: 15,
    title: "Dropdown Menus",
    href: "https://stackblitz.com/edit/nativescript-dropdown-menus?file=src%2Fapp%2Fmenu-button%2Findex.ios.ts",
    description: "Using dropdown menus.",
    categories: [
      {
        title: "iOS UIMenu",
        href: "https://developer.apple.com/documentation/uikit/uimenu",
      },
      {
        title: "Android PopupMenu",
        href: "https://developer.android.com/reference/android/widget/PopupMenu",
      },
    ],
    videoUrl: "https://youtube.com/embed/0zE5OjiJTk8",
    videoTitle: "Using dropdown menus with NativeScript",
  },
  {
    id: 16,
    title: "Large Title Display on iOS",
    href: "https://stackblitz.com/edit/nativescript-ios-large-titles-angular?file=src%2Fapp%2Fitem%2Fitems.component.ts",
    description: "How to enable large title displays for iOS navigation with NativeScript using prefersLargeTitles property of UINavigationBar, accessible from every Frame.",
    categories: [
      {
        title: "iOS prefersLargeTitles",
        href: "https://developer.apple.com/documentation/uikit/uinavigationbar/2908999-preferslargetitles?language=objc",
      },
    ],
    videoUrl: "https://youtube.com/embed/bwgVIZSpZ00",
    videoTitle: "Enable large title displays for iOS Navigation",
  },
  {
    id: 17,
    title: "Hardware device volume",
    href: "https://stackblitz.com/edit/nativescript-device-volume?file=src%2Futils%2Fvolume.ts",
    description: "How to get the current device volume using NativeScript on iOS and Android.",
    categories: [
      {
        title: "iOS outputVolume",
        href: "https://developer.apple.com/documentation/avfaudio/avaudiosession/1616533-outputvolume?language=objc",
      },
      {
        title: "Android getStreamVolume",
        href: "https://developer.android.com/reference/android/media/AudioManager#getStreamVolume(int)",
      },
      { title: "Vue", href: "https://nativescript-vue.org" },
    ],
    videoUrl: "https://youtube.com/embed/1DR_9AZrMe4",
    videoTitle: "Adjusting hardware device volume with NativeScript",
  },
  {
    id: 18,
    title: "Top Bar Height",
    href: "https://stackblitz.com/edit/nativescript-topbar-height?file=src%2Fapp%2Futils%2Fdevice.ts",
    description: "How to check the top bar height with NativeScript on iOS and Android.",
    categories: [
      {
        title: "iOS statusBarManager",
        href: "https://developer.apple.com/documentation/uikit/uiwindowscene/3213943-statusbarmanager?language=objc",
      },
      {
        title: "iOS UINavigationBar",
        href: "https://developer.apple.com/documentation/uikit/uinavigationbar?language=objc",
      },
      {
        title: "Android Resources",
        href: "https://developer.android.com/guide/topics/resources/providing-resources",
      },
      { title: "Android bar height id", href: "https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/dimens_material.xml#39" },
    ],
    videoUrl: "https://youtube.com/embed/bXSyBTGJIlc",
    videoTitle: "Top Bar Height with NativeScript",
  },
  {
    id: 19,
    title: "iOS Spotlight Search",
    href: "https://stackblitz.com/edit/nativescript-ios-spotlight-search?file=src%2Fapp%2Fitem%2Fitem.service.ts",
    description: "How to allow app content to be searchable using iOS Core Spotlight.",
    categories: [
      {
        title: "iOS Core Spotlight",
        href: "https://developer.apple.com/documentation/corespotlight",
      },
    ],
    videoUrl: "https://youtube.com/embed/uzzMskFL5g8",
    videoTitle: "Use iOS Spotlight Search with NativeScript",
  },
  {
    id: 20,
    title: "Improve UX with NativeScript TouchManager",
    href: "https://stackblitz.com/edit/nativescript-touchmanager?file=src%2Fapp%2Futils.ts",
    description: "Instantly improve UX with NativeScript's TouchManager.",
    categories: [
      {
        title: "TouchManager",
        href: "https://docs.nativescript.org/guide/animations#touchmanager-8-2",
      },
    ],
    videoUrl: "https://youtube.com/embed/vAyGyuNFCbk",
    videoTitle: "Instantly improve UX with NativeScript's TouchManager",
  },
  // Not ready yet but will discuss with Dylan to update
  // {
  //   id: 15,
  //   title: 'RxDB Angular Lokijs',
  //   href: 'https://stackblitz.com/edit/nativescript-angular-rxdb-lokijs-demo-9ha1fc?file=src%2Fapp%2Fcomponents%2Fhero.component.ts',
  //   description: 'Using RxDB Angular Lokijs.',
  //   categories: [
  //     { 
  //       title: 'Angular',
  //       href: 'https://docs.nativescript.org/tutorials/build-a-master-detail-app-with-angular'
  //     }, 
  //     { 
  //       title: 'RxDB',
  //       href: 'https://rxdb.info/'
  //     }, 
  //     { 
  //       title: 'LokiJS', 
  //       href: 'https://github.com/techfort/LokiJS'
  //     }
  //   ],
  // },
];

</script>

<SnackList :snacks="snacks" />
