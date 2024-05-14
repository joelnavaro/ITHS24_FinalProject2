import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import styled from 'styled-components/native'

//transparent background
export const ModalBase = styled.Pressable`
  flex: 1;
  background-color: 'transparent';
  align-items: center;
  justify-content: flex-end;
`
//opacity background
export const ModalContainer = styled.View`
  /* align-items: center; */
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  border-radius: ${spacing.large}px;
  padding: ${spacing.small}px;
`
//flatcolor background
export const ModalContent = styled.View`
  width: 100%;
  background-color: ${color.white};
  padding: ${spacing.large}px;
  padding-top: ${spacing.xlarge}px;
  padding-bottom: ${spacing.large}%;
  border-top-right-radius: ${spacing.large}px;
  border-top-left-radius: ${spacing.large}px;
`
