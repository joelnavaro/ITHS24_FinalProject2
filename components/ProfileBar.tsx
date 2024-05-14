import { FC } from 'react'
import { ProfileAvatar } from './ProfileAvatar'
import { BodyText, Title } from './Text'
import { IconButton } from './IconButton'
import { IconEnum } from './icons/Icons'
import { color } from '@/theme/color'
import { router } from 'expo-router'
import styled from 'styled-components/native'
import { spacing } from '@/theme/spacing'
import { BaseCard } from './BaseCard'

export const ProfileBar: FC<{ canEdit?: boolean }> = ({ canEdit }) => {
  return (
    <ProfileCard>
      <ProfileAvatar />
      <Section>
        <Title>John Doe</Title>
        <BodyText>John Doeeeeeeeeeeeeeeeee</BodyText>
      </Section>
      {canEdit && (
        <IconButton
          icon={IconEnum.edit}
          size={30}
          color={color.black}
          onPress={() => {
            router.push('/(modals)/editProfileModal')
          }}
        />
      )}
    </ProfileCard>
  )
}

const ProfileCard = styled(BaseCard)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.xsmall}px ${spacing.small}px;
`
const Section = styled.View`
  justify-content: center;
  margin: 0px ${spacing.small}px;
`
