import { color } from '../theme/color'
import { fontFamily, fontSize } from '../theme/font'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { IconEnum } from '@/components/icons/Icons'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import Toast from 'react-native-toast-message'

export const defaultNavigationOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTitleStyle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.default,
    fontWeight: 'bold',
    color: color.white,
  },
}
export const defaultTabNavigationOptions: BottomTabNavigationOptions = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTitleStyle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.large,
    color: color.white,
  },
  tabBarActiveTintColor: color.warning,
  tabBarInactiveTintColor: color.white,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: color.primary,
    height: 90,
  },
}

export const getTabHeaderTitle = (route: string) => {
  switch (route) {
    case '(library)':
      return 'Library'
    case '(search)':
      return 'Search'
    case '(profile)':
      return 'Profile'
    default:
      return 'Home'
  }
}

export const getTabIconName = (route: string) => {
  switch (route) {
    case '(search)':
      return IconEnum.search
    case '(profile)':
      return IconEnum.user
    case '(library)':
      return IconEnum.list
    default:
      return IconEnum.home
  }
}
export const getAppScreenTitle = (route: string) => {
  switch (route) {
    case 'takingPicture':
      return 'Fotografera'
    case 'scanning':
      return 'Scanna'
    case 'createPost':
      return 'Kontrollera uppgrifter'
    case 'profile':
      return 'Profile'
    case 'storedDisks':
      return 'Lagrade diskar'
    case 'storedDiskDetails':
      return 'Lagrad disk'
    case 'archivedDisks':
      return 'Arkiv'
    default:
      return 'Discappear'
  }
}

export const getHeaderTitle = (routeName: string) => {
  switch (routeName) {
    case 'signin':
      return 'Sign in'
    case 'signup':
      return 'Sign up'
    default:
      return 'FAVRAPP'
  }
}

export const filterPaths = (currentScreen: string) => {
  let excludedPaths: boolean
  if (
    currentScreen === '(auth)' ||
    currentScreen === 'profile' ||
    currentScreen === 'storedDisks' ||
    currentScreen === 'storedDiskDetails' ||
    currentScreen === 'archivedDisks' ||
    currentScreen === 'takingPicture' ||
    currentScreen === 'scanning' ||
    currentScreen === 'createPost'
  ) {
    excludedPaths = true
  } else {
    excludedPaths = false
  }
  return excludedPaths
}

export const showAlert = (message: string) => {
  const truncatedMessage = message.length > 200 ? `${message.substring(0, 200)}...` : message

  Toast.show({
    type: 'error',
    position: 'bottom',
    text1: 'System Alert!',
    text2: truncatedMessage,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 30,
    bottomOffset: 40,
    text1Style: { textAlign: 'center' },
    text2Style: { textAlign: 'center', fontSize: 20, color: color.lightGray },
  })
}
