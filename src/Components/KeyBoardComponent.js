import React, { Component } from 'react';
import {Container, Button} from 'reactstrap';
class KeyBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            disabled: true
        };
    }
    render() {
        return (
            <Container>
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
                    <Button disabled={!this.state.disabled} onClick={() => { this.enterLetters('M') }}>M</Button>
                </div>
            </Container>
        );

    }
}
export default KeyBoard;