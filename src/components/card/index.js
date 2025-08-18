import './card.css';


const Card = ({taskTitle, taskDate, taskDescription, tasks, setTasks, finishTasks, setFinishTasks, id}) => {

    const moveToFinishTasks = (k) => {
        const indextomove = tasks.findIndex(task => task.key === k);
        if (indextomove !== -1) {
            setTasks() //Remover daqui
            setFinishTasks() //Adicionar aqui
        }
    }

    const moveToPendingTasks = (k) => {
        const indextomove = finishTasks.findIndex(finishTasks => finishTasks.key === k);
        if (indextomove !== -1) {
            setFinishTasks() //Remover daqui
            setTasks() //Adicionar aqui
        }
    }
    
    return (
        <div className='card'>
            <h3>{taskTitle}</h3>
            <span>Data da Tarefa:</span>
            <input type='date' readOnly={true} value={taskDate}/>
            <p>{taskDescription}</p>
            <button>Copiar Tarefa</button>
            <button>Excluir Tarefa</button>
            <button>Editar Tarefa</button>
            <label>Finalizar Tarefa: <input type='checkbox' onChange={moveToFinishTasks(id)}/></label>
        </div>
    )
    }


export default Card