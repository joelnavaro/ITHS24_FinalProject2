import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { CheckboxList } from '@/components/CheckBoxList'
import { InputDate } from '@/components/InputDate'
import { InputField } from '@/components/InputField'
import { LoadingIndicator } from '@/components/LoadingIndicator'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { Title } from '@/components/Text'
import { useFirebase } from '@/firebase/hooks/useFirebase'
import { useAppDispatch } from '@/hooks/hooks'
import { addEvent } from '@/state/events/eventSlice'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { EventType } from '@/utils/types'
import { useCallback, useState } from 'react'
import styled from 'styled-components/native'
import { PicturePicker } from '@/components/PicturePicker'
import { Alert } from 'react-native'

export default function CreateEvent() {
  const { saveEvent, requestState } = useFirebase()
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState<EventType>({
    id: '',
    title: '',
    image: '',
    description: '',
    dates: {
      startDate: '',
      endDate: '',
    },
    location: {
      city: '',
      address: '',
    },
    eventType: '',
    eventState: '',
    organizer: '',
    userAdditions: [],
  })
  const eventTypeList = ['Workshop', 'Seminar', 'Meetup', 'Concert', 'Festival', 'Competition', 'Course']
  const eventStateList = ['Active', 'Inactive', 'Completed']

  const getEmptyFields = (form: EventType) => {
    const emptyFields = []
    if (!form.title) emptyFields.push('Title')
    if (!form.image) emptyFields.push('Image')
    if (!form.description) emptyFields.push('Description')
    if (!form.dates.startDate) emptyFields.push('Start Date')
    if (!form.dates.endDate) emptyFields.push('End Date')
    if (!form.location.city) emptyFields.push('City')
    if (!form.location.address) emptyFields.push('Address')
    if (!form.eventType) emptyFields.push('Event Type')
    if (!form.eventState) emptyFields.push('Event State')
    if (!form.organizer) emptyFields.push('Organizer')
    return emptyFields
  }

  const handleSave = async () => {
    const emptyFields = getEmptyFields(formState)
    if (emptyFields.length > 0) {
      Alert.alert('Please fill up the fields', emptyFields.join(', '))
      return
    }
    try {
      const form: EventType = { ...formState, id: Date.now().toString() }
      dispatch(addEvent(form))
      await saveEvent(form)
    } catch (error) {
      console.log('error', error)
    }
  }
  const handleStartDate = useCallback((value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      dates: { ...prevState.dates, startDate: value },
    }))
  }, [])
  const handleEndDate = useCallback((value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      dates: { ...prevState.dates, endDate: value },
    }))
  }, [])

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <ScrollContainer backgroundColor={'transparent'}>
        <BaseCard>
          <Title>Create Event.</Title>
          <InputField
            label={'Title'}
            placeholder={'Title'}
            value={formState.title}
            onChangeText={(value) => setFormState({ ...formState, title: value })}
          />
          <InputField
            label={'Description'}
            placeholder={'Description'}
            value={formState.description}
            onChangeText={(value) => setFormState({ ...formState, description: value })}
          />
          <InputField
            label={'City'}
            placeholder={'City'}
            value={formState.location.city}
            onChangeText={(value) =>
              setFormState({
                ...formState,
                location: { ...formState.location, city: value },
              })
            }
          />
          <InputField
            label={'Address'}
            placeholder={'Address'}
            value={formState.location.address}
            onChangeText={(value) =>
              setFormState({
                ...formState,
                location: { ...formState.location, address: value },
              })
            }
          />
          <InputField
            label={'Organizer'}
            placeholder={'Description'}
            value={formState.organizer}
            onChangeText={(value) => setFormState({ ...formState, organizer: value })}
          />
          <Separator size={1} color={color.black} />
          <InputDate label="Start Date" onChange={handleStartDate} />

          <InputDate label="End Date" onChange={handleEndDate} />

          <Separator size={1} color={color.black} />
          <StyledCard backgroundColor={color.white}>
            <CheckboxList
              label="Type of event"
              types={eventTypeList}
              onSelect={(index: number, values: string[]) => {
                setFormState({ ...formState, eventType: values[index] })
              }}
            />
            <Separator size={1} color={color.black} />
            <CheckboxList
              label="Current state of the event"
              types={eventStateList}
              onSelect={(index: number, values: string[]) => {
                setFormState({ ...formState, eventState: values[index] })
              }}
            />
            <Separator size={1} color={color.black} />
            <PicturePicker setImage={(image: string) => setFormState({ ...formState, image: image })} />
          </StyledCard>
          <Separator size={1} color={color.black} />
          <Button label="Save" onPress={() => handleSave()} />
          <Separator size={50} />
        </BaseCard>
      </ScrollContainer>
      <LoadingIndicator status={requestState} isModal={false} />
    </ScreenBase>
  )
}

const StyledCard = styled(BaseCard)`
  padding: ${spacing.small}px;
`
