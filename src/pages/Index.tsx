
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Типы для структуры данных контента
type BlockStyle = {
  backgroundColor: string;
  textColor: string;
  alignment: 'left' | 'center' | 'right';
};

type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
};

type ContentBlock = {
  id: string;
  type: string;
  data: {
    title: string;
    description?: string;
    style: BlockStyle;
    [key: string]: any;
  };
};

type ContentData = {
  sections: ContentBlock[];
};

// Исходные данные контента
const defaultContent: ContentData = {
  sections: [
    {
      id: '1',
      type: 'hero',
      data: {
        title: 'Погрузитесь в мир <span class="text-primary">английского языка</span> вместе с Lingvo Land',
        description: 'Инновационные методики, опытные преподаватели и гибкий график обучения помогут вам овладеть английским легко и эффективно.',
        ctaText: 'Начать бесплатно',
        ctaLink: '/start-free',
        style: {
          backgroundColor: '#ffffff',
          textColor: '#000000',
          alignment: 'left'
        }
      }
    },
    {
      id: '2',
      type: 'features',
      data: {
        title: 'Почему выбирают нас',
        description: 'Lingvo Land — это современная онлайн-школа, которая делает обучение английскому языку эффективным и увлекательным',
        items: [
          {
            title: "Индивидуальный подход",
            description: "Адаптируем программу под ваши цели и особенности восприятия информации"
          },
          {
            title: "Опытные преподаватели",
            description: "Работаем с профессиональными педагогами с опытом преподавания от 5 лет"
          },
          {
            title: "Результат с гарантией",
            description: "95% наших учеников достигают поставленных языковых целей в срок"
          }
        ],
        style: {
          backgroundColor: '#ffffff',
          textColor: '#000000',
          alignment: 'center'
        }
      }
    },
    {
      id: '3',
      type: 'cta',
      data: {
        title: 'Готовы начать говорить на английском уверенно?',
        description: 'Присоединяйтесь к тысячам студентов, которые уже изучают английский с Lingvo Land. Первый урок абсолютно бесплатно!',
        buttonText: 'Начать бесплатно',
        buttonLink: '/start-free',
        style: {
          backgroundColor: '#f3f4f6',
          textColor: '#000000',
          alignment: 'center'
        }
      }
    }
  ]
};

