---
title: Customizing View Elements
description: If a @nativescript/core element offers behavior that generally works but your app needs something extra from them, you can extend them.
contributors:
  - NathanWalker
---

You can extend existing NativeScript UI elements to customize their behavior or appearance.

This guide demonstrates how to customize the font size and highlight color of the [ListPicker](/ui/list-picker) element.

## Customizing an Existing View Element

To customize an existing element such as `ListPicker`, follow a similar process as described in the [Creating Custom Native Elements](/guide/create-custom-native-elements) guide.

### Directory Structure

Begin by creating a new folder structure for your customized ListPicker:

```bash
./list-picker-custom
  ├── common.ts
  ├── index.android.ts
  ├── index.d.ts
  └── index.ios.ts
```

### Adjusting Font Size on iOS

To modify the font size for a ListPicker on iOS, first refer to Apple's [UIPickerView documentation](https://developer.apple.com/documentation/uikit/uipickerview?language=objc). Since NativeScript's ListPicker directly utilizes `UIPickerView`, any native iOS modifications apply.

For instance, this [Stack Overflow solution](https://stackoverflow.com/a/48744047) describes how to change the font size.

### Extending ListPicker for Custom Font Size

Create the following implementation in `index.ios.ts`, extending the default `ListPicker`:

```typescript
import { ListPicker } from '@nativescript/core'
import { selectedIndexProperty } from '@nativescript/core/ui/list-picker/list-picker-common'

export class CustomListPicker extends ListPicker {
  private _delegate: ListPickerDelegateImpl
  private _dataSource: ListPickerDataSource

  initNativeView() {
    this._delegate = ListPickerDelegateImpl.initWithOwner(new WeakRef(this))
    this.nativeViewProtected.delegate = this._delegate

    this._dataSource = ListPickerDataSource.initWithOwner(new WeakRef(this))
    this.nativeViewProtected.dataSource = this._dataSource
  }

  onLoaded() {
    super.onLoaded()
    // Customize highlight color
    for (let i = 0; i < this.nativeViewProtected.subviews.count; i++) {
      const subview = this.nativeViewProtected.subviews.objectAtIndex(
        i,
      ) as UIView
      if (subview.frame.size.height <= 34) {
        // Tip: https://www.uicolor.io
        subview.backgroundColor = UIColor.colorWithRedGreenBlueAlpha(
          0,
          0.66,
          1,
          0.4,
        )
      }
    }
  }
}

@NativeClass
class ListPickerDelegateImpl extends NSObject implements UIPickerViewDelegate {
  static ObjCProtocols = [UIPickerViewDelegate]
  private _owner: WeakRef<ListPicker>

  static initWithOwner(owner: WeakRef<ListPicker>): ListPickerDelegateImpl {
    const delegate = <ListPickerDelegateImpl>ListPickerDelegateImpl.new()
    delegate._owner = owner
    return delegate
  }

  pickerViewViewForRowForComponentReusingView(
    pickerView: UIPickerView,
    row: number,
  ): UIView {
    const owner = this._owner?.deref()
    const label = UILabel.new()
    label.font = UIFont.systemFontOfSize(26) // Custom font size
    label.text = owner?.items[row]
    label.textAlignment = NSTextAlignment.Center
    return label
  }

  pickerViewDidSelectRowInComponent(
    pickerView: UIPickerView,
    row: number,
  ): void {
    const owner = this._owner?.deref()
    if (owner) {
      selectedIndexProperty.nativeValueChange(owner, row)
      owner.updateSelectedValue(row)
    }
  }
}

@NativeClass
class ListPickerDataSource extends NSObject implements UIPickerViewDataSource {
  static ObjCProtocols = [UIPickerViewDataSource]
  private _owner: WeakRef<ListPicker>

  static initWithOwner(owner: WeakRef<ListPicker>): ListPickerDataSource {
    const dataSource = <ListPickerDataSource>ListPickerDataSource.new()
    dataSource._owner = owner
    return dataSource
  }

  numberOfComponentsInPickerView(): number {
    return 1
  }

  pickerViewNumberOfRowsInComponent(): number {
    const owner = this._owner?.deref()
    return owner?.items?.length || 0
  }
}
```

In this code, the font size is customized in the delegate's `pickerViewViewForRowForComponentReusingView` method:

```typescript
label.font = UIFont.systemFontOfSize(26)
```

### Customizing Highlight Color

You can also customize the highlight color by modifying the subviews' background colors in the `onLoaded()` lifecycle hook (shown in the example above). Adjust RGB and alpha values to achieve your desired color.

### Registering Your Custom Element

Register your new `CustomListPicker` element following the steps outlined in [Creating Custom Native Elements](/guide/create-custom-native-elements).

### Interactive StackBlitz Example

Experiment live with this custom ListPicker in [this StackBlitz demo](https://stackblitz.com/edit/nativescript-customize-listpicker?file=src%2Fapp%2Fitem%2Flist-picker-custom%2Findex.ios.ts). Modify the font size or highlight color directly and observe the immediate changes.
