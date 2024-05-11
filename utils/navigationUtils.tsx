import { router } from 'expo-router'
import { color } from '../theme/color'
import { fontFamily, fontSize } from '../theme/font'
import { Keyboard } from 'react-native'

export const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: color.primary,
  },
  headerTitleStyle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.default,
    color: color.white,
  },
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

const modalType:
  | 'modal'
  | 'transparentModal'
  | 'containedModal'
  | 'containedTransparentModal'
  | 'fullScreenModal'
  | 'formSheet'
  | 'card'
  | undefined = 'modal'

export const defaultModalStyleOptions = {
  presentation: modalType,
  headerShown: false,
  contentStyle: {
    flex: 1,
    backgroundColor: 'transparent',
  },
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

export const closeModal = () => {
  router.replace('/')
}
export const navigateBackModal = () => {
  router.replace('../')
}

export const keyboardListener = (setState: (value: boolean) => void) => {
  console.log('keyboardListener')
  Keyboard.addListener('keyboardDidShow', () => {
    setState(true)
  })
}
