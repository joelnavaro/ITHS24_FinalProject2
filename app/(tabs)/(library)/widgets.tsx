import { BarCard, BaseCard } from '@/components/BaseCard'
import { CheckboxList } from '@/components/CheckBoxList'
import { NotesContainer } from '@/components/NotesContainer'
import { ProfileBar } from '@/components/ProfileBar'
import { Container, ScreenBase, ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { BodyText } from '@/components/Text'
import { color } from '@/theme/color'

export default function InputFields() {
  return (
    <ScreenBase>
      <ScrollContainer>
        <Container>
          <Separator size={5} />
          <BarCard backgroundColor={color.primary}>
            <ProfileBar canEdit />
          </BarCard>
          <Separator size={10} />
          <BaseCard backgroundColor={color.champagne}>
            <BodyText>Editable color cards.</BodyText>
            <Separator size={60} />
          </BaseCard>
          <Separator size={10} />
          <BarCard backgroundColor={color.white}>
            <CheckboxList label="Checkbox" types={['checkbox 1', 'checkbox 2', 'checkbox 3']} onSelect={() => {}} />
          </BarCard>
          <BaseCard backgroundColor={color.white}>
            <NotesContainer
              content={['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']}
              eventId="1"
              onPress={async (noteIndex: number, eventId: string) => {}}
            />
          </BaseCard>
        </Container>
      </ScrollContainer>
    </ScreenBase>
  )
}
