import React from 'react'
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useLocation } from 'react-router'
import {
  getGuGunList,
  getDustDataStatus,
  getDustDataError,
  fetchDatas,
  filterGuGunDatas,
  chnageSido,
  sidoName,
  selectCardData,
} from '../../feature/dustSlice'

const GuGunList = ({ guGunList }) => {
  const dispatch = useDispatch()
  const location = useLocation().pathname
  const changeGuGunHandler = (e) => {
    dispatch(filterGuGunDatas(e.target.value))
  }
  return (
    <>
      {guGunList?.map((gugun, index) => (
        <option key={index}>{gugun}</option>
      ))}
    </>
  )
}

export default GuGunList
