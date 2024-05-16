import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { Title } from '@/components/Text'
import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

export default function EventDetails() {
  const [notes, setNotes] = useState<string[]>([])
  const [currentNote, setCurrentNote] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSaveNote = () => {
    if (currentNote.trim() === '') {
      setIsValid(false)
    } else {
      setNotes((prevNotes) => [...prevNotes, currentNote])
      setCurrentNote('')
      setIsValid(true)
    }
  }
  const event = {
    title: 'Event Title',
    image: 'https://picsum.photos/200/300',
    description: 'Event Description',
    dates: {
      startDate: '2021-10-10',
      endDate: '2021-10-11',
    },
    location: {
      city: 'City',
      adress: 'Adress',
    },
    evenType: 'Type',
    eventState: 'State',
    organizer: 'Organizer',
  }
  return (
    <ScreenBase>
      <ScrollContainer>
        {/* <Separator size={20} /> */}
        <EventContainer>
          <Title>{event.title}</Title>
          <EventImage source={{ uri: event.image }} />
          <EventDescription>{event.description}</EventDescription>
          <EventDetailsText>
            Start Date: {event.dates.startDate}
          </EventDetailsText>
          <EventDetailsText>End Date: {event.dates.endDate}</EventDetailsText>
          <EventDetailsText>City: {event.location.city}</EventDetailsText>
          <EventDetailsText>Address: {event.location.adress}</EventDetailsText>
          <EventDetailsText>Type: {event.evenType}</EventDetailsText>
          <EventDetailsText>State: {event.eventState}</EventDetailsText>
          <EventDetailsText>Organizer: {event.organizer}</EventDetailsText>
          {/* ...existing code... */}
          <NotesSection>
            <NotesLabel>Notes:</NotesLabel>
            <NotesInput
              multiline
              numberOfLines={4}
              placeholder="Add your notes here..."
              value={currentNote}
              onChangeText={setCurrentNote}
              isValid={isValid}
            />
            <Button title="Save Note" onPress={handleSaveNote} />
          </NotesSection>
          <NotesList>
            {notes.map((note, index) => (
              <NoteItem key={index}>{note}</NoteItem>
            ))}
          </NotesList>
        </EventContainer>
      </ScrollContainer>
    </ScreenBase>
  )
}

const EventContainer = styled.View`
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-bottom: 20px;
`

const EventImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`

const EventDescription = styled.Text`
  font-size: 16px;
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
  border: 1px solid
    ${(props: { isValid: boolean }) => (props.isValid ? '#ccc' : 'red')};
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  font-size: 16px;
`
const NotesList = styled.View`
  margin-top: 20px;
`

const NoteItem = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`
