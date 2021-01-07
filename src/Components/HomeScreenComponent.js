import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="madlibs-screen">
                    <Container>
                        <Row>
                            <Col sm={4} md={3}><Button>Back to Site</Button></Col>
                        </Row>
                        <Row>
                            <Col sm={12}><div className="madlibs-logo">MadLibs</div></Col>
                        </Row>
                        <Row>
                            <NavLink to="/movies"><Col xs={4}><Button className="category-icon">Movies</Button></Col></ NavLink>
                            <NavLink to="/music"><Col xs={4}><Button className="category-icon">Music</Button></Col></ NavLink>
                        </Row>
                    </Container>
                </div>
            </React.Fragment >
        );
    }
}
export default Home;