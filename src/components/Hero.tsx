
import { useState, useEffect } from 'react';
import { Heart, Star, Crown } from 'lucide-react';

export const Hero = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      };
      setHearts(prev => [...prev.slice(-5), newHeart]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const phrases = [
    "O Galanteador da Biopark",
    "Rei das Paqueras",
    "Lenda Viva do Charme",
    "Conquistador de Corações"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Floating hearts */}
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          className="absolute text-pink-400 animate-pulse"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDuration: '2s',
            opacity: 0.6
          }}
          size={24}
        />
      ))}

      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Crown className="text-yellow-400 mr-4 animate-bounce" size={48} />
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 animate-fade-in">
            JOÃO
          </h1>
          <Crown className="text-yellow-400 ml-4 animate-bounce" size={48} />
        </div>
        
        <div className="h-16 mb-8">
          <p className="text-2xl md:text-3xl text-white/90 font-medium animate-fade-in">
            {phrases[currentPhrase]}
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-yellow-400 mx-1 animate-pulse" size={32} />
          ))}
        </div>

        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          O cara mais carismático da Biopark! Quando João chega, o ambiente muda, 
          os sorrisos aparecem e as conversas ficam mais interessantes. 
          Uma verdadeira lenda do charme universitário!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1 rounded-full">
            <div className="bg-black rounded-full px-8 py-4">
              <span className="text-white font-bold text-lg">🏆 Rei da Paquera 2024</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-1 rounded-full">
            <div className="bg-black rounded-full px-8 py-4">
              <span className="text-white font-bold text-lg">👑 Charme Level: Máximo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
