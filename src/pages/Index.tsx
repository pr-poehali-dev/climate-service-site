import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });

  const services = [
    {
      icon: 'Wrench',
      title: 'Ремонт сплит-систем',
      description: 'Диагностика и устранение любых неисправностей климатической техники',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Wind',
      title: 'Чистка и обслуживание',
      description: 'Профилактическое обслуживание для продления срока службы',
      price: 'от 1200 ₽'
    },
    {
      icon: 'Droplets',
      title: 'Заправка фреоном',
      description: 'Профессиональная дозаправка хладагентом любых марок',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Установка систем',
      description: 'Монтаж и настройка климатического оборудования под ключ',
      price: 'от 5000 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Александр Петров',
      rating: 5,
      text: 'Отличный сервис! Быстро приехали, качественно починили кондиционер. Рекомендую!',
      date: '15.12.2023'
    },
    {
      name: 'Мария Сидорова',
      rating: 5,
      text: 'Профессиональный подход, адекватные цены. Теперь буду обращаться только к вам.',
      date: '10.12.2023'
    },
    {
      name: 'Дмитрий Козлов',
      rating: 5,
      text: 'Сделали чистку и заправку за час. Кондиционер работает как новый. Спасибо!',
      date: '05.12.2023'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/66d12500-03dc-46ba-97a7-a5494fd2767e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: 'Заявка принята!',
          description: 'Мы свяжемся с вами в течение 15 минут',
        });
        setFormData({ name: '', phone: '', address: '', message: '' });
      } else {
        toast({
          title: 'Ошибка',
          description: 'Не удалось отправить заявку. Попробуйте позже.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже.',
        variant: 'destructive',
      });
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Snowflake" size={24} className="text-primary md:w-8 md:h-8" />
            <span className="md:text-2xl font-bold text-primary text-base">КлиматСервисОренбург</span>
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition">
              О нас
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition">
              Контакты
            </button>
            <a href="https://t.me/Alexandr56oren" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-primary transition">
              <Icon name="Send" size={20} />
              Telegram
            </a>
          </div>
          <Button onClick={() => scrollToSection('booking')} size="sm" className="md:h-10">
            <span className="hidden sm:inline">Оставить заявку</span>
            <span className="sm:hidden">Заявка</span>
          </Button>
        </div>
      </nav>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-gray-50/95 z-10"></div>
          <img 
            src="https://cdn.poehali.dev/projects/48ac3689-99fd-46ac-bf14-cb369cffa746/files/effb148f-7a4a-461f-a661-bf9999d27dbd.jpg" 
            alt="Haier split system" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-20 px-0 rounded-xl">
          <h1 className="sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 md:mb-6 animate-fade-in px-2 leading-tight text-2xl font-black">
            Профессиональный ремонт
            <span className="block text-primary mt-2">климатической техники</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto animate-fade-in px-4 leading-relaxed">
            Быстрая диагностика, качественный ремонт и обслуживание сплит-систем любой сложности. Гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
            <Button size="default" onClick={() => scrollToSection('booking')} className="text-base sm:text-lg w-full sm:w-auto">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="default" variant="outline" onClick={() => scrollToSection('services')} className="text-base sm:text-lg w-full sm:w-auto">
              <Icon name="List" size={20} className="mr-2" />
              Наши услуги
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16 max-w-4xl mx-auto px-2">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <Icon name="Clock" size={40} className="text-primary mx-auto mb-3 md:w-12 md:h-12" />
                <CardTitle className="text-base md:text-lg mb-2">Быстрый выезд</CardTitle>
                <CardDescription className="text-sm md:text-base">В течение 2 часов после заявки</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <Icon name="Shield" size={40} className="text-primary mx-auto mb-3 md:w-12 md:h-12" />
                <CardTitle className="text-base md:text-lg mb-2">Гарантия качества</CardTitle>
                <CardDescription className="text-sm md:text-base">До 2 лет на все виды работ</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <Icon name="Users" size={40} className="text-primary mx-auto mb-3 md:w-12 md:h-12" />
                <CardTitle className="text-base md:text-lg mb-2">Опыт 10+ лет</CardTitle>
                <CardDescription className="text-sm md:text-base">Более 5000 довольных клиентов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900 leading-tight">Наши услуги</h2>
          <p className="text-sm md:text-base text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
            Предоставляем полный спектр услуг по ремонту и обслуживанию климатической техники
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <Icon name={service.icon} size={28} className="text-primary md:w-8 md:h-8" />
                  </div>
                  <CardTitle className="text-lg md:text-xl mb-2 leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">О компании</h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-base md:text-lg leading-relaxed">
                Мы — команда сертифицированных специалистов с опытом работы более 10 лет. Наша миссия — обеспечить комфортный микроклимат в каждом доме и офисе.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                Используем только оригинальные запчасти и профессиональное оборудование. Работаем с техникой всех брендов: Daikin, Mitsubishi, LG, Samsung, Gree и другими.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Работаем 24/7</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700">Прозрачные цены</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-64 md:h-96 shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/48ac3689-99fd-46ac-bf14-cb369cffa746/files/05e632a8-0619-4ddc-8dae-df2eb2925976.jpg" 
                alt="Специалист ремонтирует сплит-систему" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900 leading-tight">Отзывы клиентов</h2>
          <p className="text-sm md:text-base text-center text-gray-600 mb-8 md:mb-12 px-4 leading-relaxed">Что говорят о нас наши клиенты</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-base md:text-lg leading-tight">{review.name}</CardTitle>
                    <div className="flex gap-1 flex-shrink-0 ml-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400 md:w-4 md:h-4" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs md:text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl mb-2 leading-tight">Онлайн-запись на ремонт</CardTitle>
              <CardDescription className="text-sm md:text-base leading-relaxed">
                Оставьте заявку, и мы свяжемся с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Адрес</Label>
                  <Input
                    id="address"
                    placeholder="г. Москва, ул. Примерная, д. 1"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Описание проблемы</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите, что случилось с техникой..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full text-base md:text-lg h-11 md:h-12">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 leading-tight">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Phone" size={40} className="text-primary mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
                <CardTitle className="text-lg md:text-xl mb-2 leading-tight">Телефон</CardTitle>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  <a href="tel:+79991234567" className="text-primary hover:underline break-all">+7 (3532) 55-88-85</a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
                <CardTitle className="text-lg md:text-xl mb-2 leading-tight">Email</CardTitle>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  <a href="mailto:info@klimat-service.ru" className="text-primary hover:underline break-all">orensec@mail.ru</a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <Icon name="MapPin" size={40} className="text-primary mx-auto mb-3 md:mb-4 md:w-12 md:h-12" />
                <CardTitle className="text-lg md:text-xl mb-2 leading-tight">Адрес</CardTitle>
                <CardDescription className="text-base md:text-lg leading-relaxed">г. Оренбург, ул. Пограничная, 9а</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
            <Icon name="Snowflake" size={24} className="text-primary md:w-8 md:h-8" />
            <span className="text-xl md:text-2xl font-bold">КлиматСервис</span>
          </div>
          <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 px-4 leading-relaxed">
            Профессиональный ремонт и обслуживание климатической техники
          </p>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
            © 2024 КлиматСервис. Все права защищены.
          </p>
        </div>
      </footer>

      <a
        href="tel:+73532558885"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 active:scale-95"
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={24} />
      </a>
    </div>
  );
};

export default Index;