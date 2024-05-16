import { authFirebase, db } from '../types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
  resetUserCredentials,
  selectAuthState,
  setUserCredentials,
} from '@/state/user/userSlice'
import { RootState, persistor } from '@/state/store'
import { router } from 'expo-router'
type UserCredentials = {
  uid: string
  firstName: string
  lastName: string
  email: string
}
type FirebaseErrorType = {
  code: string
  message: string
}

export const useAuth = () => {
  const userId = useAppSelector((state: RootState) => state.user.uid)
  const authState = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()

  const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    try {
      const userCredential = await authFirebase.createUserWithEmailAndPassword(
        email,
        password,
      )

      const credentials: UserCredentials = {
        uid: userCredential.user.uid,
        firstName,
        lastName,
        email,
      }
      dispatch(
        setUserCredentials({
          uid: userCredential.user.uid,
          name: firstName,
          lastName,
          email,
        }),
      )
      createUserCollection(userCredential.user.uid, credentials)
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }
  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await authFirebase.signInWithEmailAndPassword(
        email,
        password,
      )

      const credentials = await getUserCredentialsWithEmail(
        userCredential.user.uid,
      )
      dispatch(
        setUserCredentials({
          uid: userCredential.user.uid,
          name: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
        }),
      )
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }
  const getUserCredentialsWithEmail = async (userId: string) => {
    try {
      const doc = await db.doc(userId).get()
      return doc.data() as UserCredentials
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }

  const createUserCollection = async (
    userId: string,
    credentials: UserCredentials,
  ) => {
    try {
      const docRef = db.doc(userId)
      const doc = await docRef.get()
      if (!doc.exists) {
        await docRef.set(credentials)
      }
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }
  const logOut = async () => {
    try {
      const currentUser = authFirebase.currentUser
      if (currentUser) {
        await authFirebase.signOut()
        dispatch(resetUserCredentials())
        persistor.purge()
      }
      router.replace('/(auth)/')
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }

  return {
    authState,
    signUp,
    signIn,
    logOut,
  }
}

// if (firebaseError.code === 'auth/email-already-in-use') {
//   console.log('That email address is already in use!')
// }

// if (firebaseError.code === 'auth/invalid-email') {
//   console.log('That email address is invalid!')
// }

//when error in the email
// [Error: [auth/invalid-credential] The supplied auth credential is malformed or has expired.]
