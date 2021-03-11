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
                this.setState({ formulaScreenText: '0', outputScreenText: '0' })
                break;
            case '=':
                this.calculate();
                break;
            case '.':
                this.addDecimalPlace();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.mathOperator(input);
                this.setState({ outputScreenText: input })
                break;
            default:
                //use a terary statement to remove leading zero before adding digit to the formula screen text
                //for ex. without terary, if the 1st num a user typed is 2, '02' would have been displayed on screen 
                this.state.formulaScreenText === '0' ? this.setState({ formulaScreenText: input, outputScreenText: input }) : this.checkInput(input);
                break;
        }
    }

    checkInput = (newInput) => {
        this.setState({ formulaScreenText: this.state.formulaScreenText + newInput })
        // for the formula screen on our Calculator we want to show the entire expression, where as in our ouptut screen
        // we only want the user to see numbers and arithmetic operators individually 
        let prevInput = this.state.outputScreenText,
            isNumber = /\d/,
            isOperator = /[+-/*]/;

        if (prevInput[prevInput.length - 1] === '.' && isNumber.test(newInput)) {
            this.setState({ outputScreenText: this.state.outputScreenText + newInput })
        } else if (isOperator.test(prevInput) && isNumber.test(newInput)) {
            this.setState({ outputScreenText: newInput })
        } else {
            this.setState({ outputScreenText: this.state.outputScreenText + newInput })
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
            this.setState({ outputScreenText: eval(expression) })
        } else {
            expression = expression.slice(0, expression.length - 1)
            this.setState({ formulaScreenText: eval(expression) })
        }
    }

    addDecimalPlace = () => {
        let decimalCounter = 0,
            isOperator = /[+-/*]/,
            expression = this.state.formulaScreenText;
        //enumerate over expression and count the number of decimals in expression and subtract number of operations
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '.') decimalCounter++;
            else if (isOperator.test(expression[i]) && i !== 0) decimalCounter--;
        }
        // if counter is greater than 0, then we know that we already have a decimal in our number and shouldn't add another
        if (decimalCounter <= 0) {
            this.setState({ formulaScreenText: this.state.formulaScreenText + '.' })
            this.setState({ outputScreenText: this.state.outputScreenText + '.' })
        } else { console.log('dont add decimal') }
    }

    mathOperator = (mathOperator) => {
        let expression = this.state.formulaScreenText,
            lastInput = expression[expression.length - 1],
            second2LastInput = expression[expression.length - 2],
            isNotNegativeSign = /[^-]/,
            isOperator = /[+-/*]/;


        // The code below is the logic that allows us to subtract negative numbers
        if (isOperator.test(second2LastInput) && !isNotNegativeSign.test(lastInput) && !isNotNegativeSign.test(mathOperator)) {
            //  we do nothing
            console.log('can not have two negatives signs');

        } else if (isOperator.test(second2LastInput) && !isNotNegativeSign.test(lastInput) && isNotNegativeSign.test(mathOperator)) {
            //   we cut off the two previous operator signs and append the new operator 
            expression = expression.slice(0, expression.length - 2)
            this.setState({ formulaScreenText: expression + mathOperator })

        } else if (isOperator.test(lastInput) && isNotNegativeSign.test(mathOperator)) {
            //if previous operator is not a negative sign, we cut it off and append the new operator
            expression = expression.slice(0, expression.length - 1)
            this.setState({ formulaScreenText: expression + mathOperator })

        } else {
            this.setState({ formulaScreenText: expression + mathOperator })
        }
    }


    render() {
        return (
            <div id="calculator">
                <FormulaScreen displayText={this.state.formulaScreenText} />
                <OutputScreen displayText={this.state.outputScreenText} />
                <div className='buttons-div'>
                    <Button id='clear' text='clear' handleInput={this.handleInput} />
                    <Button className='arithmetic' id='multiply' text='*' handleInput={this.handleInput} />
                    <Button className='arithmetic' id='divide' text='/' handleInput={this.handleInput} />
                    <Button className='number' id='seven' text='7' handleInput={this.handleInput} />
                    <Button className='number' id='eight' text='8' handleInput={this.handleInput} />
                    <Button className='number' id='nine' text='9' handleInput={this.handleInput} />
                    <Button className='arithmetic' id='subtract' text='-' handleInput={this.handleInput} />
                    <Button className='number' id='four' text='4' handleInput={this.handleInput} />
                    <Button className='number' id='five' text='5' handleInput={this.handleInput} />
                    <Button className='number' id='six' text='6' handleInput={this.handleInput} />
                    <Button className='arithmetic' id='add' text='+' handleInput={this.handleInput} />
                    <Button className='number' id='one' text='1' handleInput={this.handleInput} />
                    <Button className='number' id='two' text='2' handleInput={this.handleInput} />
                    <Button className='number' id='three' text='3' handleInput={this.handleInput} />
                    <Button className='number' id='equals' text='=' handleInput={this.handleInput} />
                    <Button className='number' id='zero' text='0' handleInput={this.handleInput} />
                    <Button id='decimal' text='.' handleInput={this.handleInput} />
                </div>
            </div>
        );
    }
}

export default Calculator;
