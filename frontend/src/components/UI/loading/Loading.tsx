import React from 'react'
import LoadingIcon from "../../../assets/logo/loading.svg"


const Loading = () => {
  return (
    <div className='loading'>
        <img src={LoadingIcon} alt="loading icon" className='icon' />
    </div>
  )
}

export default Loading