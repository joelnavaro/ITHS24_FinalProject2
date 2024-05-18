import { FC } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { Camera } from './icons/Camera'
import { User } from './icons/user'
import { useAppSelector } from '@/hooks/hooks'
import { selectAuthState } from '@/state/user/userSlice'

export const ProfileAvatar: FC<{
  route?: string
  size?: number
  focused?: boolean
}> = ({ route, size, focused }) => {
  const user = useAppSelector(selectAuthState)
  const hasProfilePicture =
    user.profilePicture !== '' && user.profilePicture !== undefined && user.profilePicture !== null

  return hasProfilePicture ? (
    <UserAvatar source={{ uri: user.profilePicture }} size={size} />
  ) : (
    <IconContainer route={!!route}>
      {route === '(profile)' ? (
        <User height={30} width={30} color={focused ? color.warning : color.white} />
      ) : (
        <Camera height={30} width={30} color={color.lightGray} />
      )}
    </IconContainer>
  )
}

const IconContainer = styled.View<{ route?: boolean; size?: number }>`
  justify-content: center;
  align-items: center;
  width: ${(props: { size: number }) => (props.size ? props.size : 60)}px;
  height: ${(props: { size: number }) => (props.size ? props.size : 60)}px;
  border-radius: 50px;
  border-width: ${(props: { route: boolean }) => (props.route ? 0 : 2)}px;
  border-color: ${color.black};
`
const UserAvatar = styled.Image<{ route?: boolean; size?: number }>`
  justify-content: center;
  align-items: center;
  width: ${(props: { size: number }) => (props.size ? props.size : 60)}px;
  height: ${(props: { size: number }) => (props.size ? props.size : 60)}px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${color.success};
`
