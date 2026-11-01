// Каталог демо-сайтов. Новый сайт: положите страницу в sites/ и добавьте объект сюда.
export const CATEGORIES = [
  { id: 'all', name: 'Все' },
  { id: 'beauty', name: 'Красота и здоровье' },
  { id: 'services', name: 'Услуги' },
  { id: 'food', name: 'Еда' },
  { id: 'edu', name: 'Обучение' },
  { id: 'travel', name: 'Туризм' },
];

export const SITES = [
  { slug: 'barber', brand: 'BLADE', niche: 'Барбершоп', cat: 'beauty', color: '#c8a46a', features: ['Прайс услуг', 'Мастера', 'Онлайн-запись'] },
  { slug: 'dental', brand: 'Улыбка+', niche: 'Стоматология', cat: 'beauty', color: '#0fa3a3', features: ['Цены по вкладкам', 'Врачи', 'Рассрочка'] },
  { slug: 'fitness', brand: 'PULSE', niche: 'Фитнес-клуб', cat: 'beauty', color: '#c6ff3d', features: ['Расписание с записью', 'Абонементы', 'Тренеры'] },
  { slug: 'beauty', brand: 'Lumière', niche: 'Салон красоты', cat: 'beauty', color: '#c97b6d', features: ['Прайс-аккордеон', 'Галерея работ', 'Запись к мастеру'] },
  { slug: 'psychologist', brand: 'Анна Светлова', niche: 'Психолог', cat: 'beauty', color: '#7d9a84', features: ['Выбор времени сессии', 'Подход', 'Стоимость'] },
  { slug: 'auto', brand: 'Мотор', niche: 'Автосервис', cat: 'services', color: '#ffc400', features: ['Калькулятор ремонта', 'Услуги', 'Гарантия'] },
  { slug: 'law', brand: 'Право и Ко', niche: 'Юридическая компания', cat: 'services', color: '#b8955a', features: ['Практики и цены', 'Кейсы', 'Консультация'] },
  { slug: 'realty', brand: 'Квартал', niche: 'Недвижимость', cat: 'services', color: '#2f5bff', features: ['Каталог с фильтрами', 'Ипотечный калькулятор', 'Подбор'] },
  { slug: 'build', brand: 'Каркас', niche: 'Строительство домов', cat: 'services', color: '#b5763c', features: ['Каталог проектов', 'Калькулятор дома', 'Этапы'] },
  { slug: 'sushi', brand: 'Сакура Экспресс', niche: 'Доставка еды', cat: 'food', color: '#e63946', features: ['Меню по категориям', 'Рабочая корзина', 'Расчёт доставки'] },
  { slug: 'english', brand: 'Speakly', niche: 'Онлайн-школа', cat: 'edu', color: '#6c4cf5', features: ['Тест уровня', 'Тарифы', 'Пробный урок'] },
  { slug: 'coffee', brand: 'Зерно', niche: 'Кофейня и пекарня', cat: 'food', color: '#c98a4b', features: ['Меню с размерами', 'Заказ навынос ко времени', 'Карта лояльности'] },
  { slug: 'vet', brand: 'Лапа', niche: 'Ветклиника', cat: 'beauty', color: '#12a594', features: ['Услуги по видам питомцев', 'Календарь прививок', 'Запись'] },
  { slug: 'wedding', brand: 'Вера Лис', niche: 'Свадебный фотограф', cat: 'services', color: '#b0895a', features: ['Портфолио с просмотром', 'Пакеты', 'Календарь свободных дат'] },
  { slug: 'cleaning', brand: 'Чисто', niche: 'Клининг', cat: 'services', color: '#2f6bff', features: ['Калькулятор уборки', 'Чек-листы по зонам', 'Заявка'] },
  { slug: 'travel', brand: 'Горизонт', niche: 'Турагентство', cat: 'travel', color: '#ff8a3d', features: ['Туры с фильтрами', 'Горящий тур с таймером', 'Подбор тура'] },
];
