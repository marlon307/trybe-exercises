import './App.css';

const Task = (value, key) => {
  return <li key={key}>{value}</li>;
};

const names = ['Teste1', 'Teste2', 'Teste3'];

const App = () => {
  return names.map((name, key) => Task(name, key));
};

export default App;
