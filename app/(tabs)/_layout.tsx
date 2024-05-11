import React, { useState } from "react";
import { Redirect, Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";
import { IconEnum } from "@/components/icons/Icons";
import { HeaderLeft } from "@/components/HeaderLeft";
import { TabBarIcon } from "@/components/TabBarIcon";
import { HeaderRight } from "@/components/HeaderRight";
import { defaultTabNavigationOptions } from "../../utils/navigationUtils";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [permission, setPermission] = useState(true);

  if (!permission) {
    return <Redirect href="/(auth)/signin" />;
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        ...defaultTabNavigationOptions,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        title: getTabHeaderTitle(route.name),
        tabBarIcon: ({ color, focused, size }) => (
          <TabBarIcon
            icon={getTabIconName(route.name)}
            color={color}
            size={size}
            focused={focused}
          />
        ),
        headerShown: false,
        // headerLeft: () => <HeaderLeft route="home" />,
        // headerRight: () => <HeaderRight route="home" />,
      })}
    >
      <Tabs.Screen
        name="(home)"
        // options={{
        //   title: "Home",
        // }}
      />
      <Tabs.Screen
        name="(search)"
      />
      <Tabs.Screen
        name="(profile)"
      />
      <Tabs.Screen
        name="(library)"
      />
    </Tabs>
  );
}

const getTabHeaderTitle = (route: string) => {
  switch (route) {
    case "(library)":
      return "Library";
    case "(search)":
      return "Search";
    case "(profile)":
      return "Profile";
    default:
      return "Home";
  }
};

const getTabIconName = (route: string) => {
  switch (route) {
    case "(search)":
      return IconEnum.search;
    case "(profile)":
      return IconEnum.account;
    case "(library)":
      return IconEnum.list;
    default:
      return IconEnum.home;
  }
};

// options={{
//   title: 'Home',
//   tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//   headerRight: () => (
//     <Link href="/modal" asChild>
//       <Pressable>
//         {({ pressed }) => (
//           <FontAwesome
//             name="info-circle"
//             size={25}
//             color={Colors[colorScheme ?? 'light'].text}
//             style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//           />
//         )}
//       </Pressable>
//     </Link>
//   ),
// }}
