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
    <Container className="my-5">
        <Row className="">
            <Col md={6} className={`${text === "left" ? "order-2" : ""} bg-danger` }>
                <Image src={img} alt="#" width="500px" height={"500px"}></Image>
            </Col>
            <Col md={6} className="p-4 secondary-banner">
                
              
                {children}
              
            </Col>
        </Row>

    </Container>
  )
}

export default Banner