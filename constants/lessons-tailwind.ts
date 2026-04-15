import { Lesson } from './lessons-types';

export const tailwindLessons: Lesson[] = [
    {
        id: 'tw-intro', day: 61, level: 1, xp: 40, duration: '12 min', kind: 'tailwind',
        titleRu: 'Что такое Tailwind CSS', titleEn: 'What is Tailwind CSS',
        subtitleRu: 'Utility-first CSS, классы, концепция', subtitleEn: 'Utility-first CSS, classes, concept',
        difficultyRu: 'Начинающий', difficultyEn: 'Beginner',
        descriptionRu: 'Зачем Tailwind, чем отличается от обычного CSS и как работает.', descriptionEn: 'Why Tailwind, how it differs from regular CSS, and how it works.',
        theory: [
            { id: 'tw-intro-d1', titleRu: 'Utility-first подход', titleEn: 'Utility-first approach', bodyRu: 'Tailwind CSS — это utility-first фреймворк: вместо написания CSS-классов ты комбинируешь готовые маленькие утилиты прямо в HTML. Каждый класс делает одну вещь: p-4 добавляет padding, text-blue-500 задаёт цвет, rounded-lg закругляет углы. Не нужно придумывать имена классов.', bodyEn: 'Tailwind CSS is a utility-first framework: instead of writing CSS classes you combine small ready-made utilities right in HTML. Each class does one thing: p-4 adds padding, text-blue-500 sets color, rounded-lg rounds corners. No need to invent class names.',
                exampleRu: `<!-- Обычный CSS -->
<style>
  .card {
    background-color: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .card-title {
    font-size: 20px;
    font-weight: bold;
    color: #1a1a2e;
  }
</style>
<div class="card">
  <h2 class="card-title">Заголовок</h2>
</div>

<!-- Tailwind CSS — то же самое -->
<div class="bg-white rounded-xl p-6 shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Заголовок</h2>
</div>

<!-- Установка -->
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
                exampleEn: `<!-- Regular CSS -->
<style>
  .card {
    background-color: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  .card-title {
    font-size: 20px;
    font-weight: bold;
    color: #1a1a2e;
  }
</style>
<div class="card">
  <h2 class="card-title">Title</h2>
</div>

<!-- Tailwind CSS — same thing -->
<div class="bg-white rounded-xl p-6 shadow-md">
  <h2 class="text-xl font-bold text-gray-900">Title</h2>
</div>

<!-- Installation -->
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p` },
        ],
        tasks: [
            { id: 'tw-intro-t1', type: 'theory', promptRu: 'Чем utility-first отличается от BEM?', promptEn: 'How does utility-first differ from BEM?', answerRu: 'В utility-first каждый класс — одно свойство. В BEM создаются семантические блоки с кастомными стилями.', answerEn: 'In utility-first each class is one property. In BEM you create semantic blocks with custom styles.', placeholderRu: 'Опиши разницу', placeholderEn: 'Describe the difference', validation: { mode: 'includesAny', keywords: ['класс', 'class', 'свойств', 'property', 'семантич', 'semantic'] } },
            { id: 'tw-intro-t2', type: 'code', promptRu: 'Стилизуй div: белый фон, padding 6, скруглённые углы, тень.', promptEn: 'Style a div: white background, padding 6, rounded corners, shadow.', answerRu: '<div class="bg-white p-6 rounded-xl shadow-md">', answerEn: '<div class="bg-white p-6 rounded-xl shadow-md">', starterCode: `<div class="">\n  Контент\n</div>`, validation: { mode: 'includesAll', keywords: ['bg-white', 'p-6', 'rounded', 'shadow'] } },
        ],
    },
    {
        id: 'tw-spacing-colors', day: 62, level: 1, xp: 50, duration: '14 min', kind: 'tailwind',
        titleRu: 'Отступы, размеры и цвета', titleEn: 'Spacing, Sizing, and Colors',
        subtitleRu: 'p, m, w, h, text, bg, border', subtitleEn: 'p, m, w, h, text, bg, border',
        difficultyRu: 'Начинающий', difficultyEn: 'Beginner',
        descriptionRu: 'Система отступов, размеров и цветовая палитра Tailwind.', descriptionEn: 'Tailwind spacing system, sizing, and color palette.',
        theory: [
            { id: 'tw-sc-d1', titleRu: 'Система отступов', titleEn: 'Spacing system', bodyRu: 'Tailwind использует шкалу от 0 до 96, где каждая единица = 4px. p-4 = 16px padding, m-8 = 32px margin. Можно задавать отдельные стороны: pt (top), pb (bottom), px (left+right), py (top+bottom). Цвета имеют шкалу 50-950: blue-500, gray-100.', bodyEn: 'Tailwind uses a scale from 0 to 96, where each unit = 4px. p-4 = 16px padding, m-8 = 32px margin. You can target sides: pt (top), pb (bottom), px (left+right), py (top+bottom). Colors have a scale from 50-950: blue-500, gray-100.',
                exampleRu: `<!-- Отступы -->
<div class="p-4">padding: 16px со всех сторон</div>
<div class="px-6 py-3">padding: 24px по X, 12px по Y</div>
<div class="mt-8 mb-4">margin-top: 32px, margin-bottom: 16px</div>
<div class="mx-auto">центрирование по горизонтали</div>

<!-- Размеры -->
<div class="w-full">ширина 100%</div>
<div class="w-64">ширина 256px</div>
<div class="h-screen">высота экрана</div>
<div class="max-w-md">max-width: 448px</div>
<div class="min-h-screen">минимум на весь экран</div>

<!-- Цвета -->
<p class="text-blue-600">Синий текст</p>
<div class="bg-gray-100">Серый фон</div>
<div class="border border-red-300">Красная рамка</div>
<p class="text-emerald-500">Изумрудный текст</p>`,
                exampleEn: `<!-- Spacing -->
<div class="p-4">padding: 16px on all sides</div>
<div class="px-6 py-3">padding: 24px X, 12px Y</div>
<div class="mt-8 mb-4">margin-top: 32px, margin-bottom: 16px</div>
<div class="mx-auto">horizontal centering</div>

<!-- Sizing -->
<div class="w-full">width: 100%</div>
<div class="w-64">width: 256px</div>
<div class="h-screen">screen height</div>
<div class="max-w-md">max-width: 448px</div>
<div class="min-h-screen">at least full screen</div>

<!-- Colors -->
<p class="text-blue-600">Blue text</p>
<div class="bg-gray-100">Gray background</div>
<div class="border border-red-300">Red border</div>
<p class="text-emerald-500">Emerald text</p>` },
        ],
        tasks: [
            { id: 'tw-sc-t1', type: 'code', promptRu: 'Задай div: px-6, py-4, mt-8, bg-gray-100.', promptEn: 'Set a div: px-6, py-4, mt-8, bg-gray-100.', answerRu: '<div class="px-6 py-4 mt-8 bg-gray-100">', answerEn: '<div class="px-6 py-4 mt-8 bg-gray-100">', starterCode: `<div class="">\n</div>`, validation: { mode: 'includesAll', keywords: ['px-6', 'py-4', 'mt-8', 'bg-gray'] } },
            { id: 'tw-sc-t2', type: 'theory', promptRu: 'Сколько пикселей в p-4?', promptEn: 'How many pixels is p-4?', answerRu: '16px (4 × 4px).', answerEn: '16px (4 × 4px).', placeholderRu: 'Посчитай', placeholderEn: 'Calculate', validation: { mode: 'includesAny', keywords: ['16', '4px'] } },
        ],
    },
    {
        id: 'tw-flexbox-grid', day: 63, level: 2, xp: 60, duration: '18 min', kind: 'tailwind',
        titleRu: 'Flexbox и Grid', titleEn: 'Flexbox and Grid',
        subtitleRu: 'flex, grid, gap, justify, align', subtitleEn: 'flex, grid, gap, justify, align',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Расположение элементов через Flex и Grid утилиты.', descriptionEn: 'Positioning elements with Flex and Grid utilities.',
        theory: [
            { id: 'tw-fg-d1', titleRu: 'Flexbox в Tailwind', titleEn: 'Flexbox in Tailwind', bodyRu: 'flex включает flexbox. flex-row/flex-col задают направление. justify-between/center выравнивают по главной оси. items-center — по поперечной. gap-4 добавляет промежутки. Grid: grid, grid-cols-3, col-span-2.', bodyEn: 'flex enables flexbox. flex-row/flex-col set direction. justify-between/center align on main axis. items-center on cross axis. gap-4 adds gaps. Grid: grid, grid-cols-3, col-span-2.',
                exampleRu: `<!-- Flex навбар -->
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <span class="text-xl font-bold">Logo</span>
  <div class="flex items-center gap-4">
    <a href="#" class="text-gray-600 hover:text-blue-600">Главная</a>
    <a href="#" class="text-gray-600 hover:text-blue-600">О нас</a>
    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Войти</button>
  </div>
</nav>

<!-- Grid карточки -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div class="bg-white rounded-xl p-6 shadow-sm">Карточка 1</div>
  <div class="bg-white rounded-xl p-6 shadow-sm">Карточка 2</div>
  <div class="bg-white rounded-xl p-6 shadow-sm">Карточка 3</div>
</div>

<!-- Flex колонка с gap -->
<div class="flex flex-col gap-3">
  <input class="border rounded-lg p-3" placeholder="Email" />
  <input class="border rounded-lg p-3" type="password" placeholder="Пароль" />
  <button class="bg-blue-600 text-white rounded-lg p-3">Войти</button>
</div>`,
                exampleEn: `<!-- Flex navbar -->
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <span class="text-xl font-bold">Logo</span>
  <div class="flex items-center gap-4">
    <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
    <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign In</button>
  </div>
</nav>

<!-- Grid cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div class="bg-white rounded-xl p-6 shadow-sm">Card 1</div>
  <div class="bg-white rounded-xl p-6 shadow-sm">Card 2</div>
  <div class="bg-white rounded-xl p-6 shadow-sm">Card 3</div>
</div>

<!-- Flex column with gap -->
<div class="flex flex-col gap-3">
  <input class="border rounded-lg p-3" placeholder="Email" />
  <input class="border rounded-lg p-3" type="password" placeholder="Password" />
  <button class="bg-blue-600 text-white rounded-lg p-3">Sign In</button>
</div>` },
        ],
        tasks: [
            { id: 'tw-fg-t1', type: 'code', promptRu: 'Создай flex контейнер: items-center, justify-between, gap-4.', promptEn: 'Create a flex container: items-center, justify-between, gap-4.', answerRu: '<div class="flex items-center justify-between gap-4">', answerEn: '<div class="flex items-center justify-between gap-4">', starterCode: `<div class="">\n</div>`, validation: { mode: 'includesAll', keywords: ['flex', 'items-center', 'justify-between', 'gap'] } },
            { id: 'tw-fg-t2', type: 'code', promptRu: 'Создай grid из 3 колонок с gap-6.', promptEn: 'Create a 3-column grid with gap-6.', answerRu: '<div class="grid grid-cols-3 gap-6">', answerEn: '<div class="grid grid-cols-3 gap-6">', starterCode: `<div class="">\n</div>`, validation: { mode: 'includesAll', keywords: ['grid', 'grid-cols-3', 'gap-6'] } },
        ],
    },
    {
        id: 'tw-responsive', day: 64, level: 2, xp: 55, duration: '16 min', kind: 'tailwind',
        titleRu: 'Адаптивность', titleEn: 'Responsive Design',
        subtitleRu: 'sm, md, lg, xl, mobile-first', subtitleEn: 'sm, md, lg, xl, mobile-first',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Адаптивный дизайн с breakpoint-префиксами.', descriptionEn: 'Responsive design with breakpoint prefixes.',
        theory: [
            { id: 'tw-resp-d1', titleRu: 'Mobile-first breakpoints', titleEn: 'Mobile-first breakpoints', bodyRu: 'Tailwind — mobile-first: стили без префикса работают на всех экранах. sm: (640px), md: (768px), lg: (1024px), xl: (1280px) — стили применяются от этого размера и выше. Пиши сначала мобильные стили, потом расширяй.', bodyEn: 'Tailwind is mobile-first: styles without prefixes apply to all screens. sm: (640px), md: (768px), lg: (1024px), xl: (1280px) — styles apply from that size and up. Write mobile styles first, then expand.',
                exampleRu: `<!-- Адаптивные колонки -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-white p-4 rounded-lg">1</div>
  <div class="bg-white p-4 rounded-lg">2</div>
  <div class="bg-white p-4 rounded-lg">3</div>
  <div class="bg-white p-4 rounded-lg">4</div>
</div>

<!-- Адаптивный текст -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Заголовок
</h1>

<!-- Скрыть/показать -->
<div class="hidden md:block">Видно только на md+</div>
<div class="md:hidden">Видно только на mobile</div>

<!-- Адаптивные padding -->
<section class="px-4 sm:px-8 lg:px-16">
  Контент с растущими отступами
</section>`,
                exampleEn: `<!-- Responsive columns -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-white p-4 rounded-lg">1</div>
  <div class="bg-white p-4 rounded-lg">2</div>
  <div class="bg-white p-4 rounded-lg">3</div>
  <div class="bg-white p-4 rounded-lg">4</div>
</div>

<!-- Responsive text -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Heading
</h1>

<!-- Show/hide -->
<div class="hidden md:block">Only visible on md+</div>
<div class="md:hidden">Only visible on mobile</div>

<!-- Responsive padding -->
<section class="px-4 sm:px-8 lg:px-16">
  Content with growing padding
</section>` },
        ],
        tasks: [
            { id: 'tw-resp-t1', type: 'code', promptRu: 'Сделай grid: 1 колонка на mobile, 2 на sm, 3 на lg.', promptEn: 'Make a grid: 1 column on mobile, 2 on sm, 3 on lg.', answerRu: '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">', answerEn: '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">', starterCode: `<div class="">\n</div>`, validation: { mode: 'includesAll', keywords: ['grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-3'] } },
            { id: 'tw-resp-t2', type: 'theory', promptRu: 'Что означает mobile-first?', promptEn: 'What does mobile-first mean?', answerRu: 'Стили без префикса применяются к мобильным, а sm:, md:, lg: расширяют для больших экранов.', answerEn: 'Styles without prefix apply to mobile, and sm:, md:, lg: extend for larger screens.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['мобильн', 'mobile', 'расширя', 'extend', 'больш', 'larger'] } },
        ],
    },
    {
        id: 'tw-hover-states', day: 65, level: 2, xp: 50, duration: '14 min', kind: 'tailwind',
        titleRu: 'Hover, focus и состояния', titleEn: 'Hover, Focus, and States',
        subtitleRu: 'hover:, focus:, active:, group-hover:', subtitleEn: 'hover:, focus:, active:, group-hover:',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Стили для интерактивных состояний элементов.', descriptionEn: 'Styles for interactive element states.',
        theory: [
            { id: 'tw-hs-d1', titleRu: 'Префиксы состояний', titleEn: 'State prefixes', bodyRu: 'hover: применяется при наведении, focus: при фокусе, active: при нажатии. Можно комбинировать: md:hover:bg-blue-700. group-hover: позволяет стилизовать дочерний элемент при наведении на родителя.', bodyEn: 'hover: applies on hover, focus: on focus, active: on click. Can combine: md:hover:bg-blue-700. group-hover: lets you style a child on parent hover.',
                exampleRu: `<!-- Кнопка с hover и active -->
<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800
  text-white px-6 py-3 rounded-lg font-semibold
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Нажми
</button>

<!-- Input с focus -->
<input class="w-full p-3 border border-gray-300 rounded-lg
  focus:border-blue-500 focus:ring-2 focus:ring-blue-200
  transition-all duration-200"
  placeholder="Введи текст" />

<!-- Group hover -->
<div class="group p-4 bg-white rounded-xl hover:bg-blue-50 transition cursor-pointer">
  <h3 class="font-bold group-hover:text-blue-600 transition">Заголовок</h3>
  <p class="text-gray-500 group-hover:text-gray-700 transition">Описание</p>
</div>`,
                exampleEn: `<!-- Button with hover and active -->
<button class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800
  text-white px-6 py-3 rounded-lg font-semibold
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Click me
</button>

<!-- Input with focus -->
<input class="w-full p-3 border border-gray-300 rounded-lg
  focus:border-blue-500 focus:ring-2 focus:ring-blue-200
  transition-all duration-200"
  placeholder="Type here" />

<!-- Group hover -->
<div class="group p-4 bg-white rounded-xl hover:bg-blue-50 transition cursor-pointer">
  <h3 class="font-bold group-hover:text-blue-600 transition">Title</h3>
  <p class="text-gray-500 group-hover:text-gray-700 transition">Description</p>
</div>` },
        ],
        tasks: [
            { id: 'tw-hs-t1', type: 'code', promptRu: 'Создай кнопку с hover:bg-blue-700 и focus:ring-2.', promptEn: 'Create a button with hover:bg-blue-700 and focus:ring-2.', answerRu: '<button class="bg-blue-600 hover:bg-blue-700 focus:ring-2 text-white px-4 py-2 rounded">', answerEn: '<button class="bg-blue-600 hover:bg-blue-700 focus:ring-2 text-white px-4 py-2 rounded">', starterCode: `<button class="">\n  Кнопка\n</button>`, validation: { mode: 'includesAll', keywords: ['hover:bg-blue', 'focus:ring'] } },
            { id: 'tw-hs-t2', type: 'theory', promptRu: 'Что делает group-hover?', promptEn: 'What does group-hover do?', answerRu: 'Позволяет стилизовать дочерний элемент, когда пользователь наводит на родителя с классом group.', answerEn: 'Lets you style a child element when the user hovers over the parent with the group class.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['дочерн', 'child', 'родител', 'parent', 'group'] } },
        ],
    },
    {
        id: 'tw-typography', day: 66, level: 3, xp: 55, duration: '14 min', kind: 'tailwind',
        titleRu: 'Типографика и эффекты', titleEn: 'Typography and Effects',
        subtitleRu: 'font, text, shadow, opacity, transition', subtitleEn: 'font, text, shadow, opacity, transition',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Шрифты, тени, прозрачность и анимации переходов.', descriptionEn: 'Fonts, shadows, opacity, and transition animations.',
        theory: [
            { id: 'tw-typo-d1', titleRu: 'Типографика', titleEn: 'Typography', bodyRu: 'text-sm/base/lg/xl/2xl и дальше для размера. font-light/normal/semibold/bold/extrabold для жирности. leading-tight/normal/relaxed для межстрочного. tracking-tight/wide для межбуквенного. shadow-sm/md/lg/xl для теней.', bodyEn: 'text-sm/base/lg/xl/2xl and up for size. font-light/normal/semibold/bold/extrabold for weight. leading-tight/normal/relaxed for line height. tracking-tight/wide for letter spacing. shadow-sm/md/lg/xl for shadows.',
                exampleRu: `<!-- Типографика -->
<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
  Большой заголовок
</h1>
<p class="text-lg text-gray-600 leading-relaxed mt-4">
  Описание с увеличенным межстрочным интервалом для комфортного чтения.
</p>

<!-- Тени и эффекты -->
<div class="shadow-lg rounded-2xl p-6 bg-white">Тень</div>
<div class="shadow-2xl rounded-2xl p-6 bg-white">Большая тень</div>

<!-- Прозрачность -->
<div class="opacity-50">Полупрозрачный</div>
<div class="bg-black/30">Чёрный с 30% opacity</div>

<!-- Переходы -->
<button class="bg-blue-600 hover:bg-blue-700
  transform hover:scale-105 hover:-translate-y-1
  transition-all duration-300 ease-out
  text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl">
  Анимированная кнопка
</button>`,
                exampleEn: `<!-- Typography -->
<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
  Big Heading
</h1>
<p class="text-lg text-gray-600 leading-relaxed mt-4">
  Description with relaxed line height for comfortable reading.
</p>

<!-- Shadows and effects -->
<div class="shadow-lg rounded-2xl p-6 bg-white">Shadow</div>
<div class="shadow-2xl rounded-2xl p-6 bg-white">Big shadow</div>

<!-- Opacity -->
<div class="opacity-50">Half transparent</div>
<div class="bg-black/30">Black with 30% opacity</div>

<!-- Transitions -->
<button class="bg-blue-600 hover:bg-blue-700
  transform hover:scale-105 hover:-translate-y-1
  transition-all duration-300 ease-out
  text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl">
  Animated Button
</button>` },
        ],
        tasks: [
            { id: 'tw-typo-t1', type: 'code', promptRu: 'Создай h1: text-4xl, font-bold, tracking-tight.', promptEn: 'Create an h1: text-4xl, font-bold, tracking-tight.', answerRu: '<h1 class="text-4xl font-bold tracking-tight">Заголовок</h1>', answerEn: '<h1 class="text-4xl font-bold tracking-tight">Heading</h1>', starterCode: `<h1 class="">\n  Заголовок\n</h1>`, validation: { mode: 'includesAll', keywords: ['text-4xl', 'font-bold', 'tracking-tight'] } },
            { id: 'tw-typo-t2', type: 'code', promptRu: 'Добавь transition и hover:scale-105 к кнопке.', promptEn: 'Add transition and hover:scale-105 to a button.', answerRu: '<button class="transition hover:scale-105 bg-blue-600 text-white px-4 py-2 rounded">', answerEn: '<button class="transition hover:scale-105 bg-blue-600 text-white px-4 py-2 rounded">', starterCode: `<button class="bg-blue-600 text-white px-4 py-2 rounded">\n</button>`, validation: { mode: 'includesAll', keywords: ['transition', 'hover:scale'] } },
        ],
    },
    {
        id: 'tw-dark-mode', day: 67, level: 3, xp: 60, duration: '16 min', kind: 'tailwind',
        titleRu: 'Тёмная тема в Tailwind', titleEn: 'Dark Mode in Tailwind',
        subtitleRu: 'dark:, darkMode config, prefers-color-scheme', subtitleEn: 'dark:, darkMode config, prefers-color-scheme',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Как реализовать тёмную тему с dark: префиксом.', descriptionEn: 'How to implement dark mode with the dark: prefix.',
        theory: [
            { id: 'tw-dm-d1', titleRu: 'dark: префикс', titleEn: 'dark: prefix', bodyRu: 'Добавь dark: перед любым классом для стилей в тёмной теме. В tailwind.config.js задай darkMode: "class" (переключение через класс) или "media" (системные настройки). При class-mode добавь class="dark" к html.', bodyEn: 'Add dark: before any class for dark mode styles. In tailwind.config.js set darkMode: "class" (toggle via class) or "media" (system settings). With class-mode, add class="dark" to html.',
                exampleRu: `<!-- tailwind.config.js: darkMode: 'class' -->

<div class="bg-white dark:bg-gray-900 min-h-screen transition-colors">
  <h1 class="text-gray-900 dark:text-white text-3xl font-bold">
    Привет!
  </h1>
  <p class="text-gray-600 dark:text-gray-300">
    Этот текст адаптируется под тему.
  </p>

  <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mt-4
    border border-gray-200 dark:border-gray-700">
    <p class="text-gray-700 dark:text-gray-200">
      Карточка с тёмной темой
    </p>
  </div>

  <button class="bg-blue-600 hover:bg-blue-700
    dark:bg-blue-500 dark:hover:bg-blue-400
    text-white px-6 py-3 rounded-lg mt-4">
    Кнопка
  </button>
</div>`,
                exampleEn: `<!-- tailwind.config.js: darkMode: 'class' -->

<div class="bg-white dark:bg-gray-900 min-h-screen transition-colors">
  <h1 class="text-gray-900 dark:text-white text-3xl font-bold">
    Hello!
  </h1>
  <p class="text-gray-600 dark:text-gray-300">
    This text adapts to the theme.
  </p>

  <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mt-4
    border border-gray-200 dark:border-gray-700">
    <p class="text-gray-700 dark:text-gray-200">
      Card with dark theme
    </p>
  </div>

  <button class="bg-blue-600 hover:bg-blue-700
    dark:bg-blue-500 dark:hover:bg-blue-400
    text-white px-6 py-3 rounded-lg mt-4">
    Button
  </button>
</div>` },
        ],
        tasks: [
            { id: 'tw-dm-t1', type: 'code', promptRu: 'Добавь dark:bg-gray-900 и dark:text-white к div.', promptEn: 'Add dark:bg-gray-900 and dark:text-white to a div.', answerRu: '<div class="bg-white dark:bg-gray-900 text-black dark:text-white">', answerEn: '<div class="bg-white dark:bg-gray-900 text-black dark:text-white">', starterCode: `<div class="bg-white text-black">\n</div>`, validation: { mode: 'includesAll', keywords: ['dark:bg-gray', 'dark:text-white'] } },
            { id: 'tw-dm-t2', type: 'theory', promptRu: 'Чем darkMode: "class" отличается от "media"?', promptEn: 'How does darkMode: "class" differ from "media"?', answerRu: '"class" — переключение через JS (добавляешь class dark к html). "media" — автоматически по системным настройкам.', answerEn: '"class" — toggle via JS (add dark class to html). "media" — automatically follows system settings.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['js', 'систем', 'system', 'class', 'переключ', 'toggle'] } },
        ],
    },
    {
        id: 'tw-customization', day: 68, level: 3, xp: 65, duration: '18 min', kind: 'tailwind',
        titleRu: 'Кастомизация Tailwind', titleEn: 'Tailwind Customization',
        subtitleRu: 'tailwind.config.js, extend, custom colors', subtitleEn: 'tailwind.config.js, extend, custom colors',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Как добавить свои цвета, шрифты и значения в Tailwind.', descriptionEn: 'How to add custom colors, fonts, and values to Tailwind.',
        theory: [
            { id: 'tw-cust-d1', titleRu: 'tailwind.config.js — центр настройки', titleEn: 'tailwind.config.js — configuration center', bodyRu: 'В tailwind.config.js через theme.extend добавляешь свои значения, не теряя стандартные. Можно добавить цвета бренда, кастомные шрифты, spacing и breakpoints.', bodyEn: 'In tailwind.config.js via theme.extend you add custom values without losing defaults. You can add brand colors, custom fonts, spacing, and breakpoints.',
                exampleRu: `// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          900: '#1E3A5F',
        },
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

// Использование: bg-brand-500, text-accent, font-mono, rounded-4xl`,
                exampleEn: `// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          900: '#1E3A5F',
        },
        accent: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};

// Usage: bg-brand-500, text-accent, font-mono, rounded-4xl` },
        ],
        tasks: [
            { id: 'tw-cust-t1', type: 'code', promptRu: 'Добавь кастомный цвет brand-500: "#3B82F6" в extend.colors.', promptEn: 'Add a custom color brand-500: "#3B82F6" in extend.colors.', answerRu: 'extend: { colors: { brand: { 500: "#3B82F6" } } }', answerEn: 'extend: { colors: { brand: { 500: "#3B82F6" } } }', starterCode: `// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n    },\n  },\n};`, validation: { mode: 'includesAll', keywords: ['colors', 'brand', '3b82f6'] } },
            { id: 'tw-cust-t2', type: 'theory', promptRu: 'Почему extend, а не theme напрямую?', promptEn: 'Why extend instead of theme directly?', answerRu: 'extend добавляет новые значения, сохраняя стандартные. Без extend ты перезапишешь все дефолтные цвета/шрифты.', answerEn: 'extend adds new values while keeping defaults. Without extend you overwrite all default colors/fonts.', placeholderRu: 'Укажи про дефолтные', placeholderEn: 'Mention defaults', validation: { mode: 'includesAny', keywords: ['стандартн', 'дефолтн', 'default', 'сохран', 'keep', 'перезап', 'overwrite'] } },
        ],
    },
    {
        id: 'tw-components', day: 69, level: 4, xp: 70, duration: '20 min', kind: 'tailwind',
        titleRu: 'Компоненты на Tailwind', titleEn: 'Components with Tailwind',
        subtitleRu: '@apply, cn(), переиспользуемые классы', subtitleEn: '@apply, cn(), reusable classes',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Как создавать переиспользуемые компоненты и избежать дублирования.', descriptionEn: 'How to create reusable components and avoid duplication.',
        theory: [
            { id: 'tw-comp-d1', titleRu: 'React + Tailwind = компоненты', titleEn: 'React + Tailwind = components', bodyRu: 'Вместо @apply лучше использовать React-компоненты. clsx или cn() (из tailwind-merge) помогают условно комбинировать классы. Это основной паттерн для избежания дублирования длинных строк классов.', bodyEn: 'Instead of @apply, prefer React components. clsx or cn() (from tailwind-merge) help conditionally combine classes. This is the main pattern for avoiding duplication of long class strings.',
                exampleRu: `import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | false)[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

function Button({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-xl font-semibold transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-5 py-2.5 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        variant === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        variant === 'secondary' && 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400',
        variant === 'danger' && 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
      )}
    >
      {children}
    </button>
  );
}

// Использование
<Button variant="primary" size="lg">Сохранить</Button>
<Button variant="danger" size="sm">Удалить</Button>`,
                exampleEn: `import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | false)[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

function Button({ children, variant = 'primary', size = 'md', onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-xl font-semibold transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-5 py-2.5 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        variant === 'primary' && 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
        variant === 'secondary' && 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-400',
        variant === 'danger' && 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
      )}
    >
      {children}
    </button>
  );
}

// Usage
<Button variant="primary" size="lg">Save</Button>
<Button variant="danger" size="sm">Delete</Button>` },
        ],
        tasks: [
            { id: 'tw-comp-t1', type: 'code', promptRu: 'Создай компонент Button с вариантами primary/secondary через cn().', promptEn: 'Create a Button component with primary/secondary variants using cn().', answerRu: 'function Button({ variant, children }) { return <button className={cn("px-4 py-2 rounded", variant === "primary" && "bg-blue-600 text-white")}>{children}</button>; }', answerEn: 'function Button({ variant, children }) { return <button className={cn("px-4 py-2 rounded", variant === "primary" && "bg-blue-600 text-white")}>{children}</button>; }', starterCode: `// Создай компонент Button\n`, validation: { mode: 'includesAll', keywords: ['variant', 'primary', 'classname'] } },
            { id: 'tw-comp-t2', type: 'theory', promptRu: 'Зачем tailwind-merge?', promptEn: 'Why tailwind-merge?', answerRu: 'Для разрешения конфликтов классов: если есть p-4 и p-6, tailwind-merge оставит последний.', answerEn: 'To resolve class conflicts: if there is p-4 and p-6, tailwind-merge keeps the last one.', placeholderRu: 'Укажи про конфликты', placeholderEn: 'Mention conflicts', validation: { mode: 'includesAny', keywords: ['конфликт', 'conflict', 'последн', 'last', 'override', 'перезап'] } },
        ],
    },
    {
        id: 'tw-animations-plugins', day: 70, level: 4, xp: 75, duration: '20 min', kind: 'tailwind',
        titleRu: 'Анимации и плагины', titleEn: 'Animations and Plugins',
        subtitleRu: 'animate-, @tailwindcss/forms, @tailwindcss/typography', subtitleEn: 'animate-, @tailwindcss/forms, @tailwindcss/typography',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Встроенные анимации, кастомные keyframes и полезные плагины.', descriptionEn: 'Built-in animations, custom keyframes, and useful plugins.',
        theory: [
            { id: 'tw-anim-d1', titleRu: 'Встроенные анимации', titleEn: 'Built-in animations', bodyRu: 'Tailwind имеет 4 встроенные анимации: animate-spin (вращение), animate-ping (пульсация), animate-pulse (мерцание), animate-bounce (прыжок). Для своих анимаций используй keyframes и animation в config.', bodyEn: 'Tailwind has 4 built-in animations: animate-spin (rotate), animate-ping (pulse), animate-pulse (shimmer), animate-bounce (bounce). For custom animations use keyframes and animation in config.',
                exampleRu: `<!-- Встроенные анимации -->
<div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
<div class="animate-pulse bg-gray-300 h-4 rounded w-3/4"></div>
<div class="animate-bounce text-2xl">⬇️</div>

<!-- Кастомная анимация (из tailwind.config.js) -->
<div class="animate-fade-in">
  Появляюсь плавно!
</div>

<!-- Skeleton loader -->
<div class="space-y-4">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-gray-300 h-12 w-12"></div>
    <div class="flex-1 space-y-3 py-1">
      <div class="h-4 bg-gray-300 rounded w-3/4"></div>
      <div class="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
</div>

<!-- Плагины -->
// npm install @tailwindcss/forms @tailwindcss/typography
// tailwind.config.js:
// plugins: [
//   require('@tailwindcss/forms'),
//   require('@tailwindcss/typography'),
// ]

// @tailwindcss/typography — красивая типографика для контента
<article class="prose lg:prose-xl dark:prose-invert">
  <h1>Заголовок статьи</h1>
  <p>Текст с автоматическими стилями для блога.</p>
</article>`,
                exampleEn: `<!-- Built-in animations -->
<div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
<div class="animate-pulse bg-gray-300 h-4 rounded w-3/4"></div>
<div class="animate-bounce text-2xl">⬇️</div>

<!-- Custom animation (from tailwind.config.js) -->
<div class="animate-fade-in">
  Fading in smoothly!
</div>

<!-- Skeleton loader -->
<div class="space-y-4">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-gray-300 h-12 w-12"></div>
    <div class="flex-1 space-y-3 py-1">
      <div class="h-4 bg-gray-300 rounded w-3/4"></div>
      <div class="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
</div>

<!-- Plugins -->
// npm install @tailwindcss/forms @tailwindcss/typography
// tailwind.config.js:
// plugins: [
//   require('@tailwindcss/forms'),
//   require('@tailwindcss/typography'),
// ]

// @tailwindcss/typography — beautiful prose styles
<article class="prose lg:prose-xl dark:prose-invert">
  <h1>Article Title</h1>
  <p>Text with automatic blog styles.</p>
</article>` },
        ],
        tasks: [
            { id: 'tw-anim-t1', type: 'code', promptRu: 'Создай спиннер с animate-spin, border-4, rounded-full.', promptEn: 'Create a spinner with animate-spin, border-4, rounded-full.', answerRu: '<div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>', answerEn: '<div class="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>', starterCode: `<!-- Спиннер -->\n`, validation: { mode: 'includesAll', keywords: ['animate-spin', 'border', 'rounded-full'] } },
            { id: 'tw-anim-t2', type: 'code', promptRu: 'Создай skeleton loader с animate-pulse.', promptEn: 'Create a skeleton loader with animate-pulse.', answerRu: '<div class="animate-pulse bg-gray-300 h-4 rounded w-3/4"></div>', answerEn: '<div class="animate-pulse bg-gray-300 h-4 rounded w-3/4"></div>', starterCode: `<!-- Skeleton -->\n`, validation: { mode: 'includesAll', keywords: ['animate-pulse', 'bg-gray', 'rounded'] } },
            { id: 'tw-anim-t3', type: 'theory', promptRu: 'Что даёт @tailwindcss/typography?', promptEn: 'What does @tailwindcss/typography provide?', answerRu: 'Класс prose, который автоматически стилизует HTML-контент (заголовки, параграфы, списки) для блогов и документации.', answerEn: 'The prose class that automatically styles HTML content (headings, paragraphs, lists) for blogs and docs.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['prose', 'автоматич', 'automatic', 'стилиз', 'style', 'блог', 'blog'] } },
        ],
    },
];
