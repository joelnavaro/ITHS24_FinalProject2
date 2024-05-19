export enum ButtonType {
  primary,
  secondary,
  success,
  disable,
  textButton,
  complement,
}

export interface UserAppCredentials {
  firstName: string
  lastName: string
  profilePicture: string
}

export interface EventType {
  id: string
  title: string
  image: string
  description: string
  dates: {
    startDate: string
    endDate: string
  }
  location: {
    city: string
    address: string
  }
  eventType: string
  eventState: string
  organizer: string
  userAdditions: string[]
}

export const initialEventForm: EventType = {
  id: '',
  title: '',
  image: '',
  description: '',
  dates: {
    startDate: '',
    endDate: '',
  },
  location: {
    city: '',
    address: '',
  },
  eventType: '',
  eventState: '',
  organizer: '',
  userAdditions: [],
}

export const enum BarMenuState {
  day = 'day',
  week = 'week',
  month = 'month',
}
