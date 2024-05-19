import { BarButton } from '@/components/BarButton'
import { BarCard } from '@/components/BaseCard'
import { EventsList } from '@/components/EventsList'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { useAppSelector } from '@/hooks/hooks'
import { selectCollection } from '@/state/events/eventSlice'
import { color } from '@/theme/color'
import { router } from 'expo-router'
import { useState } from 'react'

const enum MenuState {
  day = 'day',
  week = 'week',
  month = 'month',
}

export default function Home() {
  const events = useAppSelector(selectCollection)
  const [menuState, setMenuState] = useState(MenuState.day)
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <BarCard row backgroundColor={color.white}>
        <BarButton
          label="Today"
          onPress={() => {
            setMenuState(MenuState.day)
          }}
        />
        <BarButton
          label="This Week"
          onPress={() => {
            setMenuState(MenuState.week)
          }}
        />
        <BarButton
          label="This Month"
          onPress={() => {
            setMenuState(MenuState.month)
          }}
        />
      </BarCard>
      <EventsList data={events} />
      <BarCard row backgroundColor={color.white}>
        <BarButton
          label="Create Event"
          onPress={() => {
            router.push('/(tabs)/(home)/createEvent')
          }}
        />
      </BarCard>
    </ScreenBase>
  )
}
