import { Lesson } from './lessons-types';

export const nextjsLessons: Lesson[] = [
    {
        id: 'next-intro',
        day: 31,
        level: 1,
        xp: 45,
        duration: '14 min',
        kind: 'nextjs',
        titleRu: 'Что такое Next.js',
        titleEn: 'What is Next.js',
        subtitleRu: 'Фреймворк поверх React, SSR, файловый роутинг',
        subtitleEn: 'Framework on top of React, SSR, file-based routing',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Зачем Next.js, чем он отличается от обычного React и какие проблемы решает.',
        descriptionEn: 'Why Next.js, how it differs from plain React, and what problems it solves.',
        theory: [
            {
                id: 'next-intro-d1',
                titleRu: 'Next.js — фреймворк для React',
                titleEn: 'Next.js — a React framework',
                bodyRu: 'Next.js — это фреймворк, построенный поверх React. Он добавляет серверный рендеринг (SSR), статическую генерацию (SSG), файловый роутинг и множество оптимизаций из коробки. Если React — это библиотека для UI, то Next.js — полноценный фреймворк для создания веб-приложений.',
                bodyEn: 'Next.js is a framework built on top of React. It adds server-side rendering (SSR), static site generation (SSG), file-based routing, and many optimizations out of the box. If React is a UI library, Next.js is a full framework for building web applications.',
                exampleRu: `// Создание проекта Next.js
npx create-next-app@latest my-app
cd my-app
npm run dev

// Структура проекта Next.js (App Router):
// app/
//   layout.tsx    — корневой layout
//   page.tsx      — главная страница "/"
//   about/
//     page.tsx    — страница "/about"
//   blog/
//     [slug]/
//       page.tsx  — динамическая страница "/blog/my-post"
// public/          — статические файлы
// next.config.js   — конфигурация`,
                exampleEn: `// Creating a Next.js project
npx create-next-app@latest my-app
cd my-app
npm run dev

// Next.js project structure (App Router):
// app/
//   layout.tsx    — root layout
//   page.tsx      — home page "/"
//   about/
//     page.tsx    — "/about" page
//   blog/
//     [slug]/
//       page.tsx  — dynamic page "/blog/my-post"
// public/          — static files
// next.config.js   — configuration`,
            },
            {
                id: 'next-intro-d2',
                titleRu: 'SSR vs CSR vs SSG',
                titleEn: 'SSR vs CSR vs SSG',
                bodyRu: 'CSR (Client-Side Rendering) — React по умолчанию: пустой HTML, всё рендерится в браузере. SSR (Server-Side Rendering) — HTML генерируется на сервере при каждом запросе. SSG (Static Site Generation) — HTML генерируется один раз при сборке. Next.js позволяет комбинировать все три подхода на уровне страниц.',
                bodyEn: 'CSR (Client-Side Rendering) — default React: empty HTML, everything renders in the browser. SSR (Server-Side Rendering) — HTML is generated on the server for each request. SSG (Static Site Generation) — HTML is generated once at build time. Next.js lets you combine all three approaches per page.',
                exampleRu: `// CSR (обычный React) — пользователь видит пустую страницу, потом контент
// <div id="root"></div> + bundle.js

// SSR (Next.js) — пользователь сразу видит HTML
// Сервер: рендерит React → отправляет готовый HTML
// Браузер: показывает HTML → гидратация (подключает JS)

// SSG — HTML создаётся при npm run build
// Самый быстрый вариант для статического контента

// В Next.js App Router:
// По умолчанию компоненты — серверные (Server Components)
// Для интерактивности добавляют "use client"`,
                exampleEn: `// CSR (plain React) — user sees empty page, then content
// <div id="root"></div> + bundle.js

// SSR (Next.js) — user immediately sees HTML
// Server: renders React → sends ready HTML
// Browser: shows HTML → hydration (attaches JS)

// SSG — HTML is created at npm run build
// Fastest option for static content

// In Next.js App Router:
// By default components are Server Components
// For interactivity add "use client"`,
            },
            {
                id: 'next-intro-d3',
                titleRu: 'Преимущества Next.js',
                titleEn: 'Next.js advantages',
                bodyRu: 'SEO — поисковики видят готовый HTML. Скорость — первый контент появляется быстрее. Файловый роутинг — не нужен react-router. API Routes — бэкенд в том же проекте. Image Optimization — автоматическая оптимизация изображений.',
                bodyEn: 'SEO — search engines see ready HTML. Speed — first content appears faster. File routing — no need for react-router. API Routes — backend in the same project. Image Optimization — automatic image optimization.',
                exampleRu: `// Файловый роутинг — каждый page.tsx = маршрут
// app/page.tsx           → /
// app/about/page.tsx     → /about
// app/blog/[id]/page.tsx → /blog/123

// API Routes — бэкенд в том же проекте
// app/api/users/route.ts → GET /api/users

// Оптимизация изображений
import Image from 'next/image';

function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Аватар"
      width={100}
      height={100}
      priority
    />
  );
}`,
                exampleEn: `// File-based routing — each page.tsx = a route
// app/page.tsx           → /
// app/about/page.tsx     → /about
// app/blog/[id]/page.tsx → /blog/123

// API Routes — backend in the same project
// app/api/users/route.ts → GET /api/users

// Image optimization
import Image from 'next/image';

function Avatar() {
  return (
    <Image
      src="/avatar.jpg"
      alt="Avatar"
      width={100}
      height={100}
      priority
    />
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'next-intro-t1',
                type: 'theory',
                promptRu: 'Чем Next.js отличается от обычного React?',
                promptEn: 'How does Next.js differ from plain React?',
                answerRu: 'Next.js добавляет SSR, SSG, файловый роутинг, API routes и оптимизации из коробки.',
                answerEn: 'Next.js adds SSR, SSG, file-based routing, API routes, and optimizations out of the box.',
                placeholderRu: 'Перечисли отличия',
                placeholderEn: 'List the differences',
                validation: { mode: 'includesAny', keywords: ['ssr', 'роутинг', 'routing', 'сервер', 'server'] },
            },
            {
                id: 'next-intro-t2',
                type: 'theory',
                promptRu: 'Что такое SSR и зачем он нужен?',
                promptEn: 'What is SSR and why is it needed?',
                answerRu: 'SSR — серверный рендеринг: HTML создаётся на сервере, что улучшает SEO и скорость загрузки.',
                answerEn: 'SSR — server-side rendering: HTML is created on the server, improving SEO and load speed.',
                placeholderRu: 'Опиши кратко',
                placeholderEn: 'Describe briefly',
                validation: { mode: 'includesAny', keywords: ['сервер', 'html', 'seo', 'server', 'render'] },
            },
            {
                id: 'next-intro-t3',
                type: 'challenge',
                promptRu: 'Когда SSG лучше SSR?',
                promptEn: 'When is SSG better than SSR?',
                answerRu: 'Когда контент не меняется часто — блоги, документация, маркетинговые страницы.',
                answerEn: 'When content does not change often — blogs, docs, marketing pages.',
                placeholderRu: 'Приведи пример',
                placeholderEn: 'Give an example',
                validation: { mode: 'includesAny', keywords: ['блог', 'статич', 'blog', 'static', 'документ', 'doc'] },
            },
        ],
    },
    {
        id: 'next-app-router',
        day: 32,
        level: 1,
        xp: 50,
        duration: '16 min',
        kind: 'nextjs',
        titleRu: 'App Router и layout',
        titleEn: 'App Router and Layout',
        subtitleRu: 'layout.tsx, page.tsx, loading.tsx, error.tsx',
        subtitleEn: 'layout.tsx, page.tsx, loading.tsx, error.tsx',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Файловая система App Router: layouts, вложенность, спецфайлы.',
        descriptionEn: 'App Router file system: layouts, nesting, special files.',
        theory: [
            {
                id: 'next-ar-d1',
                titleRu: 'layout.tsx — общая обёртка',
                titleEn: 'layout.tsx — shared wrapper',
                bodyRu: 'layout.tsx оборачивает все страницы в своей папке. Корневой layout в app/layout.tsx обязателен — он содержит <html> и <body>. Layouts не перемонтируются при навигации — состояние сохраняется.',
                bodyEn: 'layout.tsx wraps all pages in its folder. The root layout in app/layout.tsx is required — it contains <html> and <body>. Layouts do not remount on navigation — state is preserved.',
                exampleRu: `// app/layout.tsx — корневой layout
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мой сайт',
  description: 'Описание сайта',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header>Навигация</header>
        <main>{children}</main>
        <footer>Подвал</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx — layout для раздела
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>Боковое меню</aside>
      <section>{children}</section>
    </div>
  );
}`,
                exampleEn: `// app/layout.tsx — root layout
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Site',
  description: 'Site description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Navigation</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.tsx — section layout
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      <aside>Sidebar</aside>
      <section>{children}</section>
    </div>
  );
}`,
            },
            {
                id: 'next-ar-d2',
                titleRu: 'Специальные файлы',
                titleEn: 'Special files',
                bodyRu: 'loading.tsx показывается во время загрузки страницы. error.tsx ловит ошибки. not-found.tsx — кастомная 404 страница. Это встроенные UI-состояния Next.js.',
                bodyEn: 'loading.tsx is shown while the page loads. error.tsx catches errors. not-found.tsx — custom 404 page. These are built-in Next.js UI states.',
                exampleRu: `// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Загрузка...</div>;
}

