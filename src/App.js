import './App.css';
import ContainerCards from './components/containercards';
import Header from './components/header';

function App() {
  return (
    <div className='App'>
    <Header />
    <ContainerCards  containerName={'Tarefas Pendentes'}/>
    <ContainerCards  containerName={'Tarefas Concluidas'}/>
    </div>
  );
}

export default App;
