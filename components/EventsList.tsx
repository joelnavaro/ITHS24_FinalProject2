import { FlatList } from 'react-native'
import { FC } from 'react'
import { Separator } from './Separator'
import { EventCard } from './EventCard'

export const EventsList: FC<{ data: string[] }> = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        // <EventCard value1={item} value2={item} value3={item} />
        <EventCard
          title="Orchesta Concert"
          image="https://picsum.photos/200/300"
          endDate="07.12.2024"
          typeOfEvent="Professional"
          eventState="Active"
          location="Stockholm"
        />
      )}
      ItemSeparatorComponent={Separator}
    />
  )
}
