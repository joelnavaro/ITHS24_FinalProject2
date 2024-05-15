import { ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Button } from '@/components/Button'
import { ButtonType } from '@/utils/types'
import { router } from 'expo-router'
import { Separator } from '@/components/Separator'

export default function Library() {
  return (
    <ScreenBase>
      <ScrollContainer>
        <Separator />
        <Button
          label="Colors"
          type={ButtonType.primary}
          onPress={() => {
            router.push('colors')
          }}
        />
        <Separator />

        <Button
          label="Buttons"
          type={ButtonType.secondary}
          onPress={() => {
            router.push('buttons')
          }}
        />
        <Separator />

        <Button
          label="Fields"
          type={ButtonType.complement}
          onPress={() => {
            router.push('inputFields')
          }}
        />
        <Separator />

        <Button
          label="Icons"
          type={ButtonType.secondary}
          onPress={() => {
            router.push('icons')
          }}
        />
        <Separator />
      </ScrollContainer>
    </ScreenBase>
  )
}
