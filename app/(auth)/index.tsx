import { BaseCard } from '@/components/BaseCard'
import { Button } from '@/components/Button'
import { ScrollContainer } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { BodyText } from '@/components/Text'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { ButtonType } from '@/utils/types'
import { router } from 'expo-router'
import styled from 'styled-components/native'

export default function WelcomePage() {
  return (
    <StyledScrollContainer backgroundColor={color.primary}>
      <BaseCard backgroundColor={color.primary}>
        <CenteredTitle color={color.white} bold size={spacing.xxlarge}>
          Welcome to Favrapp!
        </CenteredTitle>
        <Separator size={20} />
        <BodyText bold color={color.white} size={spacing.xlarge}>
          The best app to start organizing your gigs.
        </BodyText>
      </BaseCard>
      <Separator size={100} />
      <BaseCard backgroundColor={color.seaShell}>
        <BodyText>Sign In into your account!</BodyText>
        <PaddingButton
          label="Sign In"
          type={ButtonType.primary}
          onPress={() => router.push('/signin')}
        />
        <BodyText>Create an account!</BodyText>
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
export const CenteredBodyText = styled(BodyText)`
  align-self: center;
  margin: auto;
  margin-bottom: ${spacing.small}px;
`
export const CenteredTitle = styled(BodyText)`
  align-self: center;
  margin: auto;
  margin-bottom: ${spacing.small}px;
`
