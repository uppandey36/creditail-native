import {Dimensions} from 'react-native'

export const {width, height} = Dimensions.get('window')
export const BASE_DIMENSIONS = {
    width: 375,
    height: 900
}
export const guidelineBaseWidth = BASE_DIMENSIONS.width
export const normalScale = (size:number) => (size * width)/BASE_DIMENSIONS.width
export const verticalScale = (size:number) => (size * height)/BASE_DIMENSIONS.height