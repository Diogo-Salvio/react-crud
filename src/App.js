import { useState } from 'react';
import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';

function App() {

  const [tasks, setTasks] = useState([
    { title: "1", date: "2002-04-22", description: "1 da 1 de 1", key: 1001 },
    { title: "2", date: "2002-05-22", description: "2 da 2 de 2", key: 1002 }
  ])

  const [finishTasks, setFinishTasks] = useState([{ title: "3", date: "2002-05-22", description: "3 da 3 de 3", key: 1003 }])

  const [card, setCard] = useState({ title: "", date: "", description: "", key: 0 })


  return (
    <div className='App'>
      <Header
        card={card}
        setCard={setCard}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ContainerCards
        containerName={'Tarefas Pendentes'}
        tasks={tasks}
        setTasks={setTasks}
        finishTasks={finishTasks}
        setFinishTasks={setFinishTasks}
        arrayToBeRender={tasks}
      />
      <ContainerCards
        containerName={'Tarefas Concluidas'}
        tasks={tasks}
        setTasks={setTasks}
        finishTasks={finishTasks}
        setFinishTasks={setFinishTasks}
        arrayToBeRender={finishTasks}
      />
    </div>
  );
}

export default App;
