import { Container, ScreenBase } from "@/components/ScreenBase";
import { ScrollView } from "react-native";
import { Button } from "@/components/Button";
import { ButtonType } from "@/utils/types";
import { router } from "expo-router";

export default function Library() {
  return (
    <ScreenBase>
      {/* <Container direction wrap>
      </Container> */}
      <ScrollView>
        <Button
          label="Colors"
          type={ButtonType.primary}
          onPress={() => {
            router.push('colors');
          }}
        />
      </ScrollView>
    </ScreenBase>
  );
}
