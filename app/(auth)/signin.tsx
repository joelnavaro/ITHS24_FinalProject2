import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import styled from 'styled-components/native'
import { BodyText } from '@/components/Text'
import { useState } from 'react'

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
      <ScrollContainer contentContainerStyle={{ height: '100%' }}>
        <Box>
          <BodyText>Login Inputs here</BodyText>
        </Box>
      </ScrollContainer>
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
