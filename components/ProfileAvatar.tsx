import { FC, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { Camera } from './icons/Camera'
import { getUserCredAs, userInfoAsKey } from '@/utils/asyncStorageUtils'
import { User } from './icons/user'
import { useAppSelector } from '@/hooks/hooks'
import { selectAuthState } from '@/state/user/userSlice'

export const ProfileAvatar: FC<{
  route?: string
  size?: number
  focused?: boolean
}> = ({ route, size, focused }) => {
  const user = useAppSelector(selectAuthState)
  const [avatar, setAvatar] = useState<string>()

  const fetchAvatar = useCallback(async () => {
    if (user.uid !== null) {
      const result = await getUserCredAs(user.uid)
      if (result) {
        setAvatar(result.profilePicture)
      } else {
        return
      }
    } else {
      return
    }
  }, [user.uid])

  useEffect(() => {
    fetchAvatar()
  }, [fetchAvatar])

  return avatar ? (
    <UserAvatar source={{ uri: avatar }} size={size} />
  ) : (
    <IconContainer route={!!route}>
      {route === '(profile)' ? (
        <User
          height={30}
          width={30}
          color={focused ? color.warning : color.white}
        />
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
