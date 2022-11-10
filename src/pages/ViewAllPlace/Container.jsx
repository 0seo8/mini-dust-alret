import React from 'react'
import Card from '../../components/Card'
import { useSelector } from 'react-redux'
import { favoriteArr } from '../../feature/dustSlice'

const Container = ({ data }) => {
  const favorite = useSelector(favoriteArr).some(
    (item) => item.stationName === data,
  )
  return <div>{data && <Card guGun={data} favorite={favorite} />}</div>
}

export default Container
