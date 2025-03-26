
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Панель управления</h1>
        <p className="text-muted-foreground">Добро пожаловать в административную панель Lingvo Land</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Страницы</CardTitle>
            <CardDescription>Управление страницами сайта</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <Button asChild variant="ghost" className="mt-2 p-0">
              <a href="/admin/content">Управлять страницами</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Заявки</CardTitle>
            <CardDescription>Заявки на бесплатные уроки</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <Button variant="ghost" className="mt-2 p-0">
              Просмотреть заявки
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Отзывы</CardTitle>
            <CardDescription>Отзывы пользователей</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
            <Button variant="ghost" className="mt-2 p-0">
              Управлять отзывами
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Быстрые действия</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Добавить новую страницу</Button>
          <Button variant="outline">Обновить содержимое</Button>
          <Button variant="outline">Просмотреть сайт</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
