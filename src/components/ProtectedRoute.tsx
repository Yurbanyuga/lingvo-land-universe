
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  useEffect(() => {
    // Проверка аутентификации
    const checkAuth = () => {
      const auth = localStorage.getItem('isAdminAuthenticated') === 'true';
      setIsAuthenticated(auth);
      setLoading(false);
      
      if (!auth) {
        toast({
          title: 'Доступ запрещен',
          description: 'Пожалуйста, войдите в систему для доступа к этой странице',
          variant: 'destructive',
        });
      }
    };
    
    checkAuth();
  }, [toast]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Загрузка...</div>;
  }

  if (!isAuthenticated) {
    // Перенаправляем на страницу входа, сохраняя текущий путь
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
