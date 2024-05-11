import { color } from '../theme/color'
import { ButtonType } from './types'

export const buttonTypes = (type: ButtonType) => {
  if (type === ButtonType.secondary) {
    return {
      backgroundColor: color.secondary,
      fontColor: color.darkSlate,
      borderColor: color.darkSlate,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.success) {
    return {
      backgroundColor: color.success,
      fontColor: color.darkSlate,
      borderColor: color.darkSlate,
      borderBottomWidth: false,
    }
  }
  // if (type === ButtonType.disable) {
  //   return {
  //     backgroundColor: color.lightGrey,
  //     fontColor: color.darkGrey,
  //     borderColor: color.darkGrey,
  //     borderBottomWidth: false,
  //   }
  // }
  if (type === ButtonType.textButton) {
    return {
      backgroundColor: 'transparent',
      fontColor: color.black,
      borderColor: color.black,
      borderBottomWidth: true,
    }
  }
  // if (type === ButtonType.complement) {
  //   return {
  //     backgroundColor: color.white,
  //     fontColor: color.darkGrey,
  //     borderColor: color.white,
  //     borderBottomWidth: false,
  //   }
  // }
  return {
    backgroundColor: color.primary,
    fontColor: color.white,
    borderColor: color.primary,
    borderBottomWidth: false,
  }
}
