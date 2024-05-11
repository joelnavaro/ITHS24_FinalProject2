import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Disc = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M12 14a2 2 0 0 1-2-2c0-1.11.89-2 2-2 1.11 0 2 .89 2 2a2 2 0 0 1-2 2Zm0-10a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
    />
  </Svg>
)
export default Disc
