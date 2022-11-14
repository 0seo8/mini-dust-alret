export interface IDustData {
  sidoName: string
  stationName: string
  dataTime: string
  pm10Grade: string
  pm10Value: string
  myFavorite: boolean
}
export interface ISidoData {
  so2Grade: string
  coFlag: null | string
  khaiValue: string
  so2Value: string
  coValue: string
  pm25Flag: null | string
  pm10Flag: null | string
  o3Grade: string
  pm10Value: string
  khaiGrade: string
  pm25Value: string
  sidoName: string
  no2Flag: null | string
  no2Grade: string
  o3Flag: null | string
  pm25Grade: string
  so2Flag: null | string
  dataTime: string
  coGrade: string
  no2Value: string
  stationName: string
  pm10Grade: string
  o3Value: string
  myFavorite: boolean
}

export type SliceState = {
  setSidoDatas: any
  setGuGunList: null | string[]
  setCardData: null | string
  myFavorite: ISidoData[]
  sidoName: string
  status: string
  error: any
}
