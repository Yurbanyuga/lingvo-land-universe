import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  PlusCircle, 
  Trash2, 
  MoveUp, 
  MoveDown,
  PencilLine,
  Type, 
  Image as ImageIcon,
  LayoutGrid,
  Palette
} from 'lucide-react';

const BLOCK_TYPES = {
  HERO: 'hero',
  TEXT: 'text',
  FEATURES: 'features',
  CTA: 'cta',
  IMAGE: 'image'
};

const contentSchema = z.object({
  title: z.string().min(2, {
    message: "Заголовок должен содержать не менее 2 символов",
  }),
  description: z.string().optional(),
  style: z.object({
    backgroundColor: z.string().default('#ffffff'),
    textColor: z.string().default('#000000'),
    alignment: z.enum(['left', 'center', 'right']).default('left'),
  }).default({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    alignment: 'left'
  }),
});

const heroSchema = contentSchema.extend({
  ctaText: z.string().optional(),
  ctaLink: z.string().optional(),
  imageUrl: z.string().optional(),
});

const textSchema = contentSchema.extend({
  content: z.string(),
});

const featuresSchema = contentSchema.extend({
  items: z.array(z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
  })).default([]),
});

const ctaSchema = contentSchema.extend({
  buttonText: z.string(),
  buttonLink: z.string(),
});

const imageSchema = contentSchema.extend({
  imageUrl: z.string(),
  alt: z.string().default(''),
});

