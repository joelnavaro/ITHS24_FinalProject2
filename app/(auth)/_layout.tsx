import { Stack } from "expo-router";
import { defaultNavigationOptions } from "../../utils/navigationUtils";

export default function AuthLayout() {
  //create a authNavigationUtils
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: getHeader(route.name),
      })}
    >
      <Stack.Screen name="signin" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}

const getHeader = (routeName: string) => {
  // switch (routeName) {
  //   case "signin":
  //     return "Sign in";
  //   case "signup":
  //     return "Sign up";
  //   default:
  //     return "Register";
  // }
  return routeName === "signin" ? "Sign in" : "Sign up";
};
