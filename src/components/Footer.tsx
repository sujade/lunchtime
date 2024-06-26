import React from 'react';
import {Col, Row} from "react-bootstrap";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <>
                <Row className={"mt-5"}>
                    <div className="footer text-center">
                        <span>2024 Lunchbreak</span>
                    </div>
                </Row>
                <Row>
                    <div className="footer text-center">
                        <p>Made with lots of <FaHeart/> by <a id={"footer-text"} href={"https://github.com/sujade"}>Su Jade</a></p>
                    </div>
                </Row>
        </>
    );
};

export default Footer;