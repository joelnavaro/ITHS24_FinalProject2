import 'dotenv/config'

const BUILD_TIME_VARS = {
  BUILD_NUMBER: process.env.BUILD_NUMBER,
}

export default () => {
  return {
    expo: {
      name: 'iths-examen51',
      slug: 'iths-examen51',
      version: '1.0.0',
      runtimeVersion: '51.0.6',
      orientation: 'portrait',
      icon: './assets/images/icon.png',
      scheme: 'iths-examen51.dev',
      userInterfaceStyle: 'automatic',
      splash: {
        image: './assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      plugins: [
        'expo-router',
        'expo-font',
        [
          'expo-media-library',
          {
            photosPermission: 'Allow Iths-examen51 to access your photos.',
            savePhotosPermission: 'Allow Iths-examen51 to save photos.',
            isAccessMediaLocationEnabled: true,
          },
        ],
        [
          'expo-dev-launcher',
          {
            launchMode: 'most-recent',
          },
        ],
        '@react-native-firebase/app',
        '@react-native-firebase/auth',
        [
          'expo-build-properties',
          {
            ios: {
              useFrameworks: 'static',
            },
          },
        ],
      ],
      ios: {
        supportsTablet: false,
        bundleIdentifier: 'com.ithsExamen51.app.dev',
        googleServicesFile: './config/GoogleService-Info-dev.plist',
        infoPlist: {
          CFBundleDevelopmentRegion: 'sv',
        },
        config: {
          usesNonExemptEncryption: false,
        },
      },
      android: {
        googleServicesFile: './config/google-services-dev.json',
        adaptiveIcon: {
          foregroundImage: './assets/images/adaptive-icon.png',
          backgroundColor: '#ffffff',
        },
        versionCode: Number(BUILD_TIME_VARS.BUILD_NUMBER | 1),
        package: 'com.ithsExamen51.app.dev',
        permissions: [
          'android.permission.READ_EXTERNAL_STORAGE',
          'android.permission.WRITE_EXTERNAL_STORAGE',
          'android.permission.ACCESS_MEDIA_LOCATION',
        ],
      },
      experiments: {
        typedRoutes: true,
      },
      extra: {
        router: {
          origin: false,
        },
        eas: {
          projectId: 'b456646e-359e-4a98-9230-edb1ab05fece',
        },
      },
    },
  }
}
