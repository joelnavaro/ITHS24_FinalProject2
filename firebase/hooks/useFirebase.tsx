import { FirebaseErrorType, REQUEST_STATUS, db, eventsCollection } from '../types'
import { RootState } from '../../state/store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useCallback, useEffect } from 'react'
import { router } from 'expo-router'
import { fetchEventsAsync } from '@/state/events/actions'
import { EventType } from '@/utils/types'
import { setUserCredentials, updateAuthStatus } from '@/state/user/userSlice'
import {
  editEvent,
  putNote,
  removeEvent,
  removeNote,
  selectCollection,
  selectRequestState,
  updateRequestStatus,
} from '@/state/events/eventSlice'
import { showAlert } from '@/utils/navigationUtils'

export const useFirebase = () => {
  const events = useAppSelector(selectCollection)
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

  const deleteNote = async (noteIndex: number, eventId: string) => {
    try {
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      const snapshot = await eventCollection.where('id', '==', eventId).get()

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id
        const doc = await eventCollection.doc(docId).get()
        const userAdditions = doc.data()?.userAdditions || []
        if (noteIndex >= 0 && noteIndex < userAdditions.length) {
          userAdditions.splice(noteIndex, 1)
        }
        await eventCollection.doc(docId).update({
          userAdditions: userAdditions,
        })
        dispatch(removeNote({ noteIndex, eventId }))
      }
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      console.error('Error deleting note! : ', error)
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }
  const addNote = async (note: string, eventId: string) => {
    console.log('addNote useFb', note, eventId)
    try {
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      const snapshot = await eventCollection.where('id', '==', eventId).get()

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id
        const doc = await eventCollection.doc(docId).get()
        const userAdditions = doc.data()?.userAdditions || []
        userAdditions.push(note)
        await eventCollection.doc(docId).update({
          userAdditions: userAdditions,
        })

        dispatch(putNote({ note, eventId }))
      }
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      console.error('Error adding note! : ', error)
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }

  const saveEvent = async (event: EventType) => {
    try {
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      await eventCollection.add(event)
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
      router.push('../')
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
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
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      const querySnapshot = await eventCollection.where('id', '==', eventId).get()

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]
        await doc.ref.delete()
        dispatch(removeEvent({ eventId }))
        showAlert('Successfully deleted')
      }
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }

  const updateEvent = async (eventId: string, event: EventType) => {
    try {
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      const querySnapshot = await eventCollection.where('id', '==', eventId).get()

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0]
        await doc.ref.update(event)
        dispatch(editEvent({ eventId, event }))
        showAlert('Successfully Updated')
      }
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
    } catch (error) {
      const firebaseError = error as FirebaseErrorType
      dispatch(updateAuthStatus({ status: REQUEST_STATUS.IDLE }))
      throw new Error(firebaseError.message)
    }
  }

  return {
    events,
    requestState,
    saveEvent,
    getEvents,
    deleteEvent,
    updateEvent,
    updateUserCredentials,
    deleteNote,
    addNote,
  }
}
