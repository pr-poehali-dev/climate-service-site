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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка принята!',
      description: 'Мы свяжемся с вами в течение 15 минут',
    });
    setFormData({ name: '', phone: '', address: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Snowflake" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">КлиматСервис</span>
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
          <Button onClick={() => scrollToSection('booking')}>
            Оставить заявку
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-gray-50/95 z-10"></div>
          <img 
            src="https://cdn.poehali.dev/projects/48ac3689-99fd-46ac-bf14-cb369cffa746/files/effb148f-7a4a-461f-a661-bf9999d27dbd.jpg" 
            alt="Haier split system" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Профессиональный ремонт
            <span className="block text-primary">климатической техники</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Быстрая диагностика, качественный ремонт и обслуживание сплит-систем любой сложности. Гарантия на все работы.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up">
            <Button size="lg" onClick={() => scrollToSection('booking')} className="text-lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться онлайн
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg">
              <Icon name="List" size={20} className="mr-2" />
              Наши услуги
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Clock" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>Быстрый выезд</CardTitle>
                <CardDescription>В течение 2 часов после заявки</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>Гарантия качества</CardTitle>
                <CardDescription>До 2 лет на все виды работ</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>Опыт 10+ лет</CardTitle>
                <CardDescription>Более 5000 довольных клиентов</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Наши услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг по ремонту и обслуживанию климатической техники
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">О компании</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Мы — команда сертифицированных специалистов с опытом работы более 10 лет. Наша миссия — обеспечить комфортный микроклимат в каждом доме и офисе.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Используем только оригинальные запчасти и профессиональное оборудование. Работаем с техникой всех брендов: Daikin, Mitsubishi, LG, Samsung, Gree и другими.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary" />
                  <span className="text-gray-700">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary" />
                  <span className="text-gray-700">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary" />
                  <span className="text-gray-700">Работаем 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary" />
                  <span className="text-gray-700">Прозрачные цены</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-96 flex items-center justify-center">
              <Icon name="Snowflake" size={200} className="text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Отзывы клиентов</h2>
          <p className="text-center text-gray-600 mb-12">Что говорят о нас наши клиенты</p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Онлайн-запись на ремонт</CardTitle>
              <CardDescription className="text-base">
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
                
                <Button type="submit" className="w-full text-lg h-12">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Контакты</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Phone" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-lg">
                  <a href="tel:+79991234567" className="text-primary hover:underline">
                    +7 (999) 123-45-67
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Mail" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-lg">
                  <a href="mailto:info@klimat-service.ru" className="text-primary hover:underline">
                    info@klimat-service.ru
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-lg">
                  г. Москва, ул. Примерная, 10
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Snowflake" size={32} className="text-primary" />
            <span className="text-2xl font-bold">КлиматСервис</span>
          </div>
          <p className="text-gray-400 mb-4">
            Профессиональный ремонт и обслуживание климатической техники
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 КлиматСервис. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;