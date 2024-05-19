import styled from 'styled-components/native'
import { FC } from 'react'
import { spacing } from '@/theme/spacing'
import { barButtonTypes } from '@/utils/buttonType'
import { BarMenuState, ButtonType } from '@/utils/types'
import { Icon, IconEnum } from './icons/Icons'
import { theme } from '@/theme'
import { color } from '@/theme/color'

export const BarButton: FC<{
  menuState?: BarMenuState
  label: string
  type?: ButtonType
  icon?: IconEnum
  onPress: () => void
  disabled?: boolean
}> = ({ menuState, label, type = ButtonType.primary, icon, onPress, disabled = false }) => {
  const { backgroundColor, fontColor, bottomLine } = barButtonTypes(disabled ? ButtonType.disable : type)
  const tempLabel = menuState === 'day' ? 'Today' : menuState === 'week' ? 'This Week' : 'This Month'
  const isMenuState = tempLabel === label
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={isMenuState ? `${color.darkSlate}` : `${color.champagne}`}
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
