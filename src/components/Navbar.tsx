
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'О школе', href: '/about' },
    { name: 'Начать бесплатно', href: '/start-free' },
    { name: 'Занятия', href: '/classes' },
    { name: 'Цены', href: '/pricing' },
    { name: 'Преимущества', href: '/advantages' },
    { name: 'Этапы', href: '/stages' },
    { name: 'Отзывы', href: '/reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 glass shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold text-primary transition-all duration-300"
          >
            Lingvo Land
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-all duration-200 relative',
                  'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full',
                  'after:origin-left after:scale-x-0 after:transition-transform after:duration-300',
                  'hover:text-primary hover:after:bg-primary hover:after:scale-x-100',
                  location.pathname === item.href 
                    ? 'text-primary after:bg-primary after:scale-x-100' 
                    : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground/90 p-2 rounded-md hover:bg-accent transition-colors duration-150"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="flex flex-col space-y-1.5 w-6">
              <span 
                className={cn(
                  "h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out",
                  isMenuOpen && "rotate-45 translate-y-2"
                )} 
              />
              <span 
                className={cn(
                  "h-0.5 w-full bg-current transform transition-all duration-150 ease-in-out",
                  isMenuOpen && "opacity-0"
                )} 
              />
              <span 
                className={cn(
                  "h-0.5 w-full bg-current transform transition-all duration-200 ease-in-out",
                  isMenuOpen && "-rotate-45 -translate-y-2"
                )} 
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 z-20 glass-dark px-4 pt-2 pb-3 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col space-y-4 mt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'px-3 py-2 rounded-lg text-base font-medium transition-colors ease-in-out',
                location.pathname === item.href
                  ? 'text-primary bg-primary/5'
                  : 'text-foreground/80 hover:bg-accent/50 hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
