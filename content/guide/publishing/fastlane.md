---
title: Publishing with Fastlane
contributors:
  - rigor789
breadcrumbs:
  - name: 'Publishing'
    href: '/guide/publishing/'
  - name: 'Publishing with Fastlane'
---

::: info Work in progress

This page is a draft, and doesn't contain all the necessary info to get up and running. Until this page is complete, please see [Automatic NativeScript App Deployments with fastlane](https://blog.nativescript.org/automatic-nativescript-app-deployments-with-fastlane/).

:::

Automating uploads to Apple AppStore and Android Play Store is a great way to save time on this otherwise manual, lengthy and error-prone process.

NativeScript apps are built like any other native app, so publishing with Fastlane is generally a straight-forward process, allowing for customizations along the way to suit the project needs.

## What we're setting up

In this guide we'll set up the following:

- automatic certificate handling via Fastlane-match
- automatic ios builds that bump the build number, and upload to TestFlight
- automatic android builds that bump the buiod number, and upload to a Play Store Internal Test Track
- ...

## General Fastlane setup

Add a `Gemfile` to the root of the project:

```ruby
source "https://rubygems.org"

gem "cocoapods"
gem "dotenv"
gem "fastlane"

# Optional: if using Fastlane plugins in a Pluginfile
# plugins_path = File.join(File.dirname(__FILE__), 'fastlane', 'Pluginfile')
# eval_gemfile(plugins_path) if File.exist?(plugins_path)
```

## iOS specific Fastlane setup

## Android specific Fastlane setup
