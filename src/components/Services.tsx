
import { Award, Briefcase, Heart, Package, Star, Mic, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-gold" />,
      title: t('services.corporate.title'),
      description: t('services.corporate.description'),
    },
    {
      icon: <Award className="h-10 w-10 text-gold" />,
      title: t('services.government.title'),
      description: t('services.government.description'),
    },
    {
      icon: <Heart className="h-10 w-10 text-gold" />,
      title: t('services.weddings.title'),
      description: t('services.weddings.description'),
    },
    {
      icon: <Package className="h-10 w-10 text-gold" />,
      title: t('services.launches.title'),
      description: t('services.launches.description'),
    },
    {
      icon: <Star className="h-10 w-10 text-gold" />,
      title: t('services.celebrity.title'),
      description: t('services.celebrity.description'),
    },
    {
      icon: <Search className="h-10 w-10 text-gold" />,
      title: t('services.media.title'),
      description: t('services.media.description'),
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:border-gold/30 transition-all duration-300 hover:shadow-lg overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
