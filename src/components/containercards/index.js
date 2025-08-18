import './Containercard.css'
import Card from '../card'

const ContainerCards = ({containerName, tasks}) => {
    return(
        <div className='containerCards'>
            <h2>{containerName}</h2>
            <div className='taskscontainer'>
                {tasks ? tasks.map(task => 
                    <Card
                    taskTitle={task.title}
                    taskDate={task.date}
                    taskDescription={task.description} 
                    />
                ): ""}
            </div>
        </div>
    )
}

export default ContainerCards