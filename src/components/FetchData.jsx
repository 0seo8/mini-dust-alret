import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import {
  getDustDataStatus,
  getDustDataError,
  fetchDatas,
} from '../feature/dustSlice'
import Spinner from 'react-bootstrap/Spinner'

function FetchData() {
  const dispatch = useDispatch()
  const isStatus = useSelector(getDustDataStatus)
  const Error = useSelector(getDustDataError)

  useEffect(() => {
    if (isStatus === 'idle') {
      dispatch(fetchDatas())
    }
  }, [isStatus, dispatch])

  return (
    <div className="flex justify-center">
      {isStatus === 'loading' && <Spinner animation="border" />}
      {isStatus === 'failed' && <p>{Error}</p>}
    </div>
  )
}

export default FetchData
