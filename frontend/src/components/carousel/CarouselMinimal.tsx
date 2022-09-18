import React, {useEffect, useState} from 'react'
import { CarsInterface } from '../../interfaces/interfaces'
import {Row, Image,Col} from "react-bootstrap"

interface Props {
    data: any
}

const CarouselMinimal: React.FC<Props> = ({data}) => {
  const [currentImg, setCurrentImg ] =  useState<string>(data[0].url)


   
 
    
  return (

   <>
    {data && ( 
    
      <Row className='carousel-container'>  
      <Col xs={12}><Image src={currentImg}  width={700} height={400}></Image></Col>
      {data?.map((item: any, index: number) => {return <Col xs={3} className="mt-10"><Image key={index} src={item.url} width={200} height={110} onClick={()=> {setCurrentImg(item.url)}}></Image></Col>})}
      </Row>)

    }
   </>
  )
}

export default CarouselMinimal