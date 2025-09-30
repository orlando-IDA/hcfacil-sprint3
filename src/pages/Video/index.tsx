import type { VideoCardProps } from '../../types/User';

const videoData: VideoCardProps[] = [
  {
    title: 'Marque sua consulta',
    youtubeUrl: 'https://www.youtube.com/embed/qktLGIUepPA'
  },
  {
    title: 'Faça seu Login',
    youtubeUrl: 'https://www.youtube.com/embed/BpWesvM5DpE'
  },
  {
    title: 'Esqueci a minha senha',
    youtubeUrl: 'https://www.youtube.com/embed/t53wYs46m7Q'
  },
];

const VideoCard = ({ title, youtubeUrl }: VideoCardProps) => {
  return (
    <div className="border-2 border-blue-600 rounded-lg p-4 flex flex-col gap-4 bg-white shadow-lg">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        {/* Link para YouTube em dispositivos móveis */}
      <a 
        href={youtubeUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="md:hidden text-blue-600 underline break-all"
      >
        Assistir no YouTube
      </a>

      {/* Iframe para desktop (escondido por padrão, aparece em telas médias ou maiores) */}
      <div className="hidden md:block w-full aspect-video">
        <iframe
          className="w-full h-full rounded-md"
          src={youtubeUrl}
          title={`Vídeo tutorial: ${title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const VideosPage = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Vídeos Tutoriais
      </h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {videoData.map((video) => (
          <VideoCard 
            key={video.title} 
            title={video.title} 
            youtubeUrl={video.youtubeUrl} 
          />
        ))}
      </section>
    </main>
  );
};

export default VideosPage;