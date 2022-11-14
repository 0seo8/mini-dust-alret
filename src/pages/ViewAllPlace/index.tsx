import React from 'react'
import Container from './Container'
import * as S from './style'
import { useAppSelector } from '../../app/store'

function ViewAllPlace() {
  const datas = useAppSelector((state) => state.dust.setGuGunList)

  return (
    <S.Container>
      {datas &&
        datas.map((item, index) => <Container key={index} data={item} />)}
    </S.Container>
  )
}

export default ViewAllPlace
