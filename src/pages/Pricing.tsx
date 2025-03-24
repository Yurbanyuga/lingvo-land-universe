
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const pricingPlans = {
    individual: [
      {
        title: "Базовый",
        description: "Идеально подходит для тех, кто только начинает изучать английский",
        priceMonthly: 3900,
        priceAnnual: 3510,
        features: [
          "8 индивидуальных занятий в месяц",
          "Персональный преподаватель",
          "Учебные материалы",
          "Домашние задания с проверкой",
          "Доступ к онлайн-платформе"
        ],
        highlight: false
      },
      {
        title: "Стандарт",
        description: "Оптимальный вариант для стабильного прогресса",
        priceMonthly: 5900,
        priceAnnual: 5310,
        features: [
          "12 индивидуальных занятий в месяц",
          "Персональный преподаватель",
          "Расширенные учебные материалы",
          "Домашние задания с проверкой",
          "Доступ к онлайн-платформе",
          "Ежемесячное тестирование прогресса",
          "Разговорный клуб 1 раз в неделю"
        ],
        highlight: true
      },
      {
        title: "Премиум",
        description: "Максимально интенсивное обучение для быстрого результата",
        priceMonthly: 8900,
        priceAnnual: 8010,
        features: [
          "16 индивидуальных занятий в месяц",
          "Персональный преподаватель уровня Senior",
          "Премиум учебные материалы",
          "Расширенные домашние задания с проверкой",
          "Доступ к онлайн-платформе",
          "Еженедельное тестирование прогресса",
          "Разговорный клуб 2 раза в неделю",
          "Дополнительные часы разговорной практики",
          "Персональный куратор"
        ],
        highlight: false
      }
    ],
    group: [
      {
        title: "Мини-группа Базовый",
        description: "Эффективное обучение в группе до 4 человек",
        priceMonthly: 2900,
        priceAnnual: 2610,
        features: [
          "8 групповых занятий в месяц",
          "Группа до 4 человек",
          "Учебные материалы",
          "Домашние задания с проверкой",
          "Доступ к онлайн-платформе"
        ],
        highlight: false
      },
      {
        title: "Мини-группа Стандарт",
        description: "Расширенная программа для группового обучения",
        priceMonthly: 3900,
        priceAnnual: 3510,
        features: [
          "12 групповых занятий в месяц",
          "Группа до 4 человек",
          "Расширенные учебные материалы",
          "Домашние задания с проверкой",
          "Доступ к онлайн-платформе",
          "Ежемесячное тестирование прогресса",
          "Разговорный клуб 1 раз в неделю"
        ],
        highlight: true
      },
      {
        title: "Мини-группа Премиум",
        description: "Максимально эффективное групповое обучение",
        priceMonthly: 5900,
        priceAnnual: 5310,
        features: [
          "16 групповых занятий в месяц",
          "Группа до 3 человек",
          "Премиум учебные материалы",
          "Расширенные домашние задания с проверкой",
          "Доступ к онлайн-платформе",
          "Еженедельное тестирование прогресса",
          "Разговорный клуб 2 раза в неделю",
          "Дополнительные часы разговорной практики"
        ],
        highlight: false
      }
    ],
    children: [
      {
        title: "Детский Базовый",
        description: "Знакомство с английским языком в игровой форме",
        priceMonthly: 3500,
        priceAnnual: 3150,
        features: [
          "8 занятий в месяц",
          "Специализированная детская методика",
          "Игровые материалы",
          "Интерактивные домашние задания",
          "Доступ к онлайн-платформе для детей"
        ],
        highlight: false
      },
      {
        title: "Детский Стандарт",
        description: "Комплексное развитие языковых навыков у детей",
        priceMonthly: 4900,
        priceAnnual: 4410,
        features: [
          "12 занятий в месяц",
          "Специализированная детская методика",
          "Расширенные игровые материалы",
          "Интерактивные домашние задания",
          "Доступ к онлайн-платформе для детей",
          "Ежемесячные развивающие мероприятия",
          "Отчеты для родителей"
        ],
        highlight: true
      },
      {
        title: "Детский Премиум",
        description: "Углубленное изучение английского для детей",
        priceMonthly: 6900,
        priceAnnual: 6210,
        features: [
          "16 занятий в месяц",
          "VIP детская методика",
          "Премиум игровые материалы",
          "Расширенные интерактивные задания",
          "Доступ к онлайн-платформе для детей",
          "Еженедельные развивающие мероприятия",
          "Детальные отчеты для родителей",
          "Индивидуальное консультирование родителей"
        ],
        highlight: false
      }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Цены</h1>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        Мы предлагаем гибкие тарифные планы для разных целей и возможностей. Выберите подходящий вариант обучения.
      </p>

      <div className="flex justify-center items-center space-x-4 mb-12">
        <span className={`text-base ${!isAnnual ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
          Ежемесячно
        </span>
        <Switch
          checked={isAnnual}
          onCheckedChange={setIsAnnual}
        />
        <span className={`text-base ${isAnnual ? 'font-medium text-foreground' : 'text-foreground/70'}`}>
          Ежегодно <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">Скидка 10%</span>
        </span>
      </div>

      <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="individual">Индивидуальные</TabsTrigger>
          <TabsTrigger value="group">Групповые</TabsTrigger>
          <TabsTrigger value="children">Для детей</TabsTrigger>
        </TabsList>
        
        {Object.entries(pricingPlans).map(([key, plans]) => (
          <TabsContent key={key} value={key} className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className={`transition-all duration-300 ${plan.highlight ? 'glass-dark border-primary/20 shadow-lg' : 'glass'}`}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{formatPrice(isAnnual ? plan.priceAnnual : plan.priceMonthly)} ₽</span>
                      <span className="text-foreground/70 ml-1">/месяц</span>
                      {isAnnual && (
                        <div className="text-sm text-primary mt-1">
                          Экономия {formatPrice((plan.priceMonthly - plan.priceAnnual) * 12)} ₽ в год
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-medium mb-4">Что включено:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
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
                    <Button asChild className={`w-full ${plan.highlight ? '' : 'variant-outline'}`}>
                      <Link to="/start-free">Выбрать план</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      {/* Additional Information */}
      <div className="mt-24 max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="text-2xl font-display font-bold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {[
              {
                question: "Могу ли я сменить тарифный план?",
                answer: "Да, вы можете изменить тарифный план в любое время. Изменения вступят в силу со следующего платежного периода."
              },
              {
                question: "Есть ли скидки для семей?",
                answer: "Да, мы предлагаем семейные скидки. Если несколько членов семьи обучаются в нашей школе, каждый получает скидку 5% на свой тарифный план."
              },
              {
                question: "Что будет, если я пропущу занятие?",
                answer: "Вы можете отменить занятие не менее чем за 6 часов до его начала и перенести его на другое время. При отмене менее чем за 6 часов, занятие считается проведенным."
              },
              {
                question: "Возможно ли вернуть деньги, если я решу прекратить обучение?",
                answer: "Возврат средств возможен за неиспользованные занятия при уведомлении не менее чем за 7 дней до планируемой даты прекращения обучения."
              }
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-display font-bold mb-6">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                service: "Разговорный клуб",
                description: "Дополнительные сессии для практики разговорной речи в непринужденной обстановке.",
                price: "1500 ₽ / занятие"
              },
              {
                service: "Подготовка к экзаменам",
                description: "Специализированные занятия для подготовки к международным экзаменам (IELTS, TOEFL, Cambridge).",
                price: "от 6000 ₽ / месяц"
              },
              {
                service: "Перевод документов",
                description: "Профессиональный перевод документов с английского на русский и обратно.",
                price: "от 800 ₽ / страница"
              },
              {
                service: "Корпоративное обучение",
                description: "Специализированные программы для компаний с учетом специфики бизнеса.",
                price: "Индивидуальный расчет"
              }
            ].map((service, index) => (
              <div key={index} className="glass p-6 rounded-xl">
                <h3 className="text-lg font-medium mb-2">{service.service}</h3>
                <p className="text-foreground/80 mb-3">{service.description}</p>
                <p className="text-primary font-medium">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-24 glass-dark p-12 rounded-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Не уверены, какой план выбрать?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Запишитесь на бесплатную консультацию, и наши специалисты помогут подобрать оптимальную программу обучения, соответствующую вашим целям и бюджету.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Получить консультацию</Link>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
