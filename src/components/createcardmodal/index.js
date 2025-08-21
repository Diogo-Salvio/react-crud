import './createcard.css'


const CreateCardModal = ({
    modalState,
    setModalState,
    card,
    setCard,
    tasks,
    setTasks
}) => {



    const handleChange = (event) => {
        setCard({ ...card, [event.target.name]: event.target.value })
    }

    const createCard = () => {

        const cardKeys = Object.values(card)

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const taskdate = new Date(cardKeys[1]);
        taskdate.setHours(0, 0, 0, 0);


        if (!cardKeys[0].trim()) {
            alert('A tarefa precisa de um titulo!')
        } else if (!cardKeys[2].trim()) {
            alert('A tarefa precisa de uma descrição')
        } else if (cardKeys[1].length !== 10 || today.getTime() > taskdate.getTime()) {
            alert('Adicione uma data valida')
        } else {
            const newCard = { ...card, key: Date.now() }
            //Por algum motivo o state tasks estava chegando como undefined ou null, então para isso foi necessário fazer essa verificação.
            if (Array.isArray(tasks)) {
                setTasks([...tasks, newCard])
            } else {
                setTasks([newCard])
            }
            setCard({ title: "", date: "", description: "" })
            setModalState(false)
        }
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
                    <button onClick={createCard}>Criar Tarefa</button>
                </div>
            </div>
            : ""
    )
}

export default CreateCardModal