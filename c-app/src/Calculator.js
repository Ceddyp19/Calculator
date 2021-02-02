import React, { Component } from 'react';
import FormulaScreen from './FormulaScreen';
import OutputScreen from './OutputScreen';
import Button from './Button'
class Calculator extends Component {
    state = {
        formulaScreenText: '0',
        outputScreenText: '0'
    }

    handleInput = (input) => {
        switch (input) {
            case 'clear':
                console.log('it should clear')
                this.setState({ formulaScreenText: '0', outputScreenText: '0' })
                break;
            case '=':
                this.calculate();
                break;
            case '.':
                this.addDecimalPlace();
                break;
            default:
                //use a terary statement to remove leading zero before adding digit to the formula screen text
                //for ex. without terary, if the 1st num a user typed is 2, '02' would have been displayed on screen 
                this.state.formulaScreenText === '0' ? this.setState({ formulaScreenText: input }) : this.setState({ formulaScreenText: this.state.formulaScreenText + input });
                break;
        }
    }

    calculate = () => {
        //create vars to find the last value user inputed and check whether that value is a number
        let expression = this.state.formulaScreenText,
            lastInput = expression[expression.length - 1],
            isNumber = /\d/;
        //if that value is a number, then we go ahead and evaluate the expression, otherwise, we remove the last input before evaluating
        if (isNumber.test(lastInput)) {
            this.setState({ formulaScreenText: eval(expression) })
        } else {
            expression = expression.slice(0, expression.length - 1)
            this.setState({ formulaScreenText: eval(expression) })
        }
    }

    addDecimalPlace = () => {
        let decimalCounter = 0,
            isMathOperator = /[+-/*]/,
            expression = this.state.formulaScreenText;

        for (let i = 0; i < expression.length; i++){
            if(expression[i] === '.') decimalCounter ++;
            else if(isMathOperator.test(expression[i]) && i !== 0) decimalCounter --;
        }

        if (decimalCounter <= 0) {
            console.log('a decimal should be added')
            this.setState({ formulaScreenText: this.state.formulaScreenText + '.' }) 
        } else {console.log('dont add decimal')}
    }


    render() {
        return (
            <div id="calculator" style={{ backgroundColor: 'blue' }}>
                <FormulaScreen displayText={this.state.formulaScreenText} />
                <OutputScreen outputText={this.state.outputScreenText} displayText={this.state.formulaScreenText} />
                <Button class='number' id='equals' text='=' handleInput={this.handleInput} />
                <Button class='number' id='zero' text='0' handleInput={this.handleInput} />
                <Button class='number' id='one' text='1' handleInput={this.handleInput} />
                <Button class='number' id='two' text='2' handleInput={this.handleInput} />
                <Button class='number' id='three' text='3' handleInput={this.handleInput} />
                <Button class='number' id='four' text='4' handleInput={this.handleInput} />
                <Button class='number' id='five' text='5' handleInput={this.handleInput} />
                <Button class='number' id='six' text='6' handleInput={this.handleInput} />
                <Button class='number' id='seven' text='7' handleInput={this.handleInput} />
                <Button class='number' id='eight' text='8' handleInput={this.handleInput} />
                <Button class='number' id='nine' text='9' handleInput={this.handleInput} />
                <Button class='arithmetic' id='add' text='+' handleInput={this.handleInput} />
                <Button class='arithmetic' id='subtract' text='-' handleInput={this.handleInput} />
                <Button class='arithmetic' id='multiply' text='*' handleInput={this.handleInput} />
                <Button class='arithmetic' id='divide' text='/' handleInput={this.handleInput} />
                <Button id='decimal' text='.' handleInput={this.handleInput} />
                <Button id='clear' text='clear' handleInput={this.handleInput} />

            </div>
        );
    }
}

export default Calculator;

