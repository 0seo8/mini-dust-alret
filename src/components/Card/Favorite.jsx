import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { addMyFavoriteList } from '../../feature/dustSlice'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { strGrade } from '../../utils/constants'

function Favorite({ data }) {
  const dispatch = useDispatch()
  const grade = strGrade(data?.pm10Grade)
  const addToMyFavorite = () => {
    dispatch(addMyFavoriteList(data))
  }
  return (
    <>
      {data && (
        <S.Card color={grade[1]}>
          <S.CardHeader>
            <S.CardTitle>
              {data.stationName}
              <S.SubTitle>{data.sidoName}</S.SubTitle>
            </S.CardTitle>

            <S.Star onClick={addToMyFavorite}>
              <FaStar size="1.5rem" />
            </S.Star>
          </S.CardHeader>
          <S.CardBody>
            <S.StrGradArea color={grade[1]}>{grade[0]}</S.StrGradArea>
            <S.Text>미세먼지수치 : {data.khaiValue}</S.Text>
            <S.Text>({data.dataTime} 기준)</S.Text>
          </S.CardBody>
        </S.Card>
      )}
    </>
  )
}

export default Favorite
