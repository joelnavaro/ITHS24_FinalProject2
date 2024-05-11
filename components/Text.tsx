import styled from 'styled-components/native'
import { theme } from '../theme'
import { fontSize } from '../theme/font'
import { spacing } from '../theme/spacing'

//adjust these components ASAP

export const BodyText = styled.Text<{ bold?: boolean; color?: string; size?: number }>`
  font-family: ${(props: { bold?: boolean }) => (props.bold ? theme.fontFamily.bold : theme.fontFamily.regular)};
  color: ${(props: { color?: string }) => (props.color ? props.color : theme.color.black)};
  font-size: ${(props: { size?: number }) => (props.size ? props.size : theme.fontSize.default)}px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 'bold' : '400')};
  margin-bottom: ${(props: { bold?: boolean }) => (props.bold ? `${spacing.medium}` : 0)}px;
`
export const Title = styled(BodyText)`
  font-family: ${theme.fontFamily.bold};
  font-size: ${theme.fontSize.large}px;
  font-weight: 700;
`

export const SmallText = styled(BodyText)`
  font-size: ${fontSize.small}px;
`
