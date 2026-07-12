---
title: API Reference
titleTemplate: :title - API / NativeScript
description: Complete API reference for @nativescript/core.
contributors: false
---

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [AccessibilityEvents](namespaces/AccessibilityEvents/index.md) | - |
| [AndroidHelper](namespaces/AndroidHelper/index.md) | Various Android view helper methods |
| [ApplicationSettings](namespaces/ApplicationSettings/index.md) | - |
| [capitalizationType](namespaces/capitalizationType/index.md) | Defines the capitalization type for prompt dialog. |
| [Connectivity](namespaces/Connectivity/index.md) | - |
| [CoreTypes](namespaces/CoreTypes/index.md) | - |
| [CSSUtils](namespaces/CSSUtils/index.md) | - |
| [DialogStrings](namespaces/DialogStrings/index.md) | - |
| [encoding](namespaces/encoding/index.md) | Defines the supported character encodings. |
| [FixedLength](namespaces/FixedLength/index.md) | - |
| [FontStyle](namespaces/FontStyle/index.md) | - |
| [FontVariationSettings](namespaces/FontVariationSettings/index.md) | - |
| [FontWeight](namespaces/FontWeight/index.md) | - |
| [GridUnitType](namespaces/GridUnitType/index.md) | - |
| [Http](namespaces/Http/index.md) | - |
| [inputType](namespaces/inputType/index.md) | Defines the input type for prompt dialog. |
| [IOSHelper](namespaces/IOSHelper/index.md) | Various iOS view helper methods |
| [knownFolders](namespaces/knownFolders/index.md) | Provides access to the top-level Folders instances that are accessible from the application. Use these as entry points to access the FileSystem. |
| [Length](namespaces/Length/index.md) | - |
| [path](namespaces/path/index.md) | Enables path-specific operations like join, extension, etc. |
| [PercentLength](namespaces/PercentLength/index.md) | - |
| [Trace](namespaces/Trace/index.md) | - |
| [Utils](namespaces/Utils/index.md) | - |

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [AccessibilityLiveRegion](enumerations/AccessibilityLiveRegion.md) | - |
| [AccessibilityRole](enumerations/AccessibilityRole.md) | - |
| [AccessibilityState](enumerations/AccessibilityState.md) | - |
| [AccessibilityTrait](enumerations/AccessibilityTrait.md) | - |
| [AndroidDirectory](enumerations/AndroidDirectory.md) | - |
| [CacheMode](enumerations/CacheMode.md) | - |
| [FontScaleCategory](enumerations/FontScaleCategory.md) | - |
| [GestureEvents](enumerations/GestureEvents.md) | - |
| [GestureStateTypes](enumerations/GestureStateTypes.md) | - |
| [GestureTypes](enumerations/GestureTypes.md) | - |
| [HttpResponseEncoding](enumerations/HttpResponseEncoding.md) | - |
| [ImageSymbolEffects](enumerations/ImageSymbolEffects.md) | - |
| [NavigationType](enumerations/NavigationType.md) | - |
| [SharedTransitionAnimationType](enumerations/SharedTransitionAnimationType.md) | - |
| [SwipeDirection](enumerations/SwipeDirection.md) | - |
| [TouchAction](enumerations/TouchAction.md) | - |
| [WritingToolsAllowedInput](enumerations/WritingToolsAllowedInput.md) | (iOS Only) Allowed input for Apple Intelligence Writing Tools |
| [WritingToolsBehavior](enumerations/WritingToolsBehavior.md) | (iOS Only) Behavior for Apple Intelligence Writing Tools |

## Classes

