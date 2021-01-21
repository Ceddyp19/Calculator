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
                <Button id='equals'/>
                <Button id='zero'/>
                <Button id='one'/>
                <Button id='two'/>
                <Button id='three'/>
                <Button id='four'/>
                <Button id='five'/>
                <Button id='six'/>
                <Button id='seven'/>
                <Button id='eight'/>
                <Button id='nine'/>
                <Button id='add'/>
                <Button id='subtract'/>
                <Button id='multiply'/>
                <Button id='divide'/>

            </div>
        );
    }
}

export default Calculator;