import selectImg from '../assets/selectImg.svg'
export const OPTIONS = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '세종',
]

export const strGrade = (data) => {
  if (data === '1') {
    return ['좋음', 'bg-green-300', 'text-green-300']
  } else if (data === '2') {
    return ['보통', 'bg-indigo-300', 'text-indigo-300']
  } else if (data === '3') {
    return ['나쁨', 'bg-yellow-400', 'text-yellow-400']
  } else {
    return ['매우 나쁨', 'bg-orange-600', 'text-orange-600']
  }
}

export const selectStyle = (width) => {
  return `pt-[0.375] pr-[2.25rem] pb-[0.375rem] pl-[0.75rem] font-normal leading-normal appearance-none border rounded-xl transition bg-white  bg-no-repeat`
}

export const cls = (...classnames) => classnames.join('')
