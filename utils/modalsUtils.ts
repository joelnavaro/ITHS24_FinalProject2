import { router } from 'expo-router'
import { Keyboard } from 'react-native'

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
