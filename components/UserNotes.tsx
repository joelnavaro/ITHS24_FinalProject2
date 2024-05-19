import { FC } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { Icon, IconEnum } from './icons/Icons'
import { BodyText } from './Text'
import { spacing } from '@/theme/spacing'

export const UserNotes: FC<{ text: string; onPress: () => void }> = ({ text, onPress }) => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1)
  return (
    <Container>
      <BodyText>{capitalizedText}</BodyText>
      <IconContainer onPress={onPress}>
        <Icon icon={IconEnum.close} color={color.white} />
      </IconContainer>
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.success};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${color.black};
  padding: 3px;
  margin: ${spacing.xsmall}px;
`
const IconContainer = styled.TouchableOpacity`
  justify-content: center;
  margin-left: ${spacing.xsmall}px;
`
