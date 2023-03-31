---
title: WebView
---

`<WebView>` is a UI component that lets you show web content in your app. You can pull and show content from a URL or a local HTML file, or you can render static HTML content.

See also: [HtmlView](/ui/htmlview).

---
<div>
<div class="flex flex-wrap p-4 sm:p-8">
<div  class="w-full sm:w-1/2">
 <img  src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/android23/WebView.png" alt="Android WebView Example"/> 
</div>

<div  class="w-full sm:w-1/2 sm:pl-8">
<img alt="iOS WebView Example" src="https://raw.githubusercontent.com/nativescript-vue/nativescript-vue-ui-tests/master/screenshots/ios-simulator103iPhone6/WebView.png" />
</div>
</div>
</div>

<!-- /// flavor plain -->

```xml
<WebView row="1" loaded="onWebViewLoaded" id="myWebView" src="{{ webViewSrc }}" />
```

<!-- ///

/// flavor angular

```html
<WebView
  [src]="webViewSrc"
  (loadStarted)="onLoadStarted($event)"
  (loadFinished)="onLoadFinished($event)"
>
</WebView>
```

///

/// flavor vue

```html
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```

///

/// flavor svelte

```html
<webView src="http://nativescript.org/" />

<webView src="~/html/index.html" />

<webView src="<div><h1>Some static HTML</h1></div>" />
```

///

/// flavor react

```tsx
<webView src="http://nativescript.org/" />

<webView src="~/html/index.html" />

<webView src="<div><h1>Some static HTML</h1></div>" />
```

/// -->

::: tip Tip
To be able to use gestures in WebView component on Android, we should first disabled the zoom control. To do that we could access the android property and with the help of setDisplayZoomControls to set this control to false.
:::

## Props

### src

```xml
<WebView src="http://nativescript-vue.org/" />

<WebView src="~/html/index.html" />

<WebView src="<div><h1>Some static HTML</h1></div>" />
```
```ts
webView.src = "http://nativescript-vue.org/" 
//or
webView.src = "~/html/index.html" 
//or
webView.src = "<div><h1>Some static HTML</h1></div>"
```
Gets or sets the web content to be displayed. Valid values: 
- an absolute URL,
- the path to a local HTML file, 
- or static HTML.   

---
### canGoBack
```ts
canGoBack: boolean = webView.canGoBack
```
Gets a value indicating whether the WebView can navigate back.

---
### canGoForward
```ts
canGoForward: boolean = webView.canGoForward
```

Gets a value indicating whether the WebView can navigate forward.

---
### disableZoom
```ts
webView.disableZoom = true
```
Disable scrolling in the WebView.

---
### iosAllowInlineMediaPlayback
```xml
<WebView src="https://docs.nativescript.org/" iosAllowInlineMediaPlayback="true"/>
```
```ts
webView.iosAllowInlineMediaPlayback = true
```
(`iOS only`) Enables inline media playback on iOS. By default, webview forces iPhone into fullscreen media playback. 

---
## Methods
### stopLoading()
```ts
webView.stopLoading()
```

Stops loading the current content (if any).

---
### goBack()
```ts
webView.goBack()
```

Navigates back.

---
### goForward()
```ts
webView.goForward()
```

Navigates forward.

---

### reload()
```ts
webView.reload()
```
Reloads the current url.

---
### Inherited 
For additional inherited properties not shown, refer to the [API Reference](https://docs.nativescript.org/api-reference/classes/webview) 


## Events

### loadStarted
```xml
<WebView src="https://docs.nativescript.org/" loadStarted="onLoadStarted"/>
```

```ts
export function onLoadStarted(args) {
  const webView = args.object as WebView
  
  console.log("Can go back? ", Object.keys(args))
  console.log("Can go forward? ", webView.canGoForward)
}
```

Emitted when the page has started loading in the `<WebView>`. The event data is of [LoadEventData](https://docs.nativescript.org/api-reference/interfaces/loadeventdata) type.

---
### loadFinished
```xml
<WebView src="https://docs.nativescript.org/" loadFinished="onLoadFinished"/>
```

```ts
export function onLoadFinished(args) {
  const webView = args.object as WebView
  
  console.log("Can go back? ", Object.keys(args))
  console.log("Can go forward? ", webView.canGoForward)
}
```
Emitted when the page has finished loading in the `<WebView>`. The event data is of [LoadEventData](https://docs.nativescript.org/api-reference/interfaces/loadeventdata) type.

---

### Native component

| Android                                                                                    | iOS                                                                       |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`android.webkit.WebView`](https://developer.android.com/reference/android/webkit/WebView) | [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview) |
