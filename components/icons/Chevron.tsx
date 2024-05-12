import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconInterface } from "./types";

export const Chevron = ({
  height,
  width,
  color = "#000",
  props,
  style,
}: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props} style={style}>
    <Path
      fill={color}
      d="M7.41 15.42 12 10.83l4.59 4.59L18 14l-6-6-6 6 1.41 1.42Z"
    />
  </Svg>
);
