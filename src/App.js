import { useState } from 'react';
import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';

function App() {

  const [tasks, setTasks] = useState([{title:"1", date:"2002-04-22", description: "Vem pro Fut", key: 1}])
  //const [finishTasks, setFinishTasks] = useState([])

  const [card, setCard] = useState({title:"", date:"", description: "", key: 0})


  return (
    <div className='App'>
      <Header
        card={card}
        setCard={setCard}
        tasks={tasks}
        setTasks={setTasks}
        />
      <ContainerCards tasks={tasks} containerName={'Tarefas Pendentes'} />
      <ContainerCards containerName={'Tarefas Concluidas'} />
    </div>
  );
}

export default App;