const initialContent = {
  sections: [
    {
      id: '1',
      type: BLOCK_TYPES.HERO,
      data: {
        title: 'Погрузитесь в мир английского языка вместе с Lingvo Land',
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
      type: BLOCK_TYPES.FEATURES,
      data: {
        title: 'Почему выбирают нас',
        description: 'Lingvo Land — это современная онлайн-школа, которая делает обучение английскому языку эффективным и увлекательным',
        items: [
          {
            title: "Индивидуальный подход",
            description: "Адаптируем про��рамму под ваши цели и особенности восприятия информации",
            icon: "user"
          },
          {
            title: "Опытные преподаватели",
            description: "Работаем с профессиональными педагогами с опытом преподавания от 5 лет",
            icon: "graduationCap"
          },
          {
            title: "Результат с гарантией",
            description: "95% наших учеников достигают поставленных языковых целей в срок",
            icon: "checkCircle"
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
      type: BLOCK_TYPES.CTA,
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

const BlockCard = ({ block, onEdit, onDelete, onMoveUp, onMoveDown, isFirst, isLast }) => {
  const getBlockIcon = (type) => {
    switch (type) {
      case BLOCK_TYPES.HERO:
        return <LayoutGrid className="h-5 w-5" />;
      case BLOCK_TYPES.TEXT:
        return <Type className="h-5 w-5" />;
      case BLOCK_TYPES.FEATURES:
        return <LayoutGrid className="h-5 w-5" />;
      case BLOCK_TYPES.CTA:
        return <PencilLine className="h-5 w-5" />;
      case BLOCK_TYPES.IMAGE:
        return <ImageIcon className="h-5 w-5" />;
      default:
        return <Type className="h-5 w-5" />;
    }
  };

  const getBlockName = (type) => {
    switch (type) {
      case BLOCK_TYPES.HERO:
        return 'Главный экран';
      case BLOCK_TYPES.TEXT:
        return 'Текстовый блок';
      case BLOCK_TYPES.FEATURES:
        return 'Преимущества';
      case BLOCK_TYPES.CTA:
        return 'Призыв к действию';
      case BLOCK_TYPES.IMAGE:
        return 'Изображение';
      default:
        return 'Блок';
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="py-3 flex flex-row items-center justify-between">
        <div className="flex items-center">
          {getBlockIcon(block.type)}
          <span className="ml-2 font-medium">{getBlockName(block.type)}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMoveUp}
            disabled={isFirst}
          >
            <MoveUp className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onMoveDown}
            disabled={isLast}
          >
            <MoveDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <PencilLine className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm truncate">{block.data.title}</p>
        <div className="mt-2 flex items-center text-xs text-muted-foreground">
          <div 
            className="h-3 w-3 rounded-full mr-1" 
            style={{ backgroundColor: block.data.style?.backgroundColor || '#ffffff' }}
          />
          <span>Стиль: {block.data.style?.alignment || 'left'}</span>
        </div>
      </CardContent>
    </Card>
  );
};

const BlockEditor = ({ block, onSave, onCancel }) => {
  let formSchema;
  
  switch (block.type) {
    case BLOCK_TYPES.HERO:
      formSchema = heroSchema;
      break;
    case BLOCK_TYPES.TEXT:
      formSchema = textSchema;
      break;
    case BLOCK_TYPES.FEATURES:
      formSchema = featuresSchema;
      break;
    case BLOCK_TYPES.CTA:
      formSchema = ctaSchema;
      break;
    case BLOCK_TYPES.IMAGE:
      formSchema = imageSchema;
      break;
    default:
      formSchema = contentSchema;
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...block.data
    }
  });

  const handleSubmit = (values) => {
    onSave({
      ...block,
      data: values
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Заголовок</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl>
                <Textarea {...field} rows={3} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {block.type === BLOCK_TYPES.HERO && (
          <>
            <FormField
              control={form.control}
              name="ctaText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст кнопки</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ctaLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ссылка кнопки</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {block.type === BLOCK_TYPES.TEXT && (
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Содержание</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={5} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {block.type === BLOCK_TYPES.CTA && (
          <>
            <FormField
              control={form.control}
              name="buttonText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Текст кнопки</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="buttonLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ссылка кнопки</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {block.type === BLOCK_TYPES.IMAGE && (
          <>
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL изображения</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="alt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Альтернативный текст</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {block.type === BLOCK_TYPES.FEATURES && (
          <div className="space-y-4">
            <Label>Элементы</Label>
            {form.watch('items')?.map((_, index) => (
              <div key={index} className="border p-4 rounded-md">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Элемент {index + 1}</h4>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const items = form.getValues('items').filter((_, i) => i !== index);
                      form.setValue('items', items);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                
                <FormField
                  control={form.control}
                  name={`items.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Заголовок</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name={`items.${index}.description`}
                  render={({ field }) => (
                    <FormItem className="mt-2">
                      <FormLabel>Описание</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={2} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
            
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const items = form.getValues('items') || [];
                form.setValue('items', [
                  ...items,
                  { title: 'Новый элемент', description: 'Описание элемента' }
                ]);
              }}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Добавить элемент
            </Button>
          </div>
        )}

        <div className="border rounded-md p-4">
          <h3 className="text-sm font-medium mb-3 flex items-center">
            <Palette className="h-4 w-4 mr-1" />
            Настройки стиля
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="style.backgroundColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цвет фона</FormLabel>
                  <div className="flex">
                    <FormControl>
                      <Input {...field} type="color" className="w-12 h-8 p-1" />
                    </FormControl>
                    <Input 
                      value={field.value} 
                      onChange={field.onChange} 
                      className="ml-2 w-full" 
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="style.textColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цвет текста</FormLabel>
                  <div className="flex">
                    <FormControl>
                      <Input {...field} type="color" className="w-12 h-8 p-1" />
                    </FormControl>
                    <Input 
                      value={field.value} 
                      onChange={field.onChange} 
                      className="ml-2 w-full" 
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="style.alignment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Выравнивание</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите выравнивание" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="left">По левому краю</SelectItem>
                      <SelectItem value="center">По центру</SelectItem>
                      <SelectItem value="right">По правому краю</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline" type="button" onClick={onCancel}>
            Отмена
          </Button>
          <Button type="submit">Сохранить</Button>
        </div>
      </form>
    </Form>
  );
};

const AdminContent = () => {
  const [content, setContent] = useState(null);
  const [editingBlock, setEditingBlock] = useState(null);
  const [showBlockEditor, setShowBlockEditor] = useState(false);
  const [addingBlockType, setAddingBlockType] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        if (parsedContent.sections) {
          setContent(parsedContent);
        } else {
          setContent(initialContent);
        }
      } catch (error) {
        console.error('Error parsing saved content:', error);
        setContent(initialContent);
      }
    } else {
      setContent(initialContent);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('siteContent', JSON.stringify(content));
    toast({
      title: 'Контент сохранен',
      description: 'Изменения успешно сохранены',
    });
  };

  const handleBlockEdit = (blockId) => {
    const block = content.sections.find(b => b.id === blockId);
    if (block) {
      setEditingBlock(block);
      setShowBlockEditor(true);
    }
  };

  const handleBlockSave = (updatedBlock) => {
    setContent(prev => ({
      ...prev,
      sections: prev.sections.map(b => 
        b.id === updatedBlock.id ? updatedBlock : b
      )
    }));
    setShowBlockEditor(false);
    setEditingBlock(null);
  };

  const handleAddNewBlock = (type) => {
    const baseBlock = {
      id: Date.now().toString(),
      type,
      data: {
        title: 'Новый блок',
        description: 'Описание блока',
        style: {
          backgroundColor: '#ffffff',
          textColor: '#000000',
          alignment: 'left'
        }
      }
    };
    
    let newBlock;
    
    if (type === BLOCK_TYPES.HERO) {
      newBlock = {
        ...baseBlock,
        data: {
          ...baseBlock.data,
          ctaText: 'Кнопка',
          ctaLink: '/'
        }
      };
    } else if (type === BLOCK_TYPES.TEXT) {
      newBlock = {
        ...baseBlock,
        data: {
          ...baseBlock.data,
          content: 'Введите содержимое здесь...'
        }
      };
    } else if (type === BLOCK_TYPES.FEATURES) {
      newBlock = {
        ...baseBlock,
        data: {
          ...baseBlock.data,
          items: [
            { 
              title: 'Особенность 1', 
              description: 'Описание особенности' 
            }
          ]
        }
      };
    } else if (type === BLOCK_TYPES.CTA) {
      newBlock = {
        ...baseBlock,
        data: {
          ...baseBlock.data,
          buttonText: 'Кнопка',
          buttonLink: '/'
        }
      };
    } else if (type === BLOCK_TYPES.IMAGE) {
      newBlock = {
        ...baseBlock,
        data: {
          ...baseBlock.data,
          imageUrl: '/placeholder.svg',
          alt: 'Изображение'
        }
      };
    } else {
      newBlock = baseBlock;
    }
    
    setEditingBlock(newBlock);
    setShowBlockEditor(true);
    setAddingBlockType(null);
  };

  const handleBlockDelete = (blockId) => {
    setContent(prev => ({
      ...prev,
      sections: prev.sections.filter(b => b.id !== blockId)
    }));
    toast({
      title: 'Блок удален',
      description: 'Блок был успешно удален',
    });
  };

  const handleMoveBlock = (blockId, direction) => {
    const blockIndex = content.sections.findIndex(b => b.id === blockId);
    if (blockIndex === -1) return;
    
    const newIndex = direction === 'up' ? blockIndex - 1 : blockIndex + 1;
    if (newIndex < 0 || newIndex >= content.sections.length) return;
    
    const newSections = [...content.sections];
    const [movedBlock] = newSections.splice(blockIndex, 1);
    newSections.splice(newIndex, 0, movedBlock);
    
    setContent(prev => ({
      ...prev,
      sections: newSections
    }));
  };

  if (!content) {
    return <div className="flex items-center justify-center h-64">Загрузка...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Управление контентом</h1>
          <p className="text-muted-foreground">Редактирование содержимого сайта</p>
        </div>
        <Button onClick={handleSave}>Сохранить изменения</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Блоки страницы</h2>
            <Dialog open={!!addingBlockType} onOpenChange={(open) => !open && setAddingBlockType(null)}>
              <DialogTrigger asChild>
                <Button onClick={() => setAddingBlockType(true)}>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Добавить блок
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Выберите тип блока</DialogTitle>
                  <DialogDescription>
                    Выберите тип блока, который вы хотите добавить на страницу
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <Button 
                    variant="outline" 
                    className="h-24 flex flex-col"
                    onClick={() => handleAddNewBlock(BLOCK_TYPES.HERO)}
                  >
                    <LayoutGrid className="h-6 w-6 mb-2" />
                    <span>Главный экран</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex flex-col"
                    onClick={() => handleAddNewBlock(BLOCK_TYPES.TEXT)}
                  >
                    <Type className="h-6 w-6 mb-2" />
                    <span>Текстовый блок</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex flex-col"
                    onClick={() => handleAddNewBlock(BLOCK_TYPES.FEATURES)}
                  >
                    <LayoutGrid className="h-6 w-6 mb-2" />
                    <span>Преимущества</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex flex-col"
                    onClick={() => handleAddNewBlock(BLOCK_TYPES.CTA)}
                  >
                    <PencilLine className="h-6 w-6 mb-2" />
                    <span>Призыв к действию</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-24 flex flex-col"
                    onClick={() => handleAddNewBlock(BLOCK_TYPES.IMAGE)}
                  >
                    <ImageIcon className="h-6 w-6 mb-2" />
                    <span>Изображение</span>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="space-y-2">
            {content.sections.map((block, index) => (
              <BlockCard 
                key={block.id} 
                block={block}
                onEdit={() => handleBlockEdit(block.id)}
                onDelete={() => handleBlockDelete(block.id)}
                onMoveUp={() => handleMoveBlock(block.id, 'up')}
                onMoveDown={() => handleMoveBlock(block.id, 'down')}
                isFirst={index === 0}
                isLast={index === content.sections.length - 1}
              />
            ))}
            
            {content.sections.length === 0 && (
              <div className="text-center p-8 border border-dashed rounded-md">
                <p className="text-muted-foreground">Нет блоков. Добавьте первый блок, нажав на кнопку "Добавить блок".</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-muted/40 p-4 rounded-lg border">
          <h2 className="text-lg font-medium mb-4">Предпросмотр</h2>
          <div className="bg-white rounded border overflow-hidden h-[calc(100vh-250px)]">
            <iframe 
              src="/" 
              title="Предпросмотр сайта" 
              className="w-full h-full"
              style={{ transform: 'scale(0.8)', transformOrigin: 'top left', width: '125%', height: '125%' }}
            />
          </div>
        </div>
      </div>
      
      <Dialog open={showBlockEditor} onOpenChange={(open) => !open && setShowBlockEditor(false)}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {editingBlock?.id.startsWith('new-') ? 'Добавить блок' : 'Редактировать блок'}
            </DialogTitle>
            <DialogDescription>
              Настройте параметры блока и нажмите "Сохранить"
            </DialogDescription>
          </DialogHeader>
          
          {editingBlock && (
            <BlockEditor
              block={editingBlock}
              onSave={handleBlockSave}
              onCancel={() => {
                setShowBlockEditor(false);
                setEditingBlock(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContent;
