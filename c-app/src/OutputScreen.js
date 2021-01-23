import React, { Component } from 'react';

class OutputScreen extends Component {
    state = {}
    render() {
        return (<div id="display" style={{ backgroundColor: 'green' }}>{this.props.outputText}</div>);
    }
}

export default OutputScreen;