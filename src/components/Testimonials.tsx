
import { Quote, Heart } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana - Caloura da Biopark",
      quote: "João foi a primeira pessoa que me fez sentir em casa na faculdade. Ele tem esse dom de fazer todo mundo se sentir especial!",
      avatar: "A",
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Carlos - Veterano",
      quote: "Em 4 anos de Biopark, nunca vi alguém com tanto carisma natural. O João é definitivamente o cara do momento!",
      avatar: "C",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Marina - Colega de Turma",
      quote: "Ele transformou nossa sala de aula! Antes todo mundo era tímido, agora somos uma família. João é incrível!",
      avatar: "M",
      color: "from-purple-400 to-violet-500"
    },
    {
      name: "Professor Roberto",
      quote: "Raramente vejo um aluno que consegue ser tão carismático e ao mesmo tempo dedicado aos estudos. João é especial!",
      avatar: "R",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Júlia - Secretaria",
      quote: "Todo dia ele passa aqui e alegra nosso expediente. É impossível não sorrir quando o João aparece!",
      avatar: "J",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Pedro - Melhor Amigo",
      quote: "Conheco o João desde o ensino médio e posso garantir: ele nasceu para brilhar. É o cara mais autêntico que existe!",
      avatar: "P",
      color: "from-indigo-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            O Que Falam do João
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Depoimentos reais de pessoas que foram tocadas pelo carisma do nosso rei da paquera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10 relative">
              <Quote className="text-pink-400 mb-4 opacity-50" size={32} />
              
              <p className="text-white/90 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Heart key={i} className="text-pink-400 fill-current" size={12} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative hearts */}
              <div className="absolute top-4 right-4 opacity-20">
                <Heart className="text-pink-400" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-md border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Você também tem uma história com o João?
            </h3>
            <p className="text-white/80 mb-6">
              Compartilhe como o nosso rei da paquera marcou sua vida na Biopark!
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Contar Minha História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
