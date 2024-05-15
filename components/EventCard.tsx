import { FC } from 'react'
import { BaseCard } from './BaseCard'
import { color } from '@/theme/color'
import styled from 'styled-components/native'
import { spacing } from '@/theme/spacing'
import { BodyText } from './Text'
import { Chevron } from './icons/Chevron'
import { Touchable } from './Button'
import { router } from 'expo-router'

export const EventCard: FC<{}> = ({}) => {
  const image = 'https://picsum.photos/200/300'
  const navigate = () => {
    router.push('/(tabs)/eventDetails')
  }
  return (
    <Container backgroundColor={'transparent'}>
      <StyledBaseCard backgroundColor={color.champagne}>
        <StyledImage
          source={{ uri: image || undefined }}
          background={!!image}
        />
      </StyledBaseCard>
      <StyledRow backgroundColor={color.champagne}>
        <BodyText>Event Card</BodyText>
        {/* insert line under the title */}
        <Touchable onPress={navigate}>
          <Chevron
            height={30}
            width={30}
            color={color.fernGreen}
            style={{ transform: [{ rotate: '90deg' }] }}
          />
        </Touchable>
      </StyledRow>
    </Container>
  )
}

const Container = styled.View<{ backgroundColor: string }>`
  flex-direction: row;
  background-color: ${(props: { backgroundColor: string }) =>
    props.backgroundColor ? props.backgroundColor : color.white};
  gap: 5px;
  margin: 5px 0px;
`
const StyledImage = styled.Image<{ background: boolean }>`
  width: 75px;
  height: 75px;
  border-radius: ${spacing.large}px;
  background-color: ${(props: { background: boolean }) =>
    props.background ? color.white : color.error};
`
const StyledBaseCard = styled(BaseCard)`
  padding: 5px;
`
const StyledRow = styled(BaseCard)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`
