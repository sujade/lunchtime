import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import LoginForm from "@/components/MyAccount/LoginForm";
import RegisterForm from "@/components/MyAccount/RegisterForm";

const Page = () => {
    return (
        <>
            <Row className={"mt-5 mb-5"}>
                <Col mt={2}></Col>
            <Col mt={4}>
               <LoginForm/>
            </Col>
                <Col mt={4}>
                    <RegisterForm/>
                </Col>
                <Col mt={2}></Col>
            </Row>
        </>
    );
};

export default Page;