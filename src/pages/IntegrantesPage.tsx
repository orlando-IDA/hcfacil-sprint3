// src/pages/IntegrantesPage.tsx

// Componente para o Card de cada integrante, para reutilização
const IntegranteCard = ({ nome, rm, turma, funcao, imgUrl, githubUrl, linkedinUrl }: {
  nome: string;
  rm: string;
  turma: string;
  funcao: string;
  imgUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}) => {
  return (
    <div className="bg-[#0E79C1] text-white border-4 border-[#00AAAA] rounded-lg w-[280px] md:w-[320px] aspect-[5/7] p-8 flex flex-col items-center justify-between text-center transition-transform duration-300 hover:-translate-y-2">
      {/* Imagem do integrante */}
      <div 
        className="w-36 h-36 md:w-40 md:h-40 bg-cover bg-center rounded-full border-4 border-[#00AAAA]"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />

      {/* Informações de texto */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl md:text-2xl font-semibold">{nome}</h3>
        <p className="font-light">{`RM: ${rm} | ${turma}`}</p>
        <h4 className="font-light text-lg md:text-xl">{funcao}</h4>
      </div>

      {/* SEÇÃO DOS ÍCONES */}
      <ul className="w-full pt-6 flex items-center justify-center gap-6 border-t-2 border-[#00AAAA]">
        <li>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
          >
            <i className="fa-brands fa-github text-2xl text-gray-800"></i>
          </a>
        </li>
        <li>
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin text-2xl text-blue-700"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

// Componente principal da página
const IntegrantesPage = () => {
  // (O resto do componente permanece o mesmo)
  return (
    <main className="container mx-auto px-4 py-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Integrantes</h1>
      
      <section className="flex flex-wrap justify-center gap-8 md:gap-12">
        <IntegranteCard 
          nome="Gabriel Martins"
          rm="562194"
          turma="1TDSPG"
          funcao="Dev Back-End"
          imgUrl="/assets/img/gabriel.jpg"
          githubUrl="https://github.com/ggabmartins"
          linkedinUrl="https://www.linkedin.com/in/gabriel-lourenço-5a4280353/"
        />
        <IntegranteCard 
          nome="Orlando Gonçalves"
          rm="561584"
          turma="1TDSPG"
          funcao="Dev Back-End"
          imgUrl="/assets/img/orlando.png"
          githubUrl="https://github.com/orlando-IDA"
          linkedinUrl="https://www.linkedin.com/in/orlando-gonçalves-de-arruda-934078236/"
        />
      </section>
    </main>
  );
};

export default IntegrantesPage;