import { Button, ButtonsContainer } from '@/components/Button'
import { Container, ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { IconEnum } from '@/components/icons/Icons'
import { ButtonType } from '@/utils/types'

export default function Buttons() {
  return (
    <ScreenBase>
      <ScrollContainer>
        <Container>
          <Button label="Primary Button" type={ButtonType.primary} />
          <Separator size={10} />

          <Button label="Secondary Button" type={ButtonType.secondary} />
          <Separator size={10} />

          <Button label="Icon Button" type={ButtonType.success} icon={IconEnum.star} />
          <Separator size={10} />

          <Button label="Disabled Button" type={ButtonType.disable} />
          <Separator size={10} />

          <Button label="Text Button" type={ButtonType.textButton} />
          <Separator size={10} />

          <ButtonsContainer>
            <Button label="Button 1" type={ButtonType.primary} icon={IconEnum.check} />
            <Button label="Button 2" type={ButtonType.secondary} icon={IconEnum.check} />
          </ButtonsContainer>
          <Separator size={10} />

          {/* Icon buttons */}
        </Container>
      </ScrollContainer>
    </ScreenBase>
  )
}
