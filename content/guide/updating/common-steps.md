Before starting an update, it's recommended to have a clean git branch. Having a clean branch allows inspecting all the changes done during the update one last time before committing them.

## Update steps

### Update NativeScript CLI

Every update starts with updating the NativeScript CLI to the latest version.

```bash
npm install -g nativescript@latest
```

Once installed, verify the version with:

```bash
$ ns -v
# should print the version:
v8.x.x
✔ Up to date.
```

### Update runtimes, core and webpack

For a quick update of the essential dependencies, run:

```bash
ns update
```

The following packages will be updated to their `latest` versions:

```bash
@nativescript/core
@nativescript/webpack
@nativescript/types     # if installed
@nativescript/ios       # if installed
@nativescript/android   # if installed
```

::: info Note

If you prefer to update dependencies manually, you can do that as well, for example by manually changing versions in `package.json` then installing dependencies.

:::

### Clean project

To make sure all dependencies are updated correctly, it's recommended to clean the project with:

```bash
ns clean
```
