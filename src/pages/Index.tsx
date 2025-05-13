
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 luxury-border pb-4">About SnapEvent</h2>
            <p className="text-lg mb-6">
              With over a decade of experience, SnapEvent has established itself as a premier event management company specializing in high-end events for government institutions, luxury brands, and corporate clients. Our team of dedicated professionals ensures that every event is executed with precision, creativity, and attention to detail.
            </p>
            <p className="text-lg">
              From concept to execution, we handle every aspect of your event, allowing you to focus on what truly matters – your guests and your message. Our commitment to excellence has made us the trusted partner for some of the most prestigious organizations and individuals around the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-gold">10+</div>
              <div className="mt-2 font-medium">Years of Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-gold">500+</div>
              <div className="mt-2 font-medium">Events Organized</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-gold">120+</div>
              <div className="mt-2 font-medium">Corporate Clients</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-gold">50+</div>
              <div className="mt-2 font-medium">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <AboutSection />
        <Services />
        <Gallery />
        <Clients />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
