import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'transparent',
        },
      }}
    />
  )
}
