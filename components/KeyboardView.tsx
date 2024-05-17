import { KeyboardAvoidingView, Platform } from 'react-native'
import { FC, ReactNode } from 'react'

export const KeyboardView: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* <ScrollView
        style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}
        bounces={true}
        showsVerticalScrollIndicator={false}
      > */}
      {children}
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  )
}
