import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchEventsAsync } from './actions'
import { REQUEST_STATUS } from '@/firebase/types'
import { RootState } from '../store'
import { EventType } from '@/utils/types'

interface EventState {
  eventsCollection: EventType[]
  requestStatus: REQUEST_STATUS
  errorMessage: string | null
}

export const initialState: EventState = {
  eventsCollection: [],
  requestStatus: REQUEST_STATUS.IDLE,
  errorMessage: null,
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, { payload }: PayloadAction<EventType>) => {
      state.eventsCollection.push(payload)
    },
    removeEvent: (state, { payload }: PayloadAction<{ eventId: string }>) => {
      state.eventsCollection = state.eventsCollection.filter((event) => event.id !== payload.eventId)
    },
    editEvent: (state, { payload }: PayloadAction<{ eventId: string; event: EventType }>) => {
      const index = state.eventsCollection.findIndex((event) => event.id === payload.eventId)
      state.eventsCollection[index] = payload.event
    },
    removeNote: (state, { payload }: PayloadAction<{ noteIndex: number; eventId: string }>) => {
      state.eventsCollection.find((event) => event.id === payload.eventId)?.userAdditions.splice(payload.noteIndex, 1)
    },
    putNote: (state, { payload }: PayloadAction<{ note: string; eventId: string }>) => {
      state.eventsCollection.find((event) => event.id === payload.eventId)?.userAdditions.push(payload.note)
      console.log('event slice', state.eventsCollection.find((event) => event.id === payload.eventId)?.userAdditions)
    },
    updateRequestStatus: (state, { payload }: PayloadAction<{ status: REQUEST_STATUS; error?: string }>) => {
      state.requestStatus = payload.status
      if (payload.error) {
        state.errorMessage = payload.error
      } else {
        state.errorMessage = null
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchEventsAsync.pending, (state) => {
      state.requestStatus = REQUEST_STATUS.LOADING
    })
    builder.addCase(fetchEventsAsync.fulfilled, (state, { payload }) => {
      state.requestStatus = REQUEST_STATUS.SUCCEEDED
      const result = payload as EventType[]
      state.eventsCollection = result
      state.errorMessage = null
    })
    builder.addCase(fetchEventsAsync.rejected, (state, action) => {
      state.requestStatus = REQUEST_STATUS.ERROR
      state.errorMessage = action.error.message ?? ''
    })
  },
})
export const selectCollection = (state: RootState) => state.events.eventsCollection
export const selectRequestState = (state: RootState) => state.events.requestStatus

export const { addEvent, removeEvent, editEvent, updateRequestStatus, removeNote, putNote } = eventSlice.actions

export default eventSlice.reducer