const Index = () => {
  const [content, setContent] = useState<ContentData>(defaultContent);

  // Загрузка контента из localStorage при монтировании компонента
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(parsedContent);
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
  }, []);

  // Рендеринг блока "Герой"
  const renderHero = (block: ContentBlock) => {
    const { title, description, ctaText, ctaLink, style } = block.data;
    const textAlign = style?.alignment === 'center' ? 'text-center' : 
                      style?.alignment === 'right' ? 'text-right' : 'text-left';
    
    return (
      <section 
        key={block.id} 
        className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: style?.backgroundColor, 
          color: style?.textColor 
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 animate-slide-up ${textAlign}`}>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-pretty"
                dangerouslySetInnerHTML={{ __html: title }}
                style={{ color: style?.textColor }}
              />
              {description && (
                <p 
                  className="text-lg md:text-xl text-pretty max-w-xl"
                  style={{ color: style?.textColor }}
                >
                  {description}
                </p>
              )}
              {ctaText && ctaLink && (
                <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
                  <Button asChild size="lg" className="rounded-full">
                    <Link to={ctaLink}>{ctaText}</Link>
                  </Button>
                </div>
              )}
            </div>
            <div className="relative h-96 md:h-auto animate-fade-in">
              <div className="absolute -right-4 -top-4 md:-right-6 md:-top-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
              <div className="absolute -left-4 -bottom-4 md:-left-6 md:-bottom-6 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full" />
              <div className="relative h-full glass rounded-3xl overflow-hidden shadow-xl p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/17dc4d0e-fc22-4671-b09c-dfcfa598062e.png" 
                  alt="Lingvo Land language studio logo" 
                  className="w-full h-auto max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Рендеринг блока "Особенности"
  const renderFeatures = (block: ContentBlock) => {
    const { title, description, items, style } = block.data;
    const textAlign = style?.alignment === 'center' ? 'text-center' : 
                      style?.alignment === 'right' ? 'text-right' : 'text-left';

    return (
      <section 
        key={block.id} 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: style?.backgroundColor, 
          color: style?.textColor 
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className={`mb-16 ${textAlign}`}>
            <h2 
              className="text-3xl md:text-4xl font-display font-bold mb-4"
              style={{ color: style?.textColor }}
            >
              {title}
            </h2>
            {description && (
              <p 
                className="text-lg max-w-3xl mx-auto"
                style={{ color: style?.textColor }}
              >
                {description}
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items && items.map((feature, index) => (
              <div 
                key={index}
                className="glass p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: style?.textColor }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: style?.textColor }}>{feature.description}</p>
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
    );
  };

  // Рендеринг блока "Призыв к действию"
  const renderCta = (block: ContentBlock) => {
    const { title, description, buttonText, buttonLink, style } = block.data;
    const textAlign = style?.alignment === 'center' ? 'text-center' : 
                      style?.alignment === 'right' ? 'text-right' : 'text-left';

    return (
      <section 
        key={block.id} 
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: style?.backgroundColor, 
          color: style?.textColor 
        }}
      >
        <div className={`max-w-5xl mx-auto ${textAlign}`}>
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            style={{ color: style?.textColor }}
          >
            {title}
          </h2>
          {description && (
            <p 
              className="text-lg mb-8 max-w-3xl mx-auto"
              style={{ color: style?.textColor }}
            >
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </section>
    );
  };

  // Рендеринг текстового блока
  const renderText = (block: ContentBlock) => {
    const { title, description, content, style } = block.data;
    const textAlign = style?.alignment === 'center' ? 'text-center' : 
                      style?.alignment === 'right' ? 'text-right' : 'text-left';

    return (
      <section 
        key={block.id} 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: style?.backgroundColor, 
          color: style?.textColor 
        }}
      >
        <div className={`max-w-4xl mx-auto ${textAlign}`}>
          <h2 
            className="text-3xl font-display font-bold mb-4"
            style={{ color: style?.textColor }}
          >
            {title}
          </h2>
          {description && (
            <p 
              className="text-lg mb-6"
              style={{ color: style?.textColor }}
            >
              {description}
            </p>
          )}
          {content && (
            <div 
              className="prose max-w-none"
              style={{ color: style?.textColor }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
      </section>
    );
  };

  // Рендеринг блока изображения
  const renderImage = (block: ContentBlock) => {
    const { title, description, imageUrl, alt, style } = block.data;
    const textAlign = style?.alignment === 'center' ? 'text-center' : 
                      style?.alignment === 'right' ? 'text-right' : 'text-left';

    return (
      <section 
        key={block.id} 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          backgroundColor: style?.backgroundColor, 
          color: style?.textColor 
        }}
      >
        <div className={`max-w-6xl mx-auto ${textAlign}`}>
          {title && (
            <h2 
              className="text-3xl font-display font-bold mb-4"
              style={{ color: style?.textColor }}
            >
              {title}
            </h2>
          )}
          {description && (
            <p 
              className="text-lg mb-8"
              style={{ color: style?.textColor }}
            >
              {description}
            </p>
          )}
          {imageUrl && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={imageUrl} 
                alt={alt || 'Изображение'} 
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>
    );
  };

  // Рендеринг блоков в зависимости от их типа
  const renderBlock = (block: ContentBlock) => {
    switch (block.type) {
      case 'hero':
        return renderHero(block);
      case 'features':
        return renderFeatures(block);
      case 'cta':
        return renderCta(block);
      case 'text':
        return renderText(block);
      case 'image':
        return renderImage(block);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {content.sections?.map(block => renderBlock(block))}
    </div>
  );
};

export default Index;
