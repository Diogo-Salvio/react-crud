import './Containercard.css'

const ContainerCards = (props) => {
    return(
        <div className='containerCards'>
            <h2>{props.containerName}</h2>
            <div className='taskscontainer'>
                
            </div>
        </div>
    )
}


export default ContainerCards