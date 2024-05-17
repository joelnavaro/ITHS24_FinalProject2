import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { db, eventsCollection } from '@/firebase/types'
import { EventType } from '@/utils/types'

export const fetchEventsAsync = createAsyncThunk('eventsSlice/fetchEventsAsync', async (_, thunkAPI) => {
  const rootState = thunkAPI.getState() as RootState
  if (rootState.user.uid === null) {
    throw new Error('User not logged in')
  }

  try {
    const events = await db.doc(rootState.user.uid).collection(eventsCollection).get()
    const tempList: EventType[] = []
    events.forEach((event) => {
      tempList.push(event.data() as EventType)
    })
    return tempList
  } catch (error) {
    return thunkAPI.rejectWithValue('Error fetching events from Firebase')
  }
})
