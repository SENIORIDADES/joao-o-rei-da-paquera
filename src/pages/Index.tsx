
import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Achievements } from '../components/Achievements';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';
import { Footer } from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'achievements', 'testimonials', 'gallery'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              João Legend
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'about', label: 'Sobre' },
                { id: 'achievements', label: 'Conquistas' },
                { id: 'testimonials', label: 'Depoimentos' },
                { id: 'gallery', label: 'Galeria' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentSection === id
                      ? 'text-pink-400 bg-white/10'
                      : 'text-white/80 hover:text-pink-400 hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
