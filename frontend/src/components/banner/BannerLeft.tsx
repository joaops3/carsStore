import React from 'react'
import { Container, Col, Row, Image} from "react-bootstrap";
import img2 from "../../assets/images/banner2.jpg"

interface Props {
    text?: "right" | "left",
    img?: string,
    children?: string,
    title?: string
}

const BannerLeft: React.FC<Props> = ({text, img, children, title}) => {
  return (
    <Container className=" mt-5">
        <Row className="">
            <Col md={6} className={`${text === "left" ? "order-2" : ""} order-2` }>
                <Image src={img2} alt="#" width="500px"  ></Image>
            </Col>
            <Col md={6} className={` p-4 ${text ==="left" ? "text-end": ""}`}>
                
                <h1 className="">title</h1>
                <div className="mt-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus ut enim elementum faucibus. Nam gravida non nulla non vehicula. Etiam elementum ali</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus ut enim elementum faucibus. Nam gravida non nulla non vehicula. Etiam elementum ali</p>
                </div>
            </Col>
        </Row>

    </Container>
  )
}

export default BannerLeft