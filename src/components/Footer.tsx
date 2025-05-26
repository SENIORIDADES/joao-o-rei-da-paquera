
import { Heart, Crown, Star } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Crown className="text-yellow-400 mr-2 animate-pulse" size={32} />
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              João - O Lendário
            </h3>
            <Crown className="text-yellow-400 ml-2 animate-pulse" size={32} />
          </div>
          <p className="text-white/70 text-lg">
            Rei da Paquera | Galanteador da Biopark | O Cara do Momento
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-8">
          {[...Array(7)].map((_, i) => (
            <Star key={i} className="text-yellow-400 animate-pulse" size={24} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 backdrop-blur-md border border-white/10 mb-8">
          <p className="text-white/90 text-lg italic">
            "Este site foi criado com muito carinho para celebrar o cara mais carismático da Biopark. 
            João, você é inspiração para todos nós!"
          </p>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-white/60">Feito com</span>
            <Heart className="text-pink-400 fill-current animate-pulse" size={20} />
            <span className="text-white/60">para o nosso rei</span>
            <Crown className="text-yellow-400" size={20} />
          </div>
          <p className="text-white/40 text-sm">
            © 2024 João - O Cara do Momento. Todos os direitos de charme reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
