import React, {ReactElement} from 'react';
import {Col, Container, Row} from "react-bootstrap";

interface RestaurantCardProps {
    picture: ReactElement;
    name: string;
    description: string;
}

const RestaurantCard = ({picture, name, description}: RestaurantCardProps) => {
    return (
        <>
            <Container className={"mt-5 mb-3 pb-3 border-bottom border-black"}>
                <Row>
                    <Col>{picture}</Col>
                    <Col>
                        <Row>
                            <Col><h3>{name}</h3></Col>
                        </Row>
                        <Row>
                            <Col><h5>{description}</h5></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default RestaurantCard;