import { useDispatch, useSelector } from 'react-redux'
import { getSidoDatas, favoriteArr } from '../feature/dustSlice'
import { addMyFavoriteList } from '../feature/dustSlice'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { strGrade } from '../utils/constants'
// import { styleColor } from '../utils/constants'
import { cls } from '../utils/constants'

function Card({ guGun }) {
  const dispatch = useDispatch()
  const datas = useSelector(getSidoDatas)
  const data = datas[guGun]

  const grade = strGrade(data?.pm10Grade)
  const addToMyFavorite = () => {
    dispatch(addMyFavoriteList(data.stationName))
  }
  return (
    <>
      {data && (
        <div
          className={cls(
            'box-border transition pt-4 pb-4 pl-6 pr-6 rounded-lg mt-4 ',
            `${grade[1]}`,
          )}
        >
          <div className="flex justify-between items-center">
            <div className="text-xl">
              {data.stationName}
              {/* <span
                className={cls('ml-2 text-base font-medium ', `${grade[2]}`)}
              > */}
              <span className="ml-2 text-base font-medium">
                {data.sidoName}
              </span>
            </div>

            <div className="cursor-pointer p-2 block" onClick={addToMyFavorite}>
              {data.myFavorite ? (
                <FaStar size="1.5rem" color="yellow" />
              ) : (
                <FaRegStar size="1.5rem" color="yellow" />
              )}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={cls(
                'bg-white bg-white font-black inline-block pt-2 pb-2 pl-4 pr-4 mt-1 mb-3 text-lg text-color-300 ',
                `${grade[2]}`,
              )}
            >
              {grade[0]}
            </div>
            <div>미세먼지수치 : {data.khaiValue}</div>
            <div>({data.dataTime} 기준)</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
