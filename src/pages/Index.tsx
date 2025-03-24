
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-pretty">
                Погрузитесь в мир <span className="text-primary">английского языка</span> вместе с Lingvo Land
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 text-pretty max-w-xl">
                Инновационные методики, опытные преподаватели и гибкий график обучения помогут вам овладеть английским легко и эффективно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/start-free">Начать бесплатно</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-auto animate-fade-in">
              <div className="absolute -right-4 -top-4 md:-right-6 md:-top-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
              <div className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
              <div className="relative h-full glass rounded-3xl overflow-hidden shadow-xl p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/84e3b0b5-583d-47e6-96a7-8c666861bce4.png" 
                  alt="Lingvo Land language studio logo" 
                  className="w-full h-auto max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Lingvo Land — это современная онлайн-школа, которая делает обучение английскому языку эффективным и увлекательным
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Индивидуальный подход",
                description: "Адаптируем программу под ваши цели и особенности восприятия информации",
                delay: "0"
              },
              {
                title: "Опытные преподаватели",
                description: "Работаем с профессиональными педагогами с опытом преподавания от 5 лет",
                delay: "150"
              },
              {
                title: "Результат с гарантией",
                description: "95% наших учеников достигают поставленных языковых целей в срок",
                delay: "300"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/advantages">Все преимущества</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Готовы начать говорить на английском уверенно?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto">
            Присоединяйтесь к тысячам студентов, которые уже изучают английский с Lingvo Land. Первый урок абсолютно бесплатно!
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/start-free">Начать бесплатно</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
