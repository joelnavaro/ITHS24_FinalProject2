import { FC, useState } from 'react'
import { CheckboxComponent } from './CheckboxComponent'
import { ScrollContainer } from './ScreenBase'
import { BodyText } from './Text'
import styled from 'styled-components/native'
import { spacing } from '@/theme/spacing'

interface CheckboxListProps {
  label: string
  types: string[]
  onSelect: (index: number, values: string[]) => void
}

export const CheckboxList: FC<CheckboxListProps> = ({ label, types, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const handleValueChange = (index: number) => {
    setSelectedIndex(index)
    onSelect(index, types)
  }
  return (
    <Container>
      <PaddingText bold>{label}</PaddingText>
      <ScrollContainer horizontal>
        {types.map((type, index) => (
          <CheckboxComponent
            key={index}
            label={type}
            checked={index === selectedIndex}
            onValueChange={() => handleValueChange(index)}
          />
        ))}
      </ScrollContainer>
    </Container>
  )
}
const Container = styled.View`
  margin: ${spacing.small}px 0px;
`
const PaddingText = styled(BodyText)`
  margin-bottom: ${spacing.small}px;
`
