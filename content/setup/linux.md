---
title: Setting up Linux for NativeScript
prev: /setup
next: /creating-a-new-project
contributors:
  - rigor789
---

## Setting up Linux for Android

You will need Node, NativeScript CLI (command line interface), Android Studio and a JDK (java development kit).

**Android Studio** is not strictly necessary &mdash; however it provides an easy to use interface for installing and managing the Android SDKs.

To install **Node** follow the [instructions specific to your Linux distribution](https://nodejs.org/en/download/package-manager/). We recommend using the latest version, however anything above **Node 12** should be fine.

:::warning Note
We have gone through these steps on **Ubuntu 20.04** and noted the commands we used, however depending on your Linux distribution, the commands may be different. We cannot provide commands for all possible distributions, so please refer to the linked documentation to find the correct commands you need to run.
:::

<!-- tab:Ubuntu 20.04 -->

```cli
# On Ubuntu 20.04, we used the following command to install latest node
$ curl -fsSL https://deb.nodesource.com/setup_15.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

To confirm **Node** is installed correctly, run:

```cli
$ node -v
$ npm -v
# Should print something like
$:v15.x.x
7.x.x
```

A **JDK version 8 or greater** is required, and you have a couple options:

1. [OpenJDK - Adoptium](https://openjdk.java.net/) &mdash; can be downloaded from [Adoptium](https://adoptium.net/) or your system package manager.
1. [OpenJDK - AdoptOpenJDK](https://openjdk.java.net/) &mdash; can be downloaded from [AdoptOpenJDK](https://adoptopenjdk.net) or your system package manager.
1. [Oracle JDK](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html) &mdash; can be downloaded directly or through the system package manager.

<!-- tab:Ubuntu 20.04 -->

```cli
# On Ubuntu 20.04, we used the following command to install OpenJDK 14
sudo apt-get install -y openjdk-14-jdk
```

To confirm **JDK** is installed correctly, run:

```cli
$ java --version
$ javac --version
# Should print something like
$:openjdk 14.0.2 2020-07-14
OpenJDK Runtime Environment (build 14.0.2+12-Ubuntu-120.04)
OpenJDK 64-Bit Server VM (build 14.0.2+12-Ubuntu-120.04, mixed mode, sharing)

javac 14.0.2
```

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

```cli
npm install -g nativescript
```

<!-- @include: ../parts/nativescript-cli-deprecation-warnings.md -->

:::tip Note
Depending on how you installed **Node**, you may get an `EACCESS: permission denied` error when trying to install a global package. It's generally not recommended to run `npm` with `sudo`, see this guide for [Resolving EACCESS permissions errors](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally).
:::

### Verifying the environment

To verify that the installation was successful, open a new Command Prompt window (to ensure the new environment variables are loaded) and run

```cli
ns doctor android
```

If you see **No issues were detected** then you have successfully set up your system.

## Setting up Linux for iOS

:::danger :x: Unsupported

A Mac is required to build projects that use native iOS code. Simpler apps can be tested using [NativeScript Preview](https://preview.nativescript.org).

:::
