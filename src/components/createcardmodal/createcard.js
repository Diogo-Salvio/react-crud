import './createcard.css'
import { useState } from 'react'

const CreateCardModal = ({
    modalState,
    setModalState
}) => {

    //const onWrite = (event) => {
    //   onInputChange(event.target.value)
    //}

    return (
        //Validação para verificar se o modal foi clicado
        modalState ?
            <div className='modal open' onClick={() => setModalState(false)}>
                <div className='modal-inner' onClick={(event) => event.stopPropagation()}>
                    <h1>Crie sua Tarefa</h1>
                    <div>
                        <span>Titulo da tarefa</span>
                        <input type="text" />
                    </div>
                    <div>
                        <span>Data da Tarefa</span>
                        <input type="date" />
                    </div>
                    <p>Descrição</p>
                    <textarea name="" cols="30" rows="10"></textarea>
                    <button >Criar Tarefa</button>
                </div>
            </div>
            : ""
    )
}

export default CreateCardModal