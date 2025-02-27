import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // URL da API

// Função para cadastrar um animal
export const cadastrarAnimal = async (animal) => {
    try {
        const response = await axios.post(`${API_URL}/animais`, animal);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao cadastrar animal: ' + error.message);
    }
};

// Função para cadastrar um adotador
export const cadastrarAdotador = async (adotador) => {
    try {
        const response = await axios.post(`${API_URL}/adotadores`, adotador);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao cadastrar adotador: ' + error.message);
    }
};

// Função para listar animais
export const listarAnimais = async () => {
    try {
        const response = await axios.get(`${API_URL}/animais`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao listar animais: ' + error.message);
    }
};

// Função para listar adotadores
export const listarAdotadores = async () => {
    try {
        const response = await axios.get(`${API_URL}/adotadores`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao listar adotadores: ' + error.message);
    }
};