const ContatoCard = ({ iconClass, title, text }: {
  iconClass: string;
  title: string;
  text: string;
}) => {
  const iconBgColor = iconClass.includes('whatsapp') 
    ? 'bg-green-100 text-green-600' 
    : 'bg-red-100 text-red-600';

  return (
    <div className="border border-gray-200 rounded-xl p-4 sm:p-6 w-full max-w-md flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white">
      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgColor}`}>
        <i className={`${iconClass} text-xl sm:text-3xl`}></i>
      </div>
      
      <div className="text-left min-w-0 flex-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base break-words overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

// Componente principal da página de Contato
const ContatoPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 min-h-[80vh]">
      
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 sm:gap-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 w-full text-center lg:text-left">Contatos</h1>
        
        <div className="w-full flex flex-col items-center lg:items-start gap-4 sm:gap-6">
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
            title="E-mail Ouvidoria"
            text="ouvidoria.geral@hc.fm.usp.br"
          />
        </div>
      </section>

      <section className="flex w-full lg:w-1/2 items-center justify-center mt-4 lg:mt-0">
        <img 
          src="/assets/img/contato.jpg" 
          alt="Ilustração de um homem falando ao telefone"
          className="max-w-xs sm:max-w-sm lg:max-w-md w-full"
        />
      </section>
    </main>
  );
};

export default ContatoPage;