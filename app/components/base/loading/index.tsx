import React from 'react'

import './style.css'

interface ILoadingProps {
  type?: 'area' | 'app'
}
const Loading = (
  { type = 'area' }: ILoadingProps = { type: 'area' },
) => {
  return (
    <div className={`flex w-full justify-center items-center ${type === 'app' ? 'h-full' : ''}`}>
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='spin-animation'>
        <circle cx="6" cy="6" r="4" fill="#6366F1" className="dot" />
        <circle cx="20" cy="6" r="4" fill="#6366F1" className="dot" />
        <circle cx="34" cy="6" r="4" fill="#6366F1" className="dot" />
      </svg>
    </div>
  )
}

export default Loading
