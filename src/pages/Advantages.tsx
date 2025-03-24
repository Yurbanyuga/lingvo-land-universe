
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Advantages = () => {
  const advantages = [
    {
      title: "Профессиональные преподаватели",
      description: "Все наши преподаватели имеют педагогическое образование, международные сертификаты и опыт работы от 5 лет.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Эффективная методика",
      description: "Наша методика основана на коммуникативном подходе и сочетает классические приемы с современными технологиями.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Индивидуальный подход",
      description: "Мы учитываем цели, уровень и особенности каждого студента, адаптируя программу под индивидуальные потребности.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Гибкий график",
      description: "Занятия проводятся в удобное для вас время, включая вечера и выходные, что позволяет совмещать обучение с работой.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Современная платформа",
      description: "Наша онлайн-платформа содержит интерактивные материалы, тесты и упражнения для дополнительной практики языка.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Регулярная практика",
      description: "Мы организуем разговорные клубы и дополнительные активности для практики языка в реальных ситуациях.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Отслеживание прогресса",
      description: "Регулярное тестирование и обратная связь позволяют отслеживать прогресс и корректировать программу обучения.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Доступные цены",
      description: "Мы предлагаем различные тарифные планы, чтобы сделать качественное обучение английскому языку доступным для всех.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Гарантия результата",
      description: "Мы гарантируем достижение поставленных языковых целей и предлагаем дополнительные бесплатные занятия, если цель не достигнута.",
      icon: (
        <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const compareFeatures = [
    {
      feature: "Профессиональные преподаватели",
      lingvoLand: true,
      otherSchools: "Не всегда"
    },
    {
      feature: "Индивидуальная программа",
      lingvoLand: true,
      otherSchools: "Редко"
    },
    {
      feature: "Гибкий график",
      lingvoLand: true,
      otherSchools: "Часто"
    },
    {
      feature: "Отслеживание прогресса",
      lingvoLand: true,
      otherSchools: "Иногда"
    },
    {
      feature: "Разговорные клубы",
      lingvoLand: true,
      otherSchools: "Редко"
    },
    {
      feature: "Гарантия результата",
      lingvoLand: true,
      otherSchools: "Очень редко"
    },
    {
      feature: "Доступ к онлайн-платформе",
      lingvoLand: true,
      otherSchools: "Иногда"
    },
    {
      feature: "Бесплатный пробный урок",
      lingvoLand: true,
      otherSchools: "Часто"
    }
  ];

  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Преимущества</h1>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        Что делает Lingvo Land особенной школой и почему тысячи студентов выбирают именно нас для изучения английского языка.
      </p>

      {/* Main advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {advantages.map((advantage, index) => (
          <Card key={index} className="glass hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="mb-4">{advantage.icon}</div>
              <CardTitle>{advantage.title}</CardTitle>
              <CardDescription>{advantage.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Comparison section */}
      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Мы в сравнении с другими школами</h2>
        <div className="glass rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 bg-primary/5 p-4">
            <div className="text-base font-medium">Особенность</div>
            <div className="text-base font-medium text-center">Lingvo Land</div>
            <div className="text-base font-medium text-center">Другие школы</div>
          </div>
          
          {compareFeatures.map((item, index) => (
            <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-transparent' : 'bg-primary/5'}`}>
              <div className="text-foreground/80">{item.feature}</div>
              <div className="text-center flex justify-center">
                {item.lingvoLand && (
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="text-center text-foreground/80">{item.otherSchools}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials preview */}
      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Что говорят наши студенты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Благодаря индивидуальному подходу и профессионализму преподавателей, я смогла за 6 месяцев подготовиться и сдать IELTS на 7.0 баллов для поступления в зарубежный университет.",
              author: "Анна К.",
              role: "Студентка",
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces"
            },
            {
              text: "Уже через 3 месяца обучения в Lingvo Land я начал свободно общаться с иностранными клиентами. Методика действительно работает, а гибкий график позволяет совмещать занятия с плотным рабочим расписанием.",
              author: "Михаил П.",
              role: "Бизнесмен",
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=faces"
            },
            {
              text: "Мой 9-летний сын с удовольствием занимается английским в Lingvo Land. Игровой формат, интересные материалы и профессионализм преподавателя делают обучение не только эффективным, но и увлекательным.",
              author: "Елена И.",
              role: "Мама ученика",
              image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="glass-dark">
              <CardContent className="pt-6">
                <p className="text-foreground/90 italic mb-6 text-pretty">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/reviews">Смотреть все отзывы</Link>
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="glass-dark p-12 rounded-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Убедитесь в наших преимуществах на практике</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Запишитесь на бесплатный пробный урок и ощутите разницу в подходе к обучению. Первое занятие абсолютно бесплатно и без обязательств.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Начать бесплатно</Link>
        </Button>
      </div>
    </div>
  );
};

export default Advantages;
