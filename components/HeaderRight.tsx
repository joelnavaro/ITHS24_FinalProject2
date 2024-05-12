import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { Icon, IconEnum } from './icons/Icons'

export const HeaderRight: FC<{
  icon: IconEnum
  color: string
  route: RouteProp<ParamListBase, string>
  onPress: () => void
}> = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Icon icon={icon} height={24} width={24} color={color} />
    </Pressable>
  )
}
