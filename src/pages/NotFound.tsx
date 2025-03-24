
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass p-12 rounded-2xl max-w-lg w-full text-center">
        <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold mb-6">Страница не найдена</p>
        <p className="text-foreground/70 mb-8">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
