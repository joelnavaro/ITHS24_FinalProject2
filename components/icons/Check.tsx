import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Check = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" viewBox={'0,0,24,24'} {...props}>
    <Path fill={color} d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z" />
  </Svg>
)
