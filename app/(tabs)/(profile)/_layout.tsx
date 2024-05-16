import { Stack } from 'expo-router'
import { defaultNavigationOptions } from '../../../utils/navigationUtils'

export default function Profilelayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: 'Profile',
      })}
    />
  )
}
