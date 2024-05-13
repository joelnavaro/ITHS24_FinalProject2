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
import { CenteredBodyText, CenteredTitle } from '.'

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
      <ScreenBase backgroundColor={color.primary}>
        <ScrollContainer backgroundColor={color.primary}>
          <Separator />

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
