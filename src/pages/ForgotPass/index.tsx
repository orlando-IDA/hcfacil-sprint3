import { Link } from 'react-router-dom';
import type { EtapaCardProps } from '../../types/User';

const etapasData: EtapaCardProps[] = [
  { step: '1º Passo', description: 'No site ou app do Hospital das Clínicas, clique em "Entrar" ou "Login".' },
  { step: '2º Passo', description: 'Embaixo do campo de senha, clique em "Esqueci minha senha".' },
  { step: '3º Passo', description: 'Digite o seu CPF ou e-mail cadastrado.' },
  { step: '4º Passo', description: 'Clique em "Enviar" ou "Continuar".' },
  { step: '5º Passo', description: 'Verifique o seu e-mail: você vai receber um link para criar uma nova senha.' },
  { step: '6º Passo', description: 'Siga o link, crie uma senha nova e confirme.' },
  { step: '7º Passo', description: 'Depois disso, volte ao site ou app e faça login normalmente.' },
];

const EtapaCard = ({ step, description }: EtapaCardProps) => {
  return (
    <div className="border-2 border-blue-600 rounded-lg p-6 flex flex-col justify-center gap-2 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-700 h-full">
      <h2 className="text-xl font-bold text-blue-700">{step}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const EsqueciSenhaPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-start justify-center gap-12 min-h-[80vh]">
      
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Esqueci a minha Senha
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {etapasData.map((etapa) => (
            <EtapaCard 
              key={etapa.step} 
              step={etapa.step} 
              description={etapa.description} 
            />
          ))}
        </div>
      </section>

      <section className="w-full lg:w-1/3 sticky top-24">
         <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 text-center">
            <img 
              src="/assets/img/img-esqueci-senha.svg" 
              alt="Ilustração de recuperação de senha"
              className="w-full max-w-xs mx-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Precisa de ajuda?
            </h2>
            <p className="text-gray-600 mb-6">
              Se os passos não resolveram, entre em contato com nosso suporte.
            </p>
            <Link 
              to="/contato" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Falar com Suporte
            </Link>
         </div>
      </section>
    </main>
  );
};

export default EsqueciSenhaPage;
