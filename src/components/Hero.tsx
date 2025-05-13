
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop')",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in">
            {t('hero.subtitle')}
          </p>
          <div className="animate-fade-in">
            <Button 
              onClick={scrollToContact} 
              className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-md"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
