
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const StartFree = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    goal: 'general',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, goal: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для организации бесплатного урока.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        level: '',
        goal: 'general',
        time: ''
      });
    }, 1500);
  };

  return (
    <div className="page-container">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Начните бесплатно</h1>
        <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
          Запишитесь на бесплатный пробный урок и сделайте первый шаг на пути к свободному владению английским языком.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Запись на бесплатный урок</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Введите ваше имя" 
                  value={formData.name} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Введите ваш email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="Введите ваш телефон" 
                  value={formData.phone} 
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="level">Ваш уровень английского</Label>
                <Select value={formData.level} onValueChange={(value) => handleSelectChange('level', value)}>
                  <SelectTrigger id="level">
                    <SelectValue placeholder="Выберите уровень" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Начинающий (A1)</SelectItem>
                    <SelectItem value="elementary">Элементарный (A2)</SelectItem>
                    <SelectItem value="intermediate">Средний (B1)</SelectItem>
                    <SelectItem value="upper">Выше среднего (B2)</SelectItem>
                    <SelectItem value="advanced">Продвинутый (C1)</SelectItem>
                    <SelectItem value="not-sure">Не знаю</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Цель изучения</Label>
                <RadioGroup value={formData.goal} onValueChange={handleRadioChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general">Общий английский</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Деловой английский</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exam" id="exam" />
                    <Label htmlFor="exam">Подготовка к экзаменам</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="travel" id="travel" />
                    <Label htmlFor="travel">Для путешествий</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Предпочтительное время</Label>
                <Select value={formData.time} onValueChange={(value) => handleSelectChange('time', value)}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Утро (9:00 - 12:00)</SelectItem>
                    <SelectItem value="afternoon">День (12:00 - 17:00)</SelectItem>
                    <SelectItem value="evening">Вечер (17:00 - 21:00)</SelectItem>
                    <SelectItem value="weekend">Выходные</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Записаться на бесплатный урок"}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Что вы получите?</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Персональная консультация",
                  description: "60-минутный разговор с преподавателем, который определит ваш уровень и поможет поставить цели обучения."
                },
                {
                  title: "Индивидуальный план",
                  description: "Разработка персонального плана обучения, учитывающего ваши цели, уровень и особенности восприятия."
                },
                {
                  title: "Знакомство с методикой",
                  description: "Вы познакомитесь с нашей эффективной методикой обучения и уникальными материалами."
                },
                {
                  title: "Без обязательств",
                  description: "Пробный урок абсолютно бесплатный и не обязывает вас продолжать обучение."
                }
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 glass-dark rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Отзыв студента</h3>
              <p className="italic text-foreground/80 mb-4">
                "Я долго не решалась начать изучение английского, но бесплатный урок в Lingvo Land убедил меня, что это возможно в любом возрасте. Сейчас я уже свободно общаюсь с иностранными коллегами."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop&crop=faces" alt="Student" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">Мария К.</p>
                  <p className="text-sm text-foreground/70">Студентка Lingvo Land</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFree;
