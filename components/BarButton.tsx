import styled from 'styled-components/native'
import { BodyText } from './Text'
import { FC } from 'react'
import { spacing } from '@/theme/spacing'
import { barButtonTypes } from '@/utils/buttonType'
import { ButtonType } from '@/utils/types'
import { Icon, IconEnum } from './icons/Icons'
import { theme } from '@/theme'

export const BarButton: FC<{
  label: string
  type?: ButtonType
  icon?: IconEnum
  onPress: () => void
  disabled?: boolean
}> = ({ label, type = ButtonType.primary, icon, onPress, disabled = false }) => {
  const { borderColor, backgroundColor, fontColor, bottomLine } = barButtonTypes(disabled ? ButtonType.disable : type)
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      disabled={disabled}
      borderLine={bottomLine}
      onPress={onPress}
    >
      <StyledText color={fontColor}>{label}</StyledText>
      {icon && <Icon icon={icon} color={fontColor} />}
    </StyledButton>
  )
}

const StyledButton = styled.TouchableOpacity<{
  backgroundColor?: string
  borderColor?: string
  borderLine: boolean
}>`
  flex: 1;
  margin: ${spacing.small}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
  border-width: ${(props: { borderLine: boolean }) => (props.borderLine ? '0' : '1')}px;
  border-style: solid;
  border-color: ${(props: { borderColor: string }) => props.borderColor};
  border-radius: ${spacing.large}px;
  border-bottom-width: ${(props: { borderLine: boolean }) => (props.borderLine ? '2' : '1')}px;
  padding: ${spacing.small}px;
`
const StyledText = styled.Text<{
  bold?: boolean
  color?: string
  size?: number
}>`
  font-family: ${(props: { bold?: boolean }) => (props.bold ? theme.fontFamily.bold : theme.fontFamily.regular)};
  color: ${(props: { color?: string }) => (props.color ? props.color : theme.color.black)};
  font-size: ${(props: { size?: number }) => (props.size ? props.size : theme.fontSize.default)}px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 'bold' : '400')};
  margin-bottom: ${(props: { bold?: boolean }) => (props.bold ? `${spacing.xsmall}` : 0)}px;
`
