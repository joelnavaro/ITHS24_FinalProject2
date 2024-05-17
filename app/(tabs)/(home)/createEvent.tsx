import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { InputDate } from '@/components/InputDate'
import { InputField } from '@/components/InputField'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { useFirebase } from '@/firebase/hooks/useFirebase'
import { useAppDispatch } from '@/hooks/hooks'
import { addEvent } from '@/state/events/eventSlice'
import { color } from '@/theme/color'
import { useState } from 'react'

export default function CreateEvent() {
  const { saveEvent } = useFirebase()
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState({
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
  const handleSave = () => {
    const form = { ...formState, id: Date.now().toString() }
    // dispatchEvent(addEvent({ event: form as EventType }))
    saveEvent(form)
  }

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <ScrollContainer backgroundColor={'transparent'}>
        <BaseCard>
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
          <InputDate
            label={'Start Date'}
            // value={formState.dates.startDate}
            onChange={(value: string) => {
              setFormState({
                ...formState,
                dates: { ...formState.dates, startDate: value },
              })
            }}
          />
          <InputDate
            label={'End Date'}
            // value={formState.dates.startDate}
            onChange={(value: string) =>
              setFormState({
                ...formState,
                dates: { ...formState.dates, endDate: value },
              })
            }
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
            label={'Event Type'}
            placeholder={'Event Type'}
            value={formState.eventType}
            onChangeText={(value) => setFormState({ ...formState, eventType: value })}
          />
          <InputField
            label={'Event State'}
            placeholder={'Event State'}
            value={formState.eventState}
            onChangeText={(value) => setFormState({ ...formState, eventState: value })}
          />
          <InputField
            label={'Organizer'}
            placeholder={'Description'}
            value={formState.organizer}
            onChangeText={(value) => setFormState({ ...formState, organizer: value })}
          />
          <Button label="Save" onPress={() => handleSave()} />
          <Separator size={50} />
        </BaseCard>
      </ScrollContainer>
    </ScreenBase>
  )
}
