import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';

const Team = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: t('team.member1.name'),
      position: t('team.member1.position'),
      bio: t('team.member1.bio'),
      image: 'public/lovable-uploads/320cf59a-8f59-482d-b71b-8604439f5f4f.png'
    },
    {
      name: t('team.member2.name'),
      position: t('team.member2.position'),
      bio: t('team.member2.bio'),
      image: 'https://i.pravatar.cc/300?img=26'
    },
    {
      name: t('team.member3.name'),
      position: t('team.member3.position'),
      bio: t('team.member3.bio'),
      image: 'https://i.pravatar.cc/300?img=49'
    },
    {
      name: t('team.member4.name'),
      position: t('team.member4.position'),
      bio: t('team.member4.bio'),
      image: 'https://i.pravatar.cc/300?img=23'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('team.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border border-gray-100 overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="text-center py-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
