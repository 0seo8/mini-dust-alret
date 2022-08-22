import * as S from './SelectBox/style'
import { OPTIONS } from '../utils/constants'
import {
  getGuGunList,
  fetchDatas,
  filterGuGunDatas,
  chnageSido,
} from '../feature/dustSlice'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useLocation } from 'react-router'
import selectImg from '../assets/selectImg.svg'

function SelectBox() {
  const dispatch = useDispatch()
  const guGunList = useSelector(getGuGunList)

  const location = useLocation().pathname

  const changeSidoHandler = async (e) => {
    dispatch(chnageSido(e.target.value))
    dispatch(fetchDatas(e.target.value))
  }

  const changeGuGunHandler = (e) => {
    dispatch(filterGuGunDatas(e.target.value))
  }

  return (
    <div className="flex items-center justify-center mt-4">
      {location !== '/favorite' && (
        <S.SelectBox onChange={changeSidoHandler}>
          {OPTIONS.map((sido, index) => (
            <option key={index} value={sido}>
              {sido}
            </option>
          ))}
        </S.SelectBox>
      )}

      {location == '/' && (
        <S.SelectBox onChange={changeGuGunHandler} width="217">
          {guGunList &&
            guGunList.map((gugun, index) => (
              <option key={index} value={gugun}>
                {gugun}
              </option>
            ))}
        </S.SelectBox>
      )}
    </div>
  )
}

export default SelectBox
