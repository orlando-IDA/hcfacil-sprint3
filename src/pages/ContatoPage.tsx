// Componente reutilizável para cada card de contato
const ContatoCard = ({ iconUrl, altText, title, text }: {
  iconUrl: string;
  altText: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="border-2 border-[#0E79C1] rounded-lg p-4 w-full max-w-sm h-48 flex items-center justify-center gap-4 text-center transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={iconUrl} alt={altText} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
      <div className="text-left">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-base md:text-lg text-gray-600 break-all">{text}</p>
      </div>
    </div>
  );
};

// Componente principal da página de Contato
const ContatoPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-center gap-12 min-h-[80vh]">
      {/* Seção de Conteúdo (Texto e Cards) */}
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contatos</h1>
        
        <div className="w-full flex flex-col items-center lg:items-start gap-6">
          <ContatoCard 
            iconUrl="/assets/img/whatsapp.jpg" // Lembre-se de colocar as imagens em /public/assets/img
            altText="Ícone do WhatsApp"
            title="Telefone HC"
            text="(11) 99334-1545"
          />
          <ContatoCard 
            iconUrl="/assets/img/whatsapp.jpg"
            altText="Ícone do WhatsApp"
            title="Ouvidoria HC"
            text="(11) 2661-1048"
          />
          <ContatoCard 
            iconUrl="/assets/img/communication.jpg"
            altText="Ícone de Email"
            title="Email Ouvidoria"
            text="ouvidoria.geral@hc.fm.usp.br"
          />
        </div>
      </section>

      {/* Seção da Imagem Ilustrativa (aparece em telas grandes) */}
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