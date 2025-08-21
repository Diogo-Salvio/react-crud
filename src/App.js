import { useState, useMemo, useEffect } from 'react';
import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';


function App() {
  //Estados das tasks 
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [finishTasks, setFinishTasks] = useState(() => {
    const saved = localStorage.getItem("finishTasks");
    return saved ? JSON.parse(saved) : [];
  });
  //Estado para a criação do Card
  const [card, setCard] = useState({ title: "", date: "", description: "", key: 0 })

  //Arrays das tarefas organizados
  const sortedTasks = useMemo(() => {
    return [...tasks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [tasks])
  const sortedFinishTasks = useMemo(() => {
    return [...finishTasks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }, [finishTasks])

  //Função para salvar os dados em localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("finishTasks", JSON.stringify(finishTasks))
  }, [tasks, finishTasks])

  // useEffect(() => {
  //   const savedTasks = localStorage.getItem("tasks")
  //   const savedFinishTasks = localStorage.getItem("finishTasks")

  //   if(savedTasks) {
  //     setTasks(JSON.parse(savedTasks))
  //   }
  //   if(savedFinishTasks) {
  //     setFinishTasks(JSON.parse(savedFinishTasks))
  //   }
  // }, [])

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
