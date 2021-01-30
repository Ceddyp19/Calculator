import React, { Component } from 'react';

class OutputScreen extends Component {
    state = {}
    render() {
        return (<div style={{ backgroundColor: 'green' }}>{this.props.outputText}</div>);
    }
}

export default OutputScreen;