import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Bin = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M9 3V4H4V6H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V6H20V4H15V3H9ZM7 6H17V19H7V6ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"
    />
  </Svg>
)
