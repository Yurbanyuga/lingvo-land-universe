
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CalendarDays, Clock, Users, Video } from 'lucide-react';

const Classes = () => {
  const [activeTab, setActiveTab] = useState('individual');

  const classTypes = {
    individual: [
      {
        title: "Стандартный курс",
        description: "Комплексное изучение языка с акцентом на коммуникативные навыки",
        lessons: "20 уроков",
        level: "Для всех уровней",
        features: ["Индивидуальный подход", "Гибкий график", "Разговорная практика", "Домашние задания"]
      },
      {
        title: "Интенсивный курс",
        description: "Ускоренное обучение для быстрого прогресса и достижения конкретных целей",
        lessons: "30 уроков",
        level: "Для всех уровней",
        features: ["Погружение в язык", "3-4 занятия в неделю", "Дополнительные материалы", "Постоянная поддержка"]
      },
      {
        title: "Бизнес-английский",
        description: "Специализированный курс для деловых коммуникаций и профессионального роста",
        lessons: "15 уроков",
        level: "От A2 и выше",
        features: ["Деловая лексика", "Ведение переговоров", "Деловая переписка", "Презентации на английском"]
      }
    ],
    group: [
      {
        title: "Малые группы",
        description: "Занятия в мини-группах до 4 человек для эффективного обучения",
        lessons: "24 урока",
        level: "Для всех уровней",
        features: ["До 4 студентов", "Больше разговорной практики", "Командные задания", "Доступная стоимость"]
      },
      {
        title: "Разговорный клуб",
        description: "Регулярные встречи для практики разговорного английского в непринужденной обстановке",
        lessons: "12 встреч",
        level: "От A2 и выше",
        features: ["Дискуссии на актуальные темы", "Игры и активности", "Погружение в языковую среду", "Новые знакомства"]
      },
      {
        title: "Тематические курсы",
        description: "Изучение английского через интересные темы: кино, литература, путешествия",
        lessons: "16 уроков",
        level: "От B1 и выше",
        features: ["Интересные материалы", "Культурный контекст", "Специализированная лексика", "Творческие задания"]
      }
    ],
    children: [
      {
        title: "Детский курс (5-8 лет)",
        description: "Увлекательное знакомство с английским через игры, песни и сказки",
        lessons: "20 уроков",
        level: "Начальный",
        features: ["Игровой формат", "Красочные материалы", "Интерактивные задания", "Развитие базовых навыков"]
      },
      {
        title: "Курс для школьников (9-14 лет)",
        description: "Структурированное обучение с учетом школьной программы и возрастных особенностей",
        lessons: "24 урока",
        level: "Для всех уровней",
        features: ["Соответствие школьной программе", "Помощь с домашними заданиями", "Интерактивные уроки", "Развитие всех языковых навыков"]
      },
      {
        title: "Курс для подростков (15-17 лет)",
        description: "Подготовка к экзаменам и развитие коммуникативных навыков через интересные для подростков темы",
        lessons: "20 уроков",
        level: "Для всех уровней",
        features: ["Современные темы", "Подготовка к экзаменам", "Развитие критического мышления", "Разговорная практика"]
      }
    ],
    exam: [
      {
        title: "Подготовка к IELTS",
        description: "Целенаправленная подготовка к сдаче международного экзамена IELTS",
        lessons: "20 уроков",
        level: "От B1 и выше",
        features: ["Стратегии сдачи экзамена", "Практика всех модулей", "Пробные тесты", "Индивидуальные рекомендации"]
      },
      {
        title: "Подготовка к TOEFL",
        description: "Комплексная подготовка к экзамену TOEFL для поступления в зарубежные вузы",
        lessons: "20 уроков",
        level: "От B1 и выше",
        features: ["Специфика экзамена", "Тренировка всех секций", "Типичные ошибки", "Техники тайм-менеджмента"]
      },
      {
        title: "Подготовка к Cambridge Exams",
        description: "Подготовка к экзаменам FCE, CAE, CPE для получения международного сертификата",
        lessons: "24 урока",
        level: "От B1 и выше",
        features: ["Форматы разных уровней", "Отработка всех типов заданий", "Обратная связь", "Прогнозируемый результат"]
      }
    ]
  };

  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Занятия</h1>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        Мы предлагаем различные форматы занятий, чтобы каждый студент мог выбрать наиболее подходящий для своих целей и предпочтений.
      </p>

      <Tabs defaultValue="individual" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="individual">Индивидуальные</TabsTrigger>
          <TabsTrigger value="group">Групповые</TabsTrigger>
          <TabsTrigger value="children">Для детей</TabsTrigger>
          <TabsTrigger value="exam">Подготовка к экзаменам</TabsTrigger>
        </TabsList>
        
        {Object.entries(classTypes).map(([key, courses]) => (
          <TabsContent key={key} value={key} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="glass transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <div className="text-sm">
                        <span className="font-medium">Количество:</span> {course.lessons}
                      </div>
                      <div className="text-sm">
                        <span className="font-medium">Уровень:</span> {course.level}
                      </div>
                    </div>
                    
                    <h4 className="text-sm font-medium mb-2">Особенности курса:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <svg className="h-4 w-4 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to="/start-free">Записаться на пробный урок</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Class Process - Updated with images and expressive numbers */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 text-center">Как проходят занятия</h2>
        
        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "Определение уровня и целей",
              description: "Перед началом обучения мы проводим тестирование для определения вашего текущего уровня и обсуждаем ваши цели и ожидания.",
              icon: <BookOpen className="h-6 w-6" />,
              image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&fit=crop"
            },
            {
              step: "02",
              title: "Индивидуальный план",
              description: "На основе ваших целей и уровня мы разрабатываем персональный план обучения с оптимальным форматом, интенсивностью и фокусом.",
              icon: <CalendarDays className="h-6 w-6" />,
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&fit=crop"
            },
            {
              step: "03",
              title: "Интерактивные занятия",
              description: "Каждое занятие включает теорию, практику и обратную связь. Мы используем современные методики и интерактивные материалы.",
              icon: <Video className="h-6 w-6" />,
              image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&fit=crop"
            },
            {
              step: "04",
              title: "Регулярная практика",
              description: "Между занятиями вы выполняете домашние задания и имеете доступ к дополнительным материалам для самостоятельной практики.",
              icon: <Clock className="h-6 w-6" />,
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&fit=crop"
            },
            {
              step: "05",
              title: "Отслеживание прогресса",
              description: "Регулярные тесты и обратная связь помогают отслеживать прогресс и корректировать программу при необходимости.",
              icon: <Users className="h-6 w-6" />,
              image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&fit=crop"
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row glass rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="md:w-2/5 relative">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center shadow-lg">
                  {step.step}
                </div>
              </div>
              
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-foreground/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-24 glass-dark p-12 rounded-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Готовы начать обучение?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Запишитесь на бесплатный пробный урок, чтобы определить ваш уровень и подобрать оптимальную программу обучения.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Записаться на бесплатный урок</Link>
        </Button>
      </div>
    </div>
  );
};

export default Classes;
