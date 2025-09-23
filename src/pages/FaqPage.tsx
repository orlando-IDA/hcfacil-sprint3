// src/pages/FaqPage.tsx
import React from 'react';

const FaqPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Perguntas Frequentes (FAQ)
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Aqui serão renderizadas as perguntas e respostas */}
        </div>
      </div>
    </main>
  );
};

export default FaqPage;