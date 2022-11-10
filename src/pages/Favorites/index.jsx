import React, { useEffect } from 'react'
import Favorite from '../../components/Card/Favorite'
import * as S from './style'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../../feature/dustSlice'

function Favorites() {
  const datas = JSON.parse(localStorage.getItem('myFavorite'))
  console.log(datas, 'hahah')

  return (
    <>
      {datas &&
        datas.map((item, index) => <Favorite key={index} data={item} />)}
      {datas?.length === 0 && <S.Alret>리스트를 추가해주세요😊</S.Alret>}
    </>
  )
}

export default Favorites
