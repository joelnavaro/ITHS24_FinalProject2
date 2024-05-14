import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { ProfileBar } from '@/components/ProfileBar'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'
import { ButtonType } from '@/utils/types'

export default function Profile() {
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator />
      <ScrollContainer backgroundColor={color.lightGray}>
        <ProfileBar canEdit />
        <Separator size={20} />
        <BaseCard backgroundColor={color.white}>
          <Separator size={20} />
          <Button label="Cv" type={ButtonType.textButton} onPress={() => {}} />
          <Button
            label="Sign Out"
            type={ButtonType.textButton}
            onPress={() => {}}
          />
          <Button
            label="Preferences"
            type={ButtonType.textButton}
            onPress={() => {}}
          />
        </BaseCard>
        <Separator />
        <BaseCard backgroundColor={color.white}>
          <Button
            label="Log out"
            type={ButtonType.textButton}
            onPress={() => {}}
          />
        </BaseCard>
      </ScrollContainer>
    </ScreenBase>
  )
}
