
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">О школе</h1>
      
      {/* Main content */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">Наша миссия</h2>
          <p className="text-lg text-foreground/80">
            Lingvo Land создана с целью сделать изучение английского языка доступным, эффективным и увлекательным для каждого.
            Мы стремимся разрушить языковой барьер и помочь нашим студентам свободно общаться на английском в любой ситуации.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-display font-semibold pt-4">Наш подход</h2>
          <p className="text-lg text-foreground/80">
            Мы верим, что каждый человек может овладеть английским языком. Наша методика сочетает классические академические 
            принципы с инновационными технологиями, что позволяет студентам быстро прогрессировать в изучении языка.
          </p>
          
          <div className="pt-4">
            <Button asChild className="rounded-full">
              <Link to="/start-free">Начать обучение</Link>
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full" />
          <div className="relative glass rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Lingvo Land office" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { number: "3000+", label: "Довольных студентов" },
          { number: "50+", label: "Профессиональных преподавателей" },
          { number: "98%", label: "Положительных отзывов" }
        ].map((stat, index) => (
          <div key={index} className="glass p-8 rounded-xl text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.number}</div>
            <div className="text-lg text-foreground/80">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Team section */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Наша команда</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Олег Салмин",
              role: "Основатель и директор",
              image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
              bio: "Эксперт с 15-летним опытом преподавания английского языка"
            },
            {
              name: "Михаил Петров",
              role: "Главный методист",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop&crop=faces",
              bio: "PhD в лингвистике, разработчик уникальной методики обучения"
            },
            {
              name: "Елена Иванова",
              role: "Старший преподаватель",
              image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=faces",
              bio: "Сертифицированный тренер с опытом работы в международных школах"
            }
          ].map((member, index) => (
            <div key={index} className="glass p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-primary font-medium mb-3 text-center">{member.role}</p>
              <p className="text-foreground/70 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-24 glass-dark p-12 rounded-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Присоединяйтесь к Lingvo Land</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Начните свой путь к свободному владению английским языком сегодня. Первый пробный урок бесплатно!
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Записаться на бесплатный урок</Link>
        </Button>
      </div>
    </div>
  );
};

export default About;
