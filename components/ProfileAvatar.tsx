import { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { color } from '@/theme/color'
import { Camera } from './icons/Camera'
import { getUserCredAs, userInfoAsKey } from '@/utils/asyncStorageUtils'

export const ProfileAvatar = () => {
  const [avatar, setAvatar] = useState<string>()

  const fetchAvatar = async () => {
    const data = await getUserCredAs(userInfoAsKey)
    if (data !== null) setAvatar(data.profilePicture)
  }

  useEffect(() => {
    fetchAvatar()
  }, [])

  return avatar ? (
    <UserAvatar source={{ uri: avatar }} />
  ) : (
    <IconContainer>
      <Camera height={30} width={30} color={color.lightGray} />
    </IconContainer>
  )
}

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${color.black};
`
const UserAvatar = styled.Image`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${color.success};
`
