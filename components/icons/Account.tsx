import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Account = ({ height, width, color = '#000', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props} style={style}>
    <Path fill={color} d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" />
  </Svg>
)
