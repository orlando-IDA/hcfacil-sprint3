// src/components/Header.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // Lógica de logout aqui
    alert('Saindo...');
    navigate('/welcome');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logoHCFacil.png" 
                alt="HC Facil Logo" 
                className="w-32 h-12 md:w-40 md:h-16 object-contain" 
              />
            </Link>
          </div>
          
          {/* Menu para desktop */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8 justify-center items-center">
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                  FUNDADORES
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                  CONTATOS
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-blue-600">
                  FAQ
                </a>
              </li>
              <li>
                <button 
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800 font-medium transition-colors py-2 border-b-2 border-transparent hover:border-red-600"
                >
                  SAIR
                </button>
              </li>
            </ul>
          </nav>

          {/* Botão do menu mobile */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-gray-200">
            <ul className="flex flex-col space-y-3 pt-3">
              <li>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FUNDADORES
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTATOS
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block text-red-600 hover:text-red-800 font-medium transition-colors py-2 w-full text-left"
                >
                  SAIR
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;