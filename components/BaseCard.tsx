import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import styled from 'styled-components/native'

export const BaseCard = styled.View<{ backgroundColor: string }>`
  justify-content: center;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : color.white};
  border-radius: ${spacing.large}px;
  padding: ${spacing.large}px ${spacing.small}px;
`
