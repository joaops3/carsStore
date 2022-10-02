import React, { useEffect, useRef, useState } from 'react'
import { Container, Col, Row, Image} from "react-bootstrap";


interface Props {
    text?: "right" | "left",
    img?: string,
    children?: React.ReactNode,
    title?: string
}

const BannerLeft: React.FC<Props> = ({text, img, children, title}) => {
    const targetRef = useRef(null)
    const [isVisible, setIsVisible] = useState<boolean>(false) 
    const [myClass, setMyClass] = useState<"animation"|"hidden-right">("hidden-right")

    useEffect(() => {
        const observer = new IntersectionObserver(([entry])=>{
          //entry = entries[0]
           setIsVisible(entry.isIntersecting)
           if(isVisible){
            setMyClass("animation")
           }
        }, {threshold: 0.2})

        if(targetRef.current){
            observer.observe(targetRef.current)
        }
      
    


    }, [isVisible])


  return (
   
        <Row ref={targetRef} className={`section-container py-100 ${myClass}`}>
            <Col md={6} className={`${text === "left" ? "order-2" : ""} text-center` }>
                <Image src={img} alt="#" width="500px"  ></Image>
            </Col>
            <Col md={6} className={`${text ==="left" ? "text-end": ""} `}>
                
            {children}
            </Col>
        </Row>

  )
}

export default BannerLeft