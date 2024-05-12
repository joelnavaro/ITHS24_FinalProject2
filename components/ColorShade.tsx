import { FC } from 'react'
import { spacing } from '../theme/spacing'
import { color } from '../theme/color'
import styled from 'styled-components/native'
import { BodyText } from './Text'

export const ColorShade: FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <Container>
      <ColorBox background={color} />
      <BodyText>{color}</BodyText>
      <BodyText>{name}</BodyText>
    </Container>
  )
}

const Container = styled.View`
  padding: ${spacing.medium}px;
`
const ColorBox = styled.View<{ background: string }>`
  width: 75px;
  height: 75px;
  background-color: ${(props: { background: string }) => props.background};
  border-radius: ${spacing.small}px;
  border: 1px solid ${color.black};
`
