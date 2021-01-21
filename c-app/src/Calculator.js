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
                <Button id='equals' text=''/>
                <Button id='zero' text=''/>
                <Button id='one' text=''/>
                <Button id='two' text=''/>
                <Button id='three' text=''/>
                <Button id='four' text=''/>
                <Button id='five' text=''/>
                <Button id='six' text=''/>
                <Button id='seven' text=''/>
                <Button id='eight' text=''/>
                <Button id='nine' text=''/>
                <Button id='add' text=''/>
                <Button id='subtract' text=''/>
                <Button id='multiply' text=''/>
                <Button id='divide' text=''/>

            </div>
        );
    }
}

export default Calculator;