---
title: Setting up an Android Device or Emulator
---

To run a NativeScript app, you will need an Android device &mdash; either a physical or a virtual device.

### Using a physical device

Connect the device using a USB cable, and follow the instructions from [Running on a physical device](/development-workflow.md)

### Using a virtual device

Open Android Studio, and then open "AVD Manager" &mdash; if you are on the welcome screen, then it's under the **Configure › AVD Manager** dropdown, otherwise it's under the **Tools › AVD Manager** menu.

If the list of available Virtual Devices is empty, you will need to create a new AVD. Click on "**Create Virtual Device...**" then pick a phone from the list. You can select any phone from the list &mdash; for example "**Pixel 3 XL**" and then click "**Next**". For the System Image select the latest version (the highest API Level in the list). If the selection is greyed out, click the "Download" link next to the Release Name to download the System Image and then click "**Next**" and "**Finish**" to create the AVD. The newly created AVD should show up in the list, and you should be able to click the green "play" button to start the virtual device.
