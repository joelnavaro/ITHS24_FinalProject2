import { Button } from '@/components/Button'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { ButtonType } from '@/utils/types'
import { router, useLocalSearchParams } from 'expo-router'
import { useFirebase } from '@/firebase/hooks/useFirebase'
import { InputDate } from '@/components/InputDate'
import { Title } from '@/components/Text'
import { Separator } from '@/components/Separator'
import { showAlert } from '@/utils/navigationUtils'
import { LoadingIndicator } from '@/components/LoadingIndicator'
import { PicturePicker } from '@/components/PicturePicker'

export default function EditEventDetails() {
  const { requestState, events, updateEvent } = useFirebase()
  const { id } = useLocalSearchParams<{ id: string }>()
  const findEvent = () => {
    const event = events.find((event) => event.id === id)
    return event
  }
  const edit = findEvent()
  const [event, setEvent] = useState({
    id: edit?.id || '',
    title: edit?.title || '',
    image: edit?.image || '',
    description: edit?.description || '',
    dates: {
      startDate: edit?.dates.startDate || '',
      endDate: edit?.dates.endDate || '',
    },
    location: {
      city: edit?.location.city || '',
      address: edit?.location.address || '',
    },
    eventType: edit?.eventType || '',
    eventState: edit?.eventState || '',
    organizer: edit?.organizer || '',
    userAdditions: edit?.userAdditions || [],
  })

  const handleSave = async () => {
    try {
      await updateEvent(id!, event)
      router.push('../')
    } catch (error) {
      showAlert(String(error))
    }
  }

  const handleChange = (field: keyof Event | string, value: string) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      [field]: value,
    }))
  }
  const editStartDate = useCallback((value: string) => {
    setEvent((prevState) => ({
      ...prevState,
      dates: { ...prevState.dates, startDate: value },
    }))
  }, [])
  const editEndDate = useCallback((value: string) => {
    setEvent((prevState) => ({
      ...prevState,
      dates: { ...prevState.dates, endDate: value },
    }))
  }, [])

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <ScrollContainer backgroundColor={'transparent'}>
        <Separator size={5} />
        <Title>Edit Event.</Title>
        <Separator size={5} />
        <EventInput
          placeholder="Title"
          value={event.title}
          onChangeText={(text: string) => handleChange('title', text)}
        />
        <EventInput
          placeholder="Description"
          value={event.description}
          onChangeText={(text: string) => handleChange('description', text)}
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
        <InputDate label="Insert new start date" onChange={editStartDate} />
        <InputDate label="Insert new end date" onChange={editEndDate} />

        <PicturePicker setImage={(image: string) => handleChange('image', image)} />
        <Button label="Save Event" type={ButtonType.primary} onPress={handleSave} />
      </ScrollContainer>
      <LoadingIndicator status={requestState} isModal={false} />
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
