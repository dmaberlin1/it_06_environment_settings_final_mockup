# Webpack-config
______
## Привет! 
Это конфиг webpack для верстки.  
Стабильно работает на Node v16.15.0 \
Для установки, просто склонируй репозиторий к себе и пропиши npm install  
Точка входа ./src/js/main.js  
Папка билда ./app  
Скрипты:  
**npm start** - запуск лайв сервера. Если что-то не работает в данном режиме - значит и в билде будут ошибки!  
**npm build** - продакшн версия билда  
**npm dev** - билд разработчика, без хешей, чтобы "посмотреть" как будет выглядеть конечный вариант  



## Блок 1.6: Настройки окружения + верстка финального макета

- [Что такое npm?](https://proglib.io/p/chto-takoe-npm-gayd-po-node-package-manager-dlya-nachinayushchih-2020-07-21)
- [Руководство Eslint + Prettier](https://ru.hexlet.io/blog/posts/rukovodstvo-eslint-prettier)
- [Webpack](https://www.youtube.com/watch?v=eSaF8NXeNsA&t=2s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD)

## Задание по верстке
### Верстка адаптивного макета

Нужно сверстать адаптивную страничку по макету из фигмы.

### Материалы

1) [Макет](https://www.figma.com/file/gLOg4fR4ptNWIZlxArhekj/%D0%98%D1%82%D0%BE%D0%B3%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0?node-id=0-2186&t=vLjPtegSHQ0DvqUX-4)
2) [Шрифт](https://webfonts.pro/base-web-fonts/sans-serif-grotesque/897-tt-lakes.html) (начертания TT Lakes Regular, TT Lakes Medium, TT Lakes Bold)
3) Цвета - см. в макете
4) Контентные тексты - можете использовать тексты из макета и/или "lorem ipsum"
5) Иконки и изображения - экспортируйте из фигмы

### Интерактив

1) Мобильное меню должно раскрываться при клике на кнопку "бургер" слева в шапке. На "планшете" меню закрывается или при нажатие на кнопку или при нажатии на "заблюренную" область.
   Само меню не должно дублироваться в коде - меняйте позиционированием.
2) При клике "Показать все" должен раскрываться более полный список (используйте те же логотипы/тексты)
3) Для слайдеров используем [этот модуль](https://swiperjs.com/). Не нужно делать, чтобы при ресайзе слайдер убирался/добавлялся - смотрим инициировать слайдер или нет в зависимости от начальной ширины экрана.
4) По клику на кнопку с трубкой открывается модалка "заказать звонок"
5) По клику на кнопку с сообщением открывается модалка "обратная связь"

### Требования

1) За основу берем простенькую сборку вебпака, которая лежит в папке "final-round"
2) Поддержка браузеров - последние версии Safari, Chrome, Firefox
3) Без использования css фреймворков, без jQuery
4) Между указанными на макете разрешениями (320, 768, 1440) все должно адекватно выглядеть и ничего не должно ломаться. На больших разрешениях центрируем страницу. Выбор, как именно будут располагаться блоки за вами. Учтите, что десктопы начинаются в наши дни начинаются с 1366px в ширину (бюджетные ноуты).
5) Все стили должны быть по БЭМ. Стиль именования - two dashes: `block-name__elem-name--mod-name--mod-val`
6) Используем SCSS, стили разносим по разным файлам (по логическим блокам), цвета выносим в переменные. Для стилизации элементов по БЭМ используем функционал вложенности.
7) Результат предоставить в виде репозитория на github и ссылки на github pages
8) В ветке master скомпилированных .css не должно быть, только исходники

Скрипты для запуска проекта и деплоя на Github Pages смотрим в репо сборки.
- На различный порядок и количество пунктов меню не обращайте внимание - меню на всех разрешениях должно быть одинаковым. По непонятным моментам в макете - обращайтесь к однокурсникам или ментору.

#### Доп материалы:
- [SCSS + БЭМ](https://nicothin.pro/idiomatic-pre-CSS/)

#### Инструменты:
- [SCSS](https://sass-scss.ru/guide/) - нас интересует вложенность правил, импорты, переменные
- autoprefixer
- [normalize.css](https://htmlacademy.ru/blog/useful/css/about-normalize-css)
- editorconfig

#### На что смотрим в верстке:
- Правильный БЭМ нейминг
- Корректное использование тегов
- Корректное отображение на всех разрешениях от 320px до 1920px
- Нормально подключенные шрифты
- Коррекная работа интерактива
- Использование возможностей SCSS в сочетании с БЭМ
- Плавные анимации, ховеры на кликабельных элементах
- Отсутствие ошибок в консоли

#### Темы для ревью:
- npm
- babel
- source maps
- dependencies
- lock файл
- npm scripts
