import EditCardModal from '../editcardmodal';
import './card.css';
import { useState } from 'react';
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

    const removeTaks = () => { //Função para excluir uma tarefa
        if (tasks.find(task => task.key === id) !== undefined) {
            setTasks(prev => prev.filter(task => task.key !== id))
        } else {
            setFinishTasks(prev => prev.filter(task => task.key !== id))
        }
    }

    //Função para copiar a task
    const [copied, setCopied] = useState(false);
    const copyTask = () => {
        const taskResume = `(${taskTitle}) para a data (${taskDate}) com a descrição ${taskDescription}`
        navigator.clipboard.writeText(taskResume)
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000)
    }

//CARD DE EDIÇÃO DE TAREFA
    const [editModalState, setEditModalState] = useState(false)
//CARD DE EDIÇÃO DE TAREFA

    const readImage = (event) => {
        const image = event.target.files[0]
        console.log(image)
    }

    return (
        <div className='card'>
            <h3>{taskTitle}</h3>
            <span>Data da Tarefa:</span>
            <input type='date' readOnly={true} value={taskDate} />
            <p>{taskDescription}</p>
            <button onClick={copyTask}>Copiar Tarefa</button>
            <button onClick={removeTaks}>Excluir Tarefa</button>
            <button onClick={() => setEditModalState(true)}>Editar Tarefa</button>
            <label>Finalizar Tarefa:
                <input type='checkbox'
                    onChange={handleChange}
                    checked={checkBoxState}
                />
            </label>
            <input type='file' id={id} accept="iamge/jpeg, image/png , image/jpg" onChange={readImage}></input>
            <EditCardModal
            taskTitle={taskTitle}
            taskDate={taskDate}
            taskDescription={taskDescription}
            tasks={tasks}
            setTasks={setTasks}
            finishTasks={finishTasks}
            setFinishTasks={setFinishTasks}
            id={id}
            editModalState={editModalState}
            setEditModalState={setEditModalState}
            />
            {copied ? <div className='message'>Tarefa Copiada</div> : ""}
        </div>
    )
}


export default Card