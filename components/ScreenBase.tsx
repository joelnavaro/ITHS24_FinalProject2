import styled from 'styled-components/native'
import { color } from '../theme/color'
import { spacing } from '../theme/spacing'

export const ScreenBase = styled.View<{ backgroundColor: string }>`
  flex: 1;
  /* justify-content: flex-end; */
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : color.white};
  padding: 0px ${spacing.small}px;
  gap: ${spacing.small}px;
`
export const Container = styled.View<{ row?: boolean; wrap?: boolean }>`
  flex-direction: ${(props: { row: boolean }) => (props.row ? 'row' : 'column')};
  flex-wrap: ${(props: { wrap: boolean }) => (props.wrap ? 'wrap' : 'nowrap')};
`
export const SpaceEvenly = styled.View<{ transparent?: boolean }>`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 ${spacing.medium}px;
  background-color: ${(props: { transparent: boolean }) => (props.transparent ? 'transparent' : `${color.white}`)};
`
export const ScrollContainer = styled.ScrollView<{ backgroundColor?: string }>`
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
`
