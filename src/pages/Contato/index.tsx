import React from 'react';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
  </svg>
);

const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const ContatoCard = ({ 
  icon, 
  title, 
  text 
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  const iconBgColor = title.includes('WhatsApp') || title.includes('Telefone') || title.includes('Ouvidoria')
    ? 'bg-green-100 text-green-600' 
    : 'bg-red-100 text-red-600';

  return (
    <div className="border border-gray-200 rounded-xl p-4 sm:p-6 w-full max-w-md flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 cursor-pointer bg-white">
      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${iconBgColor}`}>
        {icon}
      </div>
      
      <div className="text-left min-w-0 flex-1">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base break-words overflow-hidden">{text}</p>
      </div>
    </div>
  );
};

const ContatoPage = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 min-h-[80vh]">
      
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 sm:gap-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 w-full text-center lg:text-left">Contatos</h1>
        
        <div className="w-full flex flex-col items-center lg:items-start gap-4 sm:gap-6">
          <ContatoCard 
            icon={<WhatsAppIcon className="text-xl sm:text-3xl" />}
            title="Telefone HC"
            text="(11) 99334-1545"
          />
          <ContatoCard 
            icon={<WhatsAppIcon className="text-xl sm:text-3xl" />}
            title="Ouvidoria HC"
            text="(11) 2661-1048"
          />
          <ContatoCard 
            icon={<EmailIcon className="text-xl sm:text-3xl" />}
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