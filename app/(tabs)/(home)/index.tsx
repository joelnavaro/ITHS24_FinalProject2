import { BarButton } from '@/components/BarButton'
import { BarCard } from '@/components/BaseCard'
import { EventsList } from '@/components/EventsList'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { color } from '@/theme/color'
import { useState } from 'react'

const enum MenuState {
  day = 'day',
  week = 'week',
  month = 'month',
}

export default function Home() {
  const [menuState, setMenuState] = useState(MenuState.day)
  const day: string[] = ['a', 'b', 'c']
  const week: string[] = ['e', 'f', 'g']
  const month: string[] = ['h', 'i', 'j']
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
        <BarButton
          label="This Year"
          onPress={() => {
            // setMenuState(MenuState.month)
          }}
        />
      </BarCard>

      <EventsList
        data={
          menuState === MenuState.week
            ? week
            : menuState === MenuState.month
              ? month
              : day
        }
      />
    </ScreenBase>
  )
}
