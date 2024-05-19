import { FirebaseErrorType, REQUEST_STATUS, UserCredentials, authFirebase, db } from '../types'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { resetUserCredentials, selectAuthState, setUserCredentials, updateAuthStatus } from '@/state/user/userSlice'
import { persistor } from '@/state/store'
import { router } from 'expo-router'

export const useAuth = () => {
  const authState = useAppSelector(selectAuthState)
  const dispatch = useAppDispatch()

  const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
    try {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.LOADING }))
      const userCredential = await authFirebase.createUserWithEmailAndPassword(email, password)
      const credentials: UserCredentials = {
        uid: userCredential.user.uid,
        firstName,
        lastName,
        email,
        profilePicture: '',
      }
      dispatch(
        setUserCredentials({
          uid: userCredential.user.uid,
          firstName,
          lastName,
          email,
          profilePicture: '',
        }),
      )
      await createUserCollection(userCredential.user.uid, credentials)
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }
  const signIn = async (email: string, password: string) => {
    try {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.LOADING }))
      const userCredential = await authFirebase.signInWithEmailAndPassword(email, password)

      const credentials = await getUserCredentialsWithEmail(userCredential.user.uid)
      dispatch(
        setUserCredentials({
          ...authState,
          uid: userCredential.user.uid,
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          email: credentials.email,
          profilePicture: credentials.profilePicture,
        }),
      )
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
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

  const createUserCollection = async (userId: string, credentials: UserCredentials) => {
    try {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.LOADING }))
      const docRef = db.doc(userId)
      const doc = await docRef.get()
      if (!doc.exists) {
        await docRef.set(credentials)
      }
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      const firebaseError = error as FirebaseErrorType
      throw new Error(firebaseError.message)
    }
  }
  const logOut = async () => {
    try {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.LOADING }))
      const currentUser = authFirebase.currentUser
      if (currentUser) {
        await authFirebase.signOut()
        dispatch(resetUserCredentials())
        persistor.purge()
      }
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      router.replace('/(auth)/')
    } catch (error) {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
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
