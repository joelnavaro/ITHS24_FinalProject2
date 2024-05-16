import { BaseCard } from '@/components/BaseCard'
import { InputField } from '@/components/InputField'
import { ScreenBase } from '@/components/ScreenBase'
import { Separator } from '@/components/Separator'
import { IconEnum } from '@/components/icons/Icons'
import { color } from '@/theme/color'
import { spacing } from '@/theme/spacing'
import styled from 'styled-components'

export default function Search() {
  return (
    <ScreenBase backgroundColor={color.lightGray}>
      <Separator size={5} />
      <StyledCard backgroundColor={color.white}>
        <InputField placeholder="Search" icon={IconEnum.search} />
      </StyledCard>
      <StyledCard backgroundColor={color.white}>
        <Separator size={500} />
      </StyledCard>
    </ScreenBase>
  )
}

const StyledCard = styled(BaseCard)`
  padding: ${spacing.small}px;
`
