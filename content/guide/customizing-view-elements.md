---
title: Customizing View Elements
description: If a @nativescript/core element offers common behavior but your app needs something extra from them, you can extend them.
contributors:
  - NathanWalker
---

You can customize existing elements by extending them to enable new behavior.

For example, what if the [ListPicker](/ui/list-picker) should have a bigger font size with a different highlight color?

## Customize Existing View Element

To customize the ListPicker, the steps are similar to creating new elements [outlined here](/guide/create-custom-native-elements). Start by creating a folder for the custom element followed by the customizations needed:

```bash
./list-picker-custom
  common.ts
  index.android.ts
  index.d.ts
  index.ios.ts
```

In this case we want to allow the picker to display a bigger font size and possibly a different highlight color.

Supporting a bigger font size on iOS with ListPicker starts by researching how [UIPickerView](https://developer.apple.com/documentation/uikit/uipickerview?language=objc) can be modified to display a bigger font size. As we can see from core itself, the ListPicker is simply just a [UIPickerView alone](https://github.com/NativeScript/NativeScript/blob/96af6fa83e586a1c443c8b179701450d803e12aa/packages/core/ui/list-picker/index.ios.ts#L15).

This means that all the information available on iOS development applies directly to NativeScript as well.

For instance, even this [Stack Overflow answer](https://stackoverflow.com/a/48744047) regarding the exact same question applies.

### Extend Existing ListPicker

In our `index.ios.ts` we can extend the existing ListPicker to add our own [iOS delegate](https://developer.apple.com/documentation/uikit/uipickerviewdelegate?language=objc) which implements the method suggested to support making the font size bigger. We can even start with an exact replica of the [ListPicker](https://github.com/NativeScript/NativeScript/blob/main/packages/core/ui/list-picker/index.ios.ts) in core and distill it down to just what we need.

```ts
import { ListPicker } from "@nativescript/core";
import { selectedIndexProperty } from "@nativescript/core/ui/list-picker/list-picker-common";

export class CustomListPicker extends ListPicker {
  private _delegate: ListPickerDelegateImpl;
  private _dataSource: ListPickerDataSource;

  initNativeView() {
    this._delegate = ListPickerDelegateImpl.initWithOwner(new WeakRef(this));
    this.nativeViewProtected.delegate = this._delegate;
    this.nativeViewProtected.dataSource = this._dataSource =
      ListPickerDataSource.initWithOwner(new WeakRef(this));
  }
}

@NativeClass
class ListPickerDelegateImpl extends NSObject implements UIPickerViewDelegate {
  static ObjCProtocols = [UIPickerViewDelegate];
  private _owner: WeakRef<any>;

  static initWithOwner(owner: WeakRef<ListPicker>): ListPickerDelegateImpl {
    const delegate = <ListPickerDelegateImpl>ListPickerDelegateImpl.new();
    delegate._owner = owner;

    return delegate;
  }

  pickerViewViewForRowForComponentReusingView(
    pickerView: UIPickerView,
    row: number,
    component: number,
    view: UIView
  ): UIView {
    const owner = this._owner?.deref();
    if (owner) {
      var label = UILabel.new();

      // Change font size here!
      label.font = UIFont.systemFontOfSize(26);
      label.text = owner.items[row];
      label.textAlignment = NSTextAlignment.Center;
      return label;
    }
    return UILabel.new();
  }

  pickerViewDidSelectRowInComponent(
    pickerView: UIPickerView,
    row: number,
    component: number
  ): void {
    const owner = this._owner?.deref();
    if (owner) {
      selectedIndexProperty.nativeValueChange(owner, row);
      owner.updateSelectedValue(row);
    }
  }
}

@NativeClass
class ListPickerDataSource extends NSObject implements UIPickerViewDataSource {
  static ObjCProtocols = [UIPickerViewDataSource];

  private _owner: WeakRef<ListPicker>;

  static initWithOwner(owner: WeakRef<ListPicker>): ListPickerDataSource {
    const dataSource = <ListPickerDataSource>ListPickerDataSource.new();
    dataSource._owner = owner;

    return dataSource;
  }

  numberOfComponentsInPickerView(pickerView: UIPickerView) {
    return 1;
  }

  pickerViewNumberOfRowsInComponent(
    pickerView: UIPickerView,
    component: number
  ) {
    const owner = this._owner?.deref();

    return owner && owner.items ? owner.items.length : 0;
  }
}
```

This custom element now implements the `UIPickerViewDelegate`'s [pickerViewViewForRowForComponentReusingView](https://developer.apple.com/documentation/uikit/uipickerviewdelegate/pickerview(_:viewforrow:forcomponent:reusing:)?language=objc) allowing us to customize the font size with this line:

```ts
label.font = UIFont.systemFontOfSize(26);
```

#### Customize Highlight Color

Similar to the above solution, customizing a UIPickerView highlight color has been discussed before. As suggested in [this discussion](https://stackoverflow.com/a/56392417) we can modify the `backgroundColor` of the appropriate subviews.

Anytime we want to modify iOS subviews, we can do so within NativeScript's `onLoaded` method.

```ts
export class CustomListPicker extends ListPicker {
  // ...

  onLoaded() {
    super.onLoaded();
    // Optional: customize selection highlight bar
    for (let i = 0; i < this.nativeViewProtected.subviews.count; i++) {
      const subview = this.nativeViewProtected.subviews.objectAtIndex(
        i
      ) as UIView;
      if (subview.frame.size.height <= 34) {
        // Use any desired color
        // Tip: https://www.uicolor.io
        subview.backgroundColor = UIColor.colorWithRedGreenBlueAlpha(
          0,
          .66,
          1,
          0.4
        );
      }
    }
  }
}
```

### Register the extended element

You can register `CustomListPicker` for use anywhere in your view markup using [this guide](/guide/create-custom-native-elements).

### Functional StackBlitz Example

You can try this example yourself on StackBlitz here:
https://stackblitz.com/edit/nativescript-customize-listpicker?file=src%2Fapp%2Fitem%2Flist-picker-custom%2Findex.ios.ts

Try changing the font size or highlight color live on StackBlitz to see the changes to behavior yourself.



