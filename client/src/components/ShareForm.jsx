import React, { Component } from 'react';
import styled from 'styled-components';

const PopOutShare = styled.form`
z-index: 3; 
`

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <PopOutShare onSubmit={this.handleSubmit}>
        <button onClick={this.props.close}>X</button>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </PopOutShare>
    );
  }
}

export default ShareForm;
