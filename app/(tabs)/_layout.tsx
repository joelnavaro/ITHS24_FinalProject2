import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Redirect, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { Colors } from "@/constants/Colors";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const [permission, setPermission] = useState(false);

  if (!permission) {
    return <Redirect href="/(auth)/signin" />;
  }

  //haver una navegacion en el tab comun
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      {/* The tab header might be false cause we will navin the children stack */}
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          // tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
          // headerLeft: () => (<HeaderLeft route="home" />),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="chevron-left"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="(maps)"
        options={{
          title: "Maps",
          // tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          // tabBarIcon: ({ color }) => <TabBarIcon name="github" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}

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
