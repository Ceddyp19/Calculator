import React, { Component } from 'react';
import FormulaScreen from './FormulaScreen';
import OutputScreen from './OutputScreen';
import Button from './Button'
class Calculator extends Component {
    state = {
        formulaScreenText: '0',
        outputScreenText: '0'
    }

    handleInput = () => {        
        this.state.formulaScreenText === '0' ? console.log('this is doing something') : console.log('it is not');
        this.setState({
            formulaScreenText: '0',
            outputScreenText: '0'
        })

    }

    inputNum = (num) => {
        //use a terary statement to remove leading zero before adding digit to the formula screen text
        //for ex. without terary, if the 1st num a user typed is 2, '02' would have been displayed on screen 
        this.state.formulaScreenText === '0' 
        ? 
        this.setState({formulaScreenText: num}) 
        : 
        this.setState({formulaScreenText: this.state.formulaScreenText + num});
    }

    render() {
        return (
            <div id="calculator" style={{ backgroundColor: 'blue' }}>
                <FormulaScreen displayText={this.state.formulaScreenText} />
                <OutputScreen outputText={this.state.outputScreenText}/>
                <Button class='number' id='equals' text='=' />
                <Button class='number' id='zero' text='0' num={0} action={this.inputNum}/>
                <Button class='number' id='one' text='1' num={1} action={this.inputNum}/>
                <Button class='number' id='two' text='2' num={2} action={this.inputNum}/>
                <Button class='number' id='three' text='3' num={3} action={this.inputNum}/>
                <Button class='number' id='four' text='4' num={4} action={this.inputNum}/>
                <Button class='number' id='five' text='5' num={5} action={this.inputNum}/>
                <Button class='number' id='six' text='6' num={6} action={this.inputNum}/>
                <Button class='number' id='seven' text='7' num={7} action={this.inputNum}/>
                <Button class='number' id='eight' text='8' num={8} action={this.inputNum}/>
                <Button class='number' id='nine' text='9' num={9} action={this.inputNum}/>
                <Button class='arithmetic' id='add' text='+' />
                <Button class='arithmetic' id='subtract' text='-' />
                <Button class='arithmetic' id='multiply' text='*' />
                <Button class='arithmetic' id='divide' text='/' />
                <Button id='decimal' text='.' />
                <Button id='clear' text='clear' handleInput={this.handleInput} />

            </div>
        );
    }
}

export default Calculator;

