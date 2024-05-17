import { format, isValid } from 'date-fns'

export const formatDate = (timestamp: number | Date): string => {
  const date = new Date(timestamp)

  if (!isValid(date)) {
    console.error(`Invalid timestamp: ${timestamp}`)
    return ''
  }

  return format(date, 'dd/MM/yyyy')
}