// app/dashboard/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}

// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  );
}`,
                exampleEn: `// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading...</div>;
}

// app/dashboard/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'next-ar-t1',
                type: 'code',
                promptRu: 'Создай корневой layout.tsx с html, body и children.',
                promptEn: 'Create a root layout.tsx with html, body, and children.',
                answerRu: 'export default function RootLayout({ children }) { return <html><body>{children}</body></html>; }',
                answerEn: 'export default function RootLayout({ children }) { return <html><body>{children}</body></html>; }',
                starterCode: `export default function RootLayout() {
  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['children', 'html', 'body'] },
            },
            {
                id: 'next-ar-t2',
                type: 'code',
                promptRu: 'Создай loading.tsx для секции dashboard.',
                promptEn: 'Create a loading.tsx for the dashboard section.',
                answerRu: 'export default function Loading() { return <div>Загрузка...</div>; }',
                answerEn: 'export default function Loading() { return <div>Loading...</div>; }',
                starterCode: `// app/dashboard/loading.tsx
`,
                validation: { mode: 'includesAll', keywords: ['export', 'loading', 'return'] },
            },
            {
                id: 'next-ar-t3',
                type: 'theory',
                promptRu: 'Почему layout не перемонтируется при навигации?',
                promptEn: 'Why does a layout not remount on navigation?',
                answerRu: 'Для сохранения состояния и избежания лишних перерисовок — меняется только контент страницы.',
                answerEn: 'To preserve state and avoid unnecessary rerenders — only page content changes.',
                placeholderRu: 'Укажи про состояние',
                placeholderEn: 'Mention state',
                validation: { mode: 'includesAny', keywords: ['состоян', 'state', 'перерисов', 'rerender', 'preserve'] },
            },
        ],
    },
    {
        id: 'next-server-components',
        day: 33,
        level: 2,
        xp: 60,
        duration: '18 min',
        kind: 'nextjs',
        titleRu: 'Server и Client Components',
        titleEn: 'Server and Client Components',
        subtitleRu: '"use client", серверные компоненты, когда что',
        subtitleEn: '"use client", server components, when to use which',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Разница между серверными и клиентскими компонентами в Next.js.',
        descriptionEn: 'The difference between server and client components in Next.js.',
        theory: [
            {
                id: 'next-sc-d1',
                titleRu: 'Server Components по умолчанию',
                titleEn: 'Server Components by default',
                bodyRu: 'В App Router все компоненты по умолчанию серверные. Они рендерятся на сервере, не отправляют JS клиенту и могут напрямую обращаться к базе данных. Для интерактивности (useState, useEffect, onClick) нужна директива "use client".',
                bodyEn: 'In App Router, all components are server components by default. They render on the server, send no JS to the client, and can directly access databases. For interactivity (useState, useEffect, onClick) you need the "use client" directive.',
                exampleRu: `// Server Component (по умолчанию) — рендерится на сервере
