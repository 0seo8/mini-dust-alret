import React from 'react'
import Card from '../../components/Card'
import { useAppSelector } from '../../app/store'
import { IDustData } from '../../model/types'

const Container: React.FC<{ data: string }> = ({ data }) => {
  const favorite = useAppSelector((state) => state.dust.myFavorite).some(
    (item: IDustData) => item.stationName === data,
  )
  return <div>{data && <Card guGun={data} favorite={favorite} />}</div>
}

export default Container
