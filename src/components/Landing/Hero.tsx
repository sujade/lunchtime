import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <Row className="mt-5 d-flex justify-content-center text-center">
                <Col sm={0} md={3}></Col>
                <Col sm={12} md={3}>
                    <Image src="/mobileapp.png" width={580} height={993} alt="Mobile App"/>
                </Col>
                <Col xs={12} md={3} className="d-flex flex-column justify-content-center">
                    <Row className="justify-content-center">
                        <span id={"mobile-title"}>Lunch time already?</span>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <span id={"mobile-text"}>Start now and create your company lunch order in a whole new way!</span>
                    </Row>
                    <Row className="justify-content-start mt-5 ">
                        <Button id={"order-button"} variant="danger" href={"order"} size={"lg"}>ORDER</Button>
                    </Row>
                </Col>
                <Col sm={0} md={3}></Col>
            </Row>
        </div>
    );
};

export default Hero;