// Может быть async, может обращаться к БД напрямую
async function UserList() {
  const users = await db.query('SELECT * FROM users');

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Client Component — рендерится в браузере
'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Клики: {count}
    </button>
  );
}`,
                exampleEn: `// Server Component (default) — renders on server
// Can be async, can access DB directly
async function UserList() {
  const users = await db.query('SELECT * FROM users');

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Client Component — renders in browser
'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
}`,
            },
            {
                id: 'next-sc-d2',
                titleRu: 'Когда что использовать',
                titleEn: 'When to use which',
                bodyRu: 'Server Component: отображение данных, работа с БД, доступ к секретам, тяжёлые зависимости. Client Component: формы, обработка событий, useState/useEffect, browser API.',
                bodyEn: 'Server Component: displaying data, DB access, secrets, heavy dependencies. Client Component: forms, event handlers, useState/useEffect, browser APIs.',
                exampleRu: `// Паттерн: серверный родитель + клиентский ребёнок

// app/page.tsx — Server Component
import { LikeButton } from './like-button';

async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <LikeButton postId={post.id} initialLikes={post.likes} />
    </article>
  );
}

// app/like-button.tsx — Client Component
'use client';

import { useState } from 'react';

export function LikeButton({ postId, initialLikes }: {
  postId: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button onClick={() => setLikes((p) => p + 1)}>
      ❤️ {likes}
    </button>
  );
}`,
                exampleEn: `// Pattern: server parent + client child

// app/page.tsx — Server Component
import { LikeButton } from './like-button';

async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <LikeButton postId={post.id} initialLikes={post.likes} />
    </article>
  );
}

// app/like-button.tsx — Client Component
'use client';

import { useState } from 'react';

