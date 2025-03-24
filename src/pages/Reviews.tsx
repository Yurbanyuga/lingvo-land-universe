
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Reviews = () => {
  const { toast } = useToast();
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    text: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setReviewForm(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Отзыв отправлен!",
        description: "Благодарим за ваш отзыв. Он будет опубликован после модерации.",
      });
      setIsSubmitting(false);
      setReviewForm({
        name: '',
        email: '',
        rating: 5,
        text: ''
      });
    }, 1500);
  };

  const reviews = [
    {
      id: 1,
      text: "Я пришла в Lingvo Land с нулевым знанием английского и страхом, что в моем возрасте уже поздно учить язык. Но благодаря терпению и профессионализму моего преподавателя, я смогла преодолеть языковой барьер и теперь свободно общаюсь с клиентами из разных стран. Методика действительно работает!",
      author: "Елена Петрова",
      role: "Менеджер по продажам",
      rating: 5,
      date: "15.03.2023",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 2,
      text: "Прошел интенсивный курс для подготовки к работе в международной компании. Результат превзошел ожидания - не только успешно прошел собеседование на английском, но и чувствую себя уверенно в повседневном общении с иностранными коллегами. Особенно ценно, что преподаватель адаптировал программу под мою сферу деятельности.",
      author: "Андрей Соколов",
      role: "IT-специалист",
      rating: 5,
      date: "02.05.2023",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 3,
      text: "Записала дочь (13 лет) на курс для школьников. За полгода она не только подтянула оценки в школе, но и начала смотреть сериалы в оригинале. Преподаватель нашел подход к подростку, сделал занятия интересными, использует современные методики и темы, близкие молодежи. Очень довольны результатом!",
      author: "Наталья Иванова",
      role: "Мама ученицы",
      rating: 5,
      date: "17.06.2023",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 4,
      text: "Учился по Skype, так как живу в другом городе. Качество обучения на высоте, никаких технических проблем. Преподаватель всегда пунктуален, материалы интересные и актуальные. Самое главное - виден прогресс, я наконец-то начал говорить на английском без постоянного мысленного перевода с русского.",
      author: "Михаил Кузнецов",
      role: "Инженер",
      rating: 4,
      date: "08.07.2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 5,
      text: "Проходил курс подготовки к IELTS. Благодаря структурированному подходу и опыту преподавателя смог получить 7.5 баллов с первой попытки, хотя до этого мой уровень был значительно ниже. Отдельное спасибо за детальную проработку письменной части и говорения - именно эти аспекты обычно самые сложные.",
      author: "Алексей Смирнов",
      role: "Студент",
      rating: 5,
      date: "23.08.2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 6,
      text: "Занимаюсь в группе Business English. Очень нравится, что в группе всего 3 человека, все примерно одного уровня, поэтому много времени на практику каждому. Преподаватель - носитель языка с опытом работы в бизнес-среде, что дает возможность узнать актуальные выражения и культурные особенности деловой коммуникации.",
      author: "Ольга Белова",
      role: "Руководитель отдела",
      rating: 5,
      date: "05.09.2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 7,
      text: "Начал с нуля в 45 лет, сомневался, что получится. Сейчас, через год занятий, свободно смотрю фильмы с субтитрами и читаю несложные книги. Очень благодарен своему преподавателю за терпение и индивидуальный подход. В Lingvo Land действительно верят, что выучить язык может каждый, независимо от возраста.",
      author: "Сергей Козлов",
      role: "Предприниматель",
      rating: 5,
      date: "12.10.2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=faces"
    },
    {
      id: 8,
      text: "Прохожу групповой курс для среднего уровня. Хотелось бы больше разговорной практики и меньше грамматики. Преподаватель хороший, но иногда занятия кажутся излишне академичными. В целом, прогресс есть, но темп мог бы быть быстрее.",
      author: "Дмитрий Волков",
      role: "Маркетолог",
      rating: 4,
      date: "27.11.2023",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=faces"
    }
  ];

  const StarRating = ({ rating, onChange }: { rating: number, onChange?: (rating: number) => void }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange && onChange(star)}
            className={`text-2xl ${star <= rating ? 'text-primary' : 'text-foreground/20'} focus:outline-none`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Отзывы</h1>
      <p className="text-lg text-foreground/80 text-center max-w-3xl mx-auto mb-12">
        Мнения наших студентов о процессе обучения, преподавателях и результатах, которых они достигли с Lingvo Land.
      </p>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {reviews.map((review) => (
          <div key={review.id} className="glass p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src={review.image} alt={review.author} className="h-full w-full object-cover" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">{review.author}</h3>
                <p className="text-sm text-foreground/70">{review.role}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <StarRating rating={review.rating} />
              <span className="text-sm text-foreground/60">{review.date}</span>
            </div>
            
            <p className="text-foreground/80 text-pretty">"{review.text}"</p>
          </div>
        ))}
      </div>

      {/* Video testimonials */}
      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Видеоотзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <div className="relative pt-[56.25%]">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-foreground/70">Видеоотзыв студента</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Анна Смирнова</h3>
                <p className="text-sm text-foreground/70">Достигла уровня B2 за 8 месяцев</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a review */}
      <div className="max-w-3xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold mb-8 text-center">Оставьте отзыв</h2>
        <div className="glass p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Введите ваше имя" 
                  value={reviewForm.name} 
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
                  value={reviewForm.email} 
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Ваша оценка</Label>
              <StarRating rating={reviewForm.rating} onChange={handleRatingChange} />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="text">Ваш отзыв</Label>
              <Textarea 
                id="text" 
                name="text" 
                placeholder="Поделитесь своими впечатлениями об обучении в Lingvo Land" 
                value={reviewForm.text} 
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить отзыв"}
            </Button>
          </form>
        </div>
      </div>

      {/* Call to Action */}
      <div className="glass-dark p-12 rounded-3xl text-center max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Присоединяйтесь к нашим довольным студентам</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Убедитесь сами в качестве нашего обучения. Запишитесь на бесплатный пробный урок и сделайте первый шаг к свободному владению английским языком.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/start-free">Записаться на бесплатный урок</Link>
        </Button>
      </div>
    </div>
  );
};

export default Reviews;
