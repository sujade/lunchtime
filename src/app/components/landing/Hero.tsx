import React from 'react';
import {Col, Row} from "react-bootstrap";
import Image from "next/image";

const Hero = () => {
    return (
        <div>
            <Row className="mt-5 d-flex justify-content-center text-center">
                <Col md={3}></Col>
                <Col md={3}>
                    <Image src="/mobileapp.png" width={580} height={993} alt="Mobile App"/>
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-center">
                    <Row className="justify-content-center">
                        <span id={"mobile-title"}>Are you hungry yet?</span>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <span id={"mobile-text"}>Start now and create your company lunch order in a whole new way!</span>
                    </Row>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    );
};

export default Hero;