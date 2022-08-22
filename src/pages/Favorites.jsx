import React, { useEffect } from 'react'
import Card from '../components/Card'

import { useSelector, useDispatch } from 'react-redux/es/exports'
import { favoriteArr } from '../feature/dustSlice'

function Favorites() {
  const datas = useSelector(favoriteArr)

  return (
    <>
      {datas && datas.map((item, index) => <Card key={index} guGun={item} />)}
      {datas.length === 0 && (
        <div className="flex justify-center self-center text-xl ">
          리스트를 추가해주세요😊
        </div>
      )}
    </>
  )
}

export default Favorites
