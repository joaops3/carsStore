import React from 'react'
import LoadingIcon from "../../../assets/logo/loading.svg"


const Loading = () => {
  return (
    <div className='loading'>
      <div className='loading icon'>
        <img src={LoadingIcon} alt="loading icon" className='icon' />
        <div>Carregando...</div>
      </div>
      
    </div>
  )
}

export default Loading