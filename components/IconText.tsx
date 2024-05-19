import { FC } from 'react'
import { Icon, IconEnum } from './icons/Icons'
import styled from 'styled-components/native'
import { BodyText } from './Text'

export const IconText: FC<{ label: string; icon: IconEnum }> = ({ label, icon }) => {
  return (
    <HorizontalView>
      <Icon icon={icon} width={24} height={24} />
      <TextSize>{label}</TextSize>
    </HorizontalView>
  )
}

const HorizontalView = styled.View`
  flex-direction: row;
  align-items: center;
`
const TextSize = styled(BodyText)`
  font-size: 14px;
`
