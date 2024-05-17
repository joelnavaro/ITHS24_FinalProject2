import { spacing } from '@/theme/spacing'
import styled from 'styled-components/native'

export const Separator = styled.View<{ size?: number; color?: string }>`
  height: ${(props: { size: boolean }) => (props.size ? `${props.size}` : `${spacing.small}`)}px;
  background-color: ${(props: { color?: string }) => (props.color ? props.color : 'transparent')};
`
