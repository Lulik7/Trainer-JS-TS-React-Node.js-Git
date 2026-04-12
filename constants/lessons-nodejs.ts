import { Lesson } from './lessons-types';

export const nodejsLessons: Lesson[] = [
    {
        id: 'node-intro',
        day: 21,
        level: 1,
        xp: 45,
        duration: '14 min',
        kind: 'nodejs',
        titleRu: 'Что такое Node.js',
        titleEn: 'What is Node.js',
        subtitleRu: 'Серверный JavaScript, npm, модули',
        subtitleEn: 'Server-side JavaScript, npm, modules',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Основы Node.js: зачем он нужен, как работает и что такое npm.',
        descriptionEn: 'Node.js basics: why it exists, how it works, and what npm is.',
        theory: [
            {
                id: 'node-intro-d1',
                titleRu: 'Node.js — JavaScript вне браузера',
                titleEn: 'Node.js — JavaScript outside the browser',
                bodyRu: 'Node.js позволяет запускать JavaScript на сервере, на компьютере, где угодно — не только в браузере. Он построен на движке V8 (том же, что и в Chrome). С Node.js можно создавать серверы, CLI-инструменты, скрипты автоматизации и многое другое.',
                bodyEn: 'Node.js lets you run JavaScript on a server, on your computer, anywhere — not just in the browser. It is built on the V8 engine (the same one Chrome uses). With Node.js you can create servers, CLI tools, automation scripts, and much more.',
                exampleRu: `// Запуск: node hello.js

console.log('Привет из Node.js!');

// Информация о среде
console.log('Версия Node:', process.version);
console.log('Платформа:', process.platform);
console.log('Текущая директория:', process.cwd());`,
                exampleEn: `// Run: node hello.js

console.log('Hello from Node.js!');

// Environment info
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
console.log('Current directory:', process.cwd());`,
            },
            {
                id: 'node-intro-d2',
                titleRu: 'npm — менеджер пакетов',
                titleEn: 'npm — package manager',
                bodyRu: 'npm (Node Package Manager) — инструмент для установки библиотек. package.json — файл, который описывает проект и его зависимости. Команда npm install скачивает все пакеты из package.json.',
                bodyEn: 'npm (Node Package Manager) is a tool for installing libraries. package.json describes the project and its dependencies. npm install downloads all packages from package.json.',
                exampleRu: `// package.json — сердце проекта
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  },
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "tsc"
  }
}

// Команды npm:
// npm init -y          — создать package.json
// npm install express  — установить пакет
// npm install -D typescript — установить dev-зависимость
// npm run dev          — запустить скрипт`,
                exampleEn: `// package.json — the heart of a project
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  },
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "tsc"
  }
}

// npm commands:
// npm init -y          — create package.json
// npm install express  — install a package
// npm install -D typescript — install dev dependency
// npm run dev          — run a script`,
            },
            {
                id: 'node-intro-d3',
                titleRu: 'Модули: import и export',
                titleEn: 'Modules: import and export',
                bodyRu: 'В Node.js код разбивается на модули. Каждый файл — это модуль. Используй export для экспорта и import для импорта. Это помогает организовать код и избежать конфликтов имён.',
                bodyEn: 'In Node.js, code is split into modules. Each file is a module. Use export to expose and import to consume. This helps organize code and avoid name conflicts.',
                exampleRu: `// utils.ts — модуль с утилитами
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const APP_NAME = 'MyApp';

// index.ts — используем модуль
import { formatDate, capitalize, APP_NAME } from './utils';

console.log(APP_NAME);
console.log(formatDate(new Date()));
console.log(capitalize('hello'));`,
                exampleEn: `// utils.ts — utility module
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const APP_NAME = 'MyApp';

// index.ts — using the module
import { formatDate, capitalize, APP_NAME } from './utils';

console.log(APP_NAME);
console.log(formatDate(new Date()));
console.log(capitalize('hello'));`,
            },
        ],
        tasks: [
            {
                id: 'node-intro-t1',
                type: 'theory',
                promptRu: 'Что такое Node.js и зачем он нужен?',
                promptEn: 'What is Node.js and why is it needed?',
                answerRu: 'Node.js позволяет запускать JavaScript вне браузера — на сервере, для CLI-инструментов, скриптов.',
                answerEn: 'Node.js lets you run JavaScript outside the browser — on a server, for CLI tools, scripts.',
                placeholderRu: 'Опиши основную идею',
                placeholderEn: 'Describe the main idea',
                validation: { mode: 'includesAny', keywords: ['сервер', 'браузер', 'server', 'browser', 'V8'] },
            },
            {
                id: 'node-intro-t2',
                type: 'code',
                promptRu: 'Напиши export функции greet(name) и import в другом файле.',
                promptEn: 'Write an export of greet(name) function and import in another file.',
                answerRu: 'export function greet(name: string) { return `Hello, ${name}`; }',
                answerEn: 'export function greet(name: string) { return `Hello, ${name}`; }',
                starterCode: `// greet.ts

function greet(name: string) {
  return \`Привет, \${name}!\`;
}`,
                validation: { mode: 'includesAll', keywords: ['export', 'greet', 'name'] },
            },
            {
                id: 'node-intro-t3',
                type: 'challenge',
                promptRu: 'Зачем нужен package.json?',
                promptEn: 'Why is package.json needed?',
                answerRu: 'Описывает проект, его зависимости, скрипты и метаданные.',
                answerEn: 'Describes the project, its dependencies, scripts, and metadata.',
                placeholderRu: 'Укажи про зависимости',
                placeholderEn: 'Mention dependencies',
                validation: { mode: 'includesAny', keywords: ['зависим', 'скрипт', 'depend', 'script', 'пакет', 'package'] },
            },
        ],
    },
    {
        id: 'node-http',
        day: 22,
        level: 2,
        xp: 60,
        duration: '18 min',
        kind: 'nodejs',
        titleRu: 'HTTP-сервер и API',
        titleEn: 'HTTP Server and API',
        subtitleRu: 'Создание сервера, роуты, JSON-ответы',
        subtitleEn: 'Creating a server, routes, JSON responses',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Создай простой HTTP-сервер и пойми, как работают API-запросы.',
        descriptionEn: 'Create a simple HTTP server and understand how API requests work.',
        theory: [
            {
                id: 'node-http-d1',
                titleRu: 'Простой HTTP-сервер',
                titleEn: 'Simple HTTP server',
                bodyRu: 'Node.js имеет встроенный модуль http для создания серверов. Сервер слушает порт и отвечает на запросы. В реальных проектах обычно используют фреймворки (Express, Hono), но понимание базового http важно.',
                bodyEn: 'Node.js has a built-in http module for creating servers. A server listens on a port and responds to requests. Real projects usually use frameworks (Express, Hono), but understanding basic http is important.',
                exampleRu: `import http from 'http';

const server = http.createServer((req, res) => {
  // Устанавливаем заголовки
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/hello' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Привет, мир!' }));
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      users: [
        { id: 1, name: 'Анна' },
        { id: 2, name: 'Макс' },
      ],
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Маршрут не найден' }));
  }
});

server.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});`,
                exampleEn: `import http from 'http';

const server = http.createServer((req, res) => {
  // Set headers
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/api/hello' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({
      users: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Max' },
      ],
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});`,
            },
            {
                id: 'node-http-d2',
                titleRu: 'REST API принципы',
                titleEn: 'REST API principles',
                bodyRu: 'REST — это архитектурный стиль для API. Ресурсы (users, posts) представлены URL-ами. HTTP-методы определяют действие: GET — получить, POST — создать, PUT — обновить, DELETE — удалить.',
                bodyEn: 'REST is an architectural style for APIs. Resources (users, posts) are represented by URLs. HTTP methods define the action: GET — read, POST — create, PUT — update, DELETE — delete.',
                exampleRu: `// REST API для пользователей:
// GET    /api/users      — получить всех
// GET    /api/users/1    — получить одного
// POST   /api/users      — создать нового
// PUT    /api/users/1    — обновить
// DELETE /api/users/1    — удалить

// Пример с Express (популярный фреймворк):
import express from 'express';
const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: 'Анна', email: 'anna@mail.com' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000);`,
                exampleEn: `// REST API for users:
// GET    /api/users      — get all
// GET    /api/users/1    — get one
// POST   /api/users      — create new
// PUT    /api/users/1    — update
// DELETE /api/users/1    — delete

// Example with Express (popular framework):
import express from 'express';
const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: 'Anna', email: 'anna@mail.com' },
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000);`,
            },
            {
                id: 'node-http-d3',
                titleRu: 'Коды ответов HTTP',
                titleEn: 'HTTP response codes',
                bodyRu: 'Каждый ответ сервера содержит код статуса: 200 — ОК, 201 — Создано, 400 — Плохой запрос, 401 — Не авторизован, 404 — Не найден, 500 — Ошибка сервера.',
                bodyEn: 'Every server response has a status code: 200 — OK, 201 — Created, 400 — Bad Request, 401 — Unauthorized, 404 — Not Found, 500 — Server Error.',
                exampleRu: `// Популярные коды ответов:
// 2xx — Успех
// 200 OK            — запрос успешен
// 201 Created       — ресурс создан
// 204 No Content    — успех, но нет тела ответа

// 4xx — Ошибка клиента
// 400 Bad Request   — неверный запрос
// 401 Unauthorized  — не авторизован
// 403 Forbidden     — доступ запрещён
// 404 Not Found     — ресурс не найден
// 422 Unprocessable — ошибка валидации

// 5xx — Ошибка сервера
// 500 Internal Error — ошибка на сервере
// 503 Unavailable   — сервер недоступен`,
                exampleEn: `// Common response codes:
// 2xx — Success
// 200 OK            — request succeeded
// 201 Created       — resource created
// 204 No Content    — success, no response body

// 4xx — Client Error
// 400 Bad Request   — invalid request
// 401 Unauthorized  — not authenticated
// 403 Forbidden     — access denied
// 404 Not Found     — resource not found
// 422 Unprocessable — validation error

// 5xx — Server Error
// 500 Internal Error — server error
// 503 Unavailable   — server unavailable`,
            },
        ],
        tasks: [
            {
                id: 'node-http-t1',
                type: 'theory',
                promptRu: 'Какие HTTP-методы используются в REST API?',
                promptEn: 'Which HTTP methods are used in REST API?',
                answerRu: 'GET (получить), POST (создать), PUT (обновить), DELETE (удалить).',
                answerEn: 'GET (read), POST (create), PUT (update), DELETE (delete).',
                placeholderRu: 'Перечисли методы',
                placeholderEn: 'List the methods',
                validation: { mode: 'includesAll', keywords: ['get', 'post'] },
            },
            {
                id: 'node-http-t2',
                type: 'code',
                promptRu: 'Напиши обработчик GET /api/users, который возвращает JSON-массив.',
                promptEn: 'Write a GET /api/users handler that returns a JSON array.',
                answerRu: "app.get('/api/users', (req, res) => { res.json(users); });",
                answerEn: "app.get('/api/users', (req, res) => { res.json(users); });",
                starterCode: `import express from 'express';
const app = express();

const users = [{ id: 1, name: 'Anna' }];

// добавь обработчик GET /api/users`,
                validation: { mode: 'includesAll', keywords: ['get', '/api/users', 'json'] },
            },
            {
                id: 'node-http-t3',
                type: 'challenge',
                promptRu: 'Что означает код 404?',
                promptEn: 'What does status code 404 mean?',
                answerRu: 'Ресурс не найден — сервер не нашёл запрошенный URL.',
                answerEn: 'Not Found — the server could not find the requested URL.',
                placeholderRu: 'Опиши',
                placeholderEn: 'Describe',
                validation: { mode: 'includesAny', keywords: ['не найд', 'not found', 'ресурс', 'resource'] },
            },
        ],
    },
    {
        id: 'node-fs-env',
        day: 23,
        level: 2,
        xp: 55,
        duration: '16 min',
        kind: 'nodejs',
        titleRu: 'Файловая система и переменные среды',
        titleEn: 'File System and Environment Variables',
        subtitleRu: 'fs, path, .env, process.env',
        subtitleEn: 'fs, path, .env, process.env',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Работа с файлами и конфигурацией через переменные окружения.',
        descriptionEn: 'Working with files and configuration via environment variables.',
        theory: [
            {
                id: 'node-fs-d1',
                titleRu: 'Чтение и запись файлов',
                titleEn: 'Reading and writing files',
                bodyRu: 'Модуль fs (file system) позволяет читать, записывать и удалять файлы. Используй асинхронные версии (promises), чтобы не блокировать поток.',
                bodyEn: 'The fs (file system) module lets you read, write, and delete files. Use async versions (promises) to avoid blocking the thread.',
                exampleRu: `import fs from 'fs/promises';
import path from 'path';

async function example() {
  // Чтение файла
  const content = await fs.readFile('data.json', 'utf-8');
  const data = JSON.parse(content);
  console.log('Данные:', data);

  // Запись файла
  const newData = { name: 'Макс', score: 100 };
  await fs.writeFile(
    'output.json',
    JSON.stringify(newData, null, 2)
  );
  console.log('Файл записан');

  // Проверка существования
  try {
    await fs.access('config.json');
    console.log('Файл существует');
  } catch {
    console.log('Файл не найден');
  }

  // Чтение директории
  const files = await fs.readdir('.');
  console.log('Файлы:', files);
}`,
                exampleEn: `import fs from 'fs/promises';
import path from 'path';

async function example() {
  // Reading a file
  const content = await fs.readFile('data.json', 'utf-8');
  const data = JSON.parse(content);
  console.log('Data:', data);

  // Writing a file
  const newData = { name: 'Max', score: 100 };
  await fs.writeFile(
    'output.json',
    JSON.stringify(newData, null, 2)
  );
  console.log('File written');

  // Check existence
  try {
    await fs.access('config.json');
    console.log('File exists');
  } catch {
    console.log('File not found');
  }

  // Read directory
  const files = await fs.readdir('.');
  console.log('Files:', files);
}`,
            },
            {
                id: 'node-fs-d2',
                titleRu: 'Переменные окружения',
                titleEn: 'Environment variables',
                bodyRu: 'Секреты (API-ключи, пароли БД) никогда не хранят в коде. Их помещают в .env файл и читают через process.env. Библиотека dotenv загружает .env автоматически.',
                bodyEn: 'Secrets (API keys, DB passwords) are never stored in code. They go in a .env file and are read via process.env. The dotenv library loads .env automatically.',
                exampleRu: `// .env файл (не коммитить в git!)
// DATABASE_URL=postgresql://user:pass@localhost:5432/db
// API_KEY=sk-1234567890
// PORT=3000

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;

if (!apiKey) {
  throw new Error('API_KEY не задан в .env');
}

console.log('Порт:', port);
console.log('API ключ:', apiKey.slice(0, 5) + '...');`,
                exampleEn: `// .env file (never commit to git!)
// DATABASE_URL=postgresql://user:pass@localhost:5432/db
// API_KEY=sk-1234567890
// PORT=3000

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;

if (!apiKey) {
  throw new Error('API_KEY is not set in .env');
}

console.log('Port:', port);
console.log('API key:', apiKey.slice(0, 5) + '...');`,
            },
        ],
        tasks: [
            {
                id: 'node-fs-t1',
                type: 'code',
                promptRu: 'Прочитай JSON-файл и распарси его содержимое.',
                promptEn: 'Read a JSON file and parse its contents.',
                answerRu: "const content = await fs.readFile('data.json', 'utf-8'); const data = JSON.parse(content);",
                answerEn: "const content = await fs.readFile('data.json', 'utf-8'); const data = JSON.parse(content);",
                starterCode: `import fs from 'fs/promises';

async function loadData() {
  
}`,
                validation: { mode: 'includesAll', keywords: ['readfile', 'json.parse'] },
            },
            {
                id: 'node-fs-t2',
                type: 'code',
                promptRu: 'Прочитай PORT из process.env с fallback на 3000.',
                promptEn: 'Read PORT from process.env with a fallback of 3000.',
                answerRu: 'const port = process.env.PORT || 3000;',
                answerEn: 'const port = process.env.PORT || 3000;',
                starterCode: `const port = `,
                validation: { mode: 'includesAll', keywords: ['process.env', 'port', '3000'] },
            },
            {
                id: 'node-fs-t3',
                type: 'challenge',
                promptRu: 'Почему нельзя хранить API-ключи в коде?',
                promptEn: 'Why should API keys not be stored in code?',
                answerRu: 'Они попадут в git и станут доступны всем, кто видит репозиторий.',
                answerEn: 'They will end up in git and become accessible to anyone who sees the repo.',
                placeholderRu: 'Укажи про безопасность',
                placeholderEn: 'Mention security',
                validation: { mode: 'includesAny', keywords: ['git', 'безопас', 'secur', 'доступ', 'access', 'public'] },
            },
        ],
    },
    {
        id: 'node-async-patterns',
        day: 24,
        level: 3,
        xp: 70,
        duration: '20 min',
        kind: 'nodejs',
        titleRu: 'Асинхронные паттерны Node.js',
        titleEn: 'Node.js Async Patterns',
        subtitleRu: 'Event loop, callback, Promise.all',
        subtitleEn: 'Event loop, callback, Promise.all',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Как Node.js обрабатывает асинхронность и параллельные операции.',
        descriptionEn: 'How Node.js handles asynchrony and parallel operations.',
        theory: [
            {
                id: 'node-async-d1',
                titleRu: 'Event Loop — сердце Node.js',
                titleEn: 'Event Loop — the heart of Node.js',
                bodyRu: 'Node.js однопоточный, но обрабатывает тысячи запросов благодаря Event Loop. Он не ждёт завершения I/O-операций, а переключается на другие задачи. Когда операция завершается, её callback попадает в очередь.',
                bodyEn: 'Node.js is single-threaded but handles thousands of requests thanks to the Event Loop. It does not wait for I/O operations to finish, but switches to other tasks. When an operation completes, its callback enters the queue.',
                exampleRu: `// Event Loop в действии:
console.log('1. Начало');

setTimeout(() => {
  console.log('2. Таймер (макрозадача)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise (микрозадача)');
});

console.log('4. Конец');

// Порядок вывода:
// 1. Начало
// 4. Конец
// 3. Promise (микрозадача) — микрозадачи первее
// 2. Таймер (макрозадача)`,
                exampleEn: `// Event Loop in action:
console.log('1. Start');

setTimeout(() => {
  console.log('2. Timer (macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise (microtask)');
});

console.log('4. End');

// Output order:
// 1. Start
// 4. End
// 3. Promise (microtask) — microtasks run first
// 2. Timer (macrotask)`,
            },
            {
                id: 'node-async-d2',
                titleRu: 'Promise.all для параллельных операций',
                titleEn: 'Promise.all for parallel operations',
                bodyRu: 'Когда нужно выполнить несколько асинхронных операций одновременно (например, загрузить данные из нескольких API), используй Promise.all. Если хотя бы одна операция упадёт — все упадут. Для «мягкого» варианта есть Promise.allSettled.',
                bodyEn: 'When you need to run several async operations at the same time (e.g., fetch data from multiple APIs), use Promise.all. If one fails, all fail. For a "soft" version use Promise.allSettled.',
                exampleRu: `async function loadDashboard() {
  // Параллельная загрузка — быстрее, чем последовательная
  const [users, posts, stats] = await Promise.all([
    fetch('/api/users').then((r) => r.json()),
    fetch('/api/posts').then((r) => r.json()),
    fetch('/api/stats').then((r) => r.json()),
  ]);

  console.log('Пользователи:', users);
  console.log('Посты:', posts);
  console.log('Статистика:', stats);
}

// Promise.allSettled — не падает при ошибке одного
async function loadSafe() {
  const results = await Promise.allSettled([
    fetch('/api/users').then((r) => r.json()),
    fetch('/api/broken').then((r) => r.json()),
  ]);

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`Запрос \${index}: успех\`, result.value);
    } else {
      console.log(\`Запрос \${index}: ошибка\`, result.reason);
    }
  });
}`,
                exampleEn: `async function loadDashboard() {
  // Parallel loading — faster than sequential
  const [users, posts, stats] = await Promise.all([
    fetch('/api/users').then((r) => r.json()),
    fetch('/api/posts').then((r) => r.json()),
    fetch('/api/stats').then((r) => r.json()),
  ]);

  console.log('Users:', users);
  console.log('Posts:', posts);
  console.log('Stats:', stats);
}

// Promise.allSettled — does not fail on one error
async function loadSafe() {
  const results = await Promise.allSettled([
    fetch('/api/users').then((r) => r.json()),
    fetch('/api/broken').then((r) => r.json()),
  ]);

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(\`Request \${index}: success\`, result.value);
    } else {
      console.log(\`Request \${index}: error\`, result.reason);
    }
  });
}`,
            },
        ],
        tasks: [
            {
                id: 'node-async-t1',
                type: 'code',
                promptRu: 'Загрузи данные из двух API параллельно через Promise.all.',
                promptEn: 'Load data from two APIs in parallel using Promise.all.',
                answerRu: 'const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);',
                answerEn: 'const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);',
                starterCode: `async function loadData() {
  // загрузи users и posts параллельно
}`,
                validation: { mode: 'includesAll', keywords: ['promise.all', 'await'] },
            },
            {
                id: 'node-async-t2',
                type: 'theory',
                promptRu: 'Почему Node.js может обрабатывать много запросов, будучи однопоточным?',
                promptEn: 'Why can Node.js handle many requests while being single-threaded?',
                answerRu: 'Благодаря Event Loop: он не блокируется на I/O-операциях, а переключается между задачами.',
                answerEn: 'Thanks to the Event Loop: it does not block on I/O operations, but switches between tasks.',
                placeholderRu: 'Укажи про Event Loop',
                placeholderEn: 'Mention Event Loop',
                validation: { mode: 'includesAny', keywords: ['event loop', 'I/O', 'блокир', 'block', 'очеред', 'queue'] },
            },
            {
                id: 'node-async-t3',
                type: 'challenge',
                promptRu: 'Чем Promise.all отличается от Promise.allSettled?',
                promptEn: 'How does Promise.all differ from Promise.allSettled?',
                answerRu: 'Promise.all падает при первой ошибке, allSettled возвращает результат каждого промиса.',
                answerEn: 'Promise.all fails on the first error, allSettled returns the result of each promise.',
                placeholderRu: 'Укажи про ошибки',
                placeholderEn: 'Mention errors',
                validation: { mode: 'includesAny', keywords: ['ошибк', 'пада', 'error', 'fail', 'reject'] },
            },
        ],
    },
    {
        id: 'node-middleware',
        day: 25,
        level: 3,
        xp: 65,
        duration: '18 min',
        kind: 'nodejs',
        titleRu: 'Middleware и обработка ошибок',
        titleEn: 'Middleware and Error Handling',
        subtitleRu: 'Цепочка обработчиков, логирование, валидация',
        subtitleEn: 'Handler chain, logging, validation',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Как middleware работает в серверных фреймворках и как обрабатывать ошибки.',
        descriptionEn: 'How middleware works in server frameworks and how to handle errors.',
        theory: [
            {
                id: 'node-mw-d1',
                titleRu: 'Middleware — промежуточный обработчик',
                titleEn: 'Middleware — an intermediate handler',
                bodyRu: 'Middleware — это функция, которая выполняется между получением запроса и отправкой ответа. Она может логировать, проверять авторизацию, парсить тело запроса. Вызов next() передаёт управление следующему middleware.',
                bodyEn: 'Middleware is a function that runs between receiving a request and sending a response. It can log, check auth, parse the body. Calling next() passes control to the next middleware.',
                exampleRu: `import express from 'express';
const app = express();

// Middleware для логирования
function logger(req, res, next) {
  const start = Date.now();
  console.log(\`→ \${req.method} \${req.url}\`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`← \${res.statusCode} (\${duration}ms)\`);
  });

  next(); // передаём управление дальше
}

// Middleware для проверки API-ключа
function authMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

app.use(logger);
app.use('/api', authMiddleware);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Защищённые данные' });
});`,
                exampleEn: `import express from 'express';
const app = express();

// Logging middleware
function logger(req, res, next) {
  const start = Date.now();
  console.log(\`→ \${req.method} \${req.url}\`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`← \${res.statusCode} (\${duration}ms)\`);
  });

  next(); // pass control to the next handler
}

// API key auth middleware
function authMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

app.use(logger);
app.use('/api', authMiddleware);

app.get('/api/data', (req, res) => {
  res.json({ message: 'Protected data' });
});`,
            },
            {
                id: 'node-mw-d2',
                titleRu: 'Глобальная обработка ошибок',
                titleEn: 'Global error handling',
                bodyRu: 'В Express ошибки обрабатываются через специальный middleware с 4 параметрами (err, req, res, next). Он ловит ошибки из всех роутов.',
                bodyEn: 'In Express, errors are handled through a special middleware with 4 parameters (err, req, res, next). It catches errors from all routes.',
                exampleRu: `// Обработчик ошибок (в конце цепочки)
app.use((err, req, res, next) => {
  console.error('Ошибка:', err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Внутренняя ошибка сервера';

  res.status(statusCode).json({
    error: message,
    stack: process.env.NODE_ENV === 'development'
      ? err.stack
      : undefined,
  });
});

// В роуте — бросаем ошибку
app.get('/api/user/:id', async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) {
      const error = new Error('Пользователь не найден');
      error.statusCode = 404;
      throw error;
    }
    res.json(user);
  } catch (error) {
    next(error); // передаём в обработчик ошибок
  }
});`,
                exampleEn: `// Error handler (at the end of the chain)
app.use((err, req, res, next) => {
  console.error('Error:', err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({
    error: message,
    stack: process.env.NODE_ENV === 'development'
      ? err.stack
      : undefined,
  });
});

// In a route — throw an error
app.get('/api/user/:id', async (req, res, next) => {
  try {
    const user = await findUser(req.params.id);
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(user);
  } catch (error) {
    next(error); // pass to error handler
  }
});`,
            },
        ],
        tasks: [
            {
                id: 'node-mw-t1',
                type: 'code',
                promptRu: 'Напиши middleware для логирования метода и URL запроса.',
                promptEn: 'Write a middleware that logs the request method and URL.',
                answerRu: 'function logger(req, res, next) { console.log(req.method, req.url); next(); }',
                answerEn: 'function logger(req, res, next) { console.log(req.method, req.url); next(); }',
                starterCode: `function logger(req, res, next) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['req.method', 'req.url', 'next'] },
            },
            {
                id: 'node-mw-t2',
                type: 'theory',
                promptRu: 'Что делает next() в middleware?',
                promptEn: 'What does next() do in middleware?',
                answerRu: 'Передаёт управление следующему обработчику в цепочке.',
                answerEn: 'Passes control to the next handler in the chain.',
                placeholderRu: 'Опиши кратко',
                placeholderEn: 'Describe briefly',
                validation: { mode: 'includesAny', keywords: ['следующ', 'управлен', 'цепочк', 'next', 'handler', 'chain'] },
            },
            {
                id: 'node-mw-t3',
                type: 'code',
                promptRu: 'Добавь try/catch в async-роут и передай ошибку через next(error).',
                promptEn: 'Add try/catch to an async route and pass the error via next(error).',
                answerRu: 'try { ... } catch (error) { next(error); }',
                answerEn: 'try { ... } catch (error) { next(error); }',
                starterCode: `app.get('/api/data', async (req, res, next) => {
  const data = await fetchData();
  res.json(data);
});`,
                validation: { mode: 'includesAll', keywords: ['try', 'catch', 'next(error'] },
            },
        ],
    },
];
