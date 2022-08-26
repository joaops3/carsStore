import React, {useEffect, useState} from 'react'
//@ts-ignore
import {Carousel} from "react-carousel-minimal"

interface Props {
    data: any
}

const CarouselMinimal: React.FC<Props> = ({data}) => {
    
  
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
            data={data}
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