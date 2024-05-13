import { BaseCard } from '@/components/BaseCard'
import { ScreenBase } from '@/components/ScreenBase'
import { color } from '@/theme/color'

export default function Profile() {
  return (
    <ScreenBase backgroundColor={color.darkGray5}>
      <BaseCard></BaseCard>
    </ScreenBase>
  )
}
