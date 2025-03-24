
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Stages = () => {
  const [activeTab, setActiveTab] = useState('beginner');
  
  const levels = {
    beginner: {
      title: "Начальный уровень (A1-A2)",
      description: "Для тех, кто только начинает изучать английский или имеет базовые знания",
      stages: [
        {
          title: "Формирование базы",
          description: "Освоение основных грамматических конструкций и базового словарного запаса для простого общения.",
          duration: "2-3 месяца",
          skills: [
            "Представиться и рассказать о себе",
            "Задавать простые вопросы",
            "Понимать медленную речь на знакомые темы",
            "Писать простые тексты"
          ]
        },
        {
          title: "Развитие коммуникативных навыков",
          description: "Расширение словарного запаса и практика использования языка в простых повседневных ситуациях.",
          duration: "3-4 месяца",
          skills: [
            "Поддерживать простой диалог",
            "Рассказывать о своих предпочтениях",
            "Понимать основную информацию в аудио",
            "Писать письма и сообщения"
          ]
        },
        {
          title: "Закрепление и переход к среднему уровню",
          description: "Консолидация знаний и подготовка к более сложным языковым конструкциям и темам.",
          duration: "2-3 месяца",
          skills: [
            "Общаться на различные бытовые темы",
            "Описывать события и впечатления",
            "Понимать основное содержание текстов",
            "Выражать свое мнение по простым вопросам"
          ]
        }
      ]
    },
    intermediate: {
      title: "Средний уровень (B1-B2)",
      description: "Для тех, кто уже имеет базовые знания и стремится к более свободному владению языком",
      stages: [
        {
          title: "Углубление знаний",
          description: "Работа над более сложными грамматическими конструкциями и расширение словарного запаса по различным темам.",
          duration: "3-4 месяца",
          skills: [
            "Общаться на абстрактные темы",
            "Понимать основное содержание сложных текстов",
            "Аргументировать свою точку зрения",
            "Писать эссе и отчеты"
          ]
        },
        {
          title: "Развитие беглости речи",
          description: "Интенсивная практика разговорного английского и работа над естественностью речи.",
          duration: "3-4 месяца",
          skills: [
            "Свободно общаться с носителями языка",
            "Понимать фильмы и телепередачи",
            "Участвовать в дискуссиях",
            "Использовать идиомы и фразовые глаголы"
          ]
        },
        {
          title: "Подготовка к продвинутому уровню",
          description: "Работа над нюансами языка и культурными особенностями для более глубокого понимания и использования английского.",
          duration: "2-3 месяца",
          skills: [
            "Понимать сложные тексты на профессиональные темы",
            "Выражать мысли бегло и спонтанно",
            "Подробно объяснять свою точку зрения",
            "Применять английский в профессиональной сфере"
          ]
        }
      ]
    },
    advanced: {
      title: "Продвинутый уровень (C1-C2)",
      description: "Для тех, кто стремится к владению языком на уровне, близком к носителю",
      stages: [
        {
          title: "Совершенствование языковых навыков",
          description: "Работа над сложными нюансами языка, стилистическими особенностями и культурными контекстами.",
          duration: "4-5 месяцев",
          skills: [
            "Понимать сложные и абстрактные тексты",
            "Бегло выражать мысли без подготовки",
            "Улавливать имплицитные значения",
            "Писать сложные тексты с четкой структурой"
          ]
        },
        {
          title: "Специализация",
          description: "Углубленное изучение специфических аспектов языка в зависимости от профессиональных или академических интересов.",
          duration: "3-4 месяца",
          skills: [
            "Использовать английский в специализированных областях",
            "Понимать технические тексты и дискуссии",
            "Участвовать в профессиональных дебатах",
            "Писать научные работы или деловые документы"
          ]
        },
        {
          title: "Достижение уровня, близкого к носителю",
          description: "Работа над тонкостями и исключениями в языке, идиоматическими выражениями и культурными нюансами.",
          duration: "Постоянное совершенствование",
          skills: [
            "Понимать любую форму устной или письменной речи",
            "Свободно общаться, выражая тонкие оттенки смысла",
            "Адаптировать речь к различным ситуациям",
            "Создавать сложные и изысканные тексты"
          ]
        }
      ]
    },
    specialized: {
      title: "Специализированные курсы",
      description: "Курсы, направленные на развитие специфических навыков и знаний для конкретных целей",
      stages: [
        {
          title: "Деловой английский",
          description: "Изучение лексики, форматов и навыков для эффективного общения в бизнес-среде.",
          duration: "3-4 месяца",
          skills: [
            "Вести деловые переговоры",
            "Проводить презентации",
            "Писать деловые письма и отчеты",
            "Участвовать в международных конференциях"
          ]
        },
        {
          title: "Подготовка к экзаменам",
          description: "Целенаправленная подготовка к сдаче международных экзаменов (IELTS, TOEFL, Cambridge Exams).",
          duration: "2-3 месяца",
          skills: [
            "Понимать формат и требования экзамена",
            "Применять стратегии выполнения заданий",
            "Эффективно распределять время",
            "Достигать требуемых баллов для учебы или работы"
          ]
        },
        {
          title: "Английский для путешествий",
          description: "Изучение практических навыков и фраз для комфортного общения во время путешествий.",
          duration: "1-2 месяца",
          skills: [
            "Общаться в аэропорту и отеле",
            "Заказывать еду и делать покупки",
            "Спрашивать и понимать направления",
            "Решать проблемы, возникающие в путешествии"
          ]
        }
      ]
    }
  };

  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Этапы обучения</h1>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        Наш структурированный подход к обучению английскому языку обеспечивает последовательное развитие навыков и достижение желаемых результатов.
      </p>

      <Tabs defaultValue="beginner" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="beginner">Начальный</TabsTrigger>
          <TabsTrigger value="intermediate">Средний</TabsTrigger>
          <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
          <TabsTrigger value="specialized">Специальные</TabsTrigger>
        </TabsList>
        
        {Object.entries(levels).map(([key, level]) => (
          <TabsContent key={key} value={key} className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{level.title}</h2>
              <p className="text-lg text-foreground/80">{level.description}</p>
            </div>
            
            <div className="space-y-12">
              {level.stages.map((stage, index) => (
                <div key={index} className="relative">
                  {/* Stage connector line */}
                  {index < level.stages.length - 1 && (
                    <div className="absolute left-10 top-20 w-0.5 h-[calc(100%+3rem)] bg-primary/20"></div>
                  )}
                  
                  <div className="flex items-start">
                    <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="text-primary text-3xl font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="ml-8 glass rounded-xl p-6 w-full">
                      <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                      <p className="text-foreground/80 mb-4">{stage.description}</p>
                      
                      <div className="bg-primary/5 p-4 rounded-lg mb-4">
                        <p className="font-medium text-primary">Примерная длительность: {stage.duration}</p>
                      </div>
                      
                      <h4 className="font-medium mb-2">После этого этапа вы сможете:</h4>
                      <ul className="space-y-2">
                        {stage.skills.map((skill, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Learning approach */}
      <div className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Наш подход к обучению</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Коммуникативная методика</h3>
            <p className="text-foreground/80 mb-4">
              Мы используем коммуникативный подход, который фокусируется на практическом использовании языка в реальных ситуациях.
              В процессе обучения вы не просто изучаете правила, но активно применяете их в общении.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                70% занятия — активная практика
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Ситуативное обучение на релевантных примерах
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Фокус на преодолении языкового барьера
              </li>
            </ul>
          </div>
          
          <div className="glass p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Комплексное развитие навыков</h3>
            <p className="text-foreground/80 mb-4">
              Мы работаем над всеми аспектами языка: говорение, аудирование, чтение и письмо, обеспечивая сбалансированное развитие всех навыков.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Интегрированный подход к развитию навыков
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Аутентичные материалы и задания
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Регулярная практика и обратная связь
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 glass p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Персонализированный план обучения</h3>
          <p className="text-foreground/80 mb-4">
            Каждый студент получает индивидуальный план обучения, учитывающий его цели, уровень, темп обучения и предпочтения.
            План регулярно пересматривается и корректируется в зависимости от прогресса и изменения целей.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary mb-2">Начальная диагностика</h4>
              <p className="text-sm text-foreground/80">Определение уровня и выявление сильных и слабых сторон</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary mb-2">Постановка целей</h4>
              <p className="text-sm text-foreground/80">Определение конкретных, измеримых и достижимых целей</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <h4 className="font-medium text-primary mb-2">Регулярная корректировка</h4>
              <p className="text-sm text-foreground/80">Адаптация плана в зависимости от прогресса и обратной связи</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-24 glass-dark p-12 rounded-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Начните свой путь к свободному владению английским</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Запишитесь на бесплатный пробный урок, и мы поможем определить ваш текущий уровень и разработать индивидуальный план обучения.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Начать обучение</Link>
        </Button>
      </div>
    </div>
  );
};

export default Stages;
