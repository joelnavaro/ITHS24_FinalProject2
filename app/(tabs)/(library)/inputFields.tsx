import { InputField } from '@/components/InputField'
import { Container, ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { IconEnum } from '@/components/icons/Icons'

export default function InputFields() {
  return (
    <ScreenBase>
      <ScrollContainer>
        <Container>
          <Separator size={10} />
          <InputField label="PlaneField" value="" placeholder="Text" />
          <InputField label="InputField" value="" placeholder="Text" />
          <Separator size={10} />
          <InputField
            label="SearchField"
            value=""
            placeholder="Text"
            icon={IconEnum.search}
          />
        </Container>
      </ScrollContainer>
    </ScreenBase>
  )
}
