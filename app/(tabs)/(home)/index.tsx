import { BarButton } from '@/components/BarButton'
import { BarCard } from '@/components/BaseCard'
import { EventsList } from '@/components/EventsList'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { useFirebase } from '@/firebase/hooks/useFirebase'
import { useAppSelector } from '@/hooks/hooks'
import { selectCollection } from '@/state/events/eventSlice'
import { color } from '@/theme/color'
import { BarMenuState, EventType } from '@/utils/types'
import { isThisMonth, isThisWeek, isToday } from 'date-fns'
import { router } from 'expo-router'
import { useState } from 'react'

export default function Home() {
  const { events } = useFirebase()
  const [menuState, setMenuState] = useState(BarMenuState.day)

  const filterEvents = (events: EventType[]) => {
    return events.filter((event) => {
      const startDate = new Date(Number(event.dates.startDate))
      const endDate = new Date(Number(event.dates.endDate))

      switch (menuState) {
        case BarMenuState.day:
          return isToday(startDate) || isToday(endDate)
        case BarMenuState.week:
          return isThisWeek(startDate) || isThisWeek(endDate)
        case BarMenuState.month:
          return isThisMonth(startDate) || isThisMonth(endDate)
        default:
          return true
      }
    })
  }

  const filteredEvents = filterEvents(events)

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <BarCard row backgroundColor={color.white}>
        <BarButton
          menuState={menuState}
          label="Today"
          onPress={() => {
            setMenuState(BarMenuState.day)
          }}
        />
        <BarButton
          menuState={menuState}
          label="This Week"
          onPress={() => {
            setMenuState(BarMenuState.week)
          }}
        />
        <BarButton
          menuState={menuState}
          label="This Month"
          onPress={() => {
            setMenuState(BarMenuState.month)
          }}
        />
      </BarCard>
      <EventsList data={filteredEvents} />
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
