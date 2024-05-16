//create the Async firebase functions here

import { AsyncImageType } from './types'
import AsyncStorage from '@react-native-async-storage/async-storage'

const imageKey = 'uploadImage'

export const saveImgAsyncStorage = async (imagePath: string) => {
  try {
    await AsyncStorage.removeItem(imageKey)
    const asyncItem: AsyncImageType = { localPath: imagePath }
    await AsyncStorage.setItem(imageKey, JSON.stringify(asyncItem))
  } catch (error) {
    console.log(error)
  }
}
export const getImgAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(imageKey)
    if (value) {
      const image: AsyncImageType = JSON.parse(value)
      return image
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
