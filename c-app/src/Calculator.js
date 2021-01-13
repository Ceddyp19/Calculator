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
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
                <Calculator id='+'/>
            </div>
        );
    }
}

export default Calculator;