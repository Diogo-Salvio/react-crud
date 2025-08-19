import { useState } from 'react'
import './editcardmodal.css'

const EditCardModal = ({setModalState}) => {



    return (
        <div className='modal open' onClick={() => setModalState(false)}>
            <div className='modal-inner' onClick={(event) => event.stopPropagation()}>
                <h1>Crie sua Tarefa</h1>
                <div>
                    <span>Titulo da tarefa</span>
                    <input type="text" name='title' /*onChange={handleChange} value={card.title}*/ />
                </div>
                <div>
                    <span>Data da Tarefa</span>
                    <input type="date" name='date'  /*onChange={handleChange} value={card.date} */ />
                </div>
                <p>Descrição</p>
                <textarea name="description" cols="30" rows="10"  /*onChange={handleChange} value={card.description} */></textarea>
                <button  /*onClick={createCard}*/>Editar Tarefa</button>
            </div>
        </div>
    )
}


export default EditCardModal