import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayCompromissos = ['estudar React', 'Completar requisito 6 e 7 do projeto', 'Revisar conteúdos'];

function App() {
  return (
    arrayCompromissos.map((element) => Task(element))
  );
}

export default App;
