import React, {useEffect, useState} from 'react'
//@ts-ignore
import {Carousel} from "react-carousel-minimal"
import { CarsInterface } from '../../interfaces/interfaces'

interface Props {
    data: any
}

const CarouselMinimal: React.FC<Props> = ({data}) => {
  const [data2, setData ] =  useState<any>([])

   let mydata = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: ``,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      caption: ``,
    },
  ];
    useEffect(()=> {
   if(data){
    data.forEach((item: any) => {setData({image: data.url, caption: "x"})})
   }
    },[])
  
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    
  return (

   <>
      <Carousel
            data={data2}
            time={20000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
   </>
  )
}

export default CarouselMinimal