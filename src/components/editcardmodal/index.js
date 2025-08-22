//import { useState } from 'react'
//import { useEffect } from 'react'
import './editcardmodal.css'

const EditCardModal = ({
    taskTitle,
    taskDate,
    taskDescription,
    tasks,
    setTasks,
    setFinishTasks,
    finishTasks,
    id,
    editModalState,
    setEditModalState
}) => {



    //Condicional para descobrir em qual state está a tarefa que foi clicada
    let taskToEdit
    let finishTaskToEdit

    if (tasks.find(task => task.key === id) !== undefined) {
        taskToEdit = tasks.find(task => task.key === id)
    }
    if (finishTasks.find(task => task.key === id) !== undefined) {
        finishTaskToEdit = finishTasks.find(task => task.key === id)
    }

    const handleChange = (event) => {
        if (taskToEdit) {
            setTasks((prev) => prev.map((task) => task.key === id ? { ...task, [event.target.name]: event.target.value } : task))
        } else {
            setFinishTasks((prev) => prev.map((task) => task.key === id ? { ...task, [event.target.name]: event.target.value } : task))
        }
    }

    const checkChange = () => {



        if (taskToEdit) {
            const taskKeys = Object.values(taskToEdit)// Objeto para a tarafa em Tasks
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const taskdate = new Date(taskKeys[1]);
            taskdate.setHours(0, 0, 0, 0);

            if (!taskKeys[0].trim()) {
                alert('A tarefa precisa de um titulo!')
            } else if (!taskKeys[2].trim()) {
                alert('A tarefa precisa de uma descrição')
            } else if (taskKeys[1].length !== 10 || today.getTime() > taskdate.getTime()) {
                alert('Adicione uma data valida')
            } else {
                setEditModalState(false)
            }
        } else {
            const finishTaskKey = Object.values(finishTaskToEdit)// Objeto para a tarefa em finishTasks
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const taskdate = new Date(finishTaskKey[1]);
            taskdate.setHours(0, 0, 0, 0);

            if (!finishTaskKey[0].trim()) {
                alert('A tarefa precisa de um titulo!')
            } else if (!finishTaskKey[2].trim()) {
                alert('A tarefa precisa de uma descrição')
            } else if (finishTaskKey[1].length !== 10 || today.getTime() > taskdate.getTime()) {
                alert('Adicione uma data valida')
            } else {
                setEditModalState(false)
            }
        }
    }

    return (
        editModalState ?
            <div className='modal open' onClick={() => checkChange()}>
                <div className='modal-inner' onClick={(event) => event.stopPropagation()}>
                    <h1>Edite sua Tarefa</h1>
                    <div>
                        <span>Titulo da tarefa</span>
                        <input type="text" name='title' onChange={handleChange} value={taskTitle} />
                    </div>
                    <div>
                        <span>Data da Tarefa</span>
                        <input type="date" name='date' onChange={handleChange} value={taskDate} />
                    </div>
                    <p>Descrição</p>
                    <textarea name="description" cols="30" rows="10" onChange={handleChange} value={taskDescription} ></textarea>
                    <button onClick={() => setEditModalState(false)}>Editar Tarefa</button>
                </div>
            </div>
            : ""
    )
}


export default EditCardModal