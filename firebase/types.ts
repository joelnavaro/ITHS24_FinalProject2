import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const rootCollection = 'ithsExamen'
export const usersCollection = 'Users'

export const imagesBucket = 'DisksImages'

export type AsyncImageType = {
  localPath: string
}
export enum REQUEST_STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCEEDED = 'succeeded',
}

export const authFirebase = auth()
export const db = firestore().collection(rootCollection)
export const usersList = db.doc(usersCollection)
