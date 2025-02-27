import React, { useState } from 'react';

const AnimalForm: React.FC = () => {
    const [nome, setNome] = useState('');
    const [porte, setPorte] = useState('');
    const [idade, setIdade] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do animal
        console.log({ nome, porte, idade });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="porte">Porte:</label>
                <input
                    type="text"
                    id="porte"
                    value={porte}
                    onChange={(e) => setPorte(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="idade">Idade:</label>
                <input
                    type="text"
                    id="idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastrar Animal</button>
        </form>
    );
};

export default AnimalForm;