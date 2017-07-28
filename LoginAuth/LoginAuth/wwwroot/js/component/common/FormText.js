import React from 'react';
import ReactDom from 'react-dom';

class TextBox extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.textBoxChange(event.target.value);
    }

    render() {
        return (<input type="text" value={this.props.value} onChange={this.handleChange} />)
    }
};

class Button extends React.Component {
    constructor(props) {
        super(props);
      this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event) {
      this.props.onclick();
    }

    render() {
        return (<button onClick={this.handleClick}>{this.props.Name}</button>)
    }
};

export {
    TextBox,
    Button
}