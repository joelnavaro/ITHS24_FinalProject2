import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Home = ({ height, width, color = '#000', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props} style={style}>
    <Path fill={color} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" />
  </Svg>
)
