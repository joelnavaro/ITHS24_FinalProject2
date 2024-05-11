import { Container, ScreenBase } from "@/components/ScreenBase";
import { ColorShade } from "@/components/ColorShade";
import { theme } from "@/theme";

export default function Library() {
  const { color } = theme;
  const colorsArray = Object.entries(color);
  return (
    <ScreenBase>
      <Container direction wrap>
        {colorsArray.map((color, index) => (
          <ColorShade key={index} name={color[0]} color={color[1]} />
        ))}
      </Container>
    </ScreenBase>
  );
}
