import { useState } from 'react';
import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';

function App() {

  const [tasks, setTasks] = useState([])
  const [finishTasks, setFinishTasks] = useState([])
  const [card, setCard] = useState({title:"", date:"", description: ""})



  return (
    <div className='App'>
      <Header
        card={card}
        setCard={setCard}
        />
      <ContainerCards containerName={'Tarefas Pendentes'} />
      <ContainerCards containerName={'Tarefas Concluidas'} />
    </div>
  );
}

export default App;
