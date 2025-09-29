import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { RegisterData, LoginData, User } from '../../types/User';// Tipos centralizados

const LoginRegister: React.FC = () => {
  const [activeForm, setActiveForm] = useState<'login' | 'cadastro'>('login');
  const navigate = useNavigate();


  // --- HOOK FORM PARA CADASTRO ---
  const {
    register: registerCadastro,
    handleSubmit: handleSubmitCadastro,
    formState: { errors: errorsCadastro },
  } = useForm<RegisterData>();

  // --- HOOK FORM PARA LOGIN ---
  // E outra instância para o formulário de login, com "apelidos" para não haver conflito de nomes
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm<LoginData>();

  // Função que é executada APÓS a validação do formulário de cadastro
  const onSubmitCadastro: SubmitHandler<RegisterData> = (data) => {
    const listaUser: User[] = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push({
      nomeCad: data.nome,
      emailCad: data.email,
      cpfCad: data.cadCPF,
      telefoneCad: data.cadTelefone
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    alert('Cadastro realizado com sucesso!');
    navigate('/');
  };

  // Função que é executada APÓS a validação do formulário de login
  const onSubmitLogin: SubmitHandler<LoginData> = (data) => {
    console.log('Dados de login válidos:', data);
    alert('Login realizado com sucesso!');
    navigate('/');
  };

  // O handleChange, validateCPF, etc., foram removidos pois o react-hook-form cuida de tudo.

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

        {activeForm === 'login' && (
          // O handleSubmit do hook form valida os campos antes de chamar nossa função onSubmitLogin
          <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="space-y-4">
            <div>
              <label htmlFor="loginCPF" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input
                type="text"
                id="loginCPF"
                placeholder="Digite seu CPF"
                className={`w-full p-2 border rounded-md ${errorsLogin.loginCPF ? 'border-red-500' : 'border-gray-300'}`}
                // O 'register' conecta o input ao hook form e aplica as regras de validação
                {...registerLogin('loginCPF', {
                  required: 'O CPF é obrigatório',
                  minLength: { value: 11, message: 'O CPF deve ter 11 dígitos' },
                  maxLength: { value: 11, message: 'O CPF deve ter 11 dígitos' },
                  
                })}
              />
              {/* Exibindo a mensagem de erro que vem do hook form */}
              {errorsLogin.loginCPF && <p className="text-red-500 text-sm mt-1">{errorsLogin.loginCPF.message}</p>}
            </div>

            <div>
              <label htmlFor="loginTelefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                id="loginTelefone"
                placeholder="Digite seu telefone"
                className={`w-full p-2 border rounded-md ${errorsLogin.loginTelefone ? 'border-red-500' : 'border-gray-300'}`}
                {...registerLogin('loginTelefone', {
                  required: 'O telefone é obrigatório',
                  minLength: { value: 11, message: 'O telefone deve ter 11 dígitos' },
                  maxLength: { value: 11, message: 'O telefone deve ter 11 dígitos' },
                  pattern: { value: /^[0-9]+$/, message: 'Digite apenas números' },
                })}
              />
              {errorsLogin.loginTelefone && <p className="text-red-500 text-sm mt-1">{errorsLogin.loginTelefone.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Entrar
            </button>
          </form>
        )}

        {/* --- Formulário de Cadastro Refatorado --- */}
        {activeForm === 'cadastro' && (
          <form onSubmit={handleSubmitCadastro(onSubmitCadastro)} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome completo"
                className={`w-full p-2 border rounded-md ${errorsCadastro.nome ? 'border-red-500' : 'border-gray-300'}`}
                {...registerCadastro('nome', {
                  required: 'O nome é obrigatório',
                  minLength: { value: 3, message: 'O nome deve ter pelo menos 3 caracteres' },
                })}
              />
              {errorsCadastro.nome && <p className="text-red-500 text-sm mt-1">{errorsCadastro.nome.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu email"
                className={`w-full p-2 border rounded-md ${errorsCadastro.email ? 'border-red-500' : 'border-gray-300'}`}
                {...registerCadastro('email', {
                  required: 'O email é obrigatório',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Formato de email inválido' },
                })}
              />
              {errorsCadastro.email && <p className="text-red-500 text-sm mt-1">{errorsCadastro.email.message}</p>}
            </div>

            <div>
              <label htmlFor="cadCPF" className="block text-sm font-medium text-gray-700 mb-1">
                CPF
              </label>
              <input
                type="text"
                id="cadCPF"
                placeholder="Digite seu CPF"
                className={`w-full p-2 border rounded-md ${errorsCadastro.cadCPF ? 'border-red-500' : 'border-gray-300'}`}
                {...registerCadastro('cadCPF', {
                  required: 'O CPF é obrigatório',
                  minLength: { value: 11, message: 'O CPF deve ter 11 dígitos' },
                  maxLength: { value: 11, message: 'O CPF deve ter 11 dígitos' },
                })}
              />
              {errorsCadastro.cadCPF && <p className="text-red-500 text-sm mt-1">{errorsCadastro.cadCPF.message}</p>}
            </div>

            <div>
              <label htmlFor="cadTelefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="text"
                id="cadTelefone"
                placeholder="Digite seu telefone"
                className={`w-full p-2 border rounded-md ${errorsCadastro.cadTelefone ? 'border-red-500' : 'border-gray-300'}`}
                {...registerCadastro('cadTelefone', {
                  required: 'O telefone é obrigatório',
                  minLength: { value: 11, message: 'O telefone deve ter 11 dígitos' },
                  maxLength: { value: 11, message: 'O telefone deve ter 11 dígitos' },
                  pattern: { value: /^[0-9]+$/, message: 'Digite apenas números' },
                })}
              />
              {errorsCadastro.cadTelefone && <p className="text-red-500 text-sm mt-1">{errorsCadastro.cadTelefone.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Cadastrar
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

export default LoginRegister;