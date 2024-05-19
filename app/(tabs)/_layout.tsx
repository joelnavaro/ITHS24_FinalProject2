import { Tabs } from 'expo-router'
import { TabBarIcon } from '@/components/TabBarIcon'
import { defaultTabNavigationOptions, getTabHeaderTitle, getTabIconName } from '../../utils/navigationUtils'
import { color } from '@/theme/color'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ProfileAvatar } from '@/components/ProfileAvatar'

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: color.primary }} edges={['right', 'top', 'left']}>
        <Tabs
          screenOptions={({ route }) => ({
            ...defaultTabNavigationOptions,
            title: getTabHeaderTitle(route.name),
            tabBarIcon: ({ focused, size }) =>
              route.name === '(profile)' ? (
                <ProfileAvatar route={route.name} size={size} focused={focused} />
              ) : (
                <TabBarIcon
                  icon={getTabIconName(route.name)}
                  color={focused ? color.warning : color.white}
                  size={size}
                  focused={focused}
                />
              ),
          })}
        >
          <Tabs.Screen
            name="(aScreen)"
            options={{
              href: null,
            }}
          />
          <Tabs.Screen name="(home)" />
          <Tabs.Screen name="(search)" />
          <Tabs.Screen name="(profile)" />
          <Tabs.Screen name="(library)" />
        </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
