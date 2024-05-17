import { Stack } from 'expo-router'
import { defaultNavigationOptions } from '../../../utils/navigationUtils'

export default function _layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        ...defaultNavigationOptions,
        title: getTitle(route.name),
      })}
    />
  )
}

const getTitle = (route: string) => {
  switch (route) {
    case 'eventDetails':
      return 'Event Details'
    case 'editEvent':
      return 'EditEvent'
    case 'createEvent':
      return 'Create Event'
    default:
      return 'Home'
  }
}
