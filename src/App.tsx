import React from 'react';
import AnimalForm from './components/AnimalForm';
import AdopterForm from './components/AdopterForm';
import ResponsibilityTerm from './components/ResponsibilityTerm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Gestão de Doação de Animais</h1>
      <AnimalForm />
      <AdopterForm />
      <ResponsibilityTerm />
    </div>
  );
};

export default App;