import { spacing } from '@/theme/spacing'
import styled from 'styled-components/native'

export const Separator = styled.View<{ size?: number }>`
  height: ${(props: { size: boolean }) =>
    props.size ? `${props.size}` : `${spacing.small}`}px;
`
