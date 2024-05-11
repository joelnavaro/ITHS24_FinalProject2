import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const List = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M0 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7-1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7ZM0 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7-1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm-7 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7-1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Z"
    />
  </Svg>
)
