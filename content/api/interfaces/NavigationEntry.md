---
title: NavigationEntry
titleTemplate: :title - API / NativeScript
description: Represents an entry in passed to navigate method.
contributors: false
---

Defined in: [ui/frame/index.d.ts:372](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L372)

Represents an entry in passed to navigate method.

## Extends

- [`ViewEntry`](ViewEntry.md)

## Properties

### animated?

```ts
optional animated?: boolean;
```

Defined in: [ui/frame/index.d.ts:386](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L386)

True to navigate to the new Page using animated transitions, false otherwise.

***

### backstackVisible?

```ts
optional backstackVisible?: boolean;
```

Defined in: [ui/frame/index.d.ts:407](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L407)

True to record the navigation in the backstack, false otherwise.
If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.

***

### bindingContext?

```ts
optional bindingContext?: any;
```

Defined in: [ui/frame/index.d.ts:381](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L381)

An object to become the binding context of the page navigating to. Optional.

***

### clearHistory?

```ts
optional clearHistory?: boolean;
```

Defined in: [ui/frame/index.d.ts:412](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L412)

True to clear the navigation history, false otherwise. Very useful when navigating away from login pages.

***

### context?

```ts
optional context?: any;
```

Defined in: [ui/frame/index.d.ts:376](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L376)

An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.

***

### create?

```ts
optional create?: () => View;
```

Defined in: [ui/frame/index.d.ts:367](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L367)

A function used to create the View instance. Optional.

#### Returns

[`View`](../classes/View.md)

#### Inherited from

[`ViewEntry`](ViewEntry.md).[`create`](ViewEntry.md#create)

***

### moduleName?

```ts
optional moduleName?: string;
```

Defined in: [ui/frame/index.d.ts:362](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L362)

The name of the module containing the View instance to load. Optional.

#### Inherited from

[`ViewEntry`](ViewEntry.md).[`moduleName`](ViewEntry.md#modulename)

***

### transition?

```ts
optional transition?: NavigationTransition;
```

Defined in: [ui/frame/index.d.ts:391](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L391)

Specifies an optional navigation transition for all platforms. If not specified, the default platform transition will be used.

***

### transitionAndroid?

```ts
optional transitionAndroid?: NavigationTransition;
```

Defined in: [ui/frame/index.d.ts:401](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L401)

Specifies an optional navigation transition for Android. If not specified, the default platform transition will be used.

***

### transitioniOS?

```ts
optional transitioniOS?: NavigationTransition;
```

Defined in: [ui/frame/index.d.ts:396](https://github.com/NativeScript/NativeScript/blob/9.1.0-core/packages/core/ui/frame/index.d.ts#L396)

Specifies an optional navigation transition for iOS. If not specified, the default platform transition will be used.
