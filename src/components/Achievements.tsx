
import { Award, Star, Target, Flame } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: "Prêmio Simpatia Biopark 2024",
      description: "Conquistou o coração de toda a faculdade com seu carisma único",
      level: "Lendário",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Star,
      title: "Mestre das Primeiras Impressões",
      description: "Nunca deixou de causar uma primeira impressão marcante",
      level: "Épico",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Target,
      title: "Especialista em Quebrar o Gelo",
      description: "Transforma qualquer silêncio constrangedor em risadas",
      level: "Expert",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: Flame,
      title: "Rei da Espontaneidade",
      description: "Sempre tem a frase certa na hora certa",
      level: "Mítico",
      color: "from-pink-400 to-red-500"
    }
  ];

  const milestones = [
    "Primeira semana na Biopark: Já conhecido por toda turma",
    "Primeiro mês: Virou referência de carisma",
    "Segundo mês: Lenda urbana dos corredores",
    "Atualmente: O cara do momento oficial!"
  ];

  return (
    <section className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
            Conquistas Épicas
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Os feitos lendários que fizeram do João uma verdadeira celebridade da Biopark
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color}`}>
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${achievement.color} text-white`}>
                      {achievement.level}
                    </span>
                  </div>
                  <p className="text-white/70">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Linha do Tempo da Fama
          </h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-white font-medium">{milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
