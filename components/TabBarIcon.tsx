import { FC } from "react";
import styled from "styled-components/native";
import { Icon, IconEnum } from "./icons/Icons";

export const TabBarIcon: FC<{
  icon: IconEnum;
  focused: boolean;
  color: string;
  size: number;
}> = ({ icon, color = "black", size, focused }) => {
  return (
    <Container>
      <Icon
        icon={icon}
        color={focused ? color : "black"}
        width={size}
        height={size}
      />
    </Container>
  );
};

const Container = styled.View``;
