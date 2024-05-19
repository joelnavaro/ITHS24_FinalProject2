import { FlatList } from 'react-native'
import { FC } from 'react'
import { Separator } from './Separator'
import { EventCard } from './EventCard'
import { EventType } from '@/utils/types'

export const EventsList: FC<{ data: EventType[] }> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(event) => event.id}
      renderItem={({ item }) => (
        <EventCard
          id={item.id}
          title={item.title}
          image={item.image}
          endDate={item.dates.endDate}
          typeOfEvent={item.eventType}
          eventState={item.eventState}
          location={item.location.city}
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  )
}
