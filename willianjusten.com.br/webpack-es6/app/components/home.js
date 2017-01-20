import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message || 'Hello World!'
        };
    }

    render() {
        return (
            <h1>{ this.state.message }</h1>
        );
    }
}