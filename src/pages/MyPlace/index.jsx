import Card from '../../components/Card'

import { useSelector } from 'react-redux/es/exports'
import { selectCardData, favoriteArr } from '../../feature/dustSlice'

function MyPlace() {
  const data = useSelector(selectCardData)
  const favorite = useSelector(favoriteArr).some(
    (item) => item.stationName === data,
  )

  return <div>{data && <Card guGun={data} favorite={favorite} />}</div>
}

export default MyPlace
