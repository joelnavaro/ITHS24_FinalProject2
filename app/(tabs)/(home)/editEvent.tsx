import { Button } from '@/components/Button'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { ButtonType } from '@/utils/types'
import { InputField } from '@/components/InputField'

export default function EditEventDetails() {
  const [event, setEvent] = useState({
    title: 'Event Title',
    image: 'https://picsum.photos/200/300',
    description: 'Event Description',
    dates: {
      startDate: '2021-10-10',
      endDate: '2021-10-11',
    },
    location: {
      city: 'City',
      address: 'Address',
    },
    eventType: 'Type of Event',
    eventState: 'State',
    organizer: 'Organizer',
    userAdditions: {},
  })

  const handleSave = () => {
    // Save the event here
  }

  const handleChange = (field: keyof Event | string, value: string) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }))
  }

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <ScrollContainer backgroundColor={'transparent'}>
        <InputField
          placeholder="Title"
          value={event.title}
          onChangeText={(text: string) => handleChange('title', text)}
        />
        <EventInput
          placeholder="Image URL"
          value={event.image}
          onChangeText={(text: string) => handleChange('image', text)}
        />
        <EventInput
          placeholder="Description"
          value={event.description}
          onChangeText={(text: string) => handleChange('description', text)}
        />
        <EventInput
          placeholder="Start Date"
          value={event.dates.startDate}
          onChangeText={(text: string) => handleChange('dates.startDate', text)}
        />
        <EventInput
          placeholder="End Date"
          value={event.dates.endDate}
          onChangeText={(text: string) => handleChange('dates.endDate', text)}
        />
        <EventInput
          placeholder="City"
          value={event.location.city}
          onChangeText={(text: string) => handleChange('location.city', text)}
        />
        <EventInput
          placeholder="Address"
          value={event.location.address}
          onChangeText={(text: string) => handleChange('location.address', text)}
        />
        <EventInput
          placeholder="Type"
          value={event.eventType}
          onChangeText={(text: string) => handleChange('eventType', text)}
        />
        <EventInput
          placeholder="State"
          value={event.eventState}
          onChangeText={(text: string) => handleChange('eventState', text)}
        />
        <EventInput
          placeholder="Organizer"
          value={event.organizer}
          onChangeText={(text: string) => handleChange('organizer', text)}
        />
        <Button label="Save Event" type={ButtonType.textButton} onPress={handleSave} />
      </ScrollContainer>
    </ScreenBase>
  )
}

const EventInput = styled.TextInput`
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${color.lightGray};
  color: #333;
  font-size: 16px;
  margin-bottom: ${spacing.medium}px;
`
