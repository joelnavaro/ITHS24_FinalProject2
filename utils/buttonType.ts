import { color } from '../theme/color'
import { ButtonType } from './types'

export const buttonTypes = (type: ButtonType) => {
  if (type === ButtonType.secondary) {
    return {
      backgroundColor: color.secondary,
      fontColor: color.white,
      borderColor: color.secondary,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.success) {
    return {
      backgroundColor: color.fernGreen,
      fontColor: color.white,
      borderColor: color.fernGreen,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.disable) {
    return {
      backgroundColor: color.white,
      fontColor: color.darkSlate,
      borderColor: color.darkSlate,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.textButton) {
    return {
      backgroundColor: 'transparent',
      fontColor: color.black,
      borderColor: color.black,
      borderBottomWidth: true,
    }
  }
  return {
    backgroundColor: color.primary,
    fontColor: color.white,
    borderColor: color.primary,
    borderBottomWidth: false,
  }
}

export const barButtonTypes = (type: ButtonType) => {
  if (type === ButtonType.secondary) {
    return {
      backgroundColor: color.darkSlate,
      fontColor: color.white,
      borderColor: color.darkSlate,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.disable) {
    return {
      backgroundColor: color.white,
      fontColor: color.darkSlate,
      borderColor: color.darkSlate,
      borderBottomWidth: false,
    }
  }
  if (type === ButtonType.textButton) {
    return {
      backgroundColor: 'transparent',
      fontColor: color.darkSlate,
      borderColor: color.darkSlate,
      bottomLine: true,
    }
  }
  return {
    backgroundColor: color.champagne,
    fontColor: color.black,
    borderColor: color.champagne,
    borderBottomWidth: false,
  }
}
