import styled from 'styled-components/native'
import { color } from '../theme/color'
import { spacing } from '../theme/spacing'

export const ScreenBase = styled.View`
  flex: 1;
  background-color: ${color.white};
  padding: ${spacing.medium}px;
`
export const Container = styled.View<{direction?: boolean, wrap?: boolean}>`
flex-direction: ${(props: { direction: boolean }) => (props.direction ? 'row' : 'column')};
flex-wrap: ${(props: { wrap: boolean }) => (props.wrap ? 'wrap' : 'nowrap')};
`
export const SpaceEvenly = styled.View<{ transparent?: boolean }>`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 ${spacing.medium}px;
  background-color: ${(props: { transparent: boolean }) => (props.transparent ? 'transparent' : `${color.white}`)};
`
