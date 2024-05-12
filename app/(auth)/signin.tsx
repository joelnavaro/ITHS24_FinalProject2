import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import styled from 'styled-components/native'
import { BodyText } from '@/components/Text'
import { useState } from 'react'
import { BaseCard } from '@/components/BaseCard'
import { color } from '@/theme/color'
import { InputField } from '@/components/InputField'
import { spacing } from '@/theme/spacing'

export default function Signin() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  return (
    <ScreenBase>
      <Box>
        <BodyText>Header</BodyText>
        <BodyText>Add app's name here</BodyText>
        <BodyText>
          Add welcoming message. play with size and color of the text
        </BodyText>
      </Box>
      {/* <ScrollContainer contentContainerStyle={{ height: '100%' }}>
        <Box>
          <BodyText>Login Inputs here</BodyText>
        </Box>
      </ScrollContainer> */}
      <BaseCard backgroundColor={color.secondary}>
        <CenteredBodyText bold color={color.white}>
          Register with email and Password!
        </CenteredBodyText>
        <InputField
          label="Email"
          placeholder="email"
          value={form.email}
          keyboardType="email-address"
        />
        <InputField
          label="Password"
          placeholder="password"
          value={form.password}
          keyboardType="email-address"
        />
      </BaseCard>
    </ScreenBase>
  )
}

const Box = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: red;
  border-radius: 25px;
`
const CenteredBodyText = styled(BodyText)`
  align-self: center;
  margin: auto;
  margin-bottom: ${spacing.small}px;
`
