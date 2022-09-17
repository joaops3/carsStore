import React from 'react'
import { Container, Col, Row, Image} from "react-bootstrap";


interface Props {
    text?: "right" | "left",
    img?: string,
    children?: React.ReactNode,
    title?: string
}

const BannerLeft: React.FC<Props> = ({text, img, children, title}) => {
  return (
   
        <Row className="section-container py-100">
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