import { Icon, IconEnum } from '@/components/icons/Icons'
import styled from 'styled-components/native'
import { theme } from '@/theme'

export default function icons() {
  const iconsArray = Object.values(IconEnum)
  return (
    <ScreenContainer>
      {iconsArray.map((icon, index) => {
        return (
          <IconContainer key={index}>
            <Icon icon={icon} height={40} width={40} />
          </IconContainer>
        )
      })}
    </ScreenContainer>
  )
}
const ScreenContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 40px;
  border: 1px solid ${theme.color.darkSlate};
  border-radius: ${theme.spacing.small}px;
  padding: ${theme.spacing.xsmall}px;
`
