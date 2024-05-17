import { FC } from 'react'
import { BaseCard } from './BaseCard'
import { color } from '@/theme/color'
import styled from 'styled-components/native'
import { spacing } from '@/theme/spacing'
import { BodyText } from './Text'
import { Chevron } from './icons/Chevron'
import { Touchable } from './Button'
import { router } from 'expo-router'
import { Separator } from './Separator'
import { IconText } from './IconText'
import { IconEnum } from './icons/Icons'
import { formatDate } from '@/utils/dateUtils'

export const EventCard: FC<{
  title: string
  image: string
  endDate: string
  typeOfEvent: string
  eventState: string
  location: string
}> = ({ title, image, endDate, typeOfEvent, eventState, location }) => {
  const navigate = () => {
    router.push('/(tabs)/eventDetails')
  }
  return (
    <Container backgroundColor={'transparent'}>
      <StyledBaseCard backgroundColor={color.champagne}>
        <StyledImage source={{ uri: image || undefined }} background={!!image} />
      </StyledBaseCard>
      <StyledRow backgroundColor={color.seaShell}>
        <VerticalView>
          <TitleContainer>
            <BodyText bold>{title}</BodyText>
          </TitleContainer>
          <Separator size={1} color={color.black} />
          <HorizontalView>
            <VerticalView>
              <IconText label={typeOfEvent} icon={IconEnum.star} />
              <IconText label={location} icon={IconEnum.landmark} />
            </VerticalView>
            <VerticalView>
              <IconText label={eventState} icon={IconEnum.star} />
              <IconText label={formatDate(Number(endDate))} icon={IconEnum.calendar} />
            </VerticalView>
          </HorizontalView>
        </VerticalView>
        <Touchable onPress={navigate}>
          <Chevron
            height={35}
            width={35}
            color={color.darkSlate}
            viewBox="0 -1 24 24"
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
  background-color: ${(props: { background: boolean }) => (props.background ? color.white : color.lightGray)};
`
const StyledBaseCard = styled(BaseCard)`
  padding: 5px;
`
const StyledRow = styled(BaseCard)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${spacing.medium}px;
  padding: 4px;
`
const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`

const VerticalView = styled.View`
  flex: 1;
`
const HorizontalView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`
