import { ActivityIndicator } from 'react-native'
import React, { FC } from 'react'
import styled from 'styled-components/native'
import { REQUEST_STATUS } from '../firebase/types'
import { spacing } from '../theme/spacing'
import { color } from '../theme/color'

export const LoadingIndicator: FC<{ status: REQUEST_STATUS; isModal: boolean }> = ({ status, isModal }) => {
  return (
    <Container type={isModal} status={status}>
      <StyledActivityIndicator deleteStatus={status} />
    </Container>
  )
}

const Container = styled.View<{ type: boolean; status: REQUEST_STATUS }>`
  padding: ${spacing.medium}px;
  position: absolute;
  justify-content: center;
  top: 45%;
  left: ${(props: { type: string }) => (props.type ? 38 : 43)}%;
  background-color: ${(props: { status: REQUEST_STATUS }) =>
    props.status === REQUEST_STATUS.LOADING ? color.lightGray : 'transparent'};
  border-radius: ${spacing.large}px;
`
const StyledActivityIndicator = styled(ActivityIndicator).attrs((props: { deleteStatus: string }) => ({
  size: 'large',
  color: '#647e51',
  animating: props.deleteStatus === REQUEST_STATUS.LOADING ? true : false,
}))`
  padding: ${spacing.medium}px;
  z-index: 100;
`
