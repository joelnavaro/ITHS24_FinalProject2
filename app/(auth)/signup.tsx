import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import styled from 'styled-components/native'
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
import { Alert } from 'react-native'
import { KeyboardView } from '@/components/KeyboardView'
import { Separator } from '@/components/Separator'

export default function Signup() {
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Sign up.', 'Please fill in all fields!')
      return
    }
    router.replace('/(tabs)/')
  }
  return (
    <KeyboardView>
      <ScreenBase backgroundColor={color.secondary}>
        <ScrollContainer backgroundColor={color.secondary}>
          <Separator />

          <BaseCard backgroundColor={color.secondary}>
            <CenteredTitle color={color.primary} bold size={spacing.xlarge}>
              Sign Up.
            </CenteredTitle>
            <Separator size={20} />
            <BodyText color={color.primary} bold size={spacing.xlarge}>
              Create an account and start using the app..
            </BodyText>
          </BaseCard>
          <Separator />
          <Separator />
          <BaseCard backgroundColor={color.white}>
            <CenteredBodyText bold>
              Sign up with email and Password!
            </CenteredBodyText>
            <InputField
              label="Name"
              icon={IconEnum.user}
              placeholder="name"
              value={form.userName}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, userName: value })}
            />
            <InputField
              label="Email"
              icon={IconEnum.letter}
              placeholder="email"
              value={form.email}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              icon={IconEnum.lock}
              placeholder="password"
              value={form.password}
              keyboardType="email-address"
              onChangeText={(value) => setForm({ ...form, password: value })}
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

const CenteredBodyText = styled(BodyText)`
  align-self: center;
  margin: auto;
  margin-bottom: ${spacing.small}px;
`
const CenteredTitle = styled(BodyText)`
  align-self: center;
  margin: auto;
  margin-bottom: ${spacing.small}px;
`
