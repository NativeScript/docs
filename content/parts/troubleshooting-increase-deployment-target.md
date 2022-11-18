Increase the `IPHONEOS_DEPLOYMENT_TARGET` in your `App_Resources/iOS/build.xcconfig`:

```bash
IPHONEOS_DEPLOYMENT_TARGET = 13.0;
```

The above will increase the deployment target of the app, however you might also need to increase the deployment target of CocoaPods too. Put the following in your `App_Resources/iOS/Podfile` (create it if you don't have one):

```ruby
platform :ios, '13.0'

post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '13.0'
    end
  end
end
```

In this example we are setting it to `13.0` - change it to a version that makes sense for your project. Some libraries will require higher targets, so in most cases find the highest required target, and use that as your deployment target. Make sure to match both `build.xcconfig` and `Podfile` versions.

In case this doesn't resolve the issue, you can often [delete the XCode DerivedData](#deleting-xcode-deriveddata).
