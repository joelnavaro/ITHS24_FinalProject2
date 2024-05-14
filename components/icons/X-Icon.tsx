import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const XIcon = ({
  height,
  width,
  color = '#000',
  props,
}: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill={color}
      d="M15.583 1.944 14.056.417 8 6.473 1.944.417.417 1.944 6.472 8 .417 14.056l1.527 1.527L8 9.528l6.056 6.055 1.527-1.527L9.527 8l6.056-6.056Z"
    />
  </Svg>
)
