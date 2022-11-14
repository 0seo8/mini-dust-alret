import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const { VITE_SERVICE_KEY } = import.meta.env
const BASE_URL = 'api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty'
import { SliceState, IDustData } from '../model/types'

const getParameters = {
  serviceKey: VITE_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
}

const initialState: SliceState = {
  setSidoDatas: [],
  setGuGunList: null,
  setCardData: null,
  myFavorite: JSON.parse(localStorage.getItem('myFavorite')!) || [],
  sidoName: '서울',
  status: 'idle',
  error: undefined,
}

export const fetchDatas = createAsyncThunk<IDustData[], string>(
  'dust/fetchDatas',
  async (sidoName: string = '서울') => {
    try {
      const { data } = await axios.get(BASE_URL, {
        params: { ...getParameters, sidoName },
      })
      return data['response']['body']['items']
    } catch (error: any) {
      return error?.message
    }
  },
)
export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    chnageSido(state, action) {
      state.sidoName = action.payload
    },
    filterGuGunDatas(state, action) {
      state.setCardData = action.payload
    },
    addMyFavoriteList(state, action) {
      state.setSidoDatas![action.payload.stationName].myFavorite =
        !state.setSidoDatas[action.payload.stationName].myFavorite
      state.myFavorite.some(
        (item) => item.stationName === action.payload.stationName,
      )
        ? (state.myFavorite = state.myFavorite.filter(
            (item) => item.stationName !== action.payload.stationName,
          ))
        : state.myFavorite.push(action.payload)

      localStorage.setItem('myFavorite', JSON.stringify(state.myFavorite))
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDatas.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchDatas.fulfilled, (state, action) => {
        let prepare = action.payload.map((item) => {
          return (item = {
            ...item,
            myFavorite: false,
          })
        })

        const result = prepare.reduce((acc, cur) => {
          return {
            ...acc,
            [cur.stationName]: cur,
          }
        }, {})
        state.status = 'succeeded'
        state.setSidoDatas = result
        state.setGuGunList = Object.keys(result)
        state.setCardData = Object.keys(result)[0]
      })
      .addCase(fetchDatas.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { filterGuGunDatas, addMyFavoriteList, chnageSido } =
  dustSlice.actions
export default dustSlice.reducer
