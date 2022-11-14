import * as S from './style'
import { OPTIONS } from '../../utils/constants'
import {
  fetchDatas,
  filterGuGunDatas,
  chnageSido,
} from '../../feature/dustSlice'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { useLocation } from 'react-router'

function SelectBox() {
  const dispatch = useAppDispatch()
  const isStatus = useAppSelector((state) => state.dust.status)
  const isError = useAppSelector((state) => state.dust.error)
  const guGunList = useAppSelector((state) => state.dust.setGuGunList)
  const defaultData = useAppSelector((state) => state.dust.setCardData)

  const location = useLocation().pathname

  const changeSidoHandler = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(chnageSido(e.target.value))
    dispatch(fetchDatas(e.target.value))
  }

  const changeGuGunHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterGuGunDatas(e.target.value))
  }

  return (
    <S.Container>
      {location !== '/favorite' && (
        <S.SelectBox onChange={changeSidoHandler} width={''}>
          {OPTIONS.map((sido, index) => (
            <option key={index} value={sido}>
              {sido}
            </option>
          ))}
        </S.SelectBox>
      )}

      {location == '/' && (
        <S.SelectBox
          onChange={changeGuGunHandler}
          width="217"
          defaultValue={defaultData!}
          key={defaultData}
        >
          {guGunList &&
            guGunList?.map((gugun, index) => (
              <option key={index}>{gugun}</option>
            ))}
        </S.SelectBox>
      )}
    </S.Container>
  )
}

export default SelectBox
