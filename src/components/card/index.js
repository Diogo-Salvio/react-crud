import './card.css';
//import { useEffect } from 'react';

const Card = ({ 
    taskTitle, 
    taskDate, 
    taskDescription, 
    tasks, 
    setTasks, 
    finishTasks, 
    setFinishTasks, 
    id, 
    checkBoxState
}) => {

    const handleChange = (event) => { //Função para movimentar a tarefa entre os states
        if (event.target.checked === true) {
            const taskToMove = tasks.find(task => task.key === id)//Encontra a tarefa que precisa ser movida
            setTasks(prev => prev.filter(task => task.key !== id))//Remove a tarefa do state tasks
            setFinishTasks(prev => [...prev, taskToMove])//Adiciona a tarefa no state finishtasks
         } else {
            const taskToMove = finishTasks.find(task => task.key === id)//Encontra a tarefa que precisa ser movida
            setFinishTasks(prev => prev.filter(task => task.key !== id))//Remove a tarefa do state finishTasks
            setTasks(prev => [...prev, taskToMove])//Adiciona a tarefa no state tasks
        } 
        
    }

    const removeTaks = () => {

        if (tasks.find(task => task.key === id) !== undefined) {
            setTasks(prev => prev.filter(task => task.key !== id))
        } else {
            setFinishTasks(prev => prev.filter(task => task.key !== id))
        }
    }


    return (
        <div className='card'>
            <h3>{taskTitle}</h3>
            <span>Data da Tarefa:</span>
            <input type='date' readOnly={true} value={taskDate} />
            <p>{taskDescription}</p>
            <button>Copiar Tarefa</button>
            <button onClick={removeTaks}>Excluir Tarefa</button>
            <button>Editar Tarefa</button>
            <label>Finalizar Tarefa:
                <input type='checkbox'
                    onChange={handleChange}
                    checked={checkBoxState}
                />
            </label>
        </div>
    )
}


export default Card