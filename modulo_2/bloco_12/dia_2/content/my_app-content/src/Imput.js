import React, { Component } from 'react'
// import './Form.css'

class Form extends Component {
  render() {
    const { name, type, value, eventChange } = this.props;
    return (
      <div className="imputText">
        <input type={ type } name={ name } value={ value } onChange={ eventChange } />
      </div>
    );
  }
}

export default Form;