export function LikeButton({ postId, initialLikes }: {
  postId: string;
  initialLikes: number;
}) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button onClick={() => setLikes((p) => p + 1)}>
      ❤️ {likes}
    </button>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'next-sc-t1',
                type: 'theory',
                promptRu: 'Когда нужен "use client"?',
                promptEn: 'When is "use client" needed?',
                answerRu: 'Когда компонент использует useState, useEffect, обработчики событий или browser API.',
                answerEn: 'When a component uses useState, useEffect, event handlers, or browser APIs.',
                placeholderRu: 'Перечисли случаи',
                placeholderEn: 'List the cases',
                validation: { mode: 'includesAny', keywords: ['usestate', 'useeffect', 'onclick', 'событ', 'event', 'browser'] },
            },
            {
                id: 'next-sc-t2',
                type: 'code',
                promptRu: 'Создай Client Component с "use client" и useState.',
                promptEn: 'Create a Client Component with "use client" and useState.',
                answerRu: "'use client'; import { useState } from 'react'; function Toggle() { const [on, setOn] = useState(false); }",
                answerEn: "'use client'; import { useState } from 'react'; function Toggle() { const [on, setOn] = useState(false); }",
                starterCode: `// Создай клиентский компонент Toggle
`,
                validation: { mode: 'includesAll', keywords: ['use client', 'usestate'] },
            },
            {
                id: 'next-sc-t3',
                type: 'challenge',
                promptRu: 'Почему не стоит делать все компоненты клиентскими?',
                promptEn: 'Why should you not make all components client components?',
                answerRu: 'Серверные компоненты не отправляют JS клиенту — меньше бандл, быстрее загрузка, лучше SEO.',
                answerEn: 'Server components send no JS to the client — smaller bundle, faster load, better SEO.',
                placeholderRu: 'Укажи про бандл и скорость',
                placeholderEn: 'Mention bundle and speed',
                validation: { mode: 'includesAny', keywords: ['бандл', 'bundle', 'скорос', 'speed', 'js', 'seo'] },
            },
        ],
    },
    {
        id: 'next-data-fetching',
        day: 34,
        level: 2,
        xp: 65,
        duration: '20 min',
        kind: 'nextjs',
        titleRu: 'Загрузка данных',
        titleEn: 'Data Fetching',
        subtitleRu: 'async компоненты, fetch, кэширование',
        subtitleEn: 'async components, fetch, caching',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Как загружать данные в Server Components и управлять кэшированием.',
        descriptionEn: 'How to fetch data in Server Components and manage caching.',
        theory: [
            {
                id: 'next-df-d1',
                titleRu: 'Async Server Components',
                titleEn: 'Async Server Components',
                bodyRu: 'Server Components могут быть async — просто пиши await прямо в компоненте. Не нужны useEffect или React Query на сервере.',
                bodyEn: 'Server Components can be async — just write await directly in the component. No useEffect or React Query needed on the server.',
                exampleRu: `// app/users/page.tsx — загрузка данных на сервере
interface User {
  id: number;
  name: string;
  email: string;
}

async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Пользователи</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;`,
                exampleEn: `// app/users/page.tsx — server-side data loading
interface User {
  id: number;
  name: string;
  email: string;
}

async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;`,
            },
            {
                id: 'next-df-d2',
                titleRu: 'Кэширование fetch',
                titleEn: 'Fetch caching',
                bodyRu: 'Next.js расширяет fetch опциями кэширования. По умолчанию результаты кэшируются. Можно указать revalidate для ISR или cache: "no-store" для динамических данных.',
                bodyEn: 'Next.js extends fetch with caching options. Results are cached by default. You can set revalidate for ISR or cache: "no-store" for dynamic data.',
                exampleRu: `// Кэшируется навсегда (по умолчанию)
const data = await fetch('https://api.example.com/data');

// Обновляется каждые 60 секунд (ISR)
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});

// Без кэша — свежие данные каждый запрос
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});

// Можно также пометить всю страницу
export const revalidate = 3600; // обновлять каждый час
export const dynamic = 'force-dynamic'; // всегда динамическая`,
                exampleEn: `// Cached forever (default)
const data = await fetch('https://api.example.com/data');

// Revalidates every 60 seconds (ISR)
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 },
});

// No cache — fresh data every request
const data = await fetch('https://api.example.com/data', {
  cache: 'no-store',
});

// You can also mark the entire page
export const revalidate = 3600; // revalidate every hour
export const dynamic = 'force-dynamic'; // always dynamic`,
            },
        ],
        tasks: [
            {
                id: 'next-df-t1',
                type: 'code',
                promptRu: 'Создай async Server Component, который загружает список постов.',
                promptEn: 'Create an async Server Component that fetches a list of posts.',
                answerRu: 'async function PostsPage() { const res = await fetch(...); const posts = await res.json(); return ...; }',
                answerEn: 'async function PostsPage() { const res = await fetch(...); const posts = await res.json(); return ...; }',
                starterCode: `// app/posts/page.tsx

export default async function PostsPage() {

}`,
                validation: { mode: 'includesAll', keywords: ['await', 'fetch', 'json'] },
            },
            {
                id: 'next-df-t2',
                type: 'code',
                promptRu: 'Добавь revalidate: 60 к fetch запросу.',
                promptEn: 'Add revalidate: 60 to a fetch request.',
                answerRu: "fetch(url, { next: { revalidate: 60 } })",
                answerEn: "fetch(url, { next: { revalidate: 60 } })",
                starterCode: `const data = await fetch('https://api.example.com/data');`,
                validation: { mode: 'includesAll', keywords: ['revalidate', '60'] },
            },
            {
                id: 'next-df-t3',
                type: 'theory',
                promptRu: 'Что такое ISR?',
                promptEn: 'What is ISR?',
                answerRu: 'Incremental Static Regeneration — страница обновляется через заданный интервал без пересборки.',
                answerEn: 'Incremental Static Regeneration — the page updates at a set interval without a full rebuild.',
                placeholderRu: 'Опиши кратко',
                placeholderEn: 'Describe briefly',
                validation: { mode: 'includesAny', keywords: ['incremental', 'обновля', 'update', 'интервал', 'interval', 'static'] },
            },
        ],
    },
    {
        id: 'next-routing-dynamic',
        day: 35,
        level: 2,
        xp: 55,
        duration: '16 min',
        kind: 'nextjs',
        titleRu: 'Динамический роутинг',
        titleEn: 'Dynamic Routing',
        subtitleRu: '[slug], группы маршрутов, параллельные роуты',
        subtitleEn: '[slug], route groups, parallel routes',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Динамические сегменты, группировка маршрутов и catch-all роуты.',
        descriptionEn: 'Dynamic segments, route groups, and catch-all routes.',
        theory: [
            {
                id: 'next-rd-d1',
                titleRu: 'Динамические сегменты',
                titleEn: 'Dynamic segments',
                bodyRu: 'Файл [slug].tsx или [id]/page.tsx создаёт динамический маршрут. Параметр доступен через props.params. Для catch-all используй [...slug], для optional catch-all — [[...slug]].',
                bodyEn: 'A file [slug].tsx or [id]/page.tsx creates a dynamic route. The parameter is available via props.params. Use [...slug] for catch-all, [[...slug]] for optional catch-all.',
                exampleRu: `// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// Генерация статических путей
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// app/docs/[...slug]/page.tsx — catch-all
// /docs/getting-started → params.slug = ['getting-started']
// /docs/api/auth       → params.slug = ['api', 'auth']`,
                exampleEn: `// app/blog/[slug]/page.tsx
interface Props {
  params: { slug: string };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// Static path generation
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// app/docs/[...slug]/page.tsx — catch-all
// /docs/getting-started → params.slug = ['getting-started']
// /docs/api/auth       → params.slug = ['api', 'auth']`,
            },
        ],
        tasks: [
            {
                id: 'next-rd-t1',
                type: 'code',
                promptRu: 'Создай динамическую страницу blog/[slug] с params.',
                promptEn: 'Create a dynamic page blog/[slug] with params.',
                answerRu: 'export default function BlogPost({ params }: { params: { slug: string } }) { return <h1>{params.slug}</h1>; }',
                answerEn: 'export default function BlogPost({ params }: { params: { slug: string } }) { return <h1>{params.slug}</h1>; }',
                starterCode: `// app/blog/[slug]/page.tsx

export default function BlogPost() {
  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['params', 'slug'] },
            },
            {
                id: 'next-rd-t2',
                type: 'code',
                promptRu: 'Напиши generateStaticParams для списка slug.',
                promptEn: 'Write generateStaticParams for a list of slugs.',
                answerRu: 'export async function generateStaticParams() { return [{ slug: "hello" }]; }',
                answerEn: 'export async function generateStaticParams() { return [{ slug: "hello" }]; }',
                starterCode: `// Сгенерируй статические параметры
`,
                validation: { mode: 'includesAll', keywords: ['generatestaticparams', 'slug'] },
            },
            {
                id: 'next-rd-t3',
                type: 'theory',
                promptRu: 'Чем [...slug] отличается от [slug]?',
                promptEn: 'How does [...slug] differ from [slug]?',
                answerRu: '[slug] ловит один сегмент, [...slug] ловит несколько вложенных сегментов как массив.',
                answerEn: '[slug] catches one segment, [...slug] catches multiple nested segments as an array.',
                placeholderRu: 'Опиши разницу',
                placeholderEn: 'Describe the difference',
                validation: { mode: 'includesAny', keywords: ['массив', 'array', 'несколько', 'multiple', 'вложен', 'nested'] },
            },
        ],
    },
    {
        id: 'next-api-routes',
        day: 36,
        level: 3,
        xp: 70,
        duration: '20 min',
        kind: 'nextjs',
        titleRu: 'API Routes',
        titleEn: 'API Routes',
        subtitleRu: 'route.ts, GET, POST, middleware',
        subtitleEn: 'route.ts, GET, POST, middleware',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Создание серверного API внутри Next.js проекта.',
        descriptionEn: 'Creating a server API inside a Next.js project.',
        theory: [
            {
                id: 'next-api-d1',
                titleRu: 'Route Handlers',
                titleEn: 'Route Handlers',
                bodyRu: 'В App Router API создаются через файл route.ts. Экспортируешь функции с именами HTTP-методов: GET, POST, PUT, DELETE. Они получают Request и возвращают Response.',
                bodyEn: 'In App Router, APIs are created via route.ts files. Export functions named after HTTP methods: GET, POST, PUT, DELETE. They receive a Request and return a Response.',
                exampleRu: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Анна', email: 'anna@mail.com' },
  { id: 2, name: 'Макс', email: 'max@mail.com' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser: User = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
  };

  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}`,
                exampleEn: `// app/api/users/route.ts
import { NextResponse } from 'next/server';

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Anna', email: 'anna@mail.com' },
  { id: 2, name: 'Max', email: 'max@mail.com' },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newUser: User = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
  };

  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}`,
            },
        ],
        tasks: [
            {
                id: 'next-api-t1',
                type: 'code',
                promptRu: 'Создай GET route handler, возвращающий JSON-массив.',
                promptEn: 'Create a GET route handler that returns a JSON array.',
                answerRu: 'export async function GET() { return NextResponse.json(items); }',
                answerEn: 'export async function GET() { return NextResponse.json(items); }',
                starterCode: `import { NextResponse } from 'next/server';

const items = [{ id: 1, title: 'Test' }];

`,
                validation: { mode: 'includesAll', keywords: ['get', 'nextresponse.json'] },
            },
            {
                id: 'next-api-t2',
                type: 'code',
                promptRu: 'Создай POST handler, который читает body и возвращает 201.',
                promptEn: 'Create a POST handler that reads body and returns 201.',
                answerRu: 'export async function POST(request: Request) { const body = await request.json(); return NextResponse.json(body, { status: 201 }); }',
                answerEn: 'export async function POST(request: Request) { const body = await request.json(); return NextResponse.json(body, { status: 201 }); }',
                starterCode: `import { NextResponse } from 'next/server';

`,
                validation: { mode: 'includesAll', keywords: ['post', 'request.json', '201'] },
            },
            {
                id: 'next-api-t3',
                type: 'theory',
                promptRu: 'Где хранить API routes в App Router?',
                promptEn: 'Where to store API routes in App Router?',
                answerRu: 'В файлах route.ts внутри папки app/api/.',
                answerEn: 'In route.ts files inside the app/api/ folder.',
                placeholderRu: 'Укажи путь',
                placeholderEn: 'Specify the path',
                validation: { mode: 'includesAny', keywords: ['route.ts', 'app/api', 'api/'] },
            },
        ],
    },
    {
        id: 'next-server-actions',
        day: 37,
        level: 3,
        xp: 75,
        duration: '20 min',
        kind: 'nextjs',
        titleRu: 'Server Actions',
        titleEn: 'Server Actions',
        subtitleRu: '"use server", формы, мутации',
        subtitleEn: '"use server", forms, mutations',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Серверные функции, вызываемые из клиента — без API routes.',
        descriptionEn: 'Server functions called from the client — no API routes needed.',
        theory: [
            {
                id: 'next-sa-d1',
                titleRu: 'Server Actions — серверные функции',
                titleEn: 'Server Actions — server functions',
                bodyRu: 'Server Actions — это async-функции с директивой "use server", которые выполняются на сервере. Их можно вызывать из форм или клиентского кода. Они заменяют API routes для мутаций.',
                bodyEn: 'Server Actions are async functions with the "use server" directive that run on the server. You can call them from forms or client code. They replace API routes for mutations.',
                exampleRu: `// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await db.post.create({ data: { title, content } });

  revalidatePath('/posts');
}

// app/posts/new/page.tsx
import { createPost } from '../actions';

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Заголовок" required />
      <textarea name="content" placeholder="Содержание" required />
      <button type="submit">Создать</button>
    </form>
  );
}`,
                exampleEn: `// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await db.post.create({ data: { title, content } });

  revalidatePath('/posts');
}

// app/posts/new/page.tsx
import { createPost } from '../actions';

export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" required />
      <textarea name="content" placeholder="Content" required />
      <button type="submit">Create</button>
    </form>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'next-sa-t1',
                type: 'code',
                promptRu: 'Создай Server Action для добавления задачи с "use server".',
                promptEn: 'Create a Server Action for adding a task with "use server".',
                answerRu: "'use server'; export async function addTask(formData: FormData) { const title = formData.get('title'); }",
                answerEn: "'use server'; export async function addTask(formData: FormData) { const title = formData.get('title'); }",
                starterCode: `// app/actions.ts
`,
                validation: { mode: 'includesAll', keywords: ['use server', 'async', 'formdata'] },
            },
            {
                id: 'next-sa-t2',
                type: 'theory',
                promptRu: 'Чем Server Actions лучше API routes для мутаций?',
                promptEn: 'How are Server Actions better than API routes for mutations?',
                answerRu: 'Меньше бойлерплейта: не нужно создавать endpoint, парсить body и делать fetch с клиента.',
                answerEn: 'Less boilerplate: no need to create an endpoint, parse the body, or fetch from the client.',
                placeholderRu: 'Укажи про простоту',
                placeholderEn: 'Mention simplicity',
                validation: { mode: 'includesAny', keywords: ['бойлерплейт', 'boilerplate', 'прост', 'simpl', 'endpoint', 'fetch'] },
            },
        ],
    },
    {
        id: 'next-metadata-seo',
        day: 38,
        level: 3,
        xp: 60,
        duration: '15 min',
        kind: 'nextjs',
        titleRu: 'Metadata и SEO',
        titleEn: 'Metadata and SEO',
        subtitleRu: 'title, description, Open Graph, generateMetadata',
        subtitleEn: 'title, description, Open Graph, generateMetadata',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Управление метаданными для SEO и превью в соцсетях.',
        descriptionEn: 'Managing metadata for SEO and social media previews.',
        theory: [
            {
                id: 'next-meta-d1',
                titleRu: 'Статические и динамические метаданные',
                titleEn: 'Static and dynamic metadata',
                bodyRu: 'Next.js позволяет задавать metadata через экспорт объекта или через функцию generateMetadata для динамических страниц. Это управляет тегами title, description, Open Graph и другими.',
                bodyEn: 'Next.js lets you set metadata via an exported object or via generateMetadata function for dynamic pages. This controls title, description, Open Graph tags, and more.',
                exampleRu: `// Статические метаданные
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Мой блог',
  description: 'Статьи о веб-разработке',
  openGraph: {
    title: 'Мой блог',
    description: 'Статьи о веб-разработке',
    images: ['/og-image.jpg'],
  },
};

// Динамические метаданные
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    },
  };
}`,
                exampleEn: `// Static metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Articles about web development',
  openGraph: {
    title: 'My Blog',
    description: 'Articles about web development',
    images: ['/og-image.jpg'],
  },
};

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.coverImage],
    },
  };
}`,
            },
        ],
        tasks: [
            {
                id: 'next-meta-t1',
                type: 'code',
                promptRu: 'Экспортируй metadata с title и description.',
                promptEn: 'Export metadata with title and description.',
                answerRu: "export const metadata: Metadata = { title: 'Мой сайт', description: 'Описание' };",
                answerEn: "export const metadata: Metadata = { title: 'My Site', description: 'Description' };",
                starterCode: `import type { Metadata } from 'next';

