---
title: Styling
---

In NativeScript you style the UI similar to how you would in a web application using Cascading Style Sheets (CSS), or by changing the style property of the views in JavaScript/Typescript. For CSS styling, NativeScript supports tools such as [Tailwind](https://v8.docs.nativescript.org/plugins/tailwindcss.html) or [SASS](https://sass-lang.com/).

Similar to the DOM Style Object, each View instance exposes a style property, which holds all the style properties for the view. When the view is displayed, all its style properties are applied to the underlying native component.

## Applying CSS styles

In NativeScript the CSS styles can be set on 4 different levels:

- [Application-wide CSS](#application-wide-css): Applies to every application page
- [Page-specific CSS](#page-specific-css): Applies to the page's UI views
<!-- - [Component-specific CSS](#component-specific-css): Applies for component only -->
- [Inline CSS](#inline-css): Applies directly to a UI view
- [Platform-specific CSS](#platform-specific-css)

Like with web development, if there is CSS declared on different levels&mdash;all will be applied. The inline CSS will have the highest priority and the application CSS will have the lowest priority.

### Application Wide CSS

When the application starts, NativeScript checks if the file `app.css` exists. If it does, any CSS styles that it contains are loaded and used across all application pages. This file is a convenient place to store styles that will be used on multiple pages.

To change the name of the file from which the application-wide CSS is loaded, use `Application.setCssFileName('style.css')`. You need to do the change before the application is started, usually in the `app.(js|ts)` file as shown below:

<!-- /// flavor plain

```ts
import { Application } from '@nativescript/core'

Application.setCssFileName('style.css')

Application.run({ moduleName: 'main-page' }) // application is started here
```

///

/// flavor angular

```ts
platformNativeScriptDynamic({ bootInExistingPage: false, cssFile: 'style.css' })
```

/// -->

::: tip Note
The path to the CSS file is relative to the application root folder.
:::

You could also check the name of the application-wide CSS file by using `getCssFileName()` method as shown below:

```ts
import { Application } from '@nativescript/core'
const fileName = Application.getCssFileName()
console.log(`fileName ${fileName}`)
```

### Page Specific CSS

When the page's XML declaration file is loaded, NativeScript looks for a CSS file with the same name (if such exists), reads any CSS styles that it finds, and automatically loads and applies them to the page. For example, a page named mypage.xml will automatically load any CSS in mypage.css. The CSS file must exist in the same folder as the XML file to be automatically applied.

If you import any custom components on your page, the CSS from those components will be applied to the page, too. As a best practice, scope the CSS of custom components so that component styles do not "leak" on to pages.
/// flavor plain

```xml
<StackLayout class="my-component">
  <Label text="Custom component layout" class="label" />
</StackLayout>
```

```css
/* GOOD: This will ONLY apply to the custom component */
.my-component .label {
  color: blue;
}

/* BAD: This will apply to the custom component AND potentially to the page where the component is used */
.label {
  color: blue;
}
```

You can also override CSS styles specified in the file by using the page's css property:

```ts
page.css = 'button { color: red }'
```

///

/// flavor angular

In an Angular application everything is a component, therefore, it is a very common task to add some CSS code that should only apply to one component. Adding component-specific CSS in a NativeScript-Angular app involves using a component’s styles or styleUrls property.

```ts
@Component({
    selector: 'list-test',
    styleUrls: ['style.css'],
    template: ...

// Or

@Component({
    selector: 'list-test',
    styles: ['.third { background-color: lime; }'],
    template: ...
```

///

#### Adding CSS String

This snippet adds a new style to the current set of styles. This is quite useful when you need to add a small CSS chunk to an element (for example, for testing purposes):

```ts
page.addCss('button {background-color: blue}')
```

#### Adding CSS File

This snippet adds new CSS styles to the current set. However, this method reads them from a file. It is useful for organizing styles in files and reusing them across multiple pages.

```ts
page.addCssFile(cssFileName)
```

### Inline CSS

Similarly to HTML, CSS can be defined inline for a UI view in the XML markup:

```html
<button text="inline style" style="background-color: green;"></button>
```

### Platform-specific CSS

NativeScript conventions make it easy to apply platform-specific CSS, either via separate stylesheets or via in-line declarations. For an overview of NativeScript's convention-based file name rules for targeting files at specific platforms and screen sizes, refer to this article in the docs.

There are 4 primary ways to target styles at iOS or Android:

/// flavor plain

1. Platform-specific stylesheets (`<file-name>.ios.css`, `<file-name>.android.css`)
2. Platform-specific markup blocks (`<ios> ... </ios>`, `<android> ... </android>`)
3. Platform-specific attributes (`<Label ios:style="..." android:style="..."`)
4. Platform-specific CSS rules (`.ns-ios .mystyle { ... }`, `.ns-android .mystyle { ... }`)

///

/// flavor angular

1. Platform-specific stylesheets (`styles.component.ios.css`, `styles.component.android.css`)
2. Platform-specific markup blocks (`<ios> ... </ios>`, `<android> ... </android>`)
3. Platform-specific attributes (`<Label ios:style="..." android:style="..."`)
4. Platform-specific CSS rules (`:host-content(.ns-ios) .mystyle { ... }`, `:host-context(.ns-android) .mystyle { ... }`)

///

The most common and maintainable pattern for managing platform-agnostic and platform-specific styles in NativeScript is with multiple stylesheets and CSS imports.

/// flavor plain
With this pattern, a page has 3 separate stylesheets: common, iOS and Android. For example, for page `myPage.xml` you would have 3 stylesheets:

1. `myPage-common.css`
2. `myPage.ios.css`
3. `myPage.android.css`

In both `myPage.ios.css` and `myPage.android.css` you then import the shared common styles from `myPage-common.css`:

```CSS
/* Import shared style rules */
@import './myPage-common.css';

/* Add iOS/Android specific rules (if any) */
.mystyle { ... }
```

///

/// flavor angular
With this pattern, a page (or component) has 3 separate stylesheets: common, iOS and Android. For example, for page `home.component.html` you would have 3 stylesheets:

1. `home-common.css`
2. `home.component.ios.css`
3. `home.component.android.css`

In both `home.component.ios.css` and `home.component.android.css` you then import the shared common styles from `home-common.css`:

```CSS
/* Import shared style rules */
@import './home-common.css';

/* Add iOS/Android specific rules (if any) */
.mystyle { ... }
```

///

At build time, NativeScript will automatically import the common styles and choose the correct iOS or Android stylesheet depending on the target build platform.

## Supported CSS Properties

This list of properties can be set in CSS or through the style property of each view:

<!-- TODO: fix links -->

| CSS Property          | JavaScript Property  | Description                                                                                                                                                                                                                               |
| :-------------------- | :------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `background`          | `background`         | Sets a solid-color value or [a linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient) to the matched view’s background.                                                                              |
| `background-color`    | `backgroundColor`    | Sets a solid-color value to the matched view’s background.                                                                                                                                                                                |
| `background-image`    | `backgroundImage`    | Sets a image url to the matched view’s background image.                                                                                                                                                                                  |
| `background-repeat`   | `backgroundRepeat`   | Sets if/how the background image should be repeated. Possible values: `repeat`, `repeat-x`, `repeat-y`, `no-repeat`                                                                                                                       |
| `background-position` | `backgroundPosition` | Sets the starting position of the background image. You can set the position with absolute, percent or alignment values. More info [here](http://www.w3schools.com/cssref/pr_background-position.asp).                                    |
| `background-size`     | `backgroundSize`     | Sets the size of the background image. Possible values: `length length`, `percent% percent%`, `cover` or `contain`.                                                                                                                       |
| `border-color`        | `borderColor`        | Sets border colors to the matched view’s.                                                                                                                                                                                                 |
| `border-top-color`    | `borderTopColor`     | Sets a top border color to the matched view’s.                                                                                                                                                                                            |
| `border-right-color`  | `borderRightColor`   | Sets a right border color to the matched view’s.                                                                                                                                                                                          |
| `border-bottom-color` | `borderBottomColor`  | Sets a bottom border color to the matched view’s.                                                                                                                                                                                         |
| `border-left-color`   | `borderLeftColor`    | Sets a left border color to the matched view’s.                                                                                                                                                                                           |
| `border-width`        | `borderWidth`        | Sets border widths to the matched view’s.                                                                                                                                                                                                 |
| `border-top-width`    | `borderTopWidth`     | Sets a top border width to the matched view’s.                                                                                                                                                                                            |
| `border-right-width`  | `borderRightWidth`   | Sets a right border width to the matched view’s.                                                                                                                                                                                          |
| `border-bottom-width` | `borderBottomWidth`  | Sets a bottom border width to the matched view’s.                                                                                                                                                                                         |
| `border-left-width`   | `borderLeftWidth`    | Sets a left border width to the matched view’s.                                                                                                                                                                                           |
| `border-radius`       | `borderRadius`       | Sets a border radius to the matched view’s.                                                                                                                                                                                               |
| `box-shadow`          | `boxShadow`          | Sets a box shadow to the matched view's.                                                                                                                                                                                                  |
| `clip-path`           | `clipPath`           | Sets the clip-path. Supported shapes are circle, ellipse, rect and polygon. You can define your own shape using [clippy](http://bennettfeely.com/clippy/)                                                                                 |
| `color`               | `color`              | Sets a solid-color value to the matched view’s foreground.                                                                                                                                                                                |
| `font`                | `font`               | Sets the font properties (this includes `font-family`, `font-size`, `font-style` and `font-weight`) of the matched view.                                                                                                                  |
| `font-family`         | `fontFamily`         | Sets the font family of the matched view.                                                                                                                                                                                                 |
| `font-size`           | `fontSize`           | Sets the font size of the matched view (only supports device-independent units).                                                                                                                                                          |
| `font-style`          | `fontStyle`          | Sets the font style of the matched view. Possible values: `italic`, `normal`.                                                                                                                                                             |
| `font-weight`         | `fontWeight`         | Sets the font weight of the matched view Possible values: `bold`, `normal` OR `100`,`200`,`300`,`400`,`500`,`600`,`700`,`800`,`900`, where `400` is `normal` and `700` is `bold` (NOTE: Some fonts do not support all available variants) |
| `height`              | `height`             | Sets the view height.                                                                                                                                                                                                                     |
| `letter-spacing`      | `letterSpacing`      | Sets the text letter spacing. (On Android API Level 21 and above.)                                                                                                                                                                        |
| `line-height`         | `lineHeight`         | Sets the text line height                                                                                                                                                                                                                 |
| `margin`              | `margin`             | Sets the margin of the view within its parent.                                                                                                                                                                                            |
| `margin-top`          | `marginTop`          | Sets the top margin of the view within its parent.                                                                                                                                                                                        |
| `margin-right`        | `marginRight`        | Sets the right margin of the view within its parent.                                                                                                                                                                                      |
| `margin-bottom`       | `marginBottom`       | Sets the bottom margin of the view within its parent.                                                                                                                                                                                     |
| `margin-left`         | `marginLeft`         | Sets the left margin of the view within its parent.                                                                                                                                                                                       |
| `min-width`           | `minWidth`           | Sets the minimal view width.                                                                                                                                                                                                              |
| `min-height`          | `minHeight`          | Sets the minimal view height.                                                                                                                                                                                                             |
| `opacity`             | `opacity`            | Sets the view opacity. The value is in the [0, 1] range.                                                                                                                                                                                  |
| `padding`             | `padding`            | Sets the distance between the boundaries of the layout container and its children.                                                                                                                                                        |
| `padding-top`         | `paddingTop`         | Sets the top padding of a layout container.                                                                                                                                                                                               |
| `padding-right`       | `paddingRight`       | Sets the right padding of a layout container.                                                                                                                                                                                             |
| `padding-bottom`      | `paddingBottom`      | Sets the bottom padding of a layout container.                                                                                                                                                                                            |
| `padding-left`        | `paddingLeft`        | Sets the left padding of a layout container.                                                                                                                                                                                              |
| `text-align`          | `textAlignment`      | Sets text alignment in the matched view. Possible values: `left` , `center`, `right`, `justify`.                                                                                                                                          |
| `text-decoration`     | `textDecoration`     | Sets the text formatting. Possible values: `none`, `line-through`, `underline`.                                                                                                                                                           |
| `text-overflow`       | `textOverflow`       | Sets how hidden overflow content is signaled to users.                                                                                                                                                                                    |
| `text-shadow`         | `textShadow`         | Sets a text shadow on a label.                                                                                                                                                                                                            |
| `text-transform`      | `textTransform`      | Sets the text transform. Possible values: `none`, `capitalize`, `uppercase`, `lowercase`.                                                                                                                                                 |
| `vertical-align`      | `verticalAlignment`  | Sets the vertical alignment of the current view within its parent. Possible values: `top`, `center`, `bottom`, `stretch`.                                                                                                                 |
| `visibility`          | `visibility`         | Sets the view visibility. Possible values: `visible`, `collapse` (or `collapsed`).                                                                                                                                                        |
| `white-space`         | `whiteSpace`         | Sets how white space inside an element is handled.                                                                                                                                                                                        |
| `width`               | `width`              | Sets the view width.                                                                                                                                                                                                                      |
| `z-index`             | `zIndex`             | Sets the z-index. (On Android API Level 21 and above.)                                                                                                                                                                                    |

### Accessing NativeScript View properties with CSS

You can also set NativeScript component properties value that are not part of the CSS specification. For example:

```CSS
StackLayout {
   orientation: horizontal;
}
```

This feature is limited to properties with simple types like string, number and boolean, and will set a local property value similar to component markup declaration in your template markup via XML or HTML. CSS inheritance is not supported.

## NativeScript Specific CSS Properties

In the context of mobile development, there are a number of properties that are mobile specific (and sometimes even platform specific e.g Android or iOS). In NativeScript, these featured properties are still accessible through both the code (inline, JavaScript, and TypeScript), and as CSS properties. Below is a list of those properties:

| CSS Property                           | JavaScript Property                | Platform                                                                                                                    | Compatibility | Description                                                                                                       |
| :------------------------------------- | :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------------ | :---------------------------------------------------------------------------------------------------------------- |
| `horizontal-align`                     | `horizontalAlignment`              | Sets the horizontal alignment of the current view within its parent. Possible values: `left`, `center`, `right`, `stretch`. |
| `placeholder-color`                    | `placeholderColor`                 | Sets the placeholder (hint) font color to matched views.                                                                    |
| `tab-text-color`                       | `tabTextColor`                     | Both                                                                                                                        | `TabView`     | Sets the text color of the tabs titles.                                                                           |
| `selected-tab-text-color`              | `selectedTabTextColor`             | Both                                                                                                                        | `TabView`     | Sets the color of the text, while selecting some of the tabs.                                                     |
| `tab-background-color`                 | `tabBackgroundColor`               | Both                                                                                                                        | `TabView`     | Sets the background color of the tabs.                                                                            |
| `tab-text-font-size`                   | `tabTextFontSize`                  | Both                                                                                                                        | `TabView`     | Sets the tab titles font size, without changing the font size of all contents of the tab.                         |
| `android-selected-tab-highlight-color` | `androidSelectedTabHighlightColor` | **Android**                                                                                                                 | `TabView`     | Sets the underline color of the tabs in Android.                                                                  |
| `android-elevation`                    | `androidElevation`                 | **Android**                                                                                                                 | `View`        | Sets the elevation of the View in Android.                                                                        |
| `android-dynamic-elevation-offset `    | `androidDynamicElevationOffset`    | **Android**                                                                                                                 | `View`        | Sets the elevation of the View in Android, which will be shown when an action was performed(e.g. `tap`, `touch`). |
| `off-background-color`                 | `offBackgroundColor`               | Both                                                                                                                        | `Switch`      | Sets the background color of the Switch when it is turned off.                                                    |
| `highlight-color`                      | `highlightColor`                   | Both                                                                                                                        | `TabStrip`    | Gets or sets the underline color of the selected `TabStripItem`.                                                  |

::: warning Note
Currently, we can set only the `backgroundColor`, `color`, `fontFamily`, `fontSize`, `fontStyle`, `fontWeight` and `textTransform` styling properties to the `Label` and `Image` components inside the TabStripItem. More about the usage of those properties can be found in the [Supported CSS Properties](#supported-css-properties) section.
:::

::: warning Note
On iOS, the TabStripItems can not be stylied individually.
:::

### Adding a shadow to a View on Android

On Android, to add a shadow to a View instance use the `androidElevation` property.

```xml
<StackLayout class="home-panel">
  <TextView
    class="tvElevation"
    editable="false"
    textWrap="true"
    text="TextView"
  ></TextView>
  <Label androidElevation="5" class="sampleLabel" textWrap="true" text="Label"></Label>
  <Button androidElevation="7" class="sampleButton" text="Button"></Button>
</StackLayout>
```

```css
.tvElevation {
  android-elevation: 5;
}
```

There is also the `androidDynamicElevationOffset` property which allows setting a shadow when an event such as `tap` or `touch` occurs.

Example:

```xml
<StackLayout class="home-panel">
  <Button
    androidElevation="7"
    androidDynamicElevationOffset="8"
    class="sampleButton"
    text="Button"
  ></Button>
  <Button class="sampleButton2" text="Button"></Button>
</StackLayout>
```

```css
.sampleButton2 {
  background-color: lightcyan;
  android-elevation: 7;
  android-dynamic-elevation-offset: 7;
}
```

::: tip :green_circle: Tip
The buttons on Android have default elevation (shadow) of 2, to provide Material Design elevation support. Removing the shadow will allow you to create a transparent button. To explicitly remove the elevation, set the android-elevation property to `0` as shown below:

```css
.btn-no-elevation {
  android-elevation: 0;
}
```

:::

## Supported CSS Selectors

Currently NativeScript supports the following subset of the [CSS selector syntax](http://www.w3schools.com/cssref/css_selectors.asp).

- [Type selector](#type-selector)
- [Class selector](#class-selector)
- [ID selector](#id-selector)
- [Hierarchical selector](#hierarchical-selector-css-combinators)
- [Attribute selector](#attribute-selector)
- [Pseudo selector](#pseudo-selector)

### Type Selector

Like [CSS element selectors](http://www.w3schools.com/cssref/sel_element.asp), type selectors in NativeScript select all views of a given type. Type selectors are case insensitive, so you can use both `button` and `Button`.

```CSS
button { background-color: gray }
```

### Class Selector

[Class selectors](http://www.w3schools.com/cssref/sel_class.asp) select all views with a given class.
The class is set using the `className` property of the view.

::: warning Note
To use `className` in JS/TS to add a class to an element, the class rule must be in a CSS file that is higher up the component tree than the element, such as `app.css`.
:::

```xml
<Label className="title"></Label>
```

```css
.title {
  font-size: 32;
}
```

```ts
import { Label } from '@nativescript/core'
const label = new Label()
label.className = 'title'
```

### ID Selector

[Id selectors](http://www.w3schools.com/cssref/sel_id.asp) select all views with a given id. The `id` is set using the `id` property of the view.

```xml
<Button id="login-button"></Button>
```

```css
#login-button {
  background-color: blue;
}
```

```ts
import { Button } from '@nativescript/core'
const btn = new Button()
btn.id = 'login-button'
```

### Hierarchical Selector (CSS Combinators)

A CSS selector could contain more than one simple selector, and between selectors a combinator symbol could be included.

- (space) - Descendant selector. For example, the following code will select all buttons inside the StackLayout regardless their hierarchical level.

```xml
<StackLayout>
    <WrapLayout>
        <Button id="login-button" testAttr='flower' />
    </WrapLayout>
</StackLayout>
```

```css
StackLayout Button {
  background-color: blue;
}
```

- (>) - A direct child selector. Using the previous example, if the CSS is changed to:

```css
StackLayout > Button {
  background-color: blue;
}
```

The background-color rule will not be applied. In order to apply the selector, the WrapLayout element would need to be removed so that the Button is a direct child of the StackLayout.

- (+) - An adjacent sibling selector, allows to select all elements, which are siblings of a specified element.

##### Direct Sibling Test by Class

```xml
<StackLayout class="layout-class">
  <Label text="Direct sibling test by id"></Label>
  <Button class="test-child" text="First Button"></Button>
  <Button class="test-child-2" text="Second Button"></Button>
</StackLayout>
```

```css
.layout-class .test-child + .test-child-2 {
  background-color: green;
}
```

##### Direct Sibling Test by ID

```xml
<StackLayout class="layout-class">
  <Label text="Direct sibling test by id"></Label>
  <Button id="test-child" text="First Button"></Button>
  <Button id="test-child-2" text="Second Button"></Button>
</StackLayout>
```

```css
.layout-class #test-child + #test-child-2 {
  background-color: green;
}
```

##### Direct Sibling by Type

```xml
<StackLayout class="direct-sibling--type">
  <Label text="Direct sibling by type"></Label>
  <Button text="Test Button"></Button>
  <Label text="Test Label"></Label>
  <Button text="Test Button"></Button>
  <Label text="Test Label"></Label>
  <Button text="Test Button"></Button>
  <Label text="Test Label"></Label>
</StackLayout>
```

```css
StackLayout Button + Label {
  background-color: green;
  color: white;
}
```

### Attribute Selector

```xml
<Button testAttr="flower"></Button>
```

```css
button[testAttr] {
  background-color: blue;
}
```

This selector will select all buttons that have the attribute `testAttr` with some value.

Also, some more advanced scenarios are supported:

- button[testAttr='flower'] {...} - Will apply CSS on every button that has the `testAttr` property set exactly to the value `flower`.
- button[testAttr~='flower'] {...} - Selects all buttons with a `testAttr` property that contains a space-separated list of words, one of which is "flower".
- button[testAttr|='flower'] {...} - Selects all buttons with a `testAttr` property value that begins with "flower". The value has to be a whole word, either alone like `btn['testAttr'] = 'flower'`, or followed by hyphen (-), like `btn['testAttr'] = 'flower-house'`.
- button[testAttr^='flower'] {...} - Selects all buttons with a `testAttr` property value that begins with "flower". The value does not have to be a whole word.
- button[testAttr$='flower'] {...} - Selects all buttons with a `testAttr` property value that ends with "flower". The value does not have to be a whole word.
- button[testAttr*='flo'] {...} - Selects all buttons with a `testAttr` property value that contains "flo". The value does not have to be a whole word.

Attribute selectors could be used alone or could be combined with all type of CSS selectors.

```xml
<Button id="login-button" testAttr="flower"></Button>
<Label testAttr="some value"></Label>
```

```css
#login-button[testAttr='flower'] {
  background-color: blue;
}
[testAttr] {
  color: white;
}
```

### Pseudo Selector

A pseudo-selector or also pseudo-class is used to define a special state of an element. Currently, NativeScript supports only :highlighted pseudo-selector.

```xml
<Button testAttr="flower"></Button>
```

```css
button:highlighted {
  background-color: red;
  color: gray;
}
```

### Root Views CSS Classes

To allow for flexible styling and theming, NativeScript provides the following CSS classes that can be added to the root views in the application for specific states.

- `.ns-root` - a class assigned to the application root view
- `.ns-modal` - a class assigned to the modal root view
- `.ns-android`, `.ns-ios` - classes that specify the application platform
- `.ns-phone`, `.ns-tablet` - classes that specify the device type
- `.ns-portrait`, `.ns-landscape`, `.ns-unknown` - classes that specify the application orientation
- `.ns-light`, `.ns-dark` - classes that specify the system appearance.

::: tip Note
In native modals in Angular, the classes are applied to the first layout view in your modal component's HTML. If you are targeting a class that is applied to the root layout in your modal, you would target it with `.ns-dark.your-class`.
:::

### Media Queries

Media queries will allow you to apply CSS styles conditionally depending on a device's features or characteristics such as screen orientation, theme, or viewport width and height.  
 
NativeScript supports [Media Queries Level 3](https://www.w3.org/TR/mediaqueries-3) specification including the following features:
- orientation
- prefers-color-scheme (Even though this one is part of Media Queries Level 5, it was added along with current implementation to make theme styling possible)
- width
- height
- device-width (same as width)
- device-height (same as height)

Viewport features like width and height support ranged values by using the `min-` or `max-` prefix.

Here are few examples of how to declare media queries in NativeScript:

```css
@media only screen and (orientation: landscape) {
  Label {
    color: yellow;
    font-size: 24;
  }
}

@media only screen and (prefers-color-scheme: dark) {
  Label {
    background-color: #fff;
    color: #000;
  }
}

@media only screen and (max-width: 400) {
  Label {
    font-size: 10;
  }
}

@media only screen and (min-height: 800) {
  Page {
    background-color: red;
  }
}
```

Just like style properties, length feature values (e.g. width) can also accept DIP or device pixel (px) units.

#### The not operator

The `not` operator is used to negate a media query, returning true if the query would otherwise return false.
```css
@media screen and not (orientation: portrait) {
  Label {
    color: yellow;
    font-size: 24;
  }
}
```

#### Nested Media Queries

```css
@media only screen and (orientation: landscape) {
  Label {
    color: yellow;
    font-size: 24;
  }

  @media only screen and (max-width: 400) {
    Label {
      font-size: 10;
    }
  }
}
```

#### Nesting Keyframes inside Media Queries

Apart from CSS selectors, keyframes can also be conditional using Media Queries.
```css
@keyframes slidein {
  from {
    background-color: yellow;
  }

  to {
    background-color: pink;
  }
}

/** This one will apply if condition is truthy **/
@media only screen and (orientation: landscape) {
  @keyframes slidein {
    from {
      background-color: red;
    }

    to {
      background-color: green;
    }
  }
}
```

#### matchMedia and conditional Navigation with Media Queries

Sometimes, there's the need for an application to navigate to a completely different `Page` based on device screen size or orientation.
Right now, that's possible using NativeScript's [Screen Size Qualifiers](https://old.docs.nativescript.org/ui/supporting-multiple-screens) API however it's limited to plain JS/TS apps and not available to the rest of JavaScript flavors.
 
For various flavors, you can instead use [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) providing many possibilities.

The example below demonstrates how to navigate to an alternate `Page` if screen width is larger than 600 DIP:

```ts
const mql = matchMedia('only screen and (max-width: 600)');

Frame.topmost().navigate({
  // Navigate to another page if screen is too big
  moduleName: mql.matches ? './pages/phone' : './pages/tablet',
});
```

#### Using listeners to track Media Query changes

The [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) method returns a NativeScript [Observable](/core/observable#observable-api) instance, giving you the chance to track Media Query changes using event listeners.

```ts
const mql = matchMedia('only screen and (orientation: portrait)');
mql.addEventListener('change', (event) => {
  console.log('Is screen orientation still portrait? ' + event.matches);
});
```

## Supported Measurement Units

NativeScript supports `DIPs` (Device Independent Pixels), `pixels` (via postfix px) and `percentages` (partial support for width, height and margin) as measurement units.

NativeScript's recommended measurement unit is `DIP`. All measurable properties like width, height, margin, paddings, border-width, etc.) support `DIPs`. The font sizes are always measured in DIPs.

```css
.myLabel {
  font-size: 28;
  width: 200;
  height: 30;
}
```

The device independent pixels (DIPs) are equal to the device screen's pixels divided by the device screen scale (density).

Below is an example of how to get a device's screen size:

```ts
import { Screen } from '@nativescript/core'

const scale = Screen.mainScreen.scale
const widthPixels = Screen.mainScreen.widthPixels
const heightPixels = Screen.mainScreen.heightPixels
const widthDIPs = Screen.mainScreen.widthDIPs // DIPs === pixels/scale (e.g. 1024 pixels / 2x scale = 512 DIPs)
const heightDIPs = Screen.mainScreen.heightDIPs
```

NativeScript supports percentage values for width, height and margins.The percent values are calculated based on parent element size. This means that if you place two Buttons with height='50%' in StackLayout with the default `orientation='vertical'`,they will fill the entire StackLayout vertically. A marginLeft = '5%' will be equal to parent's width.

## Using CSS variables

NativeScript supports CSS variables (also known as custom properties or cascading variables) for reusable values through the CSS used in the app.

CSS variables cascades from parent to child views.

Declaring variables:

```css
/* Define --my-custom-color as a global value */
.ns-root {
  --my-custom-color: black;
}

/* In landscape mode change the value to blue */
.ns-landscape {
  --my-custom-color: blue;
}
```

Overriding a variable from a child-element:

```css
/* Change --my-custom-color to green for elements below */
.ns-root .override-color {
  --my-custom-color: green;
}
```

Using a variable:

```css
.using-variable {
  color: var(--my-custom-color);
}
```

The default value of --my-undefined-value will be black. In landscape mode it will be blue. If a parent element have the class override-color the value will be green.

Using a fallback value:

```css
.using-variable {
  color: var(--my-undefined-value, yellow);
}
```

The color of --my-undefined-value will fallback to yellow, because --my-undefined-value is not defined.

Using a nested fallback value:

```css
.using-variable {
  color: var(--my-undefined-value, var(--my-custom-color, yellow));
}
```

## Using CSS calc()

NativeScript supports CSS `calc()` function for performing simple calculations on CSS values.

Syntax:

```css
element {
  width: calc(100% * 1.25); /* width: 125% */
}
```

Used with CSS variables:

```css
element {
    --my-variable: 10:
    width: calc(100% * var(--my-variable)); /* width: 125% */
}
```

## Importing CSS

The `@import` CSS rule allows you to import CSS from a local file. This rule must precede all other types of rules.

```CSS
@import url('~/your-style.css');
```

::: details Additional Resources

- [Create Shadows and Clip Views](https://developer.android.com/develop/ui/views/theming/shadows-clipping)
