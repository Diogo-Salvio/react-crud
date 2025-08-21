import { useEffect, useState, useMemo } from 'react';
import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';


function App() {

  const [tasks, setTasks] = useState([
    { title: "1", date: "2026-08-21", description: "1 da 1 de 1", key: 1001},
    { title: "2", date: "2026-08-25", description: "2 da 2 de 2", key: 1002}
  ])

  const [finishTasks, setFinishTasks] = useState([{ title: "3", date: "2027-05-22", description: "3 da 3 de 3", key: 1003}])

  const [card, setCard] = useState({ title: "", date: "", description: "", key: 0 })

  // useEffect(() => {
  //   setTasks(prev =>  [...prev].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() ))
  //   setFinishTasks(prev => [...prev].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime() ))
  //   // const date = new Date("2002-04-22")
  //   // console.log(date.getTime())
  // }, [])

  const sortedTasks= useMemo(() => {
    return [...tasks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [tasks])

  const sortedFinishTasks = useMemo(() => {
    return [...finishTasks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [finishTasks])

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
        arrayToBeRender={sortedTasks}
      />
      <ContainerCards
        containerName={'Tarefas Concluidas'}
        tasks={tasks}
        setTasks={setTasks}
        finishTasks={finishTasks}
        setFinishTasks={setFinishTasks}
        arrayToBeRender={sortedFinishTasks}
      />

    </div>
  );
}

export default App;
