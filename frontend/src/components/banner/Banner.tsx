import React from 'react'
import { Container, Col, Row, Image} from "react-bootstrap";

interface Props {
    text?: "right" | "left",
    img?: string,
    children?: React.ReactNode,
    title?: string
}

const Banner: React.FC<Props> = ({text, img, children, title}) => {
  return (
    <Container className="mt-5">
        <Row className="">
            <Col md={6} className={`${text === "left" ? "order-2" : ""}` }>
                <Image src={img} alt="#" width="500px"  style={{objectFit: "cover"}}></Image>
            </Col>
            <Col md={6} className="p-4">
                
              
                {children}
              
            </Col>
        </Row>

    </Container>
  )
}

export default Banner