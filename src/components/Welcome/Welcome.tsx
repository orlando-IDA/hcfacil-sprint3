// src/components/Welcome/Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full p-2 flex justify-center items-center">
        <figure className="w-36">
          <Link to="/welcome">
            <img 
              src="/logoHCFacil.png" 
              alt="Logo do Hospital das Clínicas" 
              className="w-full"
            />
          </Link>
        </figure>
      </header>
      
      <main className="flex-1 mt-4 flex flex-col justify-center items-center gap-8">
        <section className="w-full flex flex-col justify-center items-center gap-2">
          <figure className="w-80 bg-white bg-gradient-to-b from-white via-transparent to-transparent">
            <img 
              src="/medico-bemvindo.png" 
              alt="Médico Branco de Barba" 
              className="w-full relative z-0"
            />
          </figure>

          <section className="info-bemvindo px-4 text-center">
            <h1 className="text-3xl font-bold text-blue-600 mb-2">Bem-vindo ao HC!</h1>
            <p className="max-w-xs text-base">
              Estamos aqui para tornar sua experiência ainda mais simples e eficiente!
            </p>
          </section>
        </section>
        
        <Link 
          to="/login" 
          className="w-72 h-16 flex justify-center items-center rounded-xl bg-blue-600 text-white text-xl font-bold cursor-pointer transition-transform hover:scale-105 active:scale-95"
        >
          Vamos Começar
        </Link>
      </main>
    </div>
  );
};

export default Welcome;