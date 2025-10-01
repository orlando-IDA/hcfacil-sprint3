import type { EtapaCardProps } from '../../types/User';

const passosData: EtapaCardProps[] = [
  { 
    step: '1º Passo', 
    description: (
      <>
        Acesse o site <a href="https://app.agenda.globalhealth.mv/agendar/?key=hcsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 font-semibold">oficial de agendamento do HC</a>.
      </>
    )
  },
  { 
    step: '2º Passo', 
    description: 'Preencha todos os campos solicitados: nome, CPF, data de nascimento, e-mail, telefone, sexo e senha (com letra Maiúscula e caracter especial como: @#$%).' 
  },
  { 
    step: '3º Passo', 
    description: 'Escolha a consulta desejada e sua especialidade.' 
  },
  { 
    step: '4º Passo', 
    description: 'Encontre uma data que encaixe na sua agenda e selecione.' 
  },
  { 
    step: '5º Passo', 
    description: 'Confirme seu agendamento e pronto!' 
  },
];

// 2. Componente Reutilizado (mesma estrutura do anterior)
const EtapaCard = ({ step, description }: EtapaCardProps) => {
  return (
    <div className="border-2 border-blue-600 rounded-xl p-6 flex flex-col justify-start gap-2 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-blue-700 h-full">
      <h2 className="text-xl font-bold text-blue-700">{step}</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};
const MarqueSuaConsultaPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[80vh]">
      
      <section className="w-full lg:w-2/3 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Marque sua Consulta
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {passosData.map((etapa) => (
            <EtapaCard 
              key={etapa.step} 
              step={etapa.step} 
              description={etapa.description} 
            />
          ))}
        </div>
      </section>
      <section className="hidden lg:flex w-1/3 items-center justify-center">
        <img 
          src="/assets/img/img-consulta.svg" 
          alt="Ilustração de uma mulher marcando consulta com médicos"
          className="max-w-sm w-full"
        />
      </section>
    </main>
  );
};

export default MarqueSuaConsultaPage;

