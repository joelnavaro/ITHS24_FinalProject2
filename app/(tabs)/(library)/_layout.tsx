import { Stack, router } from 'expo-router'
import { defaultNavigationOptions } from '../../../utils/navigationUtils'
import { HeaderLeft } from '@/components/HeaderLeft'
import { HeaderRight } from '@/components/HeaderRight'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'

export default function _layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: 'Library',
        headerLeft: () => <HeaderLeft route={route} />,
        headerRight: () => (
          <HeaderRight
            route={route}
            icon={IconEnum.alert}
            color={color.warning}
            onPress={() => {
              router.push('(auth)/')
            }}
          />
        ),
      })}
    />
  )
}
