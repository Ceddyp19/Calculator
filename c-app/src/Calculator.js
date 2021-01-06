import React, { Component } from 'react';
import FormulaScreen from './FormulaScreen';
import OutputScreen from './OutputScreen';

class Calculator extends Component {
    state = {}
    render() {
        return (
            <div id="calculator" style={{ backgroundColor: 'blue' }}>
                My Calculator
                <FormulaScreen />
                <OutputScreen />
            </div>
        );
    }
}

export default Calculator;