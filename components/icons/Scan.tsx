import * as React from 'react'
import Svg, { Path, Defs, G, ClipPath, Rect } from 'react-native-svg'
import { IconInterface } from './types'

export const Scan = ({ height, width, color = '#000', props }: IconInterface) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <G clipPath="url(#clip0_494_796)">
      <Path
        d="M0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L6 0V2H2V6H0V2ZM24 22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H18V22H22V18H24V22ZM2 24C1.46957 24 0.960859 23.7893 0.585786 23.4142C0.210714 23.0391 0 22.5304 0 22V18H2V22H6V24H2ZM22 0C22.5304 0 23.0391 0.210714 23.4142 0.585786C23.7893 0.960859 24 1.46957 24 2V6H22V2H18V0H22Z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_494_796">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
)
