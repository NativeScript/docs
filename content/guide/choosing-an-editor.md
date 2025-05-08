---
title: Choosing An Editor
---

You can develop NativeScript apps in any text editor or IDE you prefer.

### VS Code

- [Visual Studio Code](https://code.visualstudio.com/) has excellent support for [TypeScript](https://www.typescriptlang.org/).
- Microsoft [updates it frequently](https://code.visualstudio.com/updates/).
- Available for Windows, macOS, and Linux.

If you do choose to [try Visual Studio Code](https://code.visualstudio.com/), let's look at one tip you might find useful as you develop NativeScript apps.

- The `code` command

After you install Visual Studio Code, you can open projects using the editor's `File` → `Open` menu option, but there's an alternative option that works far better for command-line-based projects like NativeScript: the `code` command.

The `code` command runs in your command-line or terminal, and it works just like the `ns` command does for NativeScript apps. Visual Studio Code installs the `code` command by default on Windows and Linux, but on macOS, there's [one manual step](https://code.visualstudio.com/docs/setup/mac) you must perform.

Once set up, you can type `code .` in your terminal to open the files in your current folder for editing. For example, you could use the following sequence of commands to create a new NativeScript app and open it for editing.

```bash
ns create MyNewApp
cd MyNewApp
code .
```

### WebStorm

If you're a WebStorm user, check out this [popular community-written plugin](https://plugins.jetbrains.com/webstorm/plugin/8588-nativescript) that adds many NativeScript-related features.

### Next steps

<!-- TODO: fix links -->

- [NativeScripting](https://nativescripting.com/)
  - The third-party NativeScripting site has many video courses to teach you everything you need to know about NativeScript, including a collection of free courses to help you get started.
- [Tutorials](/tutorials/)
  - Follow along by building in a JavaScript flavor you love.
