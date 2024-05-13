import { Stack, router } from 'expo-router'
import { defaultNavigationOptions } from '../../utils/navigationUtils'
import { HeaderLeft } from '@/components/HeaderLeft'
import { HeaderRight } from '@/components/HeaderRight'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: 'FAVRAPP',
        headerLeft: () => <HeaderLeft route={route} />,
        headerRight: () => (
          <HeaderRight
            route={route}
            icon={IconEnum.alert}
            color={color.warning}
            onPress={() => {
              router.replace('/(tabs)/(library)/')
            }}
          />
        ),
      })}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  )
}

const getHeader = (routeName: string) => {
  switch (routeName) {
    case 'signin':
      return 'Sign in'
    case 'signup':
      return 'Sign up'
    default:
      return 'Welcome'
  }
  // return routeName === "signin" ? "Sign in" : "Sign up";
}
