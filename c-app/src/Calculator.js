import React, { Component } from 'react';
import FormulaScreen from './FormulaScreen';
import OutputScreen from './OutputScreen';
import Button from './Button'
class Calculator extends Component {
    state = {}
    render() {
        return (
            <div id="calculator" style={{ backgroundColor: 'blue' }}>
                <FormulaScreen />
                <OutputScreen />
                <Button id='equals' text='='/>
                <Button id='zero' text='0'/>
                <Button id='one' text='1'/>
                <Button id='two' text='2'/>
                <Button id='three' text='3'/>
                <Button id='four' text='4'/>
                <Button id='five' text='5'/>
                <Button id='six' text='6'/>
                <Button id='seven' text='7'/>
                <Button id='eight' text='8'/>
                <Button id='nine' text='9'/>
                <Button id='add' text='+'/>
                <Button id='subtract' text='-'/>
                <Button id='multiply' text='*'/>
                <Button id='divide' text='/'/>

            </div>
        );
    }
}

export default Calculator;