`,
                validation: { mode: 'includesAll', keywords: ['metadata', 'title', 'description'] },
            },
            {
                id: 'next-meta-t2',
                type: 'code',
                promptRu: 'Создай generateMetadata для динамической страницы.',
                promptEn: 'Create generateMetadata for a dynamic page.',
                answerRu: 'export async function generateMetadata({ params }) { return { title: params.slug }; }',
                answerEn: 'export async function generateMetadata({ params }) { return { title: params.slug }; }',
                starterCode: `// Динамические метаданные для blog/[slug]
`,
                validation: { mode: 'includesAll', keywords: ['generatemetadata', 'params', 'title'] },
            },
        ],
    },
    {
        id: 'next-middleware',
        day: 39,
        level: 4,
        xp: 80,
        duration: '18 min',
        kind: 'nextjs',
        titleRu: 'Middleware и авторизация',
        titleEn: 'Middleware and Auth',
        subtitleRu: 'middleware.ts, redirect, cookies',
        subtitleEn: 'middleware.ts, redirect, cookies',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Перехват запросов: редиректы, авторизация, A/B тесты.',
        descriptionEn: 'Intercepting requests: redirects, auth, A/B testing.',
        theory: [
            {
                id: 'next-mw-d1',
                titleRu: 'middleware.ts — перехватчик запросов',
                titleEn: 'middleware.ts — request interceptor',
                bodyRu: 'Файл middleware.ts в корне проекта перехватывает каждый запрос. Можно проверять cookies, токены, делать редиректы. Middleware работает на Edge Runtime — быстро и близко к пользователю.',
                bodyEn: 'The middleware.ts file at the project root intercepts every request. You can check cookies, tokens, redirect. Middleware runs on Edge Runtime — fast and close to the user.',
                exampleRu: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};`,
                exampleEn: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};`,
            },
        ],
        tasks: [
            {
                id: 'next-mw-t1',
                type: 'code',
                promptRu: 'Напиши middleware, который проверяет cookie и редиректит.',
                promptEn: 'Write middleware that checks a cookie and redirects.',
                answerRu: 'const token = request.cookies.get("token"); if (!token) return NextResponse.redirect(new URL("/login", request.url));',
                answerEn: 'const token = request.cookies.get("token"); if (!token) return NextResponse.redirect(new URL("/login", request.url));',
                starterCode: `import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

}`,
                validation: { mode: 'includesAll', keywords: ['cookies', 'redirect'] },
            },
            {
                id: 'next-mw-t2',
                type: 'theory',
                promptRu: 'Что такое Edge Runtime?',
                promptEn: 'What is Edge Runtime?',
                answerRu: 'Лёгкая среда выполнения на серверах CDN — быстрее Node.js, но с ограниченным API.',
                answerEn: 'A lightweight runtime on CDN servers — faster than Node.js but with a limited API.',
                placeholderRu: 'Опиши кратко',
                placeholderEn: 'Describe briefly',
                validation: { mode: 'includesAny', keywords: ['cdn', 'быстр', 'fast', 'лёгк', 'light', 'runtime'] },
            },
        ],
    },
    {
        id: 'next-optimization',
        day: 40,
        level: 4,
        xp: 85,
        duration: '22 min',
        kind: 'nextjs',
        titleRu: 'Оптимизации Next.js',
        titleEn: 'Next.js Optimizations',
        subtitleRu: 'Image, Font, Bundle Analyzer, Suspense',
        subtitleEn: 'Image, Font, Bundle Analyzer, Suspense',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Встроенные оптимизации: изображения, шрифты, код-сплиттинг.',
        descriptionEn: 'Built-in optimizations: images, fonts, code splitting.',
        theory: [
            {
                id: 'next-opt-d1',
                titleRu: 'next/image — оптимизация изображений',
                titleEn: 'next/image — image optimization',
                bodyRu: 'Компонент Image автоматически: преобразует в WebP/AVIF, делает lazy loading, предотвращает CLS (сдвиг макета). Всегда указывай width и height или используй fill.',
                bodyEn: 'The Image component automatically: converts to WebP/AVIF, does lazy loading, prevents CLS (layout shift). Always specify width and height or use fill.',
                exampleRu: `import Image from 'next/image';

