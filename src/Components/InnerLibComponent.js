import React, { Component } from 'react';
import KeyBoard from "../../src/Components/KeyBoardComponent";
import { Container, Button, Col, Row } from 'reactstrap';
import { Comedy } from '../shared/ComedyTitles';
//Go to the Single Page Application in the React Course
class InnerMadLib extends Component {
    constructor(props) {
        super(props);
        this.nextBtn = this.nextBtn.bind(this);
        

        this.state = {
            currentFilm:0,
            currentPrompt: 0,
            disabled: false,
            comedy: Comedy,
        };
    }

    nextBtn() {
        if (this.state.currentPrompt < this.state.comedy[this.state.currentFilm].speech.length - 1) {
            this.setState({
                currentPrompt: this.state.currentPrompt + 1
            })

        }
        else {
            this.setState({
                disabled: !this.state.disabled
            })
        }
    }

    render() {


        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <h2>{this.state.comedy[this.state.currentFilm].speech[this.state.currentPrompt]}</h2>
                            <h2>hello</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Button disabled={this.state.disabled} onClick={this.nextBtn} >Next</Button>
                    </Row>
                    <KeyBoard />
                </Container>
            </React.Fragment>
        );

    }
}
export default InnerMadLib;