import { Stack } from 'expo-router'
import { defaultNavigationOptions } from '../../../utils/navigationUtils'

export default function _layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: 'Search',
      })}
    />
  )
}
