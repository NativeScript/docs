---
title: 'Compiled releases: reporting issues'
description: Report a failed compiled build or a compiled app's runtime error to NativeScript with ns compiled report.
contributors:
  - NathanWalker
---

`ns compiled report` turns a `--compiled` problem into a GitHub issue on
[NativeScript/NativeScript](https://github.com/NativeScript/NativeScript/issues), or finds the existing one.

```bash
ns compiled report [ios|android]                 # the last failed --compiled build
ns compiled report <ios|android> --error <file>  # a runtime error a compiled app threw
ns compiled report ios --dry-run                 # print the report and send nothing
```

## When to use it

- **A compiled build failed**: the compiler refused a construct, or Xcode, Swift, Gradle or Kotlin failed on the
  generated code. The build keeps what went wrong in `platforms/compiled/<platform>/report.json` and prints the
  command to run. Without a platform, the command reports the one whose build failed last.
- **A compiled app threw at run time**: save the error, from the device log or your crash reporter, to a file and
  pass it with `--error <file>`. `--error=-` reads it from stdin.

## What it collects

- The versions of the CLI, `@nativescript/compiler` and `@nativescript/core`; the framework and its version; the
  platform; Xcode, or Gradle, the Android Gradle Plugin and Kotlin; the OS and Node.js; your project's dependencies.
- The diagnostic and the source location it names.
- A **signature**: a short hash of the kind of failure and its message, with names and numbers abstracted, so the
  same problem in different apps finds the same issue.

Paths are made relative to the project. Your home folder, user names, tokens and passwords are removed.

## Consent

Nothing leaves your machine until you have seen the report and agreed.

- **Your code** (the three lines either side of the location) is added only if you agree a second time. `--yes`
  skips the first question, never this one.
- **`--dry-run`** prints the title, labels, body and issue URL, and sends nothing.
- In a terminal that can't answer, the command prints the report and the issue URL and sends nothing.

## Where it goes

The command searches open and closed issues for the signature:

- **Already reported:** it offers to add a 👍, plus a comment with your environment when no earlier report has the
  same platform, framework, compiler and core versions. Or it opens the issue for you.
- **New:** it files the issue with `gh` if it is installed and signed in. Otherwise it opens the `--compiled` issue
  form in your browser, filled in.

Each issue is labeled `compiled`, `platform:<ios|android>`, `framework:<name>` and `kind:<kind>`, where the kind is
`compile-refused` (the compiler stopped), `native-compile` (Xcode or Gradle failed on the generated code) or
`runtime`.

Each report becomes a test case in the compiler, then a fix, and the [What works](/guide/publishing/compiled-differences)
table is updated.
