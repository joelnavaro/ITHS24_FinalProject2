import { FirebaseErrorType, REQUEST_STATUS, db, eventsCollection } from '../types'
import { RootState } from '../../state/store'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { useCallback, useEffect } from 'react'
import { router } from 'expo-router'
import { fetchEventsAsync } from '@/state/events/actions'
import { EventType } from '@/utils/types'
import { setUserCredentials, updateAuthStatus } from '@/state/user/userSlice'
import {
  putNote,
  removeNote,
  selectCollection,
  selectRequestState,
  updateRequestStatus,
} from '@/state/events/eventSlice'

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
        // Add the new note to the userAdditions array
        userAdditions.push(note)

        // Update the document with the new array
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

  // import firestore from '@react-native-firebase/firestore'
  // const test = async (firstName?: string, lastName?: string) => {
  //access the user document
  //   const adminDoc = firestore().collection(rootCollection).doc(adminId!)
  //access the event collection in the user document
  // }

  const saveEvent = async (event: EventType) => {
    try {
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.LOADING }))
      await eventCollection.add(event)
      dispatch(updateRequestStatus({ status: REQUEST_STATUS.IDLE }))
      router.push('../')
    } catch (error) {
      console.error('Error adding document: ', error)
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
