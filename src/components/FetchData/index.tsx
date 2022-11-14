import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/store'
import { fetchDatas } from '../../feature/dustSlice'
import * as S from './style'
import Spinner from 'react-bootstrap/Spinner'

function FetchData() {
  const dispatch = useAppDispatch()
  const isStatus = useAppSelector((state) => state.dust.status)
  const Error = useAppSelector((state) => state.dust.error)

  useEffect(() => {
    if (isStatus === 'idle') {
      dispatch(fetchDatas('서울'))
    }
  }, [isStatus, dispatch])

  return (
    <S.Container>
      {isStatus === 'loading' && (
        <S.Loading>
          <Spinner animation="border" />
        </S.Loading>
      )}
      {isStatus === 'failed' && <p>{Error}</p>}
    </S.Container>
  )
}

export default FetchData
