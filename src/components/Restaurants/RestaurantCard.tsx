import React, {ReactElement} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

interface RestaurantCardProps {
    picture: ReactElement;
    name: string;
    description: string;
}

const RestaurantCard = ({picture, name, description}: RestaurantCardProps) => {
    return (
        <>
            <Container className={"mt-5 mb-3 pb-3"}>
                <Row>
                    <Col md={3}>{picture}</Col>
                    <Col>
                        <Row>
                            <Col><h3 className={"fw-bolder"}>{name}</h3></Col>
                        </Row>
                        <Row>
                            <Col><h5 className={"fw-bold"}>{description}</h5></Col>
                        </Row>
                        <Row>
                            <Col><Button variant="danger" size={"lg"} className={"mt-3"}>Check Offers!</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default RestaurantCard;