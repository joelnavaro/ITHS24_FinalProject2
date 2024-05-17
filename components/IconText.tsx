import { FC } from 'react'
import { Icon, IconEnum } from './icons/Icons'
import styled from 'styled-components/native'
import { BodyText } from './Text'

export const IconText: FC<{ label: string; icon: IconEnum }> = ({ label, icon }) => {
  return (
    <HorizontalView>
      <Icon icon={icon} width={24} height={24} />
      <BodyText>{label}</BodyText>
    </HorizontalView>
  )
}

const HorizontalView = styled.View`
  flex-direction: row;
`
