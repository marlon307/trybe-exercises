import React, { Component } from 'react';
import ImputText from './ImputText';
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.evenOnBlur = this.evenOnBlur.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  get initialState() {
    return {
      name: '',
      email: '',
      cpf: '',
      aderess: '',
      city: '',
      uf: '',
      resid: '',
      cargo: '',
      reumeCurr: '',
      descCargo: '',
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    const propValue = name === 'name' ? value.toUpperCase() : value;
    this.setState({
      [name]: propValue,
    })
  }

  evenOnBlur({ target }) {
    const { name } = target;
    this.setState({
      [name]: '',
    })
  }

  submitForm() {
    const fromCamp = ['Nome', 'Email', 'CPF', 'Endereço', 'Cidade', 'Estado', 'Residencia', 'Resumo do currículo', 'Cargo', 'Descrição do cargo'];
    var countCheck = false;

    Object.values(this.state).find((e) => e === '' ? countCheck = true : null);

    if (countCheck === false) {
      Object.values(this.state).map((e, i) => {
        const containSubmit = document.querySelector('.formSubmit');
        const creatElement = document.createElement('p');
        creatElement.innerText = `${fromCamp[i]}: ${e}`
        return containSubmit.appendChild(creatElement);
      })
    }
  }

  render() {
    const state = [
      'AC, Acre',
      'AL, Alagoas',
      'AP, Amapá',
      'AM, Amazonas',
      'BA, Bahia',
      'CE, Ceará',
      'DF, Distrito Federal',
      'ES, Espirito Santo',
      'GO, Goiás',
      'MA, Maranhão',
      'MS, Mato Grosso do Sul',
      'MT, Mato Grosso',
      'MG, Minas Gerais',
      'PA, Pará',
      'PB, Paraíba',
      'PR, Paraná',
      'PE, Pernambuco',
      'PI, Piauí',
      'RJ, Rio de Janeiro',
      'RN, Rio Grande do Norte',
      'RS, Rio Grande do Sul',
      'RO, Rondônia',
      'RR, Roraima',
      'SC, Santa Catarina',
      'SP, São Paulo',
      'SE, Sergipe',
      'TO, Tocantins',
    ];
    return (
      <div className="App" >
        <form className="formCadastro">
          <fieldset>
            <div className="largeBlock">
              <ImputText idipt="nm" typeImput="text" nameKeySt="name" imptValue={ this.state.name } eventImput={ this.handleChange } nameImp="Nome" imptLength="40" />
              <ImputText idipt="em" typeImput="email" nameKeySt="email" imptValue={ this.state.email } eventImput={ this.handleChange } nameImp="E-mail" imptLength="50" />
            </div>
            <ImputText idipt="cp" typeImput="text" nameKeySt="cpf" imptValue={ this.state.cpf } eventImput={ this.handleChange } nameImp="CPF" imptLength="11" />
            <div className="largeBlock">
              <ImputText idipt="ad" typeImput="text" nameKeySt="aderess" imptValue={ this.state.aderess } eventImput={ this.handleChange } nameImp="Endereço" imptLength="200" notChar="true" />
              <ImputText idipt="ct" typeImput="text" nameKeySt="city" imptValue={ this.state.city } eventImput={ this.handleChange } sEventImput={ this.evenOnBlur } nameImp="Cidade" imptLength="28" notNum="true" msgErro="Proibido iniciar com numeros." />
            </div>
            <select name="uf" onChange={ this.handleChange } >
              { state.map((listState) => <option key={ listState } value={ listState }>{ listState }</option>) }
            </select>
            <div className="block">
              <ImputText idipt="cs" typeImput="radio" nameKeySt="resid" imptValue="Casa" nameImp="Casa" eventImput={ this.handleChange } />
              <ImputText idipt="ap" typeImput="radio" nameKeySt="resid" imptValue="Apartamento" nameImp="Apartamento" eventImput={ this.handleChange } />
            </div>
          </fieldset>
          <fieldset>
            <div className="texArea">
              <span>Resumo do currículo</span>
              <textarea name="reumeCurr" cols="40" rows="10" maxLength="1000" title="Preencha com cuidado esta informação." value={ this.state.reumeCurr } onChange={ this.handleChange }></textarea>
            </div>
            <ImputText idipt="cargo" typeImput="text" nameKeySt="cargo" imptValue={ this.state.cargo } eventImput={ this.handleChange } nameImp="Cargo" imptLength="200" />
            <div className="texArea">
              <span>Descrição do cargo</span>
              <textarea name="descCargo" cols="40" rows="10" maxLength="500" value={ this.state.descCargo } onChange={ this.handleChange }></textarea>
            </div>
          </fieldset>
          <div className="panelBtn">
            <button className="submint" onClick={ this.submitForm } type="button">Enviar</button>
            <button className="clear" onClick={ () => this.setState(this.initialState) } type="button">Limpar</button>
          </div>
          <div className="formSubmit">
          </div>
        </form>
      </div >
    );
  }
}

export default App;
