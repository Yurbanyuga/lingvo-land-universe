
import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { LayoutDashboard, FileEdit, LogOut } from 'lucide-react';

const Admin = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    // Установка активной вкладки на основе текущего пути
    if (location.pathname.includes('/admin/content')) return 'content';
    return 'dashboard';
  });

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    toast({
      title: 'Выход из системы',
      description: 'Вы успешно вышли из панели администратора'
    });
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Боковая панель */}
      <div className="w-64 bg-card shadow-md pt-20">
        <div className="px-6 py-4">
          <h2 className="text-xl font-semibold">Панель администратора</h2>
          <p className="text-sm text-muted-foreground">Управление сайтом</p>
        </div>
        
        <nav className="mt-6">
          <Link 
            to="/admin" 
            className={`flex items-center px-6 py-3 text-sm ${activeTab === 'dashboard' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Обзор
          </Link>
          <Link 
            to="/admin/content" 
            className={`flex items-center px-6 py-3 text-sm ${activeTab === 'content' ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-muted'}`}
            onClick={() => setActiveTab('content')}
          >
            <FileEdit className="h-4 w-4 mr-2" />
            Управление контентом
          </Link>
        </nav>
        
        <div className="mt-auto px-6 py-4 absolute bottom-0 w-full">
          <Button 
            variant="outline" 
            className="w-full flex items-center" 
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Выход
          </Button>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="flex-1 p-8 pt-20 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
