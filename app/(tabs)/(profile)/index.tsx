import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { ProfileBar } from '@/components/ProfileBar'
import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { useAuth } from '@/firebase/hooks/useAuth'
import { color } from '@/theme/color'
import { ButtonType } from '@/utils/types'
import { useState } from 'react'

export default function Profile() {
  const { logOut } = useAuth()
  const [rerender, setRerender] = useState(false)

  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator />
      <ScrollContainer backgroundColor={color.lightGray}>
        <ProfileBar canEdit />
        <Separator />
        <BaseCard backgroundColor={color.white}>
          <Separator size={20} />
          <Button label="Cv" type={ButtonType.textButton} onPress={() => {}} />
          <Button
            label="Sign Out"
            type={ButtonType.textButton}
            onPress={() => {
              logOut()
              setRerender(!rerender)
            }}
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
            label="Delete acount"
            type={ButtonType.textButton}
            onPress={() => {}}
          />
        </BaseCard>
      </ScrollContainer>
    </ScreenBase>
  )
}
