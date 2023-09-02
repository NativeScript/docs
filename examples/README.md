# NativeScript Examples

This is a TypeScript NativeScript app containing the source code for the various examples used in the docs.

## Running the examples

Running these examples is the same as other NativeScript apps:

```bash
ns debug ios
ns debug android
```

## Generating screenshots

The app is also used to generate screenshots for the docs. This is done using Maestro and deep-linking into the app.

To Generate new screenshots:

1. Install Maestro: https://maestro.mobile.dev/
2. Build/run the project once to install it on the target emulator/simulator
3. Run the `flows/screenshots.yaml` flow:
   ```bash
   maestro test flows/screenshots.yaml
   ```

<details>

<summary>One-liner to run both platforms on specific devices</summary>

```bash
maestro --device emulator-5554 test flows/screenshots.yaml && maestro --device 6B145C36-C77C-4380-AD07-E40A63FC9716 test flows/screenshots.yaml
```

</details>

> **Note**: Screenshots will be generated for components listed in `flows/screenshots.js` - when adding a new component, make sure to list it.

## Referencing examples in docs markdown

To reference an example in docs markdown files, use following syntax:

```md
<<< @/../examples/src/ui/Label/template.xml#example
```

The `#example` is the name of a region to pull in, this is used because we don't necessarily want to render the whole file in the code block - we can define named regions using the `#region <name>` and `#regionend <name>` comments:

```xml
<!-- src/ui/Label/template.xml -->
<Page>
  <GridLayout>
    <ContentView verticalAlignment="center" horizontalAlignment="center">
      <!-- #region example -->
      <Label text="Hello NativeScript!" />
      <!-- #endregion example -->
    </ContentView>
  </GridLayout>
</Page>
```

👉 [See VitePress docs](https://vitepress.dev/guide/markdown#import-code-snippets)
