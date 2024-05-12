import { ScreenBase } from "@/components/ScreenBase";
import { ScrollView } from "react-native";
import { Button } from "@/components/Button";
import { ButtonType } from "@/utils/types";
import { router } from "expo-router";
import { Separator } from "@/components/Separator";

export default function Library() {
  return (
    <ScreenBase>
      <ScrollView>
        <Button
          label="Colors"
          type={ButtonType.primary}
          onPress={() => {
            router.push("colors");
          }}
        />
        <Separator size={10} />

        <Button
          label="Buttons"
          type={ButtonType.primary}
          onPress={() => {
            router.push("buttons");
          }}
        />
      </ScrollView>
    </ScreenBase>
  );
}
