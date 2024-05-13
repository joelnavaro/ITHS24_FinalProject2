import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

export interface IconsSvgProps extends SvgProps {
  addStyle?: {
    windowWidth: number
    windowHeight: number
    viewBox?: string
    styleSheet?: {}
    fill?: string
  }
}

export const XIcon = (props: IconsSvgProps) => (
  <Svg
    width={props.addStyle?.windowWidth ?? 24}
    height={props.addStyle?.windowHeight ?? 24}
    viewBox={props.addStyle?.viewBox ?? '0,0,27,27'}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M15.583 1.944 14.056.417 8 6.473 1.944.417.417 1.944 6.472 8 .417 14.056l1.527 1.527L8 9.528l6.056 6.055 1.527-1.527L9.527 8l6.056-6.056Z"
    />
  </Svg>
)
