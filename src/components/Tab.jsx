import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GrMapLocation, GrMap, GrStar } from 'react-icons/gr'
import { cls } from '../utils/constants'

function Tab({ isActive }) {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t h-[10%] border-slate-200 shadow-[0_0_6px_4px_rgba(0,0,0,.04)] rounded-[10px_10px_0_0] z-50 flex flex-wrap pt-2 pb-2 pl-8 pr-8 cursor-pointer bg-white justify-between">
      <div
        onClick={() => navigate('/')}
        className={cls(
          'flex-gorw flex gap-1 flex-col justify-center items-center text-xl ',
          `${isActive === '/' ? 'border-b-2 border-b-green-300' : ''}`,
        )}
      >
        {<GrMap />}
        <span className="text-xs">내지역</span>
      </div>
      <div
        onClick={() => navigate('/viewall')}
        className={cls(
          'flex-gorw flex gap-1 flex-col justify-center items-center text-xl ',
          `${isActive === '/viewall' ? 'border-b-2 border-b-green-300' : ''}`,
        )}
      >
        {<GrMapLocation />}
        <span className="text-xs">모든지역</span>
      </div>
      <div
        onClick={() => navigate('/favorite')}
        className={cls(
          'flex-gorw flex gap-1 flex-col justify-center items-center text-xl ',
          `${isActive === '/favorite' ? 'border-b-2 border-b-green-300' : ''}`,
        )}
      >
        {<GrStar />}
        <span className="text-xs">즐겨찾기</span>
      </div>
    </div>
  )
}

export default Tab
