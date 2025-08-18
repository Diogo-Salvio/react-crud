import './card.css';



const Card = ({taskTitle, taskDate, taskDescription}) => {
    
    return (
        <div className='card'>
            <h3>{taskTitle}</h3>
            <span>Data da Tarefa:</span>
            <input type='date' readOnly={true} value={taskDate}/>
            <p>{taskDescription}</p>
            <button>Copiar Tarefa</button>
            <button>Excluir Tarefa</button>
            <button>Editar Tarefa</button>
            <label>Finalizar Tarefa: <input type='checkbox' /></label>
        </div>
    )
}


export default Card