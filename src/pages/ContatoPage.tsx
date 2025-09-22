// src/pages/ContatoPage.tsx

// Componente reutilizável para cada card de contato
const ContatoCard = ({ iconClass, title, text }: {
  iconClass: string;
  title: string;
  text: string;
}) => {
  const iconBgColor = iconClass.includes('whatsapp') 
    ? 'bg-green-100 text-green-600' 
    : 'bg-red-100 text-red-600';

  return (
    <div className="border border-gray-200 rounded-xl p-6 w-full max-w-md flex items-center gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor}`}>
        <i className={`${iconClass} text-3xl`}></i>
      </div>
      
      <div className="text-left">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 break-all">{text}</p>
      </div>
    </div>
  );
};

// Componente principal da página de Contato
const ContatoPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[80vh]">
      
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
        <h1 className="text-4xl font-bold text-gray-800 self-start">Contatos</h1>
        
        <div className="w-full flex flex-col items-center lg:items-start gap-6">
          <ContatoCard 
            iconClass="fa-brands fa-whatsapp"
            title="Telefone HC"
            text="(11) 99334-1545"
          />
          <ContatoCard 
            iconClass="fa-brands fa-whatsapp"
            title="Ouvidoria HC"
            text="(11) 2661-1048"
          />
          <ContatoCard 
            iconClass="fa-regular fa-envelope"
            title="Email Ouvidoria"
            text="ouvidoria.geral@hc.fm.usp.br"
          />
        </div>
      </section>

      <section className="hidden lg:flex w-1/2 items-center justify-center">
        <img 
          src="/assets/img/contato.jpg" 
          alt="Ilustração de um homem falando ao telefone"
          className="max-w-md w-full"
        />
      </section>
    </main>
  );
};

export default ContatoPage;