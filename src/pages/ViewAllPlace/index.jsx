import React from 'react'
import Container from './Container'
import * as S from './style'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { getGuGunList } from '../../feature/dustSlice'

function ViewAllPlace() {
  const datas = useSelector(getGuGunList)

  return (
    <S.Container>
      {datas &&
        datas.map((item, index) => <Container key={index} data={item} />)}
    </S.Container>
  )
}

export default ViewAllPlace
