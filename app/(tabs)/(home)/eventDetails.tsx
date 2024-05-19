import { BaseCard } from '@/components/BaseCard'
import { Button, ButtonsContainer } from '@/components/Button'
import { NotesContainer } from '@/components/NotesContainer'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { BodyText, Title } from '@/components/Text'
import { IconEnum } from '@/components/icons/Icons'
import { useFirebase } from '@/firebase/hooks/useFirebase'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { formatDate } from '@/utils/dateUtils'
import { showAlert } from '@/utils/navigationUtils'
import { ButtonType } from '@/utils/types'
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import styled from 'styled-components/native'

export default function EventDetails() {
  const { events, deleteNote, addNote, deleteEvent } = useFirebase()
  const { id } = useLocalSearchParams<{ id: string }>()
  const [currentNote, setCurrentNote] = useState('')
  const [isValid, setIsValid] = useState(true)

  const findEvent = () => {
    const event = events.find((event) => event.id === id)
    return event
  }
  const fbEvent = findEvent()

  const handleSaveNote = async () => {
    if (currentNote.trim() === '') {
      setIsValid(false)
    } else {
      await addNote(currentNote, id!)
      setCurrentNote('')
      setIsValid(true)
    }
  }
  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id!)
      router.push('/(tabs)/(home)/')
    } catch (error) {
      showAlert(String(error))
    }
  }
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <ScrollContainer backgroundColor={'transparent'}>
        <BaseCard backgroundColor={color.white}>
          <Title>{fbEvent && fbEvent.title}</Title>
          <EventImage source={{ uri: fbEvent && fbEvent.image }} />
          <EventDescription>{fbEvent && fbEvent.description}</EventDescription>
          <EventDetailsText>Start Date: {fbEvent && formatDate(Number(fbEvent.dates.startDate))}</EventDetailsText>
          <EventDetailsText>End Date: {fbEvent && formatDate(Number(fbEvent.dates.endDate))}</EventDetailsText>
          <EventDetailsText>City: {fbEvent && fbEvent.location.city}</EventDetailsText>
          <EventDetailsText>Address: {fbEvent && fbEvent.location.address}</EventDetailsText>
          <EventDetailsText>Type: {fbEvent && fbEvent.eventType}</EventDetailsText>
          <EventDetailsText>State: {fbEvent && fbEvent.eventState}</EventDetailsText>
          <EventDetailsText>Organizer: {fbEvent && fbEvent.organizer}</EventDetailsText>
          <NotesContainer content={(fbEvent && fbEvent.userAdditions) || []} eventId={id!} onPress={deleteNote} />
          <NotesSection>
            <NotesLabel>Notes:</NotesLabel>
            <NotesInput
              multiline
              numberOfLines={4}
              placeholder="Add your notes here..."
              placeholderTextColor={color.white}
              value={currentNote}
              onChangeText={setCurrentNote}
              isValid={isValid}
            />
            <Button label="Add a Note" type={ButtonType.textButton} onPress={async () => await handleSaveNote()} />
            <ButtonsContainer>
              <Button
                label="Delete Event"
                type={ButtonType.secondary}
                icon={IconEnum.close}
                onPress={handleDeleteEvent}
              />
              <Button
                label="Edit Event"
                type={ButtonType.primary}
                icon={IconEnum.edit}
                onPress={() => {
                  router.push({
                    pathname: '/(tabs)/(home)/editEvent',
                    params: { id: id },
                  })
                }}
              />
            </ButtonsContainer>
          </NotesSection>
        </BaseCard>
      </ScrollContainer>
    </ScreenBase>
  )
}

const EventImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: ${spacing.medium}px;
  margin-bottom: 10px;
`

const EventDescription = styled(BodyText)`
  color: #666;
  margin-bottom: 10px;
`

const EventDetailsText = styled.Text`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`

const NotesSection = styled.View`
  margin-top: 20px;
`

const NotesLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`

const NotesInput = styled.TextInput<{ isValid: boolean }>`
  height: 100px;
  padding: 10px;
  border: 1px solid ${(props: { isValid: boolean }) => (props.isValid ? '#ccc' : 'red')};
  border-radius: 5px;
  background-color: ${color.lightGray};
  color: #333;
  font-size: 16px;
`
