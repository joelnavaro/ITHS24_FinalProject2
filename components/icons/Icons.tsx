import { Alert } from './Alert'
import { Account } from './Account'
import { Minus } from './Minus'
import { Plus } from './Plus'
import { Attatchment } from './Attatchment'
import { Bell } from './Bell'
import { Bin } from './Bin'
import { Calendar } from './CalendarOutline'
import { Camera } from './Camera'
import { Check } from './Check'
import { Chevron } from './Chevron'
import { Close } from './Close'
import Disc from './Disc'
import { Dots } from './Dots'
import { Home } from './Home'
import { Image } from './Image'
import { Landmark } from './Landmark'
import { Landmarks } from './Landmarks'
import { Images } from './Images'
import { List } from './List'
import { Retry } from './Retry'
import { Scan } from './Scan'
import { ScanText } from './ScanText'
import { Search } from './Search'
import { SearchWeb } from './SearchWeb'
import { Star } from './Star'
import { Unfold } from './Unfold'
import { Bracket } from './Bracket'

export enum IconEnum {
  plus = 'plus',
  minus = 'minus',
  account = 'account',
  alert = 'alert',
  attatchment = 'attatchment',
  bell = 'bell',
  bin = 'bin',
  calendar = 'calendar',
  camera = 'camera',
  check = 'check',
  chevron = 'chevron',
  close = 'close',
  disc = 'disc',
  dots = 'dots',
  home = 'home',
  image = 'image',
  images = 'images',
  landmark = 'landmark',
  landmarks = 'landmarks',
  list = 'list',
  retry = 'retry',
  scan = 'scan',
  scanText = 'scanText',
  search = 'search',
  searchWeb = 'searchWeb',
  star = 'star',
  unfold = 'unfold',
  bracket = 'bracket',
}

interface IconInterface {
  icon: IconEnum
  width?: number
  height?: number
  color?: string
}

export const Icon = ({ icon, width = 24, height = 24, color }: IconInterface) => {
  if (icon === IconEnum.plus) return <Plus width={width} height={height} color={color} />
  if (icon === IconEnum.minus) return <Minus width={width} height={height} color={color} />
  if (icon === IconEnum.account) return <Account width={width} height={height} color={color} />
  if (icon === IconEnum.alert) return <Alert width={width} height={height} color={color} />
  if (icon === IconEnum.attatchment) return <Attatchment width={width} height={height} color={color} />
  if (icon === IconEnum.bell) return <Bell width={width} height={height} color={color} />
  if (icon === IconEnum.bin) return <Bin width={width} height={height} color={color} />
  if (icon === IconEnum.calendar) return <Calendar width={width} height={height} color={color} />
  if (icon === IconEnum.camera) return <Camera width={width} height={height} color={color} />
  if (icon === IconEnum.check) return <Check width={width} height={height} color={color} />
  if (icon === IconEnum.chevron) return <Chevron width={width} height={height} color={color} />
  if (icon === IconEnum.close) return <Close width={width} height={height} color={color} />
  if (icon === IconEnum.disc) return <Disc width={width} height={height} color={color} />
  if (icon === IconEnum.dots) return <Dots width={width} height={height} color={color} />
  if (icon === IconEnum.home) return <Home width={width} height={height} color={color} />
  if (icon === IconEnum.image) return <Image width={width} height={height} color={color} />
  if (icon === IconEnum.images) return <Images width={width} height={height} color={color} />
  if (icon === IconEnum.landmark) return <Landmark width={width} height={height} color={color} />
  if (icon === IconEnum.landmarks) return <Landmarks width={width} height={height} color={color} />
  if (icon === IconEnum.list) return <List width={width} height={height} color={color} />
  if (icon === IconEnum.retry) return <Retry width={width} height={height} color={color} />
  if (icon === IconEnum.scan) return <Scan width={width} height={height} color={color} />
  if (icon === IconEnum.scanText) return <ScanText width={width} height={height} color={color} />
  if (icon === IconEnum.search) return <Search width={width} height={height} color={color} />
  if (icon === IconEnum.searchWeb) return <SearchWeb width={width} height={height} color={color} />
  if (icon === IconEnum.star) return <Star width={width} height={height} color={color} />
  if (icon === IconEnum.unfold) return <Unfold width={width} height={height} color={color} />
  if (icon === IconEnum.bracket) return <Bracket width={width} height={height} color={color} />

  return <Plus width={width} height={height} />
}
