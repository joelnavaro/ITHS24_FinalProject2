import { Button } from "@/components/Button";
import { Container, ScreenBase } from "@/components/ScreenBase";
import { Separator } from "@/components/Separator";
import { IconEnum } from "@/components/icons/Icons";
import { ButtonType } from "@/utils/types";

export default function Buttons() {
  return (
    <ScreenBase>
      <Container>
        <Button
          label="Primary Button"
          type={ButtonType.primary}
          onPress={() => {}}
        />
        <Separator size={10} />

        <Button
          label="Secondary Button"
          type={ButtonType.secondary}
          onPress={() => {}}
        />
        <Separator size={10} />

        <Button
          label="Icon Button"
          type={ButtonType.success}
          onPress={() => {}}
          icon={IconEnum.star}
        />
        <Separator size={10} />

        <Button
          label="Disabled Button"
          type={ButtonType.disable}
          onPress={() => {}}
        />
      </Container>
    </ScreenBase>
  );
}
