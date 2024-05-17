import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Bell = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 1 1 4 0v.29c2.97.88 5 3.61 5 6.71v6l2 2Zm-7 2a2 2 0 0 1-4 0"
    />
  </Svg>
)
