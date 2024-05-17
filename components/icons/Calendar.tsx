import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Calendar = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M7 11h2v2H7v-2Zm14-6v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2ZM5 7h14V5H5v2Zm14 12V9H5v10h14Zm-4-6v-2h2v2h-2Zm-4 0v-2h2v2h-2Zm-4 2h2v2H7v-2Zm8 2v-2h2v2h-2Zm-4 0v-2h2v2h-2Z"
    />
  </Svg>
)
