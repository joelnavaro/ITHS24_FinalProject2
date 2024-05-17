import { BaseCard } from '@/components/BaseCard'
import { ErrorComponent } from '@/components/ErrorComponent'
import { InputField } from '@/components/InputField'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import { useEffect } from 'react'
import styled from 'styled-components'

export default function TestScreen() {
  useEffect(() => {}, [])
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <StyledCard backgroundColor={color.white}>
        <InputField placeholder="Search" icon={IconEnum.search} />
      </StyledCard>
      <ErrorComponent message="error" />
    </ScreenBase>
  )
}

const StyledCard = styled(BaseCard)`
  padding: ${spacing.small}px;
`
