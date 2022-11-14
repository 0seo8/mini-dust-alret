import React, { useEffect, useState } from 'react'
import Favorite from '../../components/Card/Favorite'
import * as S from './style'

function Favorites() {
  const [datas, setDatas] = useState([])

  useEffect(() => {
    setDatas(JSON.parse(localStorage.getItem('myFavorite')!))
  }, [])
  return (
    <S.Container>
      {datas &&
        datas.map((item, index) => <Favorite key={index} data={item} />)}
      {datas?.length === 0 && <S.Alret>리스트를 추가해주세요😊</S.Alret>}
    </S.Container>
  )
}

export default Favorites
