
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

// Демо-данные для контента
const initialContent = {
  hero: {
    title: 'Погрузитесь в мир английского языка вместе с Lingvo Land',
    description: 'Инновационные методики, опытные преподаватели и гибкий график обучения помогут вам овладеть английским легко и эффективно.'
  },
  features: {
    title: 'Почему выбирают нас',
    description: 'Lingvo Land — это современная онлайн-школа, которая делает обучение английскому языку эффективным и увлекательным'
  },
  cta: {
    title: 'Готовы начать говорить на английском уверенно?',
    description: 'Присоединяйтесь к тысячам студентов, которые уже изучают английский с Lingvo Land. Первый урок абсолютно бесплатно!'
  }
};

const AdminContent = () => {
  const [content, setContent] = useState(initialContent);
  const [activeTab, setActiveTab] = useState('hero');
  const { toast } = useToast();

  const handleChange = (section: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // В реальной системе здесь был бы API-запрос для сохранения данных
    localStorage.setItem('siteContent', JSON.stringify(content));
    toast({
      title: 'Контент сохранен',
      description: 'Изменения успешно сохранены',
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Управление контентом</h1>
          <p className="text-muted-foreground">Редактирование содержимого сайта</p>
        </div>
        <Button onClick={handleSave}>Сохранить изменения</Button>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="hero">Главный экран</TabsTrigger>
          <TabsTrigger value="features">Преимущества</TabsTrigger>
          <TabsTrigger value="cta">Призыв к действию</TabsTrigger>
        </TabsList>
        
        <TabsContent value="hero" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="hero-title">Заголовок</Label>
            <Input
              id="hero-title"
              value={content.hero.title}
              onChange={(e) => handleChange('hero', 'title', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hero-description">Описание</Label>
            <Textarea
              id="hero-description"
              rows={4}
              value={content.hero.description}
              onChange={(e) => handleChange('hero', 'description', e.target.value)}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="features" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="features-title">Заголовок</Label>
            <Input
              id="features-title"
              value={content.features.title}
              onChange={(e) => handleChange('features', 'title', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="features-description">Описание</Label>
            <Textarea
              id="features-description"
              rows={4}
              value={content.features.description}
              onChange={(e) => handleChange('features', 'description', e.target.value)}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="cta" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="cta-title">Заголовок</Label>
            <Input
              id="cta-title"
              value={content.cta.title}
              onChange={(e) => handleChange('cta', 'title', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cta-description">Описание</Label>
            <Textarea
              id="cta-description"
              rows={4}
              value={content.cta.description}
              onChange={(e) => handleChange('cta', 'description', e.target.value)}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;
