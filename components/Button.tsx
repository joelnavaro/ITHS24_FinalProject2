import { FC } from 'react'
import styled from 'styled-components/native'
import { BodyText } from './Text'
import { spacing } from '../theme/spacing'
import { Icon, IconEnum } from './icons/Icons'
import { buttonTypes } from '../utils/buttonType'
import { TouchableOpacityProps } from 'react-native'
import { ButtonType } from '@/utils/types'

export interface ButtonProps extends TouchableOpacityProps {
  label: string
  icon?: IconEnum
  rounded?: boolean
  type?: ButtonType
}

export const Button: FC<ButtonProps> = ({
  label,
  icon,
  rounded,
  type = ButtonType.primary,
  disabled,
  ...props
}) => {
  const { borderColor, backgroundColor, fontColor, borderBottomWidth } =
    buttonTypes(disabled ? ButtonType.disable : type)

  return (
    <StyledButton
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      rounded={rounded}
      disabled={disabled}
      borderLine={borderBottomWidth}
      {...props}
    >
      <PaddingText color={fontColor}>{label}</PaddingText>
      {icon && <Icon icon={icon} color={fontColor} />}
    </StyledButton>
  )
}

const StyledButton = styled.TouchableOpacity<{
  backgroundColor?: string
  borderColor?: string
  borderLine: boolean
}>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor};
  border-width: ${(props: { borderLine: boolean }) =>
    props.borderLine ? '0' : '1'}px;
  border-style: solid;
  border-color: ${(props: { borderColor: string }) => props.borderColor};
  border-radius: 20px;
  border-bottom-width: ${(props: { borderLine: boolean }) =>
    props.borderLine ? '2' : '1'}px;
  padding: ${spacing.medium}px;
`

const PaddingText = styled(BodyText)`
  padding-right: ${spacing.small}px;
`