function Gallery() {
  return (
    <div>
      {/* Статическое изображение */}
      <Image
        src="/hero.jpg"
        alt="Герой"
        width={800}
        height={400}
        priority
      />

      {/* Изображение с fill */}
      <div style={{ position: 'relative', width: '100%', height: 300 }}>
        <Image
          src="/background.jpg"
          alt="Фон"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Внешнее изображение (нужно указать домен в next.config.js) */}
      <Image
        src="https://example.com/photo.jpg"
        alt="Внешнее фото"
        width={400}
        height={300}
      />
    </div>
  );
}`,
                exampleEn: `import Image from 'next/image';

function Gallery() {
  return (
    <div>
      {/* Static image */}
      <Image
        src="/hero.jpg"
        alt="Hero"
        width={800}
        height={400}
        priority
      />

      {/* Image with fill */}
      <div style={{ position: 'relative', width: '100%', height: 300 }}>
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* External image (need to set domain in next.config.js) */}
      <Image
        src="https://example.com/photo.jpg"
        alt="External photo"
        width={400}
        height={300}
      />
    </div>
  );
}`,
            },
            {
                id: 'next-opt-d2',
                titleRu: 'Suspense и стриминг',
                titleEn: 'Suspense and streaming',
                bodyRu: 'React Suspense позволяет показать fallback пока компонент загружается. Next.js стримит HTML — пользователь видит контент по частям, не ждёт полной загрузки.',
                bodyEn: 'React Suspense shows a fallback while a component loads. Next.js streams HTML — the user sees content progressively, not waiting for full load.',
                exampleRu: `import { Suspense } from 'react';

