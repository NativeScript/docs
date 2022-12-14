---
title: Create Custom Application Templates
description: Learn how to create your own template and the guidelines to follow
position: 75
slug: nativescript-create-custom-templates
environment: nativescript
---

# Create Custom Application Templates

## Creating Blank Template

This article aims to give you the common steps needed to create your custom application template (More info on [what's application template](./app-templates#introduction-to-application-templates)). The easiest and straight-forward way to create your customized template is to clone one of the blank templates. NativeScript templates come in different flavors (Plain JavaScript, TypeScript, Angular and Vue.js) so you could select the blank template for the desired application flavor.

Here is the list of the four main blank templates depending on the coding language preferences.

https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-ng

- Plain JavaScript template at [https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank)
- TypeScript template at [https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-ts](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-ts)
- Angular template at [https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-ng](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-ng)
- Vue.js template at [https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-vue](https://github.com/NativeScript/nativescript-app-templates/tree/master/packages/template-blank-vue)

Creating your template is as simple as cloning the wanted template repository and modifying the source code to satisfy your business logic.

```Git
git clone https://github.com/NativeScript/template-blank-ts.git
```

As of NativeScript 4.x.x the application templates have a mobile application structure so you could develop your template by following the standard developer workflow.
```JS
cd template-blank-ts
npm i
tns run android
// start making code changes
```

## Template Structure Guidelines

- Create folders named for the feature area they represent. Each featured area should be placed in a separate folder in the template's folder structure.

- Place each page, view model, and service in its file. Apply the single responsibility principle (SRP) to all pages, view models, services, and other symbols. This helps make the app cleaner, easier to read and maintain, and more testable.

- Consider creating a folder for a page when it has multiple accompanying files (.ts, .xml, .scss/css, etc.).

- Avoid putting all of your app template's code in a root folder named _app_. When the actual app is created from the template, all of the template's code will indeed go inside a root **app** folder, but you MUST NOT define this folder in the hierarchy of your template; otherwise, the tns create CLI command will not function properly.

## Package.json Guidelines

- Place a `package.json` file in the root folder of your app template.  
Note this is not the actual root package.json of the generated mobile app ??? it is only used by the `tns create` CLI command upon app creation. Do not expect that everything you place in your package.json will be transferred to the actual package.json file. Notably `scripts` property content is removed. However, if you provide preinstall / postinstall scripts, they will be executed before getting removed. You can use this mechanism to generate/move settings files to the root folder of the generated app and generate actual "scripts" content for the resulting app package.json ??? see [copying settings files](https://github.com/NativeScript/template-master-detail-ts/blob/master/tools/preinstall.js) and [generating `scripts` commands on-the-fly](https://github.com/NativeScript/template-master-detail-ts/blob/master/tools/postinstall.js) for concrete examples.

- Provide a value for the `name` property using the format: **tns-template-[custom-template-name-goes-here]-ts**.  
Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command but can be found in the app/package.json file of the generated app.

- Provide a value for the `version` property following semver rules (e.g., 1.0.0).  
Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command but can be found in the app/package.json file of the generated app.

- Provide a value for the `main` property specifying the primary entry point to your app (usually **app.js**).  
Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command but can be found in the app/package.json file of the generated app.

- Provide a value for the `android` property specifying V8 flags (at a minimum it should be set to `"android": { "v8Flags": "--expose_gc" }`).  
Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command but can be found in the app/package.json file of the generated app.

- Provide a value for the `displayName` property (user-friendly template name).  
Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command.

- Provide a value for the `repository` property specifying the place where your code lives.
    - Note this property value is NOT transferred to the root package.json file generated by the tns create CLI command.

    - Note correct `repository` property value is essential for the future integration with NativeScript Marketplace. Check the following section ???Marketplace guidelines??? for other integration requirements as well.

- Provide a value for the following additional set of package.json properties: `description`, `license`, `readme`, `dependencies`, `devDependencies`.  
Note these property values are transferred to the root package.json file generated by the tns create CLI command.
For example, https://github.com/NativeScript/template-master-detail-ts/blob/master/package.json has the following minimal structure:
```JSON
{
  "name": "tns-template-master-detail-ts",
  "displayName": "Master-Detail with Firebase",
  "main": "app.js",
  "version": "3.2.1",
  "description": "Master-detail interface to display collection of items from Firebase and inspect and edit selected item properties. ",
  "license": "SEE LICENSE IN <your-license-filename>",
  "readme": "NativeScript Application",
  "repository": {
    "type": "git",
    "url": "https://github.com/NativeScript/template-master-detail-ts"
  },
  "android": {
    "v8Flags": "--expose_gc"
  },
  "dependencies": {
	...
  },
  "devDependencies": {
	...
  }
}
```

- Provide a value for the `keywords`. Keywords can be very helpful for the discoverability of the template. Also, there are special keywords that could be used to make the template appear in the [NativeScript marketplace](https://market.nativescript.org/) especially and under certain conditions. The following keywords are supported:
   * `ux-preview` - will add an ???Preview & Vote??? label on the "preview box" in the search list. It will also enable email registration and voting. This keyword should be used when adding a "preview" of a template that is not implemented but is rather an idea.
   * `category-general` - will show the template under the "General" tab in the ["Templates" page](https://market.nativescript.org/?tab=templates). This is the general or basic category, used to describe "generic" functionality.
   * `category-healthcare` - will show the template under the "Healthcare" tab in the ["Templates" page](https://market.nativescript.org/?tab=templates). This is a special category, used to describe a template with functionality related to the healthcare industry.

## Marketplace Guidelines

- Publish your app template to npm (https://www.npmjs.com/) using **tns-template-[custom-template-name-goes-here]-ts** format for the npm package name.

- Provide a screenshot preview to be used in a future NativeScript Marketplace integration under **tools/assets/marketplace.png** in your app template folder structure.  
Check [tools/postinstall.js](https://github.com/NativeScript/template-master-detail-ts/blob/master/tools/postinstall.js) that implements a mechanism for removing the "tools" infrastructure folder from the generated app.

- Provide correct `repository` property value in the root package.json file of your app template (see the "Package.json guidelines" section above for additional package.json requirements).

- [Read more](https://github.com/NativeScript/marketplace-feedback/blob/master/docs/template-submission.md) how to submit your app template to  [NativeScript Marketplace](https://market.nativescript.org).

## Styling Guidelines

- Consider using the [NativeScript core theme](https://github.com/NativeScript/theme) for styling your app template.

- Consider using the following infrastructure to enable cross-platform SASS styling for your app template:  
**_app-variables.css** file in the app template's root folder should import the NativeScript core theme variables, and any custom colors or theme variable overrides you might use:
```CSS
/* 
    Import the theme's variables. If you're using a color scheme 
    other than "light", switch the path to the alternative scheme, 
    for example '~nativescript-theme-core/scss/dark'. 
*/
@import '~nativescript-theme-core/scss/light'; 

/* Custom colors */
$blue-dark: #022734 !default; 
$blue-light: #02556E !default; 
$blue-50: rgba($blue-dark, 0.5) !default; 

/** 
* Theme variables overrides 
**/ 

/*  Colors */
$background: #fff; 
$primary: lighten(#000, 13%); 

```


**_app-common.scss** file in the app template's root folder should contain any styling rules to be applied both on iOS and Android:
```CSS
/* 
    Place any CSS rules you want to apply on both iOS and Android here. 
    This is where the vast majority of your CSS code goes. 
*/

/* Font icon */
.fa {
   font-family: "FontAwesome";
}  

/* Action bar */
.action-item,
NavigationButton {
    color: $ab-color;
}
```

**app.android.scss** file in the app template's root folder should import the app variables, the NativeScript core theme main ruleset, and the common styles; also place any styling rules to be applied only on Android here:
```CSS
/* Import app variables */
@import 'app-variables'; 

/* Import the theme's main ruleset - both index and platform specific. */
@import '~nativescript-theme-core/scss/index'; 
@import '~nativescript-theme-core/scss/platforms/index.android'; 

/* Import common styles */
@import 'app-common'; 

/* Place any CSS rules you want to apply only on Android here */
.action-item {
    padding-right: 10;
    height: 100%;
}
```

**app.ios.scss** file in the app template's root folder should import the app variables, the NativeScript core theme main ruleset, and the common styles; also place any styling rules to be applied only on iOS here:
```CSS
/* Import app variables */
@import 'app-variables';

/* Import the theme???s main ruleset - both index and platform specific. */
@import '~nativescript-theme-core/scss/index';
@import '~nativescript-theme-core/scss/platforms/index.ios';

/* Import common styles */
@import 'app-common';

/* Place any CSS rules you want to apply only on iOS here */
```

- Consider using the following infrastructure to enable cross-platform SASS styling on page level:
**_[page-name]-page.scss** in the respective feature folder should contain the style rules to be applied both on iOS and Android for **[page-name]-page.ts** (e.g. if styling **cars/car-list-page.ts**, the file should be **cars/_car-list-page.scss**):
```CSS
/* Start custom common variables */
@import '../app-variables';
/* End custom common variables */

/* Custom styles */
.list-group {
    .list-group-item {
        padding: 0 0 8 0;
        background-color: $blue-10;

        .list-group-item-content {
            padding: 8 15 4 15;
            background-color: $background-light;
        }

        .fa {
            color: $accent-dark;
        }
    }
}  
```

**[page-name]-page.android.scss** in the respective feature folder should contain the style rules to be applied only on Android for **[page-name]-page.ts** (e.g. if styling **cars/car-list-page.ts**, the file should be **cars/car-list-page.android.scss**):
```CSS
@import 'cars-list-page';

/* Place any CSS rules you want to apply only on Android here */
```

**[page-name]-page.ios.scss** in the respective feature folder should contain the style rules to be applied only on iOS for **[page-name]-page.ts** (e.g. if styling **cars/car-list-page.ts**, the file should be **cars/car-list-page.ios.scss**):
```CSS
@import 'cars-list-page';

/* Place any CSS rules you want to apply only on iOS here */
```

## Code Guidelines

### Services 
#### Delegate Complex View Model Logic to Services
* Consider limiting logic in a view model to only that required for the view. All other logic should be delegated to services.
Sample service implementation can be found [here](https://github.com/NativeScript/template-master-detail-ts/blob/master/cars/shared/car-service.ts); sample service usage from the view model can be found [here](https://github.com/NativeScript/template-master-detail-ts/blob/master/cars/cars-list-view-model.ts).

* Consider moving reusable logic to services and keep pages and view models simple and focused on their intended purpose.

#### Single Responsibility
* Do create services with a single responsibility that is encapsulated by its context.

* Do create a new service once the service begins to exceed that singular purpose.

### Data Services
#### Talk to the Server through a Service
* Consider refactoring logic for making data operations and interacting with data to a service.

* Consider making data services responsible for XHR calls, local storage, stashing in memory, or any other data operations.

### Coding Conventions
* Consider using tslint and the base NativeScript's [tslint.json ruleset](https://github.com/NativeScript/template-master-detail-ts/blob/master/tools/tslint.json) to ensure maximum consistency with the standard app templates.

#### Classes
* Do use upper camel case when naming classes.

#### Variables and Constants
* Do declare variables with let instead of var.

* Do declare variables with const if their values should not change during the application lifetime.

* Consider spelling const variables in lower camel case.

* Do tolerate existing const variables that are spelled in UPPER_SNAKE_CASE.

#### Properties and Methods
* Do use lower camelcase to name properties and methods.

* Do declare a return type for methods explicitly.

* Do use the return type **void** for methods whose value will be ignored.

* Avoid using the return type **any** for methods whose value will be ignored.

#### Events
* Do name event handler methods with the prefix **on** followed by the event name (e.g. itemTap event -> onItemTap(...) event handler).

* Consider specifying the semantic element that is acted upon (e.g. onCarItemTap(), or onDrawerButtonTap()).

* Consider declaring event handlers in page code-behind and not directly in the view model (event handler implementation can then call a view model method on its own).

#### Import Line Spacing
* Consider leaving one empty line between third-party imports and application imports.

* Consider listing import lines alphabetized by the module.

* Consider listing destructured imported symbols alphabetically.

### Naming
#### General Naming Guidelines
* Do use consistent names for all symbols.

* Do use dashes to separate words in the descriptive name.

* Do follow a pattern that describes the symbol's feature then its type. The recommended pattern is **feature-name-type.ts|css|scss|xml** (not applicable for custom components).
```
car-list-page.ts
car-list-page.xml
car-list-view-model.ts
```

Do follow a pattern that describes the custom component's feature. The recommended pattern is **[FeatureName].ts|css|scss|xml** as custom components get their selector from the file name (e.g. if you have **shared/my-drawer/MyDrawer.ts|scss|xml**, you will use it like:
```xml
<Page
    class="page"
    navigatingTo="onNavigatingTo"  
    xmlns:nsDrawer="nativescript-pro-ui/sidedrawer"
    xmlns:myDrawer="shared/my-drawer"
    xmlns="http://www.nativescript.org/tns.xsd">
    
    <!-- ... -->
	
    <nsDrawer:RadSideDrawer id="sideDrawer" >
        
		<!-- ... -->

        <nsDrawer:RadSideDrawer.drawerContent>
            <StackLayout>
                <myDrawer:MyDrawer selectedPage="Home" />
            </StackLayout>
        </nsDrawer:RadSideDrawer.drawerContent>

		<!-- ... -->
		
    </nsDrawer:RadSideDrawer>
</Page>
```

#### Symbols and File Names
* Do use consistent names for all assets named after what they represent.

* Do use upper camel case for class names.

* Do match the name of the symbol to the name of the file.

#### Service Names
* Do use consistent names for all services named after their feature.

* Do suffix a service class name with Service. For example, something that gets data or cars should be called a **DataService** or a **CarService**.  
A few terms are unambiguously services. They typically indicate agency by ending in "-er". You may prefer to name a service that logs messages Logger rather than LoggerService. Decide if this exception is agreeable in your project. As always, strive for consistency.

### Bootstrapping
* Do put bootstrapping and platform logic for the app in a file named **app.ts**.

* Avoid putting app logic in **app.ts**. Instead, consider placing it in a page, view model or service.

## More Guidelines

* [Read JavaScript App Template Style Guide](https://github.com/NativeScript/nativescript-starter-kits-utils/blob/master/docs/style-guide-app-template.md)

* [Read Angular App Template Style Guide](https://github.com/NativeScript/nativescript-starter-kits-utils/blob/master/docs/style-guide-app-template-ng.md)
