
import { Heart, Zap, Users, Trophy } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Heart, label: "Corações Conquistados", value: "∞", color: "text-pink-400" },
    { icon: Zap, label: "Nível de Carisma", value: "100%", color: "text-yellow-400" },
    { icon: Users, label: "Amigos Feitos", value: "Todos", color: "text-blue-400" },
    { icon: Trophy, label: "Títulos de Charme", value: "999+", color: "text-purple-400" }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Conhecendo o Lendário João
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Não é todo dia que você encontra alguém como o João. Ele não é apenas um estudante da Biopark, 
            ele é THE estudante da Biopark. O cara que transforma qualquer conversa em uma experiência memorável!
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map(({ icon: Icon, label, value, color }, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Icon className={`${color} mx-auto mb-4 animate-pulse`} size={48} />
              <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
              <p className="text-white/70 font-medium">{label}</p>
            </div>
          ))}
        </div>

        {/* Bio Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">O Fenômeno João</h3>
              <div className="space-y-4 text-white/80">
                <p className="flex items-start">
                  <span className="text-pink-400 mr-2">✨</span>
                  Estudante exemplar da Biopark com um charme natural que não passa despercebido
                </p>
                <p className="flex items-start">
                  <span className="text-purple-400 mr-2">🎯</span>
                  Especialista em quebrar o gelo e fazer todo mundo se sentir especial
                </p>
                <p className="flex items-start">
                  <span className="text-cyan-400 mr-2">🌟</span>
                  O cara que todo mundo quer conhecer e com quem todo mundo quer conversar
                </p>
                <p className="flex items-start">
                  <span className="text-yellow-400 mr-2">🔥</span>
                  Transformou a arte da paquera em ciência e a ciência em arte
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-400 to-purple-600 w-64 h-64 mx-auto rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                João
              </div>
              <p className="text-white/60 mt-4 italic">"O cara do momento!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
