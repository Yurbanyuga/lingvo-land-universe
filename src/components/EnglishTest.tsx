
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { Check, Brain } from 'lucide-react';

type TestQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: "Choose the correct sentence:",
    options: [
      "She don't like coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
      "She do not likes coffee."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Fill in the blank: 'I _____ to the movies yesterday.'",
    options: [
      "go",
      "goes",
      "went",
      "going"
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Which word is a synonym for 'happy'?",
    options: [
      "Sad",
      "Angry",
      "Joyful",
      "Tired"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Choose the correct preposition: 'She's arriving _____ Monday.'",
    options: [
      "in",
      "at",
      "on",
      "by"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "Which is the correct past tense of 'read'?",
    options: [
      "readed",
      "red",
      "reed",
      "read"
    ],
    correctAnswer: 3
  }
];

type FormValues = {
  [key: string]: number;
};

const EnglishTest = () => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [levelDescription, setLevelDescription] = useState('');
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {},
  });

  const handleTestSubmit = (data: FormValues) => {
    let correctAnswers = 0;
    
    testQuestions.forEach(question => {
      if (data[`question-${question.id}`] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    const scorePercentage = (correctAnswers / testQuestions.length) * 100;
    setScore(scorePercentage);
    
    // Determine level based on score
    if (scorePercentage >= 80) {
      setLevelDescription('B2-C1 - Уровень выше среднего/продвинутый. Вы хорошо владеете английским!');
    } else if (scorePercentage >= 60) {
      setLevelDescription('B1 - Средний уровень. У вас хорошая база, но есть куда расти!');
    } else if (scorePercentage >= 40) {
      setLevelDescription('A2 - Базовый уровень. Вы знаете основы, но требуется больше практики.');
    } else {
      setLevelDescription('A1 - Начальный уровень. Рекомендуем начать с базовых курсов.');
    }
    
    setShowResults(true);
  };

  const restartTest = () => {
    form.reset();
    setShowResults(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-full">
          <Brain className="mr-2" />
          Пройти тест на знание английского
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!showResults ? (
          <>
            <DialogHeader>
              <DialogTitle>Тест на знание английского языка</DialogTitle>
              <DialogDescription>
                Ответьте на 5 вопросов, чтобы мы могли оценить ваш уровень владения английским языком.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleTestSubmit)} className="space-y-6 py-4">
                {testQuestions.map((question) => (
                  <Card key={question.id} className="glass">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{question.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <FormField
                        control={form.control}
                        name={`question-${question.id}`}
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormControl>
                              <RadioGroup
                                onValueChange={(value) => field.onChange(parseInt(value))}
                                value={field.value?.toString()}
                                className="space-y-1"
                              >
                                {question.options.map((option, optionIndex) => (
                                  <FormItem
                                    key={optionIndex}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={optionIndex.toString()} />
                                    </FormControl>
                                    <FormLabel className="font-normal">{option}</FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                ))}
                <DialogFooter>
                  <Button type="submit" className="w-full">Завершить тест</Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Результаты теста</DialogTitle>
              <DialogDescription>
                Ваш результат и рекомендуемый уровень обучения
              </DialogDescription>
            </DialogHeader>
            <div className="py-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-36 w-36 flex items-center justify-center rounded-full bg-primary/10">
                  <div className="text-3xl font-bold text-primary">{score}%</div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl mb-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Check className="h-5 w-5 mr-2 text-primary" /> Ваш уровень:
                </h3>
                <p className="text-foreground/80">{levelDescription}</p>
              </div>
              
              <p className="text-center text-foreground/80 mb-6">
                Запишитесь на бесплатный пробный урок, чтобы получить более подробную оценку вашего уровня и рекомендации по обучению.
              </p>
            </div>
            <DialogFooter className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" onClick={restartTest} className="sm:flex-1">
                Пройти тест еще раз
              </Button>
              <Button asChild className="sm:flex-1" onClick={() => setOpen(false)}>
                <a href="/start-free">Записаться на пробный урок</a>
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EnglishTest;
