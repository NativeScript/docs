---
title: Setting up Linux for NativeScript
prev: /setup
next: /guide/creating-a-project
contributors:
  - rigor789
  - aryzing
---

## Setting up Linux for Android

You will need Node, NativeScript CLI (command line interface), Android Studio and a JDK (java development kit).

**Android Studio** is not strictly necessary &mdash; however it provides an easy-to-use interface for installing and managing the Android SDKs.

To install **Node** follow the [instructions specific to your Linux distribution](https://nodejs.org/en/download/package-manager/). We recommend using the latest version, however anything above **Node 14** should be fine.

:::warning Note
We have gone through these steps on **Ubuntu 20.04** and noted the commands we used, however depending on your Linux distribution, the commands may be different. We cannot provide commands for all possible distributions, so please refer to the linked documentation to find the correct commands you need to run.
:::

<!-- tab:Ubuntu 20.04 -->

```bash
# On Ubuntu 20.04, we used the following command to install latest node
$ curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

To confirm **Node** is installed correctly, run:

```bash
$ node -v
$ npm -v
# Should print something like
$:v22.x.x
10.x.x
```

A **JDK version 8 or greater** is required, and you have a couple options:

1. [OpenJDK - Adoptium](https://openjdk.java.net/) &mdash; can be downloaded from [Adoptium](https://adoptium.net/) or your system package manager.
1. [OpenJDK - AdoptOpenJDK](https://openjdk.java.net/) &mdash; can be downloaded from [AdoptOpenJDK](https://adoptopenjdk.net) or your system package manager.
1. [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html) &mdash; can be downloaded directly or through the system package manager.

<!-- tab:Ubuntu 20.04 -->

```bash
# On Ubuntu 20.04, we used the following command to install OpenJDK 17
sudo apt-get install -y openjdk-17-jdk
```

To confirm **JDK** is installed correctly, run:

```bash
$ java --version
$ javac --version
# Should print something like
$:openjdk 17.x.x 202x-xx-xx
OpenJDK Runtime Environment (build xx.x.x+xx-Ubuntu-xxx.xx)
OpenJDK 64-Bit Server VM (build xx.x.x+xx-Ubuntu-xxx.xx, mixed mode, sharing)

javac 17.x.x
```

:::tip Note
NativeScript uses Gradle for Android builds. [Different versions of Gradle rely on certain versions of Java to work](https://docs.gradle.org/current/userguide/compatibility.html#java). If a build fails, check whether the version of Java installed on your system is compatible with the version of Gradle used by NativeScript. The version of Gradle used by NativeScript can be seen in the build logs or in the [source](https://github.com/NativeScript/android/blob/main/test-app/gradle/wrapper/gradle-wrapper.properties).
:::

Setting up the Android development environment can be daunting if you are new to Android development, however following the next steps carefully will get you up and running in no time.

[Download and install Android Studio](https://developer.android.com/studio). In the installation wizard, make sure you have the following components selected (the list should appear if you select **custom** options):

- Android SDK
- Android SDK Platform
- Android Virtual Device

The setup may take a while, but once it has finished a welcome screen should appear.

Android Studio installs the latest Android SDK by default, which in most cases should be all that's needed to build a NativeScript app.

Configure the `ANDROID_HOME` environment variable for NativeScript to be able to find the Android SDK, and add the required tools to path.

Add the following lines to your shell profile, usually `~/.bash_profile` or `~/.bashrc`, or if you are using `zsh` then `~/.zshrc` config file:

```shell
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Install the NativeScript CLI globally:

```bash
npm install -g nativescript
```

<!-- @include: ../parts/nativescript-cli-deprecation-warnings.md -->

:::tip Note
Depending on how you installed **Node**, you may get an `EACCESS: permission denied` error when trying to install a global package. It's generally not recommended to run `npm` with `sudo`, see this guide for [Resolving EACCESS permissions errors](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
:::

### Verifying the environment

To verify that the installation was successful, open a new Command Prompt window (to ensure the new environment variables are loaded) and run

```bash
ns doctor android
```

If you see **No issues were detected** then you have successfully set up your system.

## Setting up Linux for Linux desktop

::: warning Experimental
The Linux platform is experimental. APIs, tooling and requirements may change between releases. See [Developing for Linux](/guide/linux/) for the current status.
:::

NativeScript can build native Linux desktop apps with [GTK 4](https://www.gtk.org/). Apps run on the local machine.

You will need:

- A glibc based Linux distribution released in 2018 or later (glibc 2.28 or newer), x64 or arm64
- GTK 4
- Node &mdash; see [Setting up Linux for Android](#setting-up-linux-for-android) above
- The NativeScript CLI

### Installing GTK 4

Most desktop distributions already ship GTK 4. If yours doesn't, install it with your package manager:

::: code-group

```bash [Debian / Ubuntu]
sudo apt install libgtk-4-1
```

```bash [Fedora]
sudo dnf install gtk4
```

```bash [Arch]
sudo pacman -S gtk4
```

:::

### Installing a C toolchain (optional)

Apps and plugins that include their own C or C++ code (see [Adding Linux native code](/guide/native-code/linux)) also need a C compiler, `pkg-config` and, for CMake projects, `cmake`, as well as the development packages of the libraries they use:

::: code-group

```bash [Debian / Ubuntu]
sudo apt install build-essential pkg-config cmake libgtk-4-dev
```

```bash [Fedora]
sudo dnf install gcc gcc-c++ pkgconf-pkg-config cmake gtk4-devel
```

```bash [Arch]
sudo pacman -S base-devel cmake gtk4
```

:::

Apps that only use JavaScript/TypeScript don't need these.

### Installing the NativeScript CLI

If you haven't already, install the NativeScript CLI globally:

```bash
npm install -g nativescript
```

### Verifying the environment

Run:

```bash
ns doctor
```

On Linux the output includes a Linux section, which checks that the GTK 4 library (`libgtk-4.so.1`) is installed. If it reports no issues, your environment is ready.

Your machine is also listed as a `Linux` device:

```bash
ns devices linux
```

You're now ready to [add the Linux platform to a project](/guide/linux/#adding-linux-to-a-project).

## Setting up Linux for iOS

:::danger :x: Unsupported

A Mac is required to build projects that use native iOS code. Simpler apps can be tested using [NativeScript Preview](https://preview.nativescript.org).

:::
