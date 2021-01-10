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
                            <Col><Button>Back to Site</Button></Col>
                        </Row>
                        <Row>
                            <Col sm={12}><div className="madlibs-logo">ODDLIBS</div></Col>
                        </Row>
                        <Row>
                            <Col>
                                <NavLink to="/movies"><Button className="category-icon">Movies</Button></ NavLink>
                                <NavLink to="/music"><Button className="category-icon">Music</Button></ NavLink>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment >
        );
    }
}
export default Home;