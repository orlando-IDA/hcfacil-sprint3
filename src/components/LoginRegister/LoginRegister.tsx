// src/components/LoginRegister/LoginRegister.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Tipos TypeScript
interface User {
  nomeCad: string;
  emailCad: string;
  cpfCad: string;
  telefoneCad: string;
}

const LoginRegister: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'cadastro'>('login');
  const [formData, setFormData] = useState({
    loginCPF: '',
    loginTelefone: '',
    nome: '',
    email: '',
    cadCPF: '',
    cadTelefone: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  // Funções de validação
  const validateCPF = (cpf: string): boolean => cpf.length === 11;
  const validateTelefone = (telefone: string): boolean => telefone.length === 11 && !/[A-Za-z]/.test(telefone);
  const validateEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateNome = (nome: string): boolean => nome.length >= 3;

  // Manipulador de mudanças nos campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    let error = '';
    
    if (name === 'loginCPF' && value && !validateCPF(value)) {
      error = 'CPF deve ter 11 dígitos';
    } else if (name === 'loginTelefone' && value && !validateTelefone(value)) {
      error = 'Telefone deve ter 11 dígitos e conter apenas números';
    } else if (name === 'cadCPF' && value && !validateCPF(value)) {
      error = 'CPF deve ter 11 dígitos';
    } else if (name === 'cadTelefone' && value && !validateTelefone(value)) {
      error = 'Telefone deve ter 11 dígitos e conter apenas números';
    } else if (name === 'email' && value && !validateEmail(value)) {
      error = 'Email inválido';
    } else if (name === 'nome' && value && !validateNome(value)) {
      error = 'Nome deve ter pelo menos 3 caracteres';
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // Função de login
  const handleLogin = () => {
    const isValidCPF = validateCPF(formData.loginCPF);
    const isValidTelefone = validateTelefone(formData.loginTelefone);
    
    if (isValidCPF && isValidTelefone) {
      navigate('/');
      alert('Login realizado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente para fazer login!');
    }
  };

  // Função de cadastro
  const handleCadastro = () => {
    const isValidNome = validateNome(formData.nome);
    const isValidEmail = validateEmail(formData.email);
    const isValidCPF = validateCPF(formData.cadCPF);
    const isValidTelefone = validateTelefone(formData.cadTelefone);
    
    if (isValidNome && isValidEmail && isValidCPF && isValidTelefone) {
      const listaUser: User[] = JSON.parse(localStorage.getItem('listaUser') || '[]');
      
      listaUser.push({
        nomeCad: formData.nome,
        emailCad: formData.email,
        cpfCad: formData.cadCPF,
        telefoneCad: formData.cadTelefone
      });
      
      localStorage.setItem('listaUser', JSON.stringify(listaUser));
      navigate('/');
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente para se cadastrar!');
    }
  };

  return (
    <main className="flex-1 bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-around mb-6">
          <button
            className={`px-4 py-2 font-medium ${activeForm === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveForm('login')}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeForm === 'cadastro' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveForm('cadastro')}
          >
            Cadastro
          </button>
        </div>

        {/* Formulário de Login */}
        {activeForm === 'login' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="loginCPF" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input
                type="text"
                id="loginCPF"
                name="loginCPF"
                value={formData.loginCPF}
                onChange={handleChange}
                placeholder="Digite seu CPF"
                className={`w-full p-2 border rounded-md ${errors.loginCPF ? 'border-red-500' : formData.loginCPF && !errors.loginCPF ? 'border-blue-500' : 'border-gray-300'}`}
                maxLength={11}
              />
              {errors.loginCPF && <p className="text-red-500 text-sm mt-1">{errors.loginCPF}</p>}
            </div>

            <div>
              <label htmlFor="loginTelefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                id="loginTelefone"
                name="loginTelefone"
                value={formData.loginTelefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className={`w-full p-2 border rounded-md ${errors.loginTelefone ? 'border-red-500' : formData.loginTelefone && !errors.loginTelefone ? 'border-blue-500' : 'border-gray-300'}`}
                maxLength={11}
              />
              {errors.loginTelefone && <p className="text-red-500 text-sm mt-1">{errors.loginTelefone}</p>}
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </div>
        )}

        {/* Formulário de Cadastro */}
        {activeForm === 'cadastro' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className={`w-full p-2 border rounded-md ${errors.nome ? 'border-red-500' : formData.nome && !errors.nome ? 'border-blue-500' : 'border-gray-300'}`}
              />
              {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : formData.email && !errors.email ? 'border-blue-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="cadCPF" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input
                type="text"
                id="cadCPF"
                name="cadCPF"
                value={formData.cadCPF}
                onChange={handleChange}
                placeholder="Digite seu CPF"
                className={`w-full p-2 border rounded-md ${errors.cadCPF ? 'border-red-500' : formData.cadCPF && !errors.cadCPF ? 'border-blue-500' : 'border-gray-300'}`}
                maxLength={11}
              />
              {errors.cadCPF && <p className="text-red-500 text-sm mt-1">{errors.cadCPF}</p>}
            </div>

            <div>
              <label htmlFor="cadTelefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                id="cadTelefone"
                name="cadTelefone"
                value={formData.cadTelefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className={`w-full p-2 border rounded-md ${errors.cadTelefone ? 'border-red-500' : formData.cadTelefone && !errors.cadTelefone ? 'border-blue-500' : 'border-gray-300'}`}
                maxLength={11}
              />
              {errors.cadTelefone && <p className="text-red-500 text-sm mt-1">{errors.cadTelefone}</p>}
            </div>

            <button
              onClick={handleCadastro}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default LoginRegister;