import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Star = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27Z"
    />
  </Svg>
)
