// import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
// import { RootState } from '@/state/store'
// import {
//   Dispatch,
//   PropsWithChildren,
//   SetStateAction,
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from 'react'

// interface AuthContextPropsType {
//   hasAccess: boolean
//   setHasAccess: Dispatch<SetStateAction<boolean>>
//   signOut: () => Promise<void>
//   initiateOtp: (phoneNumber: string) => Promise<void>
//   confirmOtpCode: (otpCode: string) => Promise<void>
// }
// export const AuthContext = createContext<AuthContextPropsType | null>(null)

// export const useAuthContext = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error('No context provided')
//   }
//   return context
// }
// //0793484229

// export function AuthProvider({ children }: PropsWithChildren) {
//   //const { hasToken, signOut, storeUserCredentials } = useAuth()
//   const user = useAppSelector((state: RootState) => state.user)
//   const [hasAccess, setHasAccess] = useState<boolean>(false)
//   const dispatch = useAppDispatch()

//   useEffect(() => {
//     if (user.jwtToken) setHasAccess(true)
//   }, [user.jwtToken])

//   const value = {
//     hasAccess,
//     setHasAccess,
//     signOut,
//     initiateOtp,
//     confirmOtpCode,
//   }
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
// }
