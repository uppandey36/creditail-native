import { PixelRatio } from 'react-native'
import {guidelineBaseWidth, width as screenWidth} from './device'

// export const scaleSize = size => size * PixelRatio.getFontScale()
export const scaleSize = (size: number) => (screenWidth / guidelineBaseWidth) * size

export function scaleFont(size : number) {
  if (screenWidth <= guidelineBaseWidth) {
    return size * 1 - PixelRatio.get() / 10
  } else {
    return size
  }
}

export const FONTS = {
  Bold: 'Poppins-Bold',
  SemiBold: 'Poppins-Semibold',
  Regular: 'Poppins-Regular',
  ExtraBold: 'Poppins-Extrabld',
}

export const FONT_SIZES = {
  11: scaleFont(11),
  14: scaleFont(14),
  16: scaleFont(16),
  20: scaleFont(20),
  24: scaleFont(24),
}
