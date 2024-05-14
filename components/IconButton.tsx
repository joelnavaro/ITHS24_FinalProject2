import { FC } from 'react'
import { Icon, IconEnum } from './icons/Icons'
import { spacing } from '@/theme/spacing'
import { Touchable } from './Button'

export const IconButton: FC<{
  icon: IconEnum
  color: string
  onPress: () => void
  size: number
}> = ({ icon, onPress, color, size }) => {
  return (
    <Touchable hitSlop={spacing.xlarge} onPress={onPress}>
      <Icon icon={icon} height={size} width={size} color={color} />
    </Touchable>
  )
}
