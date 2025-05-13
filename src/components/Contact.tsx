
import { useLanguage } from '../context/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for contacting SnapEvent. We'll be in touch shortly!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      budget: '',
      message: ''
    });
  };

  const eventTypes = [
    'Corporate Event',
    'Government Ceremony',
    'Luxury Wedding',
    'Product Launch',
    'Store Opening',
    'Celebrity Appearance',
    'Media Event',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.name')}
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.email')}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {t('contact.phone')}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                {t('contact.eventType')}
              </label>
              <Select 
                value={formData.eventType} 
                onValueChange={(value) => handleSelectChange(value, 'eventType')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="form-group">
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                {t('contact.budget')}
              </label>
              <Select 
                value={formData.budget} 
                onValueChange={(value) => handleSelectChange(value, 'budget')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="form-group md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t('contact.message')}
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full"
              />
            </div>
            
            <div className="md:col-span-2 mt-4 text-center">
              <Button 
                type="submit" 
                className="bg-gold hover:bg-gold/90 text-white px-8 py-6 rounded-md"
              >
                {t('contact.submit')}
              </Button>
            </div>
          </form>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              {t('contact.directEmail')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
