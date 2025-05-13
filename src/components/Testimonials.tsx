import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Testimonials = () => {
  const {
    t
  } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [{
    quote: "SnapEvent transformed our product launch into a trending topic overnight. Their attention to detail and media connections resulted in unprecedented coverage.",
    author: "Sarah Johnson",
    position: "Marketing Director, Luxury Cosmetics",
    image: "public/lovable-uploads/e43b95c2-c7e6-4478-8be8-b9797da1ddbf.png"
  }, {
    quote: "The professionalism and creativity displayed by the SnapEvent team during our annual gala was remarkable. They exceeded all expectations.",
    author: "Robert Chen",
    position: "CEO, Global Technologies",
    image: "https://i.pravatar.cc/150?img=59"
  }, {
    quote: "Working with SnapEvent on our governmental ceremony was a seamless experience. Their protocol knowledge and flawless execution impressed all attendees.",
    author: "Ambassador Thomas Clark",
    position: "Foreign Affairs Department",
    image: "https://i.pravatar.cc/150?img=68"
  }];
  const nextTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
          <div className="mt-4 w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`} style={{
          display: index === activeIndex ? 'block' : 'none'
        }}>
              <Card className="border-none bg-white shadow-lg">
                <CardContent className="pt-10">
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-gold">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <blockquote className="text-xl italic text-center mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <p className="soukaina amrani ">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>)}

          {/* Navigation Arrows */}
          <button onClick={prevTestimonial} className="absolute top-1/2 -left-6 md:-left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow" aria-label="Previous testimonial">
            <ChevronLeft className="h-6 w-6 text-gold" />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 -right-6 md:-right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow" aria-label="Next testimonial">
            <ChevronRight className="h-6 w-6 text-gold" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? 'bg-gold' : 'bg-gray-300'}`} aria-label={`Go to testimonial ${index + 1}`}></button>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;
