import CreateCardModal from '../createcardmodal/createcard'
import { useState } from 'react'
import './Header.css'

const Header = ({card, setCard}) => {

    const [open, setOpen] = useState(false)


    return (
        <header className='header'>
            <h1>Crud Organizador de tarefas</h1>
            <button onClick={() => setOpen(true)}>Criar nova tarefa</button>
            <CreateCardModal 
            modalState={open} 
            setModalState={setOpen}
            card={card}
            setCard={setCard}
            />
        </header>
    )
}

export default Header