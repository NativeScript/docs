---
title: ItemEventData
titleTemplate: :title - API / NativeScript
description: Event data containing information for the index and the view associated to a list view item.
contributors: false
---

Defined in: ui/list-view/index.d.ts:230

Event data containing information for the index and the view associated to a list view item.

## Extends

- [`EventData`](EventData.md)

## Properties

### android

```ts
android: any;
```

Defined in: ui/list-view/index.d.ts:254

Gets the native [android widget](http://developer.android.com/reference/android/view/ViewGroup.html) that represents the user interface where the view is hosted. Valid only when running on Android OS.

***

### eventName

```ts
eventName: string;
```

Defined in: data/observable/index.d.ts:9

The name of the event.

#### Inherited from

[`EventData`](EventData.md).[`eventName`](EventData.md#eventname)

***

### index

```ts
index: number;
```

Defined in: ui/list-view/index.d.ts:234

The index of the item, for which the event is raised.

***

### ios

```ts
ios: any;
```

Defined in: ui/list-view/index.d.ts:249

Gets the native [iOS view](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableViewCell_Class/) that represents the user interface where the view is hosted. Valid only when running on iOS.

***

### object

```ts
object: Observable;
```

Defined in: data/observable/index.d.ts:13

The Observable instance that has raised the event.

#### Inherited from

[`EventData`](EventData.md).[`object`](EventData.md#object)

***

### section?

```ts
optional section?: number;
```

Defined in: ui/list-view/index.d.ts:239

When data is sectioned (any platform that supports sections), this is the section index for the item.

***

### view

```ts
view: View;
```

Defined in: ui/list-view/index.d.ts:244

The view that is associated to the item, for which the event is raised.
