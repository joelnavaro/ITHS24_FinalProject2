import React, { FC } from 'react'
import { color } from '../theme/color'
import { Account } from './icons/Account'
import { Pressable } from 'react-native'
import { router } from 'expo-router'
import { ParamListBase, RouteProp } from '@react-navigation/native'

export const HeaderRight: FC<{ route: RouteProp<ParamListBase, string> }> = () => {
  return (
    <Pressable onPress={() => router.push('/profile')}>
      <Account height={24} width={24} color={color.white} />
    </Pressable>
  )
}
