import { FC } from 'react'
import { BarCard } from './BaseCard'
import { UserNotes } from './UserNotes'
import styled from 'styled-components/native'
import { LoadingIndicator } from './LoadingIndicator'
import { useFirebase } from '@/firebase/hooks/useFirebase'

export const NotesContainer: FC<{
  content: string[]
  eventId: string
  onPress: (noteIndex: number, eventId: string) => Promise<void>
}> = ({ content, onPress, eventId }) => {
  const { requestState } = useFirebase()
  if (!content.length) {
    return null
  }
  return (
    <ContainerWrapper row>
      {content.map((note, index) => (
        <UserNotes key={index} text={note} onPress={async () => await onPress(index, eventId)} />
      ))}
      <LoadingIndicator status={requestState} isModal={false} />
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled(BarCard)`
  flex-wrap: wrap;
`
