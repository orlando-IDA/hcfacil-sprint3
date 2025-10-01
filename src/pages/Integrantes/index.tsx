
import { Link } from 'react-router-dom';
import type { IntegranteProps } from '../../types/User';

const IntegranteCard = ({ id, nome, rm, turma, funcao, imgUrl, githubUrl, linkedinUrl }: IntegranteProps) => {
  return (
    <Link 
      to={`/integrantes/${id}`}
      className="block transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="bg-[#0E79C1] text-white border-4 border-[#00AAAA] rounded-lg w-[280px] md:w-[320px] aspect-[5/7] p-8 flex flex-col items-center justify-between text-center transition-transform duration-300 hover:-translate-y-2">
        <div 
          className="w-36 h-36 md:w-40 md:h-40 bg-cover bg-center rounded-full border-4 border-[#00AAAA]"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl md:text-2xl font-semibold">{nome}</h3>
          <p className="font-light">{`RM: ${rm} | ${turma}`}</p>
          <h4 className="font-light text-lg md:text-xl">{funcao}</h4>
        </div>
        <ul className="w-full pt-6 flex items-center justify-center gap-6 border-t-2 border-[#00AAAA]">
          <li>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fa-brands fa-linkedin text-2xl text-blue-700"></i>
            </a>
          </li>
        </ul>
      </div>
    </Link>
  );
};

const IntegrantesPage = () => {
  const integrantes: IntegranteProps[] = [
    {
      id: '1',
      nome: 'Gabriel Martins',
      rm: '562194',
      turma: '1TDSPG',
      funcao: 'Dev Back-End',
      imgUrl: '/assets/img/gabriel.jpg',
      githubUrl: 'https://github.com/ggabmartins',
      linkedinUrl: 'https://www.linkedin.com/in/gabriel-lourenço-5a4280353/',
      bio: 'Desenvolvedor back-end especializado em Node.js e TypeScript. Apaixonado por criar soluções escaláveis e eficientes.'
    },
    {
      id: '2',
      nome: 'Orlando Gonçalves',
      rm: '561584',
      turma: '1TDSPG',
      funcao: 'Dev Back-End',
      imgUrl: '/assets/img/orlando.png',
      githubUrl: 'https://github.com/orlando-IDA',
      linkedinUrl: 'https://www.linkedin.com/in/orlando-gonçalves-de-arruda-934078236/',
      bio: 'Desenvolvedor full-stack com foco em React e Python. Comprometido com qualidade de código e boas práticas.'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os desenvolvedores por trás do HC Fácil
          </p>
        </div>
        
        <section className="flex flex-wrap justify-center gap-8 md:gap-12">
          {integrantes.map((integrante) => (
            <IntegranteCard 
              key={integrante.id}
              id={integrante.id}
              nome={integrante.nome}
              rm={integrante.rm}
              turma={integrante.turma}
              funcao={integrante.funcao}
              imgUrl={integrante.imgUrl}
              githubUrl={integrante.githubUrl}
              linkedinUrl={integrante.linkedinUrl}
            />
          ))}
        </section>

        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-blue-100 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre o Projeto
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            O HC Fácil foi desenvolvido como parte do Challenge da FIAP com o objetivo 
            de reduzir a taxa de abstenção em consultas online no Hospital das Clínicas.
          </p>
          <p className="text-gray-700 text-lg">
            Nossa missão é oferecer uma plataforma mais simples e eficiente para que 
            os pacientes possam gerenciar seus agendamentos e tirar dúvidas.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IntegrantesPage;