import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Landmarks = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M11 8.55c.328 0 .653-.058.957-.171.303-.113.579-.28.81-.488a2.25 2.25 0 0 0 .543-.73c.125-.273.19-.566.19-.861 0-.597-.263-1.169-.732-1.591A2.648 2.648 0 0 0 11 4.05c-.663 0-1.299.237-1.768.659A2.142 2.142 0 0 0 8.5 6.3c0 .295.065.588.19.861.126.273.31.521.542.73A2.648 2.648 0 0 0 11 8.55ZM11 0c3.86 0 7 2.817 7 6.3 0 4.725-7 11.7-7 11.7S4 11.025 4 6.3c0-1.67.737-3.273 2.05-4.455C7.363.664 9.143 0 11 0ZM2 6.3c0 4.05 5.08 9.594 6 10.629L7 18S0 11.025 0 6.3C0 3.447 2.11 1.035 5 .261 3.16 1.746 2 3.897 2 6.3Z"
    />
  </Svg>
)
