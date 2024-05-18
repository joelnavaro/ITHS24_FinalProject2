import { FC } from 'react'
import styled from 'styled-components/native'
import { BodyText } from './Text'
import { color } from '@/theme/color'

interface CheckboxProps {
  label: string
  checked: boolean
  onValueChange: () => void
}

export const CheckboxComponent: FC<CheckboxProps> = ({ label, checked, onValueChange }) => {
  // const toggleCheckbox = () => {
  //   onValueChange()
  // }

  return (
    <Container onPress={onValueChange}>
      <CheckBox checked={checked} />
      <BodyText>{label}</BodyText>
    </Container>
  )
}
const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 0px 5px;
`
const CheckBox = styled.View<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${(props: { checked: boolean }) => (props.checked ? `${color.success}` : 'black')};
  background-color: ${(props: { checked: boolean }) => (props.checked ? `${color.success}` : 'white')};
  margin-right: 10px;
`
