import Svg, { Path } from 'react-native-svg'
import { IconInterface } from './types'

export const Edit = ({
  height,
  width,
  color = '#000',
  props,
}: IconInterface) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M15.953 4.325c-.778-.449-1.427-.823-1.982-1.052-.585-.24-1.17-.363-1.791-.196-.623.166-1.067.565-1.454 1.066-.366.475-.741 1.124-1.19 1.902L5.66 12.758c-.26.45-.473.818-.58 1.213a2.2 2.2 0 0 0-.04.172c-.088.463-.016.927.074 1.515l.024.16c.166 1.09.303 1.99.51 2.672.216.714.548 1.331 1.201 1.708.653.378 1.354.357 2.08.187.694-.162 1.542-.493 2.57-.895l.15-.059c.554-.216.992-.386 1.35-.693.357-.308.591-.715.888-1.23l3.876-6.713c.45-.778.824-1.427 1.052-1.982.24-.586.363-1.17.197-1.792-.167-.622-.565-1.066-1.067-1.453-.475-.367-1.123-.741-1.902-1.19l-.09-.053Zm.11 6.415-5.63-3.25-3.423 5.93c-.373.645-.462.82-.496 1-.034.18-.014.376.098 1.114.177 1.163.3 1.955.471 2.521.166.548.337.74.516.844.18.104.432.155.989.025.576-.134 1.323-.424 2.42-.853.694-.271.874-.352 1.013-.471.139-.12.246-.285.618-.93l3.424-5.93Zm.748-1.3c.281-.496.484-.875.617-1.197.177-.43.182-.655.135-.833-.048-.178-.165-.37-.534-.655-.386-.297-.946-.622-1.78-1.104-.835-.482-1.397-.805-1.848-.99-.43-.177-.655-.183-.833-.135-.178.047-.37.165-.654.533-.213.276-.44.641-.729 1.133l5.626 3.248Z"
      clipRule="evenodd"
    />
  </Svg>
)