export const plugins = getPlugins()
export const sidebar = getPluginsSidebar()

function getPlugins() {
	const officialPlugins_baseUrl =
		'https://raw.githubusercontent.com/NativeScript/plugins/main/packages'
	const officialGithubUrl =
		'https://github.com/NativeScript/plugins/tree/main/packages'

	const officialUIKitPlugins_baseUrl =
		'https://raw.githubusercontent.com/NativeScript/ui-kit/main/packages'
	const officialUIKitGithubUrl =
		'https://github.com/NativeScript/ui-kit/tree/main/packages'

	const paymentsPlugins_baseUrl =
		'https://raw.githubusercontent.com/NativeScript/payments/main/packages'
	const paymentsGithubUrl =
		'https://github.com/NativeScript/payments/tree/main/packages'

	const mlkitPlugins_baseUrl =
		'https://raw.githubusercontent.com/NativeScript/mlkit/main/packages'
	const mlkitGithubUrl =
		'https://github.com/NativeScript/mlkit/tree/main/packages'

	const firebasePlugins_baseUrl =
		'https://raw.githubusercontent.com/NativeScript/firebase/main/packages'
	const firebaseGithubUrl =
		'https://github.com/NativeScript/firebase/tree/main/packages'

	return [
		{
			category: 'Developing plugins',
			plugins: [
				{
					name: 'Getting Started',
					link: '/plugins/plugin-workspace-guide',
				},
			],
		},
		{
			category: 'Plugins',
			plugins: [
				{
					name: 'Animated Circle',
					link: '/plugins/animated-circle',
					readme: `${officialPlugins_baseUrl}/animated-circle/README.md`,
					repo: `${officialGithubUrl}/animated-circle`,
				},
				{
					name: 'App Availability',
					link: '/plugins/appavailability',
					readme: `${officialPlugins_baseUrl}/appavailability/README.md`,
					repo: `${officialGithubUrl}/appavailability`,
				},
				{
					name: 'Apple Signin',
					link: '/plugins/apple-sign-in',
					readme: `${officialPlugins_baseUrl}/apple-sign-in/README.md`,
					repo: `${officialGithubUrl}/apple-sign-in`,
				},
				{
					name: 'Auto Fit Text',
					link: '/plugins/auto-fit-text',
					readme: `${officialPlugins_baseUrl}/auto-fit-text/README.md`,
					repo: `${officialGithubUrl}/auto-fit-text`,
				},
				{
					name: 'Background HTTP',
					link: '/plugins/background-http',
					readme: `${officialPlugins_baseUrl}/background-http/README.md`,
					repo: `${officialGithubUrl}/background-http`,
				},
				{
					name: 'Biometrics',
					link: '/plugins/biometrics',
					readme: `${officialPlugins_baseUrl}/biometrics/README.md`,
					repo: `${officialGithubUrl}/biometrics`,
				},
				{
					name: 'Brightness',
					link: '/plugins/brightness',
					readme: `${officialPlugins_baseUrl}/brightness/README.md`,
					repo: `${officialGithubUrl}/brightness`,
				},
				{
					name: 'Camera',
					link: '/plugins/camera',
					readme: `${officialPlugins_baseUrl}/camera/README.md`,
					repo: `${officialGithubUrl}/camera`,
				},
				{
					name: 'Contacts',
					link: '/plugins/contacts',
					readme: `${officialPlugins_baseUrl}/contacts/README.md`,
					repo: `${officialGithubUrl}/contacts`,
				},
				{
					name: 'DateTimePicker',
					link: '/plugins/datetimepicker',
					readme: `${officialPlugins_baseUrl}/datetimepicker/README.md`,
					repo: `${officialGithubUrl}/datetimepicker`,
				},
				{
					name: 'Debug iOS',
					link: '/plugins/debug-ios',
					readme: `${officialPlugins_baseUrl}/debug-ios/README.md`,
					repo: `${officialGithubUrl}/debug-ios`,
				},
				{
					name: 'Detox',
					link: '/plugins/detox',
					readme: `${officialPlugins_baseUrl}/detox/README.md`,
					repo: `${officialGithubUrl}/detox`,
				},
				{
					name: 'Directions',
					link: '/plugins/directions',
					readme: `${officialPlugins_baseUrl}/directions/README.md`,
					repo: `${officialGithubUrl}/directions`,
				},
				{
					name: 'Email',
					link: '/plugins/email',
					readme: `${officialPlugins_baseUrl}/email/README.md`,
					repo: `${officialGithubUrl}/email`,
				},
				{
					name: 'Facebook',
					link: '/plugins/facebook',
					readme: `${officialPlugins_baseUrl}/facebook/README.md`,
					repo: `${officialGithubUrl}/facebook`,
				},
				{
					name: 'Fingerprint-Auth',
					link: '/plugins/fingerprint-auth',
					readme: `${officialPlugins_baseUrl}/fingerprint-auth/README.md`,
					repo: `${officialGithubUrl}/fingerprint-auth`,
				},
				{
					name: 'Flutter',
					link: '/plugins/flutter',
					readme: `${officialUIKitPlugins_baseUrl}/flutter/README.md`,
					repo: `${officialUIKitGithubUrl}/flutter`,
				},
				{
					name: 'Geolocation',
					link: '/plugins/geolocation',
					readme: `${officialPlugins_baseUrl}/geolocation/README.md`,
					repo: `${officialGithubUrl}/geolocation`,
				},
				{
					name: 'Google Maps',
					link: '/plugins/google-maps',
					readme: `${officialPlugins_baseUrl}/google-maps/README.md`,
					repo: `${officialGithubUrl}/google-maps`,
				},
				{
					name: 'Google Signin',
					link: '/plugins/google-signin',
					readme: `${officialPlugins_baseUrl}/google-signin/README.md`,
					repo: `${officialGithubUrl}/google-signin`,
				},
				{
					name: 'Haptics',
					link: '/plugins/haptics',
					readme: `${officialPlugins_baseUrl}/haptics/README.md`,
					repo: `${officialGithubUrl}/haptics`,
				},
				{
					name: 'Image Picker',
					link: '/plugins/imagepicker',
					readme: `${officialPlugins_baseUrl}/imagepicker/README.md`,
					repo: `${officialGithubUrl}/imagepicker`,
				},
				{
					name: 'Ionic Portals',
					link: '/plugins/ionic-portals',
					readme: `${officialUIKitPlugins_baseUrl}/ionic-portals/README.md`,
					repo: `${officialUIKitGithubUrl}/ionic-portals`,
				},
				{
					name: 'iOS Security',
					link: '/plugins/ios-security',
					readme: `${officialPlugins_baseUrl}/ios-security/README.md`,
					repo: `${officialGithubUrl}/ios-security`,
				},
				{
					name: 'IQ Keyboard Manager',
					link: '/plugins/iqkeyboardmanager',
					readme: `${officialPlugins_baseUrl}/iqkeyboardmanager/README.md`,
					repo: `${officialGithubUrl}/iqkeyboardmanager`,
				},
				{
					name: 'Jetpack Compose',
					link: '/plugins/jetpack-compose',
					readme: `${officialUIKitPlugins_baseUrl}/jetpack-compose/README.md`,
					repo: `${officialUIKitGithubUrl}/jetpack-compose`,
				},
				{
					name: 'Keyboard Toolbar',
					link: '/plugins/keyboard-toolbar',
					readme: `${officialPlugins_baseUrl}/keyboard-toolbar/README.md`,
					repo: `${officialGithubUrl}/keyboard-toolbar`,
				},
				{
					name: 'Local Notifications',
					link: '/plugins/local-notifications',
					readme: `${officialPlugins_baseUrl}/local-notifications/README.md`,
					repo: `${officialGithubUrl}/local-notifications`,
				},
				{
					name: 'Localize',
					link: '/plugins/localize',
					readme: `${officialPlugins_baseUrl}/localize/README.md`,
					repo: `${officialGithubUrl}/localize`,
				},
				{
					name: 'PDF',
					link: '/plugins/pdf',
					readme: `${officialPlugins_baseUrl}/pdf/README.md`,
					repo: `${officialGithubUrl}/pdf`,
				},
				{
					name: 'Picker',
					link: '/plugins/picker',
					readme: `${officialPlugins_baseUrl}/picker/README.md`,
					repo: `${officialGithubUrl}/picker`,
				},
				{
					name: 'Rive',
					link: '/plugins/rive',
					readme: `${officialUIKitPlugins_baseUrl}/rive/README.md`,
					repo: `${officialUIKitGithubUrl}/rive`,
				},
				{
					name: 'Shared Notification Delegate',
					link: '/plugins/shared-notification-delegate',
					readme: `${officialPlugins_baseUrl}/shared-notification-delegate/README.md`,
					repo: `${officialGithubUrl}/shared-notification-delegate`,
				},
				{
					name: 'Social Share',
					link: '/plugins/social-share',
					readme: `${officialPlugins_baseUrl}/social-share/README.md`,
					repo: `${officialGithubUrl}/social-share`,
				},
				{
					name: 'SwiftUI',
					link: '/plugins/swift-ui',
					readme: `${officialUIKitPlugins_baseUrl}/swift-ui/README.md`,
					repo: `${officialUIKitGithubUrl}/swift-ui`,
				},
				{
					name: 'Tailwind CSS',
					link: '/plugins/tailwindcss',
					readme: `https://raw.githubusercontent.com/NativeScript/tailwind/main/README.md`,
					repo: `https://github.com/NativeScript/tailwind`,
				},
				{
					name: 'Theme Switcher',
					link: '/plugins/theme-switcher',
					readme: `${officialPlugins_baseUrl}/theme-switcher/README.md`,
					repo: `${officialGithubUrl}/theme-switcher`,
				},
				{
					name: 'Twitter',
					link: '/plugins/twitter',
					readme: `${officialPlugins_baseUrl}/twitter/README.md`,
					repo: `${officialGithubUrl}/twitter`,
				},
				{
					name: 'Zip',
					link: '/plugins/zip',
					readme: `${officialPlugins_baseUrl}/zip/README.md`,
					repo: `${officialGithubUrl}/zip`,
				},
			],
		},
		{
			category: 'Payments',
			plugins: [
				{
					name: 'Apple Pay',
					link: '/plugins/apple-pay',
					readme: `${paymentsPlugins_baseUrl}/apple-pay/README.md`,
					repo: `${paymentsGithubUrl}/apple-pay`,
				},
				{
					name: 'Google Pay',
					link: '/plugins/google-pay',
					readme: `${paymentsPlugins_baseUrl}/google-pay/README.md`,
					repo: `${paymentsGithubUrl}/google-pay`,
				},
				{
					name: 'Payments: IAP & Subscriptions',
					link: '/plugins/payments',
					readme: `${paymentsPlugins_baseUrl}/payments/README.md`,
					repo: `${paymentsGithubUrl}/payments`,
				},
			],
		},
		{
			category: 'ML Kit',
			plugins: [
				{
					name: 'Core',
					link: '/plugins/mlkit-core',
					readme: `${mlkitPlugins_baseUrl}/mlkit-core/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-core`,
				},
				{
					name: 'Barcode Scanning',
					link: '/plugins/mlkit-barcode-scanning',
					readme: `${mlkitPlugins_baseUrl}/mlkit-barcode-scanning/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-barcode-scanning`,
				},
				{
					name: 'Digital Ink Recognition',
					link: '/plugins/mlkit-digital-ink-recognition',
					readme: `${mlkitPlugins_baseUrl}/mlkit-digital-ink-recognition/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-digital-ink-recognition`,
				},
				{
					name: 'Face Detection',
					link: '/plugins/mlkit-face-detection',
					readme: `${mlkitPlugins_baseUrl}/mlkit-face-detection/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-face-detection`,
				},
				{
					name: 'Image Labeling',
					link: '/plugins/mlkit-image-labeling',
					readme: `${mlkitPlugins_baseUrl}/mlkit-image-labeling/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-image-labeling`,
				},
				{
					name: 'Object Detection',
					link: '/plugins/mlkit-object-detection',
					readme: `${mlkitPlugins_baseUrl}/mlkit-object-detection/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-object-detection`,
				},
				{
					name: 'Pose Detection',
					link: '/plugins/mlkit-pose-detection',
					readme: `${mlkitPlugins_baseUrl}/mlkit-pose-detection/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-pose-detection`,
				},
				{
					name: 'Selfie Segmentation',
					link: '/plugins/mlkit-selfie-segmentation',
					readme: `${mlkitPlugins_baseUrl}/mlkit-selfie-segmentation/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-selfie-segmentation`,
				},
				{
					name: 'Text Recognition',
					link: '/plugins/mlkit-text-recognition',
					readme: `${mlkitPlugins_baseUrl}/mlkit-text-recognition/README.md`,
					repo: `${mlkitGithubUrl}/mlkit-text-recognition`,
				},
			],
		},
		{
			category: 'Firebase',
			plugins: [
				{
					name: 'Core',
					link: '/plugins/firebase-core',
					readme: `${firebasePlugins_baseUrl}/firebase-core/README.md`,
					repo: `${firebaseGithubUrl}/firebase-core`,
				},
				{
					name: 'Admob',
					link: '/plugins/firebase-admob',
					readme: `${firebasePlugins_baseUrl}/firebase-admob/README.md`,
				},
				{
					name: 'Analytics',
					link: '/plugins/firebase-analytics',
					readme: `${firebasePlugins_baseUrl}/firebase-analytics/README.md`,
					repo: `${firebaseGithubUrl}/firebase-analytics`,
				},
				{
					name: 'App Check',
					link: '/plugins/firebase-app-check',
					readme: `${firebasePlugins_baseUrl}/firebase-app-check/README.md`,
					repo: `${firebaseGithubUrl}/firebase-app-check`,
				},
				{
					name: 'Auth',
					link: '/plugins/firebase-auth',
					readme: `${firebasePlugins_baseUrl}/firebase-auth/README.md`,
					repo: `${firebaseGithubUrl}/firebase-auth`,
				},
				{
					name: 'Crashlytics',
					link: '/plugins/firebase-crashlytics',
					readme: `${firebasePlugins_baseUrl}/firebase-crashlytics/README.md`,
					repo: `${firebaseGithubUrl}/firebase-crashlytics`,
				},
				{
					name: 'Database',
					link: '/plugins/firebase-database',
					readme: `${firebasePlugins_baseUrl}/firebase-database/README.md`,
					repo: `${firebaseGithubUrl}/firebase-database`,
				},
				{
					name: 'Dynamic Links',
					link: '/plugins/firebase-dynamic-links',
					readme: `${firebasePlugins_baseUrl}/firebase-dynamic-links/README.md`,
					repo: `${firebaseGithubUrl}/firebase-dynamic-links`,
				},
				{
					name: 'Firestore',
					link: '/plugins/firebase-firestore',
					readme: `${firebasePlugins_baseUrl}/firebase-firestore/README.md`,
					repo: `${firebaseGithubUrl}/firebase-firestore`,
				},
				{
					name: 'Functions',
					link: '/plugins/firebase-functions',
					readme: `${firebasePlugins_baseUrl}/firebase-functions/README.md`,
					repo: `${firebaseGithubUrl}/firebase-functions`,
				},
				{
					name: 'In App Messaging',
					link: '/plugins/firebase-in-app-messaging',
					readme: `${firebasePlugins_baseUrl}/firebase-in-app-messaging/README.md`,
					repo: `${firebaseGithubUrl}/firebase-in-app-messaging`,
				},
				{
					name: 'Installations',
					link: '/plugins/firebase-installations',
					readme: `${firebasePlugins_baseUrl}/firebase-installations/README.md`,
					repo: `${firebaseGithubUrl}/firebase-installations`,
				},
				{
					name: 'Messaging',
					link: '/plugins/firebase-messaging',
					readme: `${firebasePlugins_baseUrl}/firebase-messaging/README.md`,
					repo: `${firebaseGithubUrl}/firebase-messaging`,
				},
				{
					name: 'Performance',
					link: '/plugins/firebase-performance',
					readme: `${firebasePlugins_baseUrl}/firebase-performance/README.md`,
					repo: `${firebaseGithubUrl}/firebase-performance`,
				},
				{
					name: 'Remote Config',
					link: '/plugins/firebase-remote-config',
					readme: `${firebasePlugins_baseUrl}/firebase-remote-config/README.md`,
					repo: `${firebaseGithubUrl}/firebase-remote-config`,
				},
				{
					name: 'Storage',
					link: '/plugins/firebase-storage',
					readme: `${firebasePlugins_baseUrl}/firebase-storage/README.md`,
					repo: `${firebaseGithubUrl}/firebase-storage`,
				},
			],
		},
		{
			category: 'Extras',
			plugins: [
				{
					name: 'NativeScript UI ListView',
					link: '/plugins/nativescript-ui/rad-list-view',
				},
			],
		},
	]
}

function getPluginsSidebar() {
	const plugins = getPlugins()

	return plugins.map((category) => {
		return {
			text: category.category,
			items: category.plugins.map((plugin) => ({
				text: plugin.name,
				link: plugin.link,
			})),
		}
	})
}

