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
                <Button class='number' id='equals' text='='/>
                <Button class='number' id='zero' text='0'/>
                <Button class='number' id='one' text='1'/>
                <Button class='number' id='two' text='2'/>
                <Button class='number' id='three' text='3'/>
                <Button class='number' id='four' text='4'/>
                <Button class='number' id='five' text='5'/>
                <Button class='number' id='six' text='6'/>
                <Button class='number' id='seven' text='7'/>
                <Button class='number' id='eight' text='8'/>
                <Button class='number' id='nine' text='9'/>
                <Button class='arithmetic' id='add' text='+'/>
                <Button class='arithmetic' id='subtract' text='-'/>
                <Button class='arithmetic' id='multiply' text='*'/>
                <Button class='arithmetic' id='divide' text='/'/>
                <Button id='decimal' text='.'/>
                <Button id='clear' text='clear'/>

            </div>
        );
    }
}

export default Calculator;