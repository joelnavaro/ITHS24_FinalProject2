import { BodyText } from './Text'
import styled from 'styled-components/native'
import { FC } from 'react'
import { color } from '../theme/color'
import { spacing } from '../theme/spacing'

interface ErrorComponentProps {
  message: string
}

export const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
  return (
    <Container>
      <BodyText color={color.error}>{message}</BodyText>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f8d7da;
  border-radius: ${spacing.large}px;
  padding: ${spacing.large}px ${spacing.small}px;
`
