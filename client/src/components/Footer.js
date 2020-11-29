import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className="text-center py-3" bg='danger'>
                        Copyright &copy; NPP {(new Date().getFullYear())}
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;