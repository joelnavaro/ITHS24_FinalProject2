import { Redirect, Stack, router } from 'expo-router'
import { defaultNavigationOptions } from '../../utils/navigationUtils'
import { HeaderLeft } from '@/components/HeaderLeft'
import { HeaderRight } from '@/components/HeaderRight'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'
import { useAppSelector } from '@/hooks/hooks'
import { selectIsAuthenticated } from '@/state/user/userSlice'

export default function AuthLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  // console.log('in auth', permission)

  if (isAuthenticated) {
    return <Redirect href="/(tabs)/(home)" />
  }
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
              router.replace('/(tabs)/(home)/')
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