| Class | Description |
| ------ | ------ |
| [AbsoluteLayout](classes/AbsoluteLayout.md) | A layout that lets you specify exact locations (left/top coordinates) of its children. |
| [ActionBar](classes/ActionBar.md) | Provides an abstraction over the ActionBar (android) and NavigationBar (iOS). |
| [ActionItem](classes/ActionItem.md) | Represents an action item in the action bar. |
| [ActionItems](classes/ActionItems.md) | Represents a collection of ActionItems. |
| [ActivityIndicator](classes/ActivityIndicator.md) | Represents a UI widget which displays a progress indicator hinting the user for some background operation running. |
| [AndroidApplication](classes/AndroidApplication.md) | - |
| [Animation](classes/Animation.md) | Defines a animation set. |
| [ApplicationCommon](classes/ApplicationCommon.md) | - |
| [Background](classes/Background.md) | - |
| [Binding](classes/Binding.md) | - |
| [Builder](classes/Builder.md) | - |
| [Button](classes/Button.md) | Represents a standard Button widget. |
| [ChangeType](classes/ChangeType.md) | - |
| [CoercibleProperty](classes/CoercibleProperty.md) | - |
| [Color](classes/Color.md) | Represents a color object. Stores all color components (alpha (opacity), red, green, blue) in a [0..255] range. |
| [ContainerView](classes/ContainerView.md) | Base class for all UI components that are containers. |
| [ContentView](classes/ContentView.md) | - |
| [ControlStateChangeListener](classes/ControlStateChangeListener.md) | An utility class used for supporting styling infrastructure. WARNING: This class is intended for IOS only. |
| [CssAnimationParser](classes/CssAnimationParser.md) | - |
| [CssAnimationProperty](classes/CssAnimationProperty.md) | - |
| [CssProperty](classes/CssProperty.md) | - |
| [CustomLayoutView](classes/CustomLayoutView.md) | Base class for all UI components that implement custom layouts. |
| [DatePicker](classes/DatePicker.md) | Represents an date picker. |
| [DockLayout](classes/DockLayout.md) | A Layout that arranges its children at its outer edges, and allows its last child to take up the remaining space. |
| [EditableTextBase](classes/EditableTextBase.md) | Represents the base class for all editable text views. |
| [FadeTransition](classes/FadeTransition.md) | - |
| [File](classes/File.md) | Represents a File entity on the file system. |
| [FileSystemEntity](classes/FileSystemEntity.md) | Represents a single entity on the file system. |
| [FlexboxLayout](classes/FlexboxLayout.md) | - |
| [Folder](classes/Folder.md) | Represents a Folder (directory) entity on the file system. |
| [Font](classes/Font.md) | - |
| [FormattedString](classes/FormattedString.md) | A class used to create a formatted (rich text) string. |
| [Frame](classes/Frame.md) | Represents the logical View unit that is responsible for navigation within an application. Nested frames are supported, enabling hierarchical navigation scenarios. |
| [GesturesObserver](classes/GesturesObserver.md) | Provides options for the GesturesObserver. |
| [GridLayout](classes/GridLayout.md) | Defines a rectangular layout area that consists of columns and rows. |
| [HtmlView](classes/HtmlView.md) | Represents a view with html content. Use this component instead WebView when you want to show just static HTML content. [iOS support](https://developer.apple.com/documentation/foundation/nsattributedstring/1524613-initwithdata) [android support](http://developer.android.com/reference/android/text/Html.html) |
| [Image](classes/Image.md) | Represents a class that provides functionality for loading and streching image(s). |
| [ImageAsset](classes/ImageAsset.md) | Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener. Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0, and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions. |
| [ImageCache](classes/ImageCache.md) | Represents a class that stores handles image download requests and caches the already downloaded images. |
| [ImageSource](classes/ImageSource.md) | Encapsulates the common abstraction behind a platform specific object (typically a Bitmap) that is used as a source for images. |
| [ImageSymbolEffect](classes/ImageSymbolEffect.md) | iOS only Symbol effects: https://developer.apple.com/documentation/symbols?language=objc |
| [InheritedCssProperty](classes/InheritedCssProperty.md) | - |
| [InheritedProperty](classes/InheritedProperty.md) | - |
| [iOSApplication](classes/iOSApplication.md) | - |
| [ItemSpec](classes/ItemSpec.md) | Defines row/column specific properties that apply to GridLayout elements. |
| [KeyframeAnimation](classes/KeyframeAnimation.md) | - |
| [KeyframeAnimationInfo](classes/KeyframeAnimationInfo.md) | - |
| [KeyframeDeclaration](classes/KeyframeDeclaration.md) | - |
| [KeyframeInfo](classes/KeyframeInfo.md) | - |
| [Label](classes/Label.md) | Represents a text label. |
| [LayoutBase](classes/LayoutBase.md) | Base class for all views that supports children positioning. |
| [LinearGradient](classes/LinearGradient.md) | - |
| [LiquidGlass](classes/LiquidGlass.md) | - |
| [LiquidGlassContainer](classes/LiquidGlassContainer.md) | - |
| [ListPicker](classes/ListPicker.md) | Represents an list picker. |
| [ListView](classes/ListView.md) | Represents a view that shows items in a vertically scrolling list. |
| [ModalTransition](classes/ModalTransition.md) | - |
| [ModuleNameResolver](classes/ModuleNameResolver.md) | - |
| [NavigationButton](classes/NavigationButton.md) | Represents the navigation (a.k.a. "back") button. |
| [Observable](classes/Observable.md) | Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener. Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0, and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions. |
| [ObservableArray](classes/ObservableArray.md) | Advanced array like class used when you want to be notified when a change occurs. |
| [Page](classes/Page.md) | Represents a logical unit for navigation (inside Frame). |
| [PageBase](classes/PageBase.md) | - |
| [PageTransition](classes/PageTransition.md) | - |
| [ParserEvent](classes/ParserEvent.md) | Provides information for a parser event. |
| [ParserEventType](classes/ParserEventType.md) | Specifies the type of parser event. |
| [Placeholder](classes/Placeholder.md) | Represents a Placeholder, which is used to add a native view to the visual tree. |
| [Progress](classes/Progress.md) | Represents a progress component. |
| [Property](classes/Property.md) | - |
| [ProxyViewContainer](classes/ProxyViewContainer.md) | Proxy view container that adds all its native children directly to the parent. To be used as a logical grouping container of views. |
| [Repeater](classes/Repeater.md) | Represents a UI Repeater component. |
| [RootLayout](classes/RootLayout.md) | - |
| [Screen](classes/Screen.md) | An object describing general information about a display. |
| [ScrollView](classes/ScrollView.md) | Represents a scrollable area that can have content that is larger than its bounds. |
| [SearchBar](classes/SearchBar.md) | Represents a search bar component. |
| [SegmentedBar](classes/SegmentedBar.md) | Represents a UI SegmentedBar component. |
| [SegmentedBarItem](classes/SegmentedBarItem.md) | Represents a SegmentedBar item. |
| [SharedTransition](classes/SharedTransition.md) | Shared Element Transitions (preview) Allows you to auto animate between shared elements on two different screesn to create smooth navigational experiences. View components can define sharedTransitionTag="name" alone with a transition through this API. |
| [SharedTransitionHelper](classes/SharedTransitionHelper.md) | Platform helper to aid in creating your own custom Shared Element Transition classes. (iOS Only) |
| [ShorthandProperty](classes/ShorthandProperty.md) | - |
| [Slider](classes/Slider.md) | Represents a slider component. |
| [SlideTransition](classes/SlideTransition.md) | - |
| [Span](classes/Span.md) | A class used to create a single part of formatted string with a common text properties. |
| [SplitView](classes/SplitView.md) | iOS UISplitViewController-backed container. On Android, acts as a simple container. |
| [StackLayout](classes/StackLayout.md) | A Layout that arranges its children horizontally or vertically. The direction can be set by orientation property. |
| [Style](classes/Style.md) | Observable is used when you want to be notified when a change occurs. Use on/off methods to add/remove listener. Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0, and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions. |
| [Switch](classes/Switch.md) | Represents a switch component. |
| [TabView](classes/TabView.md) | Represents a tab view. |
| [TabViewItem](classes/TabViewItem.md) | Represents a tab view entry. |
| [TextBase](classes/TextBase.md) | - |
| [TextField](classes/TextField.md) | Represents an editable text field. |
| [TextView](classes/TextView.md) | Represents an editable multiline text view. |
| [TimePicker](classes/TimePicker.md) | Represents an time picker. |
| [TouchManager](classes/TouchManager.md) | Manage interactivity in your apps easily with TouchManager. Store reusable down/up animation settings for touches as well as optionally enable automatic tap (down/up) animations for your app. |
| [Transition](classes/Transition.md) | - |
| [View](classes/View.md) | This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within. |
| [ViewBase](classes/ViewBase.md) | - |
| [ViewHelper](classes/ViewHelper.md) | - |
| [VirtualArray](classes/VirtualArray.md) | Advanced array like class that helps loading items on demand. |
| [WebView](classes/WebView.md) | Represents a standard WebView widget. |
| [WrapLayout](classes/WrapLayout.md) | WrapLayout position children in rows or columns depending on orientation property until space is filled and then wraps them on new row or column. |
| [WrappedValue](classes/WrappedValue.md) | Helper class that is used to fire property change even when real object is the same. By default property change will not be fired for a same object. By wrapping object into a WrappedValue instance `same object restriction` will be passed. |
| [XmlParser](classes/XmlParser.md) | A simple non-validating SAX parser based on https://github.com/vflash/easysax version 0.1.14 |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [AccessibilityDecrementEventData](interfaces/AccessibilityDecrementEventData.md) | Base event data. |
| [AccessibilityIncrementEventData](interfaces/AccessibilityIncrementEventData.md) | Base event data. |
| [ActionOptions](interfaces/ActionOptions.md) | Provides options for the dialog. |
| [AddArrayFromBuilder](interfaces/AddArrayFromBuilder.md) | Defines an interface for adding arrays declared in xml. |
| [AddChildFromBuilder](interfaces/AddChildFromBuilder.md) | Defines an interface for adding a child element declared in xml. |
| [AlertOptions](interfaces/AlertOptions.md) | Provides options for the alert. |
| [AndroidActivityBackPressedEventData](interfaces/AndroidActivityBackPressedEventData.md) | Data for the Android activity back pressed event. |
| [AndroidActivityBundleEventData](interfaces/AndroidActivityBundleEventData.md) | Data for the Android activity events with bundle. |
| [AndroidActivityCallbacks](interfaces/AndroidActivityCallbacks.md) | - |
| [AndroidActivityEventData](interfaces/AndroidActivityEventData.md) | Data for the Android activity events. |
| [AndroidActivityNewIntentEventData](interfaces/AndroidActivityNewIntentEventData.md) | Data for the Android activity newIntent event. |
| [AndroidActivityRequestPermissionsEventData](interfaces/AndroidActivityRequestPermissionsEventData.md) | Data for the Android activity onRequestPermissions callback |
| [AndroidActivityResultEventData](interfaces/AndroidActivityResultEventData.md) | Data for the Android activity result event. |
| [AndroidOverflowInsetData](interfaces/AndroidOverflowInsetData.md) | Defines the data for the androidOverflowInset event. |
| [AnimationDefinition](interfaces/AnimationDefinition.md) | - |
| [AnimationDefinitionInternal](interfaces/AnimationDefinitionInternal.md) | - |
| [ApplicationEventData](interfaces/ApplicationEventData.md) | Event data containing information for the application events. |
| [BackstackEntry](interfaces/BackstackEntry.md) | Represents an entry in the back stack of a Frame object. |
| [BindingOptions](interfaces/BindingOptions.md) | The options object used in the Bindable.bind method. |
| [Cancelable](interfaces/Cancelable.md) | - |
| [CancelableOptions](interfaces/CancelableOptions.md) | Provides options for the dialog. |
| [ChangedData](interfaces/ChangedData.md) | Event args for "changed" event. |
| [CommonLayoutParams](interfaces/CommonLayoutParams.md) | - |
| [ComponentModule](interfaces/ComponentModule.md) | - |
| [ConfirmOptions](interfaces/ConfirmOptions.md) | Provides options for the confirm dialog. |
| [CreateViewEventData](interfaces/CreateViewEventData.md) | Event data containing information for creating a native view that will be added to the visual tree. |
| [CssChangedEventData](interfaces/CssChangedEventData.md) | Event data containing information about application css change. |
| [DialogOptions](interfaces/DialogOptions.md) | Provides options for the dialog. |
| [DiscardedErrorEventData](interfaces/DiscardedErrorEventData.md) | Event data containing information about discarded application errors. |
| [DownloadedData](interfaces/DownloadedData.md) | Provides data for downloaded event. |
| [DownloadError](interfaces/DownloadError.md) | Provides data for download error. |
| [DownloadRequest](interfaces/DownloadRequest.md) | Represents a single download request. |
| [EventData](interfaces/EventData.md) | Base event data. |
| [EventDataValue](interfaces/EventDataValue.md) | Base event data. |
| [FontScaleChangedEventData](interfaces/FontScaleChangedEventData.md) | Event data containing information for font scale changed event. |
| [GestureEventData](interfaces/GestureEventData.md) | Base event data. |
| [GestureEventDataWithState](interfaces/GestureEventDataWithState.md) | Base event data. |
| [HttpContent](interfaces/HttpContent.md) | Encapsulates the content of an HttpResponse. |
| [HttpRequestOptions](interfaces/HttpRequestOptions.md) | Provides options for the http requests. |
| [HttpResponse](interfaces/HttpResponse.md) | Encapsulates HTTP-response information from an HTTP-request. |
| [IDevice](interfaces/IDevice.md) | - |
| [ImageAssetOptions](interfaces/ImageAssetOptions.md) | - |
| [InitRootViewEventData](interfaces/InitRootViewEventData.md) | Event data containing information about root view application. |
| [IOSView](interfaces/IOSView.md) | This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within. |
| [ItemEventData](interfaces/ItemEventData.md) | Event data containing information for the index and the view associated to a list view item. |
| [ItemsLoading](interfaces/ItemsLoading.md) | Event args for "itemsLoading" event. |
| [ItemsSource](interfaces/ItemsSource.md) | - |
| [KeyedTemplate](interfaces/KeyedTemplate.md) | Defines an interface for Template with a key. |
| [LaunchEventData](interfaces/LaunchEventData.md) | Event data containing information for launch event. |
| [LayoutDirectionChangedEventData](interfaces/LayoutDirectionChangedEventData.md) | Event data containing information for system layout direction changed event. |
| [LoadAppCSSEventData](interfaces/LoadAppCSSEventData.md) | Event data containing information for the application events. |
| [LoadEventData](interfaces/LoadEventData.md) | Event data containing information for the loading events of a WebView. |
| [LoadOptions](interfaces/LoadOptions.md) | - |
| [LoginOptions](interfaces/LoginOptions.md) | Provides options for the login dialog. |
| [LoginResult](interfaces/LoginResult.md) | Provides result data from the login dialog. |
| [NativeScriptConfig](interfaces/NativeScriptConfig.md) | IMPORTANT: this is not generated automatically due to this issue: https://github.com/microsoft/TypeScript/issues/36763 the reference path above will get rewritten and break on compilation unless kept here Once issue is resolve we can remove this index.d.ts from repo and go back to auto generation on tsc |
| [NativeScriptError](interfaces/NativeScriptError.md) | An extended JavaScript Error which will have the nativeError property initialized in case the error is caused by executing platform-specific code. |
| [NavigatedData](interfaces/NavigatedData.md) | Defines the data for the page navigation events. |
| [NavigationContext](interfaces/NavigationContext.md) | Represents a context passed to navigation methods. |
| [NavigationData](interfaces/NavigationData.md) | Base event data. |
| [NavigationEntry](interfaces/NavigationEntry.md) | Represents an entry in passed to navigate method. |
| [NavigationTransition](interfaces/NavigationTransition.md) | Represents an object specifying a page navigation transition. |
| [OrientationChangedEventData](interfaces/OrientationChangedEventData.md) | Event data containing information for orientation changed event. |
| [Pair](interfaces/Pair.md) | - |
| [PanGestureEventData](interfaces/PanGestureEventData.md) | Base event data. |
| [PinchGestureEventData](interfaces/PinchGestureEventData.md) | Base event data. |
| [PlatformContext](interfaces/PlatformContext.md) | Used with qualifier matchers and module resolution |
| [Point3D](interfaces/Point3D.md) | - |
| [PromptOptions](interfaces/PromptOptions.md) | Provides options for the prompt dialog. |
| [PromptResult](interfaces/PromptResult.md) | Provides result data from the prompt dialog. |
| [PropertyAnimation](interfaces/PropertyAnimation.md) | - |
| [PropertyAnimationInfo](interfaces/PropertyAnimationInfo.md) | - |
| [PropertyChangeData](interfaces/PropertyChangeData.md) | Data for the "propertyChange" event. |
| [RootLayoutOptions](interfaces/RootLayoutOptions.md) | - |
| [RotationGestureEventData](interfaces/RotationGestureEventData.md) | Base event data. |
| [SceneEventData](interfaces/SceneEventData.md) | iOS Event data containing information for scene lifecycle events (iOS 13+). |
| [ScrollEventData](interfaces/ScrollEventData.md) | Base event data. |
| [SearchEventData](interfaces/SearchEventData.md) | Event data containing information for the search text change event. |
| [SelectedIndexChangedEventData](interfaces/SelectedIndexChangedEventData.md) | Defines the data for the SegmentedBar.selectedIndexChanged event. |
| [ShadeCoverOptions](interfaces/ShadeCoverOptions.md) | - |
| [ShadowCSSValues](interfaces/ShadowCSSValues.md) | - |
| [SharedTransitionConfig](interfaces/SharedTransitionConfig.md) | - |
| [ShowModalOptions](interfaces/ShowModalOptions.md) | - |
| [ShownModallyData](interfaces/ShownModallyData.md) | Defines the data for the shownModally event. |
| [Size](interfaces/Size.md) | The Size interface describes abstract dimensions in two dimensional space. It has two properties width and height, representing the width and height values of the size. |
| [StrokeCSSValues](interfaces/StrokeCSSValues.md) | - |
| [SwipeGestureEventData](interfaces/SwipeGestureEventData.md) | Base event data. |
| [SystemAppearanceChangedEventData](interfaces/SystemAppearanceChangedEventData.md) | Event data containing information for system appearance changed event. |
| [TapGestureEventData](interfaces/TapGestureEventData.md) | Base event data. |
| [Template](interfaces/Template.md) | Defines an interface for a View factory function. Commonly used to specify the visualization of data objects. |
| [TemplatedItemsView](interfaces/TemplatedItemsView.md) | - |
| [TimerInfo](interfaces/TimerInfo.md) | Contains contains utility methods for profiling. All methods in this module are experimental and may be changed in a non-major version. |
| [TouchGestureEventData](interfaces/TouchGestureEventData.md) | - |
| [TraceErrorHandler](interfaces/TraceErrorHandler.md) | An interface used to for handling trace error |
| [TraceEventListener](interfaces/TraceEventListener.md) | An interface used to trace information about specific event. |
| [TraceWriter](interfaces/TraceWriter.md) | An interface used to define a writer used by trace to print (log). |
| [UnhandledErrorEventData](interfaces/UnhandledErrorEventData.md) | Event data containing information about unhandled application errors. |
| [ViewEntry](interfaces/ViewEntry.md) | Represents an entry to be used to create a view or load it form file |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [AlignContent](type-aliases/AlignContent.md) | - |
| [AlignItems](type-aliases/AlignItems.md) | - |
| [AlignSelf](type-aliases/AlignSelf.md) | - |
| [AnimationPromise](type-aliases/AnimationPromise.md) | - |
| [~~dip~~](type-aliases/dip.md) | - |
| [Flex](type-aliases/Flex.md) | - |
| [FlexDirection](type-aliases/FlexDirection.md) | - |
| [FlexFlow](type-aliases/FlexFlow.md) | - |
| [FlexWrap](type-aliases/FlexWrap.md) | - |
| [FontStyleType](type-aliases/FontStyleType.md) | - |
| [FontVariationSettingsType](type-aliases/FontVariationSettingsType.md) | - |
| [FontWeightType](type-aliases/FontWeightType.md) | - |
| [GlassEffectConfig](type-aliases/GlassEffectConfig.md) | - |
| [GlassEffectType](type-aliases/GlassEffectType.md) | - |
| [GlassEffectVariant](type-aliases/GlassEffectVariant.md) | Glass effects |
| [GridUnitType](type-aliases/GridUnitType.md) | - |
| [Headers](type-aliases/Headers.md) | - |
| [~~HorizontalAlignment~~](type-aliases/HorizontalAlignment.md) | - |
| [InstrumentationMode](type-aliases/InstrumentationMode.md) | Profiling mode to use. - `counters` Accumulates method call counts and times until dumpProfiles is called and then prints aggregated statistic in the console. This is the default. - `timeline` Outputs method names along start/end timestamps in the console on the go. - `lifecycle` Outputs basic non-verbose times for startup, navigation, etc. |
| [iosSymbolScaleType](type-aliases/iosSymbolScaleType.md) | iOS only SF Symbol scale |
| [JustifyContent](type-aliases/JustifyContent.md) | - |
| [~~LengthDipUnit~~](type-aliases/LengthDipUnit.md) | - |
| [~~LengthPercentUnit~~](type-aliases/LengthPercentUnit.md) | - |
| [~~LengthPxUnit~~](type-aliases/LengthPxUnit.md) | - |
| [~~LengthType~~](type-aliases/LengthType.md) | - |
| [ModuleListProvider](type-aliases/ModuleListProvider.md) | - |
| [~~percent~~](type-aliases/percent.md) | - |
| [~~PercentLengthType~~](type-aliases/PercentLengthType.md) | - |
| [~~px~~](type-aliases/px.md) | - |
| [SceneEventName](type-aliases/SceneEventName.md) | - |
| [SharedTransitionTagProperties](type-aliases/SharedTransitionTagProperties.md) | Properties which can be set on individual Shared Elements |
| [SplitBehavior](type-aliases/SplitBehavior.md) | - |
| [SplitDisplayMode](type-aliases/SplitDisplayMode.md) | - |
| [SplitRole](type-aliases/SplitRole.md) | - |
| [SplitStyle](type-aliases/SplitStyle.md) | - |
| [TouchAnimationOptions](type-aliases/TouchAnimationOptions.md) | - |
| [Transformation](type-aliases/Transformation.md) | - |
| [TransformationType](type-aliases/TransformationType.md) | - |
| [TransformationValue](type-aliases/TransformationValue.md) | - |
| [TransformFunctionsInfo](type-aliases/TransformFunctionsInfo.md) | - |
| [~~VerticalAlignment~~](type-aliases/VerticalAlignment.md) | - |
| [VisionHoverOptions](type-aliases/VisionHoverOptions.md) | - |
| [WebViewNavigationType](type-aliases/WebViewNavigationType.md) | Represents navigation type |

## Variables

| Variable | Description |
| ------ | ------ |
| [~~\_resetRootView~~](variables/resetRootView.md) | - |
| [~~addCss~~](variables/addCss.md) | - |
| [~~android~~](variables/android.md) | - |
| [androidDynamicElevationOffsetProperty](variables/androidDynamicElevationOffsetProperty.md) | - |
| [androidElevationProperty](variables/androidElevationProperty.md) | - |
| [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md) | - |
| [~~AnimationCurve~~](variables/AnimationCurve.md) | - |
| [Application](variables/Application.md) | - |
| [autocapitalizationTypeProperty](variables/autocapitalizationTypeProperty.md) | - |
| [autocorrectProperty](variables/autocorrectProperty.md) | - |
| [backgroundColorProperty](variables/backgroundColorProperty.md) | - |
| [~~backgroundEvent~~](variables/backgroundEvent.md) | - |
| [backgroundImageProperty](variables/backgroundImageProperty.md) | - |
| [backgroundInternalProperty](variables/backgroundInternalProperty.md) | - |
| [backgroundPositionProperty](variables/backgroundPositionProperty.md) | - |
| [backgroundRepeatProperty](variables/backgroundRepeatProperty.md) | - |
| [backgroundSizeProperty](variables/backgroundSizeProperty.md) | - |
| [borderBottomColorProperty](variables/borderBottomColorProperty.md) | - |
| [borderBottomLeftRadiusProperty](variables/borderBottomLeftRadiusProperty.md) | - |
| [borderBottomRightRadiusProperty](variables/borderBottomRightRadiusProperty.md) | - |
| [borderBottomWidthProperty](variables/borderBottomWidthProperty.md) | - |
| [borderLeftColorProperty](variables/borderLeftColorProperty.md) | - |
| [borderLeftWidthProperty](variables/borderLeftWidthProperty.md) | - |
| [borderRightColorProperty](variables/borderRightColorProperty.md) | - |
| [borderRightWidthProperty](variables/borderRightWidthProperty.md) | - |
| [borderTopColorProperty](variables/borderTopColorProperty.md) | - |
| [borderTopLeftRadiusProperty](variables/borderTopLeftRadiusProperty.md) | - |
| [borderTopRightRadiusProperty](variables/borderTopRightRadiusProperty.md) | - |
| [borderTopWidthProperty](variables/borderTopWidthProperty.md) | - |
| [clipPathProperty](variables/clipPathProperty.md) | - |
| [colorProperty](variables/colorProperty.md) | - |
| [CSSHelper](variables/CSSHelper.md) | - |
| [Device](variables/Device.md) | Gets the current device information. |
| [Dialogs](variables/Dialogs.md) | Singular rollup for convenience of all dialog methods |
| [directionProperty](variables/directionProperty.md) | - |
| [~~discardedErrorEvent~~](variables/discardedErrorEvent.md) | - |
| [~~displayedEvent~~](variables/displayedEvent.md) | - |
| [editableProperty](variables/editableProperty.md) | - |
| [~~Enums~~](variables/Enums.md) | - |
| [~~exitEvent~~](variables/exitEvent.md) | - |
| [fontFamilyProperty](variables/fontFamilyProperty.md) | - |
| [fontInternalProperty](variables/fontInternalProperty.md) | - |
| [~~fontScaleChangedEvent~~](variables/fontScaleChangedEvent.md) | - |
| [fontScaleInternalProperty](variables/fontScaleInternalProperty.md) | - |
| [fontSizeProperty](variables/fontSizeProperty.md) | - |
| [fontStyleProperty](variables/fontStyleProperty.md) | - |
| [fontVariationSettingsProperty](variables/fontVariationSettingsProperty.md) | - |
| [fontWeightProperty](variables/fontWeightProperty.md) | - |
| [~~foregroundEvent~~](variables/foregroundEvent.md) | - |
| [~~getCssFileName~~](variables/getCssFileName.md) | - |
| [~~getMainEntry~~](variables/getMainEntry.md) | - |
| [~~getNativeApplication~~](variables/getNativeApplication.md) | - |
| [~~getResources~~](variables/getResources.md) | - |
| [~~getRootView~~](variables/getRootView.md) | - |
| [~~hasLaunched~~](variables/hasLaunched.md) | - |
| [~~hasListeners~~](variables/hasListeners.md) | - |
| [heightProperty](variables/heightProperty.md) | - |
| [hintProperty](variables/hintProperty.md) | - |
| [horizontalAlignmentProperty](variables/horizontalAlignmentProperty.md) | - |
| [~~inBackground~~](variables/inBackground.md) | - |
| [~~ios~~](variables/ios.md) | - |
| [isAndroid](variables/isAndroid.md) | Gets a value indicating if the app is running on the Android platform. |
| [isApple](variables/isApple.md) | Gets a value indicating if the app is running on an Apple platform. |
| [isIOS](variables/isIOS.md) | Gets a value indicating if the app is running on the iOS platform. |
| [isUserInteractionEnabledProperty](variables/isUserInteractionEnabledProperty.md) | - |
| [isVisionOS](variables/isVisionOS.md) | Gets a value indicating if the app is running on the iOS platform. |
| [keyboardTypeProperty](variables/keyboardTypeProperty.md) | - |
| [~~launchEvent~~](variables/launchEvent.md) | - |
| [~~layoutDirection~~](variables/layoutDirection.md) | - |
| [~~layoutDirectionChanged~~](variables/layoutDirectionChanged.md) | - |
| [~~layoutDirectionChangedEvent~~](variables/layoutDirectionChangedEvent.md) | - |
| [letterSpacingProperty](variables/letterSpacingProperty.md) | - |
| [lineHeightProperty](variables/lineHeightProperty.md) | - |
| [~~loadAppCss~~](variables/loadAppCss.md) | - |
| [~~lowMemoryEvent~~](variables/lowMemoryEvent.md) | - |
| [marginBottomProperty](variables/marginBottomProperty.md) | - |
| [marginLeftProperty](variables/marginLeftProperty.md) | - |
| [marginRightProperty](variables/marginRightProperty.md) | - |
| [marginTopProperty](variables/marginTopProperty.md) | - |
| [maxLengthProperty](variables/maxLengthProperty.md) | - |
| [minHeightProperty](variables/minHeightProperty.md) | - |
| [minWidthProperty](variables/minWidthProperty.md) | - |
| [~~notify~~](variables/notify.md) | - |
| [~~off~~](variables/off.md) | - |
| [~~on~~](variables/on.md) | - |
| [opacityProperty](variables/opacityProperty.md) | - |
| [~~orientation~~](variables/orientation.md) | - |
| [~~orientationChangedEvent~~](variables/orientationChangedEvent.md) | - |
| [paddingBottomProperty](variables/paddingBottomProperty.md) | - |
| [paddingInternalProperty](variables/paddingInternalProperty.md) | - |
| [paddingLeftProperty](variables/paddingLeftProperty.md) | - |
| [paddingRightProperty](variables/paddingRightProperty.md) | - |
| [paddingTopProperty](variables/paddingTopProperty.md) | - |
| [perspectiveProperty](variables/perspectiveProperty.md) | - |
| [placeholderColorProperty](variables/placeholderColorProperty.md) | - |
| [platformNames](variables/platformNames.md) | - |
| [~~resetRootView~~](variables/resetRootView-1.md) | - |
| [~~resumeEvent~~](variables/resumeEvent.md) | - |
| [returnKeyTypeProperty](variables/returnKeyTypeProperty.md) | - |
| [rotateProperty](variables/rotateProperty.md) | - |
| [rotateXProperty](variables/rotateXProperty.md) | - |
| [rotateYProperty](variables/rotateYProperty.md) | - |
| [~~run~~](variables/run.md) | - |
| [scaleXProperty](variables/scaleXProperty.md) | - |
| [scaleYProperty](variables/scaleYProperty.md) | - |
| [SceneEvents](variables/SceneEvents.md) | - |
| [~~setAutoSystemAppearanceChanged~~](variables/setAutoSystemAppearanceChanged.md) | - |
| [~~setCssFileName~~](variables/setCssFileName.md) | - |
| [~~setMaxRefreshRate~~](variables/setMaxRefreshRate.md) | - |
| [~~setResources~~](variables/setResources.md) | - |
| [~~suspended~~](variables/suspended.md) | - |
| [~~suspendEvent~~](variables/suspendEvent.md) | - |
| [~~systemAppearance~~](variables/systemAppearance.md) | - |
| [~~systemAppearanceChanged~~](variables/systemAppearanceChanged.md) | - |
| [~~systemAppearanceChangedEvent~~](variables/systemAppearanceChangedEvent.md) | - |
| [textAlignmentProperty](variables/textAlignmentProperty.md) | - |
| [textDecorationProperty](variables/textDecorationProperty.md) | - |
| [textOverflowProperty](variables/textOverflowProperty.md) | - |
| [textShadowProperty](variables/textShadowProperty.md) | - |
| [textStrokeProperty](variables/textStrokeProperty.md) | - |
| [textTransformProperty](variables/textTransformProperty.md) | - |
| [translateXProperty](variables/translateXProperty.md) | - |
| [translateYProperty](variables/translateYProperty.md) | - |
| [~~uncaughtErrorEvent~~](variables/uncaughtErrorEvent.md) | - |
| [unsetValue](variables/unsetValue.md) | Value specifying that Property should be set to its initial value. |
| [updateTextTriggerProperty](variables/updateTextTriggerProperty.md) | - |
| [VALID\_FONT\_SCALES](variables/VALID_FONT_SCALES.md) | - |
| [verticalAlignmentProperty](variables/verticalAlignmentProperty.md) | - |
| [visibilityProperty](variables/visibilityProperty.md) | - |
| [whiteSpaceProperty](variables/whiteSpaceProperty.md) | - |
| [widthProperty](variables/widthProperty.md) | - |
| [zIndexProperty](variables/zIndexProperty.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [\_resolveAnimationCurve](functions/resolveAnimationCurve.md) | - |
| [\_setResolver](functions/setResolver.md) | Used to set a global singular instance of ModuleNameResolver |
| [action](functions/action.md) | The action() method displays a action box that prompts the visitor to choose some action. |
| [addTaggedAdditionalCSS](functions/addTaggedAdditionalCSS.md) | - |
| [addWeakEventListener](functions/addWeakEventListener.md) | Attaches a WeakEventListener. |
| [alert](functions/alert.md) | The alert() method displays an alert box with a specified message. |
| [animationTimingFunctionConverter](functions/animationTimingFunctionConverter.md) | - |
| [booleanConverter](functions/booleanConverter.md) | - |
| [confirm](functions/confirm.md) | The confirm() method displays a dialog box with a specified message. |
| [CSSType](functions/CSSType.md) | Specifies the type name for the instances of this View class, that is used when matching CSS type selectors. |
| [eachDescendant](functions/eachDescendant.md) | Iterates through all child views (via visual tree) and executes a function. |
| [fromObject](functions/fromObject.md) | Creates an Observable instance and sets its properties according to the supplied JavaScript object. param obj - A JavaScript object used to initialize nativescript Observable instance. |
| [fromObjectRecursive](functions/fromObjectRecursive.md) | Creates an Observable instance and sets its properties according to the supplied JavaScript object. This function will create new Observable for each nested object (expect arrays and functions) from supplied JavaScript object. param obj - A JavaScript object used to initialize nativescript Observable instance. |
| [getAncestor](functions/getAncestor.md) | Gets an ancestor from a given type. |
| [getAndroidAccessibilityManager](functions/getAndroidAccessibilityManager.md) | - |
| [getCurrentFontScale](functions/getCurrentFontScale.md) | - |
| [getCurrentPage](functions/getCurrentPage.md) | - |
| [getFileAccess](functions/getFileAccess.md) | Returns FileSystemAccess, a shared singleton utility class to provide methods to access and work with the file system. This is used under the hood of all the file system apis in @nativescript/core and provided as a lower level convenience if needed. |
| [getLastFocusedViewOnPage](functions/getLastFocusedViewOnPage.md) | Find the last view focused on a page. |
| [getNativeApp](functions/getNativeApp.md) | Get the current application instance. |
| [getRootLayout](functions/getRootLayout.md) | - |
| [getRootLayoutById](functions/getRootLayoutById.md) | - |
| [getTransformedText](functions/getTransformedText.md) | - |
| [getViewById](functions/getViewById.md) | Gets a child view by id. |
| [initializeSdkVersionClass](functions/initializeSdkVersionClass.md) | - |
| [isAccessibilityServiceEnabled](functions/isAccessibilityServiceEnabled.md) | Is Android TalkBack or iOS VoiceOver enabled? |
| [isEmbedded](functions/isEmbedded.md) | Whether the app is embedded into a host project or standalone project |
| [login](functions/login.md) | The login() method displays a login dialog box that prompts the visitor for user name and password. |
| [makeParser](functions/makeParser.md) | - |
| [makeValidator](functions/makeValidator.md) | - |
| [parseCSSShadow](functions/parseCSSShadow.md) | Parse a string into ShadowCSSValues Supports any valid css box/text shadow combination. |
| [parseCSSStroke](functions/parseCSSStroke.md) | Parse a string into StrokeCSSValues https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-text-stroke |
| [parseKeyframeDeclarations](functions/parseKeyframeDeclarations.md) | - |
| [profile](functions/profile.md) | Method decorator factory. It will intercept the method call and start and pause a timer before and after the method call. Works only if profiling is enabled. |
| [profilingDisable](functions/profilingDisable.md) | Disables profiling. |
| [profilingDumpProfiles](functions/profilingDumpProfiles.md) | Prints the timer for all methods instrumented with profile decorator. |
| [profilingEnable](functions/profilingEnable.md) | Enables profiling. |
| [profilingIsRunning](functions/profilingIsRunning.md) | Returns true if a timer is currently running. |
| [profilingResetProfiles](functions/profilingResetProfiles.md) | Resets the timers for all methods instrumented with profile decorator. |
| [profilingStart](functions/profilingStart.md) | Starts a timer with a specific name. Works only if profiling is enabled. |
| [profilingStartCPU](functions/profilingStartCPU.md) | Starts android cpu profiling. |
| [profilingStop](functions/profilingStop.md) | Pauses a timer with a specific name. This will increase call count and accumulate time. Works only if profiling is enabled. |
| [profilingStopCPU](functions/profilingStopCPU.md) | Stops android cpu profiling. |
| [profilingTime](functions/profilingTime.md) | Gets accurate system timestamp in ms. |
| [profilingUptime](functions/profilingUptime.md) | Gets the uptime of the current process in milliseconds. |
| [prompt](functions/prompt.md) | The prompt() method displays a dialog box that prompts the visitor for input. |
| [PseudoClassHandler](functions/PseudoClassHandler.md) | - |
| [querySelectorAll](functions/querySelectorAll.md) | Gets a child view by selector. |
| [removeTaggedAdditionalCSS](functions/removeTaggedAdditionalCSS.md) | - |
| [removeWeakEventListener](functions/removeWeakEventListener.md) | Removes a WeakEventListener. |
| [resolveFileNameFromUrl](functions/resolveFileNameFromUrl.md) | - |
| [sendAccessibilityEvent](functions/sendAccessibilityEvent.md) | Android: helper function for triggering accessibility events |
| [setActivityCallbacks](functions/setActivityCallbacks.md) | - |
| [setNativeApp](functions/setNativeApp.md) | This is called internally to set the native application instance. You typically do not need to call this directly. However, it's exposed for special case purposes, such as custom application initialization. |
| [timeConverter](functions/timeConverter.md) | - |
| [updateAccessibilityProperties](functions/updateAccessibilityProperties.md) | Update accessibility properties on nativeView |

## References

### androidRegisteredReceivers

Renames and re-exports [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md)

***

### androidUnregisterBroadcastReceiver

Renames and re-exports [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md)

***

### iosAddNotificationObserver

Renames and re-exports [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md)

***

### iosNotificationObservers

Renames and re-exports [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md)

***

### iosRemoveNotificationObserver

Renames and re-exports [androidRegisterBroadcastReceiver](variables/androidRegisterBroadcastReceiver.md)

***

### sanitizeModuleName

Re-exports [sanitizeModuleName](namespaces/Utils/functions/sanitizeModuleName.md)
