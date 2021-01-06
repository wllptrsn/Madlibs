import React, { Component } from 'react';
import { Container, Card, Col, Row, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Comedy } from '../shared/ComedyTitles';
//Go to the Single Page Application in the React Course
class Films extends Component {
    constructor(props) {
        super(props);
        this.showFilm = this.showFilm.bind(this);
        this.enterLetters = this.enterLetters.bind(this);
        this.nextBtn = this.nextBtn.bind(this);
        this.backBtn = this.backBtn.bind(this);
        this.prevBtn = this.prevBtn.bind(this);
        this.doneBtn = this.doneBtn.bind(this);
        this.state = {
            currentFilm: 0,
            currentPrompt: 0,
            disabled: true,
            nextDisabled: true,
            prevDisabled: true,
            comedy: Comedy
        };
    }

    showFilm(x) {
        document.querySelector('.filmScreenDisplay').style.display = "none";
        document.querySelector('.Choice-Icon').style.display = "inline-block";
        this.setState({
            currentFilm: x
        });
    }

    enterLetters(x) {
        var madlibsText = document.querySelector('.madlib-text');

        this.state.comedy[this.state.currentFilm].currentWord.push(x);
        madlibsText.innerHTML = this.state.comedy[this.state.currentFilm].currentWord.join('');

        if (this.state.comedy[this.state.currentFilm].currentWord.length >= 1) {
            this.setState({
                nextDisabled: false
            })
        }
    }
    prevBtn() {
        this.setState({
            nextDisabled: true,
            currentPrompt: this.state.currentPrompt - 1,

        })
        this.state.comedy[this.state.currentFilm].currentWord.length = 0;

        this.state.comedy[this.state.currentFilm].words.pop();
        if (this.state.comedy[this.state.currentFilm].words.length <= 1) {
            this.setState({
                prevDisabled: true
            })
        }
    }
    backBtn() {
        this.state.comedy[this.state.currentFilm].currentWord.pop();
        document.querySelector('.madlib-text').innerHTML = this.state.comedy[this.state.currentFilm].currentWord.join('');
    }
    nextBtn() {
        this.setState({
            nextDisabled: true,
            prevDisabled: false
        })
        this.state.comedy[this.state.currentFilm].words.push(this.state.comedy[this.state.currentFilm].currentWord.join(''));


        if (this.state.currentPrompt < this.state.comedy[this.state.currentFilm].speech.length - 1) {
            this.setState({
                currentPrompt: this.state.currentPrompt + 1
            })

            this.state.comedy[this.state.currentFilm].currentWord.length = 0;
            document.querySelector('.madlib-text').innerHTML = '';

        }
        else {
            this.setState({
                disabled: !this.state.disabled
            })
            document.querySelector('.next-button').style.display = "none";
            document.querySelector('.done-button').style.display = "inline";
            alert(this.state.comedy[this.state.currentFilm].words.join(''));
        }
    }
    doneBtn() {
        var complete =this.state.comedy[this.state.currentFilm].complete;
        document.querySelector('.Choice-Icon').style.display = "none";
        document.querySelector('.Completed-MadLib').style.display = "inline-block";
        for (var i = 0; i < this.state.comedy[this.state.currentFilm].words.length; i++) {

            document.querySelector('.completed-text').append(complete[i] + ' ' + this.state.comedy[this.state.currentFilm].words[i] + ' ');
        }
        document.querySelector('.completed-text').append(complete[(complete.length - 1)]);
    }

    render() {
        const showComedy = this.state.comedy.map(film => {
            return (
                <Col xs={6} sm={6} md={3} className="full-display-item">

                    <Card className="madlib-card" onClick={() => this.showFilm(film.id)}>
                        <CardImg width="10%" src={film.image} alt={film.title} />
                        <CardImgOverlay>
                            <CardTitle className="title-specific">{film.title}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <div className="bottom-text">
                        <p>{film.subhead}</p>
                        <p>{film.actor}</p>
                    </div>
                </Col>
            );
        });
        return (
            <React.Fragment>
                <Container className="filmScreenDisplay">
                    <Row>
                        <Col xs={12} ><h3 className="category-title">Comedy</h3></Col>
                    </Row>
                    <Row>
                        {showComedy}
                    </Row>
                </Container>
                <Container className="Choice-Icon">
                    <Row>
                        <Col>
                            <h2>{this.state.comedy[this.state.currentFilm].speech[this.state.currentPrompt]}</h2>
                            <div className="madlib-text"><h3> </h3></div>
                        </Col>
                    </Row>
                    <Row>
                        <div class="keyboard">
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Q') }}>Q</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('W') }}>W</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('E') }}>E</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('R') }}>R</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('T') }}>T</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Y') }}>Y</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('U') }}>U</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('I') }}>I</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('O') }}>O</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('P') }}>P</Button><br></br>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('A') }}>A</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('S') }}>S</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('D') }}>D</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('F') }}>F</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('G') }}>G</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('H') }}>H</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('J') }}>J</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('K') }}>K</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('L') }}>L</Button><br></br>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('Z') }}>Z</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('X') }}>X</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('C') }}>C</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('V') }}>V</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('B') }}>B</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('N') }}>N</Button>
                            <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('M') }}>M</Button><br></br>
                            <Button disabled={this.state.nextDisabled} onClick={() => { this.enterLetters(' ') }}></Button>
                        </div>
                    </Row>
                    <Row>
                        <Button disabled={this.state.prevDisabled} onClick={this.prevBtn} >Prev</Button>
                        <Button disabled={this.state.nextDisabled} onClick={this.backBtn} >Back</Button>
                        <Button className="next-button" disabled={this.state.nextDisabled} onClick={this.nextBtn} >Next</Button>
                        <Button className="done-button" onClick={this.doneBtn}>Done</Button>
                    </Row>

                </Container>
                <Container className="Completed-MadLib">
                    <p className="completed-text">
                    </p>
                </Container>
            </React.Fragment>
        );

    }
}


export default Films;