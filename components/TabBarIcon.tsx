import { FC } from "react";
import styled from "styled-components/native";
import { Icon, IconEnum } from "./icons/Icons";

export const TabBarIcon: FC<{
  icon: IconEnum;
  focused: boolean;
  color: string;
  size: number;
}> = ({ icon, color, size, focused }) => {
  return (
    <Container>
      <Icon
        icon={icon}
        color={focused ? color : 'white'}
        width={size}
        height={size}
      />
    </Container>
  );
};

const Container = styled.View``;
