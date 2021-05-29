import React, { Component } from 'react';
import './ImputText.css';

class ImputText extends Component {
  render() {
    const { idipt, typeImput, nameKeySt, eventImput, sEventImput, nameImp, imptValue, imptLength, notNum, msgErro, notChar } = this.props;
    return (
      <div className="imputTextBox">
        <label htmlFor={ idipt }>
          <span>{ nameImp }</span>
          { sEventImput !== undefined ?
            <input id={ idipt } type={ typeImput } name={ nameKeySt } value={ notChar ? imptValue.replace(/[^\w\s]/gi, '') : imptValue } onChange={ eventImput } onBlur={ notNum && /^\d/.test(imptValue) ? sEventImput : null } maxLength={ imptLength } />
            :
            <input id={ idipt } type={ typeImput } name={ nameKeySt } value={ notChar ? imptValue.replace(/[^\w\s]/gi, '') : imptValue } onChange={ eventImput } maxLength={ imptLength } />
          }
          { notNum && /^\d/.test(imptValue) ? <span className="erroMsg">{ msgErro }</span> : null }
        </label>
      </div >
    )
  }
}

export default ImputText;
