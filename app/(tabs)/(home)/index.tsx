import { BaseCard } from '@/components/BaseCard'
import { EventCard } from '@/components/EventCard'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { color } from '@/theme/color'

export default function Home() {
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <BaseCard backgroundColor={color.white}></BaseCard>

      <ScrollContainer backgroundColor={color.lightGray}>
        <Separator size={20} />

        <EventCard />
        <EventCard />
      </ScrollContainer>
    </ScreenBase>
  )
}
