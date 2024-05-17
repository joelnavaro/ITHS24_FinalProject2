import { FirebaseErrorType, REQUEST_STATUS, db, eventsCollection } from '../types'
import { RootState } from '../../state/store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useCallback, useEffect } from 'react'
import { router } from 'expo-router'
import { fetchEventsAsync } from '@/state/events/actions'
import { EventType } from '@/utils/types'
import { setUserCredentials, updateAuthStatus } from '@/state/user/userSlice'
import { selectRequestState } from '@/state/events/eventSlice'

export const useFirebase = () => {
  const requestState = useAppSelector(selectRequestState)
  const user = useAppSelector((state: RootState) => state.user)
  const adminDoc = db.doc(user.uid)
  const eventCollection = adminDoc.collection(eventsCollection)

  const dispatch = useAppDispatch()

  const fetchCollection = useCallback(async () => {
    await dispatch(fetchEventsAsync())
  }, [dispatch])

  useEffect(() => {
    fetchCollection()
  }, [fetchCollection])

  const updateUserCredentials = async (firstName?: string, lastName?: string, profilePicture?: string) => {
    try {
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.LOADING }))
      let updateData: { [key: string]: string | undefined } = {}

      if (firstName !== undefined) {
        updateData['firstName'] = firstName
      }
      if (lastName !== undefined) {
        updateData['lastName'] = lastName
      }
      if (profilePicture !== undefined) {
        updateData['profilePicture'] = profilePicture
      }

      if (Object.keys(updateData).length > 0) {
        await adminDoc.update(updateData)
        dispatch(setUserCredentials({ ...user, ...updateData }))
        dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      }
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }

  // import firestore from '@react-native-firebase/firestore'
  // const test = async (firstName?: string, lastName?: string) => {
  //   const adminDoc = firestore().collection(rootCollection).doc(adminId!)
  // }

  const saveEvent = async (event: EventType) => {
    try {
      await eventCollection.add(event)
      router.push('../')
    } catch (error) {
      console.error('Error adding document: ', error)
    }
  }
  const getEvents = async () => {
    try {
      const snapshot = await eventCollection.get()
      const events = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

      return events
    } catch (error) {
      console.error('Error getting documents: ', error)
    }
  }
  const deleteEvent = async (eventId: string) => {
    try {
      const eventDoc = db.doc(`${user.uid}/${eventsCollection}/${eventId}`)

      const doc = await eventDoc.get()
      if (doc.exists) {
        await eventDoc.delete()
        console.log('Document successfully deleted!')
        alert('Successfully deleted')
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error deleting document: ', error)
    }
  }

  const updateEvent = async (eventId: string, event: EventType) => {
    try {
      const eventDoc = db.doc(`${user.uid}/${eventsCollection}/${eventId}`)

      const doc = await eventDoc.get()
      if (doc.exists) {
        await eventDoc.update(event)
        console.log('Document successfully updated!')
        alert('Successfully updated')
      } else {
        console.log('No such document!')
      }
    } catch (error) {
      console.error('Error updating document: ', error)
    }
  }

  return {
    requestState,
    saveEvent,
    getEvents,
    deleteEvent,
    updateEvent,
    updateUserCredentials,
  }
}
