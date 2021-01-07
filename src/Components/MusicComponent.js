import React, { Component } from 'react';
import { Container, Card, Col, Row, CardImg, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Rap } from '../shared/RapTitles';
import {Rock} from '../shared/RockTitles'
//Go to the Single Page Application in the React Course
class Music extends Component {
    constructor(props) {
        super(props);
        this.showSongRap = this.showSongRap.bind(this);
        this.showSongRock = this.showSongRock.bind(this);
        this.enterLetters = this.enterLetters.bind(this);
        this.nextBtn = this.nextBtn.bind(this);
        this.backBtn = this.backBtn.bind(this);
        this.prevBtn = this.prevBtn.bind(this);
        this.doneBtn = this.doneBtn.bind(this);
        this.state = {
            currentSong: 0,
            currentPrompt: 0,
            disabled: true,
            nextDisabled: true,
            prevDisabled: true,
            rap: Rap,
            rock: Rock,
            genre: Rap
        };
    }

    showSongRap(x) {
        document.querySelector('.filmScreenDisplay').style.display = "none";
        document.querySelector('.Choice-Icon').style.display = "inline-block";
        this.setState({
            currentSong: x,
            genre:Rap
        });
    }
    showSongRock(x) {
        document.querySelector('.filmScreenDisplay').style.display = "none";
        document.querySelector('.Choice-Icon').style.display = "inline-block";
        this.setState({
            currentSong: x,
            genre:Rock
        });
    }


    enterLetters(x) {
        var madlibsText = document.querySelector('.madlib-text');

        this.state.genre[this.state.currentSong].currentWord.push(x);
        madlibsText.innerHTML = this.state.genre[this.state.currentSong].currentWord.join('');

        if (this.state.genre[this.state.currentSong].currentWord.length >= 1) {
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
        this.state.genre[this.state.currentSong].currentWord.length = 0;
        this.state.genre[this.state.currentSong].words.pop();
        if (this.state.genre[this.state.currentSong].words.length <= 1) {
            this.setState({
                prevDisabled: true
            })
        }
    }
    backBtn() {
        this.state.genre[this.state.currentSong].currentWord.pop();
        document.querySelector('.madlib-text').innerHTML = this.state.genre[this.state.currentSong].currentWord.join('');
    }
    nextBtn() {
        this.setState({
            nextDisabled: true,
            prevDisabled: false
        })
        this.state.genre[this.state.currentSong].words.push(this.state.genre[this.state.currentSong].currentWord.join(''));


        if (this.state.currentPrompt < this.state.genre[this.state.currentSong].speech.length - 1) {
            this.setState({
                currentPrompt: this.state.currentPrompt + 1
            })

            this.state.genre[this.state.currentSong].currentWord.length = 0;
            document.querySelector('.madlib-text').innerHTML = '';

        }
        else {
            this.setState({
                disabled: !this.state.disabled
            })
            document.querySelector('.next-button').style.display = "none";
            document.querySelector('.done-button').style.display = "inline";
            alert(this.state.genre[this.state.currentSong].words.join(''));
        }
    }
    doneBtn() {
        var complete =this.state.genre[this.state.currentSong].complete;
        document.querySelector('.Choice-Icon').style.display = "none";
        document.querySelector('.Completed-MadLib').style.display = "inline-block";
        for (var i = 0; i < this.state.genre[this.state.currentSong].words.length; i++) {

            document.querySelector('.completed-text').append(complete[i] + ' ' + this.state.genre[this.state.currentSong].words[i] + ' ');
        }
        document.querySelector('.completed-text').append(complete[(complete.length - 1)]);
    }

    render() {
        const showRap = this.state.rap.map(song => {
            return (
                <Col xs={6} sm={6} md={3} className="full-display-item">

                    <Card className="madlib-card" onClick={() => this.showSongRap(song.id)}>
                        <CardImg width="10%" src={song.image} alt={song.title} />
                        <CardImgOverlay>
                            <CardTitle className="title-specific">{song.title}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <div className="bottom-text">
                        <p>{song.subhead}</p>
                        <p>{song.actor}</p>
                    </div>
                </Col>
            );
        });
        const showRock = this.state.rock.map(song => {
            return (
                <Col xs={6} sm={6} md={3} className="full-display-item">

                    <Card className="madlib-card" onClick={() => this.showSongRock(song.id)}>
                        <CardImg width="10%" src={song.image} alt={song.title} />
                        <CardImgOverlay>
                            <CardTitle className="title-specific">{song.title}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <div className="bottom-text">
                        <p>{song.subhead}</p>
                        <p>{song.actor}</p>
                    </div>
                </Col>
            );
        });
        return (
            <React.Fragment>
                <Container className="filmScreenDisplay">
                    <Row>
                        <Col xs={12} ><h3 className="category-title">Rap</h3></Col>
                    </Row>
                    <Row>
                        {showRap}
                    </Row>
                    <Row>
                        <Col xs={12} ><h3 className="category-title">Rock</h3></Col>
                    </Row>
                    <Row>
                        {showRock}
                    </Row>
                </Container>
                <Container className="Choice-Icon">
                    <Row>
                        <Col>
                            <h2>{this.state.genre[this.state.currentSong].speech[this.state.currentPrompt]}</h2>
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


export default Music;