---
title: Testing
---

::: warning Note
Be sure you have prepare/built/run the app at least once before starting the unit test runner.
:::

For more information about end-to-end testing, see [`@nativescript/detox` plugin](https://docs.nativescript.org/plugins/detox.html).

Regularly writing and executing unit tests using tools like [Jasmine](http://jasmine.github.io/), [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/), or [QUnit](https://qunitjs.com/) through the NativeScript CLI helps ensure proper functioning of new features and prevents regressions in existing functionality during app development.

To run your unit tests, the NativeScript CLI uses [Karma](http://karma-runner.github.io/latest/index.html).

### Before You Begin

Before writing and running unit tests, the completion of the following steps must be verified.

1. [Install and configure the NativeScript CLI on your system.](/setup/)
1. If you don't have any projects, create a new project and navigate to the directory of the newly created directory.

   ```cli
   ns create projectName
   cd projectName
   ```

1. If you want to create tests for an existing directory, navigate to the directory of the project.

   ```cli
   cd existingProjectDirectory
   ```

:::tip Note

You don't need to explicitly add the platforms for which you want to test your project. The NativeScript CLI will configure your project when you begin to run your tests.

:::

### Configure Your Project

The NativeScript CLI lets you choose between three widely popular unit testing frameworks: [Jasmine](http://jasmine.github.io/), [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/) and [QUnit](https://qunitjs.com/). You need to configure the project for unit testing by choosing a framework. You can use only one framework at a time.

To initialize your project for unit testing, run the following command and, when prompted, use the keyboard arrows to select the framework that you want to use.

```cli
ns test init
```

This operation applies the following changes to your project.

- It creates the `app/tests` directory. You need to store all tests in this directory. This directory is excluded from release builds.
- It creates an `example.js` file in the `app/tests` directory. This sample test illustrates the basic syntax for the selected framework.
- It installs the nativescript-unit-test-runner npm module for the selected framework and its dev dependencies in `node_modules`.
- It creates `karma.conf.js` in the root of your project. This file contains the default configuration for the Karma server for the selected framework.

:::tip Note

To enable and write unit tests for TypeScript or Angular project install the TypeScript typings for the selected testing framework.

:::

<!-- tab:Jasmine -->

```cli
npm i @types/jasmine --save-dev
```

<!-- tab:Mocha -->

```cli
npm i @types/mocha --save-dev
```

<!-- tab:QUnit -->

```cli
npm i @types/qunit --save-dev
```

### Write Your Tests

With the NativeScript CLI, you can extensively test **all JavaScript-related functionality**. You cannot test styling and UI which are not applied or created via JavaScript.

When creating tests for a new or existing functionality, keep in mind the following specifics.

- You need to create your tests as JavaScript files in the `app/tests` directory. The NativeScript CLI recognizes JavaScript files stored in `app/tests` as unit tests.
- You need to write tests which comply with the testing framework specification you have chosen for the project.
- You need to export the functionality that you want to test in the code of your NativeScript project.
- You need to require the module which exposes the functionality that you want to test in the code of your unit tests.

When creating tests for a new or existing functionality, keep in mind the following limitations.

- You cannot require the file or module in which `Application.run()` is called.
- You cannot use more than one testing framework per project.
- You cannot test styling and UI which are not applied or created via JavaScript.

The following samples test the initial value of the counter and the message in the Hello World template. These tests show the specifics and limitations outlined above.

```js
var mainViewModel = require('../main-view-model') //Require the main view model to expose the functionality inside it.

describe('Hello World Sample Test:', function () {
  it('Check counter.', function () {
    expect(mainViewModel.createViewModel().counter).toEqual(42) //Check if the counter equals 42.
  })
  it('Check message.', function () {
    expect(mainViewModel.createViewModel().message).toBe('42 taps left') //Check if the message is "42 taps left".
  })
})
```

<!--  -->

```js
// (Angular w/TypeScript)
// As our intention is to test an Angular component that contains annotations
// we need to include the reflect-metadata dependency.
import 'reflect-metadata'

// A sample Jasmine test
describe('A suite', function () {
  it('contains spec with an expectation', function () {
    expect(true).toBe(true)
  })
})
```

<!--  -->

```js
var mainViewModel = require('../main-view-model') //Require the main view model to expose the functionality inside it.

describe('Hello World Sample Test:', function () {
  it('Counter should be 42 on start.', function () {
    assert.equal(mainViewModel.createViewModel().counter, 42) //Assert that the counter equals 42.
  })
  it('Message should be "42 taps left" on start.', function () {
    assert.equal(mainViewModel.createViewModel().message, '42 taps left') //Assert that the message is "42 taps left".
  })
})
```

<!--  -->

```js
var mainViewModel = require('../main-view-model') //Require the main view model to expose the functionality inside it.

QUnit.test('Hello World Sample Test:', function (assert) {
  assert.equal(
    mainViewModel.createViewModel().counter,
    42,
    'Counter, 42; equal succeeds.'
  ) //Assert that the counter equals 42.
  assert.equal(
    mainViewModel.createViewModel().message,
    '42 taps left',
    'Message, 42 taps left; equal succeeds.'
  ) //Assert that the message is "42 taps left".
})
```

### Angular TestBed Integration

To use TestBed you have to alter your `karma.conf.js` to:

```js
    // list of files / patterns to load in the browser
    files: [
      'src/tests/setup.ts',
      'src/tests/**/*.spec.ts'
    ],

```

The file `src/tests/setup.ts` should look like this for jasmine:

```js
import 'nativescript-angular/zone-js/testing.jasmine'
import { nsTestBedInit } from 'nativescript-angular/testing'
nsTestBedInit()
```

or if using mocha:

```js
import 'nativescript-angular/zone-js/testing.mocha'
import { nsTestBedInit } from 'nativescript-angular/testing'
nsTestBedInit()
```

Then you can use it within the spec files, e.g. `example.spec.ts`:

```js
import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { ComponentFixture, async } from '@angular/core/testing';
import { StackLayout } from '@nativescript/core';
import {
    nsTestBedAfterEach,
    nsTestBedBeforeEach,
    nsTestBedRender
} from 'nativescript-angular/testing';

@Component({
    template: `
        <StackLayout><Label text="Layout"></Label></StackLayout>
    `
})
export class ZonedRenderer {
    constructor(public elementRef: ElementRef, public renderer: Renderer2) {}
}

describe('Renderer E2E', () => {
    beforeEach(nsTestBedBeforeEach([ZonedRenderer]));
    afterEach(nsTestBedAfterEach(false));
    afterAll(() => {});

    it('executes events inside NgZone when listen is called outside NgZone', async(() => {
        const eventName = 'someEvent';
        const view = new StackLayout();
        const eventArg = { eventName, object: view };
        const callback = arg => {
            expect(arg).toEqual(eventArg);
            expect(NgZone.isInAngularZone()).toBeTruthy();
        };
        nsTestBedRender(ZonedRenderer).then(
            (fixture: ComponentFixture<ZonedRenderer>) => {
                fixture.ngZone.runOutsideAngular(() => {
                    fixture.componentInstance.renderer.listen(
                        view,
                        eventName,
                        callback
                    );

                    view.notify(eventArg);
                });
            }
        );
    }));
});

```

### Run Your Tests

After you have completed your test suite, you can run it on physical devices or in the native emulators.

#### Requirements

Before running your tests, verify that your development machine and your testing devices meet the following prerequisites.

- The Android native emulators on which you want to run your tests must be running on your development machine. To verify that your machine recognizes the devices, run the following command.

  ```cli
  ns device
  ```

- The physical devices on which you want to run your tests must be connected to your development machine. To verify that your machine recognizes the devices, run the following command.

  ```cli
  ns device
  ```

- The physical devices on which you want to run your tests must be able to resolve the IP of your development machine. To verify that the device can access the Karma server, connect the device and the development machine to the same Wi-Fi network or establish USB or Bluetooth tethering between the device and the development machine.
- Port 9876 must be allowed on your development machine. The Karma server uses this port to communicate with the testing device.

#### Run the Tests

To execute your test suite on any connected Android devices or running Android emulators, run the following command.

```cli
ns test android
```

To execute your test suite on connected iOS devices, run the following command.

```cli
ns test ios
```

To execute your test suite in the iOS Simulator, run the following command.

```cli
ns test ios --emulator
```

To execute your test suite in CI make sure to add `--justlaunch`. This parameter will exit the simulator.

```cli
ns test ios --emulator --justlaunch
```

Each execution of `ns test` consists of the following steps, performed automatically.

1. The CLI starts a Karma server on the development machine.
1. The CLI prepares, builds and deploys your project, if not already deployed. If already deployed, the CLI synchronizes changes to the application package.
1. The CLI embeds the NativeScript unit test runner and your host network and Karma configuration in the deployed package.
1. The CLI launches the main module of the NativeScript unit test runner instead of launching the main module of your app.
1. The NativeScript unit test runner uses the embedded network configuration to try to connect to the Karma server on the development machine.
1. When the connection between the NativeScript unit test runner and the Karma server is established, the test runner begins the execution of the unit tests.
1. When the execution completes, the NativeScript unit test runner reports the results to the Karma server.
1. The Karma server reports the results on the command line.

#### Re-Run Tests on Code Change

The NativeScript can continuously monitor your code for changes and when such changes occur, it can deploy those changes to your testing devices and re-run your tests.

To enable this behavior, run your `ns test` command with the `--watch` flag. For example:

```cli
ns test android --watch
ns test ios --watch
ns test ios --emulator --watch
```

The NativeScript CLI remains active and re-runs tests on code change. To unlock the console, press `Ctrl+C` to stop the process.

#### Configure the Karma Server

When you configure your project for unit testing, the NativeScript CLI adds `karma.conf.js` to the root of your project. This file contains the default configuration of the Karma server, including default port and selected testing framework. You can edit this file to customize your Karma server.

When you modify `karma.conf.js`, make sure that your changes meet the specification of the [Karma Configuration File](http://karma-runner.github.io/1.0/intro/configuration.html).

### Continuous Integration

To integrate the NativeScript unit test runner into a continuous integration process, you need to configure a Karma reporter, for example, the [JUnit reporter](https://github.com/karma-runner/karma-junit-reporter).
