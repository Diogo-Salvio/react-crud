import './createcard.css'
import { useEffect } from 'react';

const CreateCardModal = ({
    modalState,
    setModalState,
    card,
    setCard
}) => {

    useEffect(() => {
        console.log(card);
    }, [card]);

    const handleChange = (event) => {
        setCard({ ...card, [event.target.name]: event.target.value })
    }
    return (
        //Validação para verificar se o modal foi clicado
        modalState ?
            <div className='modal open' onClick={() => setModalState(false)}>
                <div className='modal-inner' onClick={(event) => event.stopPropagation()}>
                    <h1>Crie sua Tarefa</h1>
                    <div>
                        <span>Titulo da tarefa</span>
                        <input type="text" name='title' onChange={handleChange} value={card.title} />
                    </div>
                    <div>
                        <span>Data da Tarefa</span>
                        <input type="date" name='date' onChange={handleChange} value={card.date} />
                    </div>
                    <p>Descrição</p>
                    <textarea name="description" cols="30" rows="10" onChange={handleChange} value={card.description}></textarea>
                    <button >Criar Tarefa</button>
                </div>
            </div>
            : ""
    )
}

export default CreateCardModal