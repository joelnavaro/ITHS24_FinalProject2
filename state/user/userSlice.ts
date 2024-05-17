import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { REQUEST_STATUS } from '../../firebase/types'

export interface UserType {
  uid: string
  firstName: string
  lastName: string
  email: string
  profilePicture: string
  authStatus: REQUEST_STATUS
  errorMessage: string | null
}
interface PayloadType {
  uid: string
  firstName: string
  lastName: string
  email: string
  profilePicture: string
}

const initialState: UserType = {
  uid: '',
  firstName: '',
  lastName: '',
  email: '',
  profilePicture: '',
  authStatus: REQUEST_STATUS.IDLE,
  errorMessage: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCredentials: (state, { payload }: PayloadAction<PayloadType>) => {
      state.uid = payload.uid
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.email = payload.email
      state.profilePicture = payload.profilePicture
    },
    resetUserCredentials: () => initialState,
    updateAuthStatus: (state, { payload }: PayloadAction<{ status: REQUEST_STATUS; error?: string }>) => {
      state.authStatus = payload.status
      if (payload.error) {
        state.errorMessage = payload.error
      } else {
        state.errorMessage = null
      }
    },
  },
})

export const selectIsAuthenticated = (state: RootState) => state.user.uid !== null && state.user.uid !== ''
export const selectAuthState = (state: RootState) => state.user

export const { setUserCredentials, resetUserCredentials, updateAuthStatus } = userSlice.actions

export default userSlice.reducer
