import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Unfold = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M12 18.17L8.83 15L7.42 16.41L12 21L16.59 16.41L15.17 15M12 5.83L15.17 9L16.58 7.59L12 3L7.41 7.59L8.83 9L12 5.83Z"
    />
  </Svg>
)
