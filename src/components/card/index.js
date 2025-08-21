import EditCardModal from '../editcardmodal';
import './card.css';
import { useState } from 'react';
import { useEffect } from 'react';

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

    //Input para adicionar uma imagem e visualizar a mesma.

    const [imgModal, setImgModal] = useState(false)
    const [imgState ,setImgState] = useState(false)


    const readImage = (event) => { //Função para ler a Imagem
        const image = event.target.files[0]
        const imageBase64Name = event.target.files[0].name

        if (image) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const imageBase64 = event.target.result
                
                if (tasks.find(task => task.key === id) !== undefined) {
                    setTasks(tasks.map(task => task.key === id ? { ...task, imgUrl: imageBase64, imgName: imageBase64Name } : task))
                } else {
                    setFinishTasks(finishTasks.map(task => task.key === id ? { ...task, imgUrl: imageBase64, imgName: imageBase64Name  } : task))
                }
                setImgState(true)    
            }
            
            reader.readAsDataURL(image)
        }
    }

    const addImgSrc = () => {
        if (tasks.find(task => task.key === id) !== undefined) {
            const task = tasks.find(task => task.key === id)
            return task.imgUrl || ''
        } else {
            const task = finishTasks.find(task => task.key === id)
            return task.imgUrl || ''
        }
    }

    useEffect(() => {
        const inTasks = tasks.find(task => task.key === id)
        const inFinishTasks = finishTasks.find(task => task.key === id)

        if (inTasks && inTasks.imgUrl) {
            setImgState(true)
        } else if (inFinishTasks && inFinishTasks.imgUrl) {
            setImgState(true)
        }
    }, [tasks, finishTasks, id])

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
            <input type='file' id={id} accept="image/jpeg, image/png , image/jpg" onChange={readImage}></input>
            {imgState ? <button onClick={() => setImgModal(true)}>Visualizar Imagem</button> : ""}
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
            {imgModal && addImgSrc() ?
                <div className='modalimg open' onClick={() => setImgModal(false)}>
                    <div className='modalimg-inner' onClick={(event) => event.stopPropagation}>
                        <img src={addImgSrc()}
                            alt='upload-image' 
                            className='img' 
                        />
                    </div>
                </div>
                : ""}
        </div>
    )
}


export default Card