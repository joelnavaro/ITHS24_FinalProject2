import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { REQUEST_STATUS } from '../../firebase/types'

export interface UserType {
  uid: string | null
  name: string | null
  lastName: string | null
  email: string | null
  authStatus: REQUEST_STATUS
  errorMessage: string | null
}

const initialState: UserType = {
  uid: null,
  name: '',
  lastName: '',
  email: '',
  authStatus: REQUEST_STATUS.IDLE,
  errorMessage: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (
      state,
      {
        payload,
      }: PayloadAction<{
        uid: string
        name: string
        lastName: string
        email: string
      }>,
    ) => {
      state.uid = payload.uid
      state.name = payload.name
      state.lastName = payload.lastName
      state.email = payload.email
    },
    resetUserCredentials: () => initialState,
    updateAuthStatus: (
      state,
      { payload }: PayloadAction<{ status: REQUEST_STATUS; error?: string }>,
    ) => {
      state.authStatus = payload.status
      if (payload.error) {
        state.errorMessage = payload.error
      } else {
        state.errorMessage = null
      }
    },
  },
})

export const selectIsAuthenticated = (state: RootState) =>
  state.user.uid !== null && state.user.uid !== ''
export const selectAuthState = (state: RootState) => state.user

export const { setUserCredentials, resetUserCredentials, updateAuthStatus } =
  userSlice.actions

export default userSlice.reducer
