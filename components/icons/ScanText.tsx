import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const ScanText = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M2 4C2 2.9 2.9 2 4 2H8V4H4V8H2V4ZM22 20C22 21.11 21.11 22 20 22H16V20H20V16H22V20ZM4 22C2.9 22 2 21.11 2 20V16H4V20H8V22H4ZM20 2C21.11 2 22 2.9 22 4V8H20V4H16V2H20ZM9 7V9H11V17H13V9H15V7H9Z"
    />
  </Svg>
)