async function SlowComponent() {
  const data = await fetchSlowData();
  return <div>{data.title}</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Мгновенный заголовок</h1>
      <Suspense fallback={<p>Загрузка данных...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
                exampleEn: `import { Suspense } from 'react';

async function SlowComponent() {
  const data = await fetchSlowData();
  return <div>{data.title}</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Instant heading</h1>
      <Suspense fallback={<p>Loading data...</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'next-opt-t1',
                type: 'code',
                promptRu: 'Используй next/image с width, height и alt.',
                promptEn: 'Use next/image with width, height, and alt.',
                answerRu: '<Image src="/photo.jpg" alt="Фото" width={400} height={300} />',
                answerEn: '<Image src="/photo.jpg" alt="Photo" width={400} height={300} />',
                starterCode: `import Image from 'next/image';

function Photo() {
  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['image', 'src', 'width', 'height', 'alt'] },
            },
            {
                id: 'next-opt-t2',
                type: 'code',
                promptRu: 'Оберни медленный компонент в Suspense с fallback.',
                promptEn: 'Wrap a slow component in Suspense with a fallback.',
                answerRu: '<Suspense fallback={<p>Loading...</p>}><SlowComponent /></Suspense>',
                answerEn: '<Suspense fallback={<p>Loading...</p>}><SlowComponent /></Suspense>',
                starterCode: `import { Suspense } from 'react';

function Page() {
  return (
    <div>
      <SlowComponent />
    </div>
  );
}`,
                validation: { mode: 'includesAll', keywords: ['suspense', 'fallback'] },
            },
            {
                id: 'next-opt-t3',
                type: 'theory',
                promptRu: 'Зачем next/image вместо обычного <img>?',
                promptEn: 'Why use next/image instead of a regular <img>?',
                answerRu: 'Автоматическая оптимизация: WebP, lazy loading, предотвращение сдвига макета, правильные размеры.',
                answerEn: 'Automatic optimization: WebP, lazy loading, layout shift prevention, correct sizing.',
                placeholderRu: 'Перечисли преимущества',
                placeholderEn: 'List the benefits',
                validation: { mode: 'includesAny', keywords: ['webp', 'lazy', 'оптимиз', 'optim', 'сдвиг', 'shift'] },
            },
        ],
    },
];
