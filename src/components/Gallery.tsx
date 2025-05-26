
import { Camera, Heart, Star } from 'lucide-react';

export const Gallery = () => {
  const moments = [
    {
      title: "João no primeiro dia",
      description: "Já chegou fazendo amigos",
      emoji: "🌟"
    },
    {
      title: "Liderando a turma",
      description: "Sempre organizando os encontros",
      emoji: "👑"
    },
    {
      title: "Na cantina",
      description: "Fazendo todo mundo rir",
      emoji: "😄"
    },
    {
      title: "Apresentação épica",
      description: "Quando conquistou toda a sala",
      emoji: "🎤"
    },
    {
      title: "Festa da Biopark",
      description: "O centro das atenções",
      emoji: "🎉"
    },
    {
      title: "Estudando com charme",
      description: "Até estudando é carismático",
      emoji: "📚"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Momentos Lendários
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Uma coleção dos momentos mais icônicos do João na Biopark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {moments.map((moment, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 backdrop-blur-md border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Image placeholder with emoji */}
                <div className="aspect-square bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center text-6xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="relative z-10">{moment.emoji}</span>
                  <Camera className="absolute top-2 right-2 text-white/60" size={20} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{moment.title}</h3>
                <p className="text-white/70 mb-4">{moment.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                  <Heart className="text-pink-400 group-hover:fill-current transition-all duration-300" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <p className="text-white/70">Momentos Memoráveis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <p className="text-white/70">Sorrisos Causados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">1</div>
            <p className="text-white/70">Lenda da Biopark</p>
          </div>
        </div>
      </div>
    </section>
  );
};
