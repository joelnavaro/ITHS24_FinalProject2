import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'
export const Bracket = ({ height, width, color = '#000', props, style }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props} style={style}>
    <Path stroke={color} d="M16 1H1v54h15" />
  </Svg>
)
