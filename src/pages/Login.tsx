
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Проверяем, авторизован ли уже пользователь
  if (localStorage.getItem('isAdminAuthenticated') === 'true') {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Простая имитация аутентификации (заменить на реальную систему в продакшене)
    setTimeout(() => {
      // Демо-учетные данные: admin / password123
      if (username === 'admin' && password === 'password123') {
        localStorage.setItem('isAdminAuthenticated', 'true');
        toast({
          title: 'Успешный вход',
          description: 'Добро пожаловать в панель администратора',
        });
        navigate('/admin');
      } else {
        toast({
          title: 'Ошибка входа',
          description: 'Неверное имя пользователя или пароль',
          variant: 'destructive',
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-secondary/30 to-primary/5">
      <div className="w-full max-w-md p-8 space-y-8 glass rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Вход в панель администратора</h2>
          <p className="mt-2 text-sm text-foreground/70">
            Введите учетные данные администратора для доступа к панели
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Имя пользователя</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите имя пользователя"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-full" 
            disabled={loading}
          >
            {loading ? 'Вход...' : 'Войти'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
