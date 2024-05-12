import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { ScrollContainer } from '@/components/ScreenBase'
import { BodyText } from '@/components/Text'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { ButtonType } from '@/utils/types'
import { router } from 'expo-router'
import styled from 'styled-components/native'

export default function WelcomePage() {
  return (
    <StyledScrollContainer
      contentContainerStyle={{
        height: '100%',
        justifyContent: 'space-evenly',
      }}
      backgroundColor={color.primary}
    >
      <BaseCard>
        <BodyText>Header</BodyText>
        <BodyText>Add app's name here</BodyText>
        <BodyText>
          Add welcoming message. play with size and color of the text
        </BodyText>
      </BaseCard>
      <BaseCard backgroundColor={color.lightGrey}>
        <PaddingButton
          label="Sign In"
          type={ButtonType.primary}
          onPress={() => router.push('/signin')}
        />
        <PaddingButton
          label="Sign Up"
          type={ButtonType.secondary}
          onPress={() => router.push('/signup')}
        />
      </BaseCard>
    </StyledScrollContainer>
  )
}

const StyledScrollContainer = styled(ScrollContainer)`
  margin-top: 0;
  padding: 10px;
`
const PaddingButton = styled(Button)`
  margin: ${spacing.small}px 0px;
`
