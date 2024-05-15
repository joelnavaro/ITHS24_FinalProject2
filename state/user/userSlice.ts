import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { REQUEST_STATUS } from '../../firebase/types'

export interface UserCredentialsType {
  uid: string | null
  email: string | null
  authStatus: REQUEST_STATUS
  errorMessage: string | null
}

const initialState: UserCredentialsType = {
  uid: null,
  email: null,
  authStatus: REQUEST_STATUS.IDLE,
  errorMessage: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setUserCredentials: (state, { payload }: PayloadAction<UserCredentialsType>) => {
    //   state.uid = payload.uid
    //   state.phoneNumber = payload.phoneNumber
    //   state.jwtToken = payload.jwtToken
    // },
    // resetUserCredentials: (state) => {
    //   state.uid = null
    //   state.phoneNumber = null
    //   state.jwtToken = null
    // },
    // updateAuthStatus: (state, { payload }: PayloadAction<{ status: REQUEST_STATUS; error?: string }>) => {
    //   state.authStatus = payload.status
    //   if (payload.error) {
    //     state.errorMessage = payload.error
    //   } else {
    //     state.errorMessage = null
    //   }
    // },
  },
})

export const selectIsAuthenticated = (state: RootState) =>
  state.user.uid !== null
export const selectAuthState = (state: RootState) => state.user

// export const { setUserCredentials, resetUserCredentials, updateAuthStatus } = userSlice.actions

export default userSlice.reducer
