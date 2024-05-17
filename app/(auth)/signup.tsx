import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { BodyText } from '@/components/Text'
import { useState } from 'react'
import { BaseCard } from '@/components/BaseCard'
import { color } from '@/theme/color'
import { InputField } from '@/components/InputField'
import { spacing } from '@/theme/spacing'
import { Button } from '@/components/Button'
import { ButtonType } from '@/utils/types'
import { router } from 'expo-router'
import { IconEnum } from '@/components/icons/Icons'
import { KeyboardView } from '@/components/KeyboardView'
import { Separator } from '@/components/Separator'
import { CenteredBodyText, CenteredTitle } from '.'
import { useAuth } from '@/firebase/hooks/useAuth'
import { showAlert } from '@/utils/navigationUtils'
import { LoadingIndicator } from '@/components/LoadingIndicator'

export default function Signup() {
  const { signUp, authState } = useAuth()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleSubmit = async () => {
    if (form.email === '' || form.password === '') {
      showAlert('Please fill in all fields.')
      return
    } else {
      try {
        await signUp(form.firstName, form.lastName, form.email, form.password)
        router.replace('/(tabs)/')
      } catch (error) {
        showAlert(String(error))
      }
    }
  }
  return (
    <KeyboardView>
      <ScreenBase backgroundColor={color.primary}>
        <ScrollContainer backgroundColor={color.primary}>
          <Separator />
          <LoadingIndicator status={authState.authStatus} isModal={false} />
          <BaseCard backgroundColor={color.primary}>
            <CenteredTitle color={color.white} bold size={spacing.xlarge}>
              Sign Up.
            </CenteredTitle>
            <Separator size={20} />
            <BodyText color={color.white} bold size={spacing.xlarge}>
              Create an account and start using the app..
            </BodyText>
          </BaseCard>
          <Separator size={20} />

          <BaseCard backgroundColor={color.seaShell}>
            <CenteredBodyText bold>Sign up with email and Password!</CenteredBodyText>
            <InputField
              label="First Name"
              icon={IconEnum.user}
              placeholder="First Name"
              value={form.firstName}
              keyboardType="default"
              onChangeText={(value) => setForm({ ...form, firstName: value })}
            />
            <InputField
              label="Last Name"
              icon={IconEnum.user}
              placeholder="Last Name"
              value={form.lastName}
              keyboardType="default"
              onChangeText={(value) => setForm({ ...form, lastName: value })}
            />
            <InputField
              label="Email"
              icon={IconEnum.letter}
              placeholder="email"
              value={form.email}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
              autoCapitalize="none"
            />
            <InputField
              label="Password"
              icon={IconEnum.lock}
              placeholder="password"
              value={form.password}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, password: value })}
              autoCapitalize="none"
            />
            <Button
              label="Register"
              type={ButtonType.primary}
              onPress={handleSubmit}
              disabled={form.email === '' || form.password === ''}
            />
            <Button
              label="Have an account already?, Sign In!"
              type={ButtonType.textButton}
              onPress={() => {
                router.replace('/signin')
              }}
            />
          </BaseCard>
        </ScrollContainer>
      </ScreenBase>
    </KeyboardView>
  )
}
