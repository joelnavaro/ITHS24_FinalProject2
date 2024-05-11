import { Stack } from "expo-router";
import { defaultNavigationOptions } from "../../../utils/navigationUtils";

export default function _layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: 'Home',
      })}
    />
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