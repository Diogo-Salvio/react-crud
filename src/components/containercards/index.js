import './Containercard.css'
import Card from '../card'

const ContainerCards = ({ containerName, tasks, setTasks, finishTasks, setFinishTasks, arrayToBeRender }) => {
    return (
        <div className='containerCards'>
            <h2>{containerName}</h2>
            <div className='taskscontainer'>
                {arrayToBeRender ? arrayToBeRender.map(task =>
                    <Card
                        taskTitle={task.title}
                        taskDate={task.date}
                        taskDescription={task.description}
                        key={task.key}
                        tasks={tasks}
                        setTasks={setTasks}
                        finishTasks={finishTasks}
                        setFinishTasks={setFinishTasks}
                        id={task.key}
                    />
                ) : ""}
            </div>
        </div>
    )
}

export default ContainerCards