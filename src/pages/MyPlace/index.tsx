import Card from '../../components/Card'
import { IDustData } from '../../model/types'
import { useAppSelector } from '../../app/store'

function MyPlace() {
  const data = useAppSelector((state) => state.dust.setCardData)
  const favorite = useAppSelector((state) => state.dust.myFavorite).some(
    (item: IDustData) => item.stationName === data,
  )

  return <div>{data && <Card guGun={data} favorite={favorite} />}</div>
}

export default MyPlace
