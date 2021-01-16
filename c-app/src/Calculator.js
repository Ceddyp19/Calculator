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
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
                <Button id='+'/>
            </div>
        );
    }
}
//Calculator is for the something, I don't know what i'm saying obviously 
//just a little extra code for absolutely nothing but to annoy myself
export default Calculator;