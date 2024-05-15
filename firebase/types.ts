//create the names of the collections here and the types

export const rootCollection = 'Favrapp'
export const disksStorageCollection = 'DiskStorage'
export const listedUsersCollection = 'ListedUsers'

export const imagesBucket = 'DisksImages'

export type AsyncImageType = {
  localPath: string
}
export enum REQUEST_STATUS {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
  SUCCEEDED = 'succeeded',
}
