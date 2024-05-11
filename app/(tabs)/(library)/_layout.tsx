import { Stack } from "expo-router";
import { defaultNavigationOptions } from "../../../utils/navigationUtils";
import { HeaderLeft } from "@/components/HeaderLeft";
import { HeaderRight } from "@/components/HeaderRight";

export default function _layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: "Library",
        headerLeft: () => <HeaderLeft route={route} />,
        headerRight: () => <HeaderRight route={route} />,
      })}
    />
  );
}
