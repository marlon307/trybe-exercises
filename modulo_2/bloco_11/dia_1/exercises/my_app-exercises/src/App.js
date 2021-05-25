import './App.css';

const Task = (value) => {
  return <li key={value}> {value} </li>;
};

const names = ['Teste1', 'Teste2', 'Teste3'];

const App = () => {
  return names.map((name) => Task(name));
};

export default App;
