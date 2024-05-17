import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Plus = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path fill={color} d="M15 8.571H8.571V15H6.43V8.571H0V6.43h6.429V0H8.57v6.429H15V8.57Z" />
  </Svg>
)
