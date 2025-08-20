//import { useState } from 'react'
//import { useEffect } from 'react'
import './editcardmodal.css'

const EditCardModal = ({
    taskTitle,
    taskDate,
    taskDescription,
    tasks,
    setTasks,
    finishTasks,
    setFinishTasks,
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

    // useEffect(() => {
    //     console.log(tasks)
    //     console.log(finishTasks)
    // },)

    const handleChange = (event) => {
        if (taskToEdit) {
            setTasks((prev) => prev.map((task) => task.key === id ? {...task, [event.target.name]: event.target.value} : task))
        } else {
            setFinishTasks((prev) => prev.map((task) => task.key === id ? {...task, [event.target.name]: event.target.value} : task))
        }
    }

    return (
        editModalState ?
            <div className='modal open' onClick={() => setEditModalState(false)}>
                <div className='modal-inner' onClick={(event) => event.stopPropagation()}>
                    <h1>Edite sua Tarefa</h1>
                    <div>
                        <span>Titulo da tarefa</span>
                        <input type="text" name='title' onChange={handleChange} value={taskTitle} />
                    </div>
                    <div>
                        <span>Data da Tarefa</span>
                        <input type="date" name='date'  onChange={handleChange} value={taskDate}/>
                    </div>
                    <p>Descrição</p>
                    <textarea name="description" cols="30" rows="10"  onChange={handleChange} value={taskDescription} ></textarea>
                    <button onClick={() => setEditModalState(false)}>Editar Tarefa</button>
                </div>
            </div>
            : ""
    )
}


export default EditCardModal