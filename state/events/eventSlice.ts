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
    addEvent: (state, { payload }: PayloadAction<{ event: EventType }>) => {
      state.eventsCollection.push(payload.event)
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

export const { addEvent } = eventSlice.actions

export default eventSlice.reducer
