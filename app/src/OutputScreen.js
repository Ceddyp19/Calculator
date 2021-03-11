import React, { Component } from 'react';

class OutputScreen extends Component {
    render() {
        return (<div id='display'>{this.props.displayText}</div>);
    }
}

export default OutputScreen;
