import { router } from "expo-router";
import { color } from "../theme/color";
import { Chevron } from "./icons/Chevron";
import { Pressable } from "react-native";
import { FC } from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";

export const HeaderLeft: FC<{
  route: RouteProp<ParamListBase, string>;
}> = ({ route }) => {
  return (
    <Pressable
      hitSlop={50}
      onPress={() => {
        router.canGoBack() && router.back();
      }}
    >
      <Chevron
        height={24}
        width={24}
        color={!router.canGoBack() ? "transparent" : color.white}
        style={{ transform: [{ rotate: "-90deg" }] }}
      />
    </Pressable>
  );
};
