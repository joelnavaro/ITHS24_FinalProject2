import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const rootCollection = 'ithsExamen'
export const usersCollection = 'Users'
export const eventsCollection = 'Events'

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
export interface FirebaseErrorType {
  code: string
  message: string
}

export interface UserCredentials {
  uid: string
  firstName: string
  lastName: string
  email: string
  profilePicture: string
}
export const firestoreModule = firestore()
export const authFirebase = auth()
export const db = firestore().collection(rootCollection)
export const usersList = db.doc(usersCollection)
