
import { useLanguage } from '../context/LanguageContext';

const Clients = () => {
  const { t } = useLanguage();

  // Placeholder for client logos
  const clients = [
    { name: 'Business Corp', logo: 'https://via.placeholder.com/200x80?text=Business+Corp' },
    { name: 'Luxury Brand', logo: 'https://via.placeholder.com/200x80?text=Luxury+Brand' },
    { name: 'Tech Company', logo: 'https://via.placeholder.com/200x80?text=Tech+Company' },
    { name: 'Fashion House', logo: 'https://via.placeholder.com/200x80?text=Fashion+House' },
    { name: 'Government Agency', logo: 'https://via.placeholder.com/200x80?text=Government+Agency' },
    { name: 'Media Group', logo: 'https://via.placeholder.com/200x80?text=Media+Group' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('clients.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-16" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
