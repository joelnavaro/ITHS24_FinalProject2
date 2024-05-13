import { FC, useState } from 'react'
import styled from 'styled-components/native'
import { Icon, IconEnum } from './icons/Icons'
import { color } from '../theme/color'
import { TextInputProps, TouchableOpacity, View } from 'react-native'
import { spacing } from '../theme/spacing'
import { BodyText, SmallText } from './Text'
import { fontSize } from '../theme/font'

interface InputFieldProps extends TextInputProps {
  value?: string
  label?: string
  icon?: IconEnum
  error?: string
  placeholder?: string
  onChangeText?: (value: string) => void
  disabled?: boolean
}

export const InputField: FC<InputFieldProps> = ({
  value,
  label,
  icon,
  error,
  placeholder,
  onChangeText,
  disabled,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  return (
    <View>
      {label && <PaddingText bold>{label}</PaddingText>}
      <InputContainer error={!!error}>
        <StyledInput
          value={value}
          onChangeText={onChangeText}
          hasValue={!!value}
          hasFocus={isFocused}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onEndEditing={() => setIsFocused(false)}
          placeholderTextColor={color.darkSlate}
          editable={disabled}
          secureTextEntry={label === 'Password' && !showPassword}
          {...props}
        />
        {icon && (
          <TouchableOpacity
            onPress={() => {
              label === 'Password' && setShowPassword(!showPassword)
            }}
          >
            <Icon
              icon={icon}
              color={value || isFocused ? color.darkSlate : color.fernGreen}
            />
          </TouchableOpacity>
        )}
      </InputContainer>
      {error && (
        <SmallText color={color.error} size={fontSize.small}>
          {error}
        </SmallText>
      )}
    </View>
  )
}
const InputContainer = styled.View<{ hasValue: boolean; error: boolean }>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props: { hasValue: boolean }) =>
    props.hasValue ? color.lightGrey : color.darkSlate};
  background-color: ${color.darkGray5};
  border: 1px solid
    ${(props: { error: boolean }) =>
      props.error ? color.error : color.darkSlate};
  border-radius: ${spacing.medium}px;
  padding: ${spacing.xsmall}px ${spacing.medium}px;
  margin-top: ${spacing.xsmall}px;
  margin-bottom: ${spacing.small}px;
`

const PaddingText = styled(BodyText)`
  margin-left: ${spacing.small}px;
`
const StyledInput = styled.TextInput`
  flex-grow: 1;
  /* background-color: 'red'; */
  height: 45px;
`
