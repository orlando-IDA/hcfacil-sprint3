import { Link } from 'react-router-dom';
import type { HomeCardProps } from '../../types/User';

const cardData: HomeCardProps[] = [
  {
    title: 'Marque a sua consulta',
    imageUrl: '/assets/img/consultaAvatar.png',
    linkTo: '/marque-sua-consulta' 
  },
  {
    title: 'Faça seu login',
    imageUrl: '/assets/img/loginAvatar.png',
    linkTo: '/login' 
  },
  {
    title: 'Esqueci a minha senha',
    imageUrl: '/assets/img/esqueciSenhaAvatar.png',
    linkTo: '/esqueci-senha' 
  },
  {
    title: 'Ainda está com dificuldades?',
    description: 'Acesse os nossos tutoriais em vídeos e tenha tudo visualmente explicado!',
    imageUrl: '/assets/img/videosAvatar.png',
    linkTo: '/videos' 
  }
];

const HomeCard = ({ title, description, imageUrl, linkTo }: HomeCardProps) => {
  
  const isVideoCard = !!description;
  const baseCardClasses = "relative w-full h-48 md:h-56 lg:h-64 p-6 rounded-xl shadow-[-1px_3px_8px_rgba(0,0,0,0.24),1px_3px_8px_rgba(0,0,0,0.24)] cursor-pointer transition-all duration-300 text-white flex bg-[#0E79C1] hover:bg-[#00AAAA] hover:scale-105";
  const videoCardClasses = "flex-col items-start justify-center";
  const defaultCardClasses = "items-center justify-between";

  return (
    <Link to={linkTo} className={`${baseCardClasses} ${isVideoCard ? videoCardClasses : defaultCardClasses}`}>
      <div className={isVideoCard ? 'w-full' : 'w-3/4'}>
        <h2 className={`font-bold ${isVideoCard ? 'text-xl md:text-2xl lg:text-3xl' : 'text-xl md:text-2xl lg:text-3xl'}`}>{title}</h2>
        {description && <p className="text-base md:text-lg mt-2 w-4/5">{description}</p>}
      </div>
      <img 
        src={imageUrl} 
        alt=""
        className={`absolute bottom-0 ${isVideoCard ? 'right-[-20px] w-40 md:w-48 lg:w-56 -scale-x-100' : 'right-[-10px] w-32 md:w-36 lg:w-40'}`}
      />
    </Link>
  );
};

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white py-8">
      <section className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 h-[75vh]">
        {cardData.map((card) => (
          <HomeCard 
            key={card.title}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            linkTo={card.linkTo}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePage;