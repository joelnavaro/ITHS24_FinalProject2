import { BaseCard } from '@/components/BaseCard'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { useEffect } from 'react'
import styled from 'styled-components/native'

export default function TestScreen() {
  useEffect(() => {}, [])
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <StyledCard backgroundColor={color.white}></StyledCard>
    </ScreenBase>
  )
}

const StyledCard = styled(BaseCard)`
  flex-direction: row;
  padding: ${spacing.small}px;
`
