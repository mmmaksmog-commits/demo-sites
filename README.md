# 🏪 Демо-сайты для бизнеса

**16 готовых сайтов для популярных ниш. Это не макеты, а рабочие страницы с калькуляторами, корзиной, записью и фильтрами, адаптированные под телефон.**

### ▶️ [Смотреть демо-сайты](https://mysik-portfolio.vercel.app/demo-sites/)

| Ниша | Демо | Что внутри |
|---|---|---|
| Барбершоп | [BLADE](https://mysik-portfolio.vercel.app/demo-sites/sites/barber.html) | Прайс, мастера, онлайн-запись |
| Стоматология | [Улыбка+](https://mysik-portfolio.vercel.app/demo-sites/sites/dental.html) | Цены по вкладкам, врачи, рассрочка |
| Фитнес-клуб | [PULSE](https://mysik-portfolio.vercel.app/demo-sites/sites/fitness.html) | Расписание с записью, абонементы |
| Салон красоты | [Lumière](https://mysik-portfolio.vercel.app/demo-sites/sites/beauty.html) | Прайс-аккордеон, галерея работ |
| Психолог | [Анна Светлова](https://mysik-portfolio.vercel.app/demo-sites/sites/psychologist.html) | Выбор дня и времени сессии |
| Автосервис | [Мотор](https://mysik-portfolio.vercel.app/demo-sites/sites/auto.html) | Калькулятор стоимости ремонта |
| Юридическая компания | [Право и Ко](https://mysik-portfolio.vercel.app/demo-sites/sites/law.html) | Практики, кейсы, консультация |
| Недвижимость | [Квартал](https://mysik-portfolio.vercel.app/demo-sites/sites/realty.html) | Каталог с фильтрами, ипотечный калькулятор |
| Строительство домов | [Каркас](https://mysik-portfolio.vercel.app/demo-sites/sites/build.html) | Каталог проектов, калькулятор дома |
| Доставка еды | [Сакура Экспресс](https://mysik-portfolio.vercel.app/demo-sites/sites/sushi.html) | Меню, корзина, расчёт доставки |
| Онлайн-школа | [Speakly](https://mysik-portfolio.vercel.app/demo-sites/sites/english.html) | Интерактивный тест уровня |
| Турагентство | [Горизонт](https://mysik-portfolio.vercel.app/demo-sites/sites/travel.html) | Туры с фильтрами, таймер горящего тура |
| Кофейня и пекарня | [Зерно](https://mysik-portfolio.vercel.app/demo-sites/sites/coffee.html) | Меню с размерами, заказ навынос, карта лояльности |
| Ветклиника | [Лапа](https://mysik-portfolio.vercel.app/demo-sites/sites/vet.html) | Услуги по видам питомцев, календарь прививок |
| Свадебный фотограф | [Вера Лис](https://mysik-portfolio.vercel.app/demo-sites/sites/wedding.html) | Портфолио с лайтбоксом, календарь свободных дат |
| Клининг | [Чисто](https://mysik-portfolio.vercel.app/demo-sites/sites/cleaning.html) | Калькулятор уборки, чек-листы по зонам |

Все компании вымышлены. Фото взяты со [StockSnap](https://stocksnap.io) (лицензия CC0).

## Устройство

```
index.html        # витрина: живые превью, фильтр по нишам, режимы «ПК / телефон»
js/data.js        # каталог демо-сайтов
sites/*.html      # сами сайты: каждый — один файл со своим дизайном
sites/kit.css/js  # общее: плашка «назад», мобильное меню, демо-формы, анимации
```

Формы на демо-сайтах ничего не отправляют: они показывают, как будет выглядеть заявка на настоящем сайте.

## Как добавить сайт

1. Положи страницу в `sites/` и подключи `kit.css` и `kit.js`.
2. Добавь объект в `js/data.js`.
