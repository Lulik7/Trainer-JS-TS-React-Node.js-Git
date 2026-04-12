import { Lesson } from './lessons-types';

export const javascriptLessons: Lesson[] = [
    {
        id: 'js-variables',
        day: 1,
        level: 1,
        xp: 30,
        duration: '10 min',
        kind: 'javascript',
        titleRu: 'Переменные и типы данных',
        titleEn: 'Variables and Data Types',
        subtitleRu: 'let, const, string, number, boolean',
        subtitleEn: 'let, const, string, number, boolean',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Основы JavaScript: как объявлять переменные и какие типы данных существуют.',
        descriptionEn: 'JavaScript basics: how to declare variables and what data types exist.',
        theory: [
            {
                id: 'js-var-t1',
                titleRu: 'Что такое переменная',
                titleEn: 'What is a variable',
                bodyRu: 'Переменная — это именованное хранилище для данных. Представь коробку с наклейкой: наклейка — это имя переменной, а внутри коробки лежит значение. В JavaScript есть два основных способа объявить переменную: let и const. let позволяет менять значение позже, а const — нет. Для новичка важно запомнить: используй const по умолчанию, а let — только когда значение действительно будет меняться.',
                bodyEn: 'A variable is a named storage for data. Think of a box with a label: the label is the variable name, and inside the box is the value. In JavaScript there are two main ways to declare a variable: let and const. let allows changing the value later, const does not. For beginners: use const by default, and let only when the value will actually change.',
                exampleRu: `const userName = 'Анна';
let age = 25;

console.log(userName); // 'Анна'
console.log(age);      // 25

age = 26; // можно, потому что let
console.log(age);      // 26

// userName = 'Борис'; // ошибка! const нельзя менять`,
                exampleEn: `const userName = 'Anna';
let age = 25;

console.log(userName); // 'Anna'
console.log(age);      // 25

age = 26; // ok, because let
console.log(age);      // 26

// userName = 'Boris'; // error! const cannot be reassigned`,
            },
            {
                id: 'js-var-t2',
                titleRu: 'Основные типы данных',
                titleEn: 'Basic data types',
                bodyRu: 'В JavaScript есть несколько примитивных типов: string (текст), number (числа), boolean (true/false), null (пустое значение), undefined (значение не задано). Каждый тип ведёт себя по-своему. Строки заключаются в кавычки, числа пишутся без них, а boolean — это всегда true или false.',
                bodyEn: 'JavaScript has several primitive types: string (text), number (numbers), boolean (true/false), null (empty value), undefined (value not set). Each type behaves differently. Strings are wrapped in quotes, numbers are written without them, and boolean is always true or false.',
                exampleRu: `const name = 'Максим';        // string
const score = 42;              // number
const isActive = true;         // boolean
const nothing = null;          // null
let notDefined;                // undefined

console.log(typeof name);      // 'string'
console.log(typeof score);     // 'number'
console.log(typeof isActive);  // 'boolean'
console.log(typeof nothing);   // 'object' (особенность JS)
console.log(typeof notDefined); // 'undefined'`,
                exampleEn: `const name = 'Maxim';          // string
const score = 42;              // number
const isActive = true;         // boolean
const nothing = null;          // null
let notDefined;                // undefined

console.log(typeof name);      // 'string'
console.log(typeof score);     // 'number'
console.log(typeof isActive);  // 'boolean'
console.log(typeof nothing);   // 'object' (JS quirk)
console.log(typeof notDefined); // 'undefined'`,
            },
            {
                id: 'js-var-t3',
                titleRu: 'Шаблонные строки',
                titleEn: 'Template literals',
                bodyRu: 'Шаблонные строки (template literals) используют обратные кавычки ` и позволяют вставлять выражения через ${...}. Это удобнее, чем склеивать строки через +, особенно когда нужно подставить несколько значений.',
                bodyEn: 'Template literals use backticks ` and allow embedding expressions via ${...}. This is more convenient than concatenating strings with +, especially when you need to insert multiple values.',
                exampleRu: `const firstName = 'Ира';
const lastName = 'Петрова';
const age = 22;

// Старый способ через +
const greeting1 = 'Привет, ' + firstName + ' ' + lastName + '!';

// Новый способ через шаблонные строки
const greeting2 = \`Привет, \${firstName} \${lastName}! Тебе \${age} лет.\`;

console.log(greeting2);
// "Привет, Ира Петрова! Тебе 22 лет."`,
                exampleEn: `const firstName = 'Ira';
const lastName = 'Petrova';
const age = 22;

// Old way with +
const greeting1 = 'Hello, ' + firstName + ' ' + lastName + '!';

// New way with template literals
const greeting2 = \`Hello, \${firstName} \${lastName}! You are \${age} years old.\`;

console.log(greeting2);
// "Hello, Ira Petrova! You are 22 years old."`,
            },
            {
                id: 'js-var-t4',
                titleRu: 'Почему const по умолчанию',
                titleEn: 'Why const by default',
                bodyRu: 'Использование const по умолчанию — хорошая привычка. Когда читаешь код и видишь const, сразу понимаешь: это значение не изменится ниже. Это снижает когнитивную нагрузку. let используй только когда переменная действительно будет переприсваиваться (например, счётчик в цикле или аккумулятор).',
                bodyEn: 'Using const by default is a good habit. When you read code and see const, you immediately know: this value will not change below. This reduces cognitive load. Use let only when the variable will actually be reassigned (e.g., a loop counter or accumulator).',
                exampleRu: `// const для значений, которые не меняются
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const users = ['Аня', 'Борис']; // массив можно менять изнутри!

users.push('Катя'); // ок — мы не переприсваиваем users

// let для значений, которые меняются
let attempts = 0;
attempts = attempts + 1;`,
                exampleEn: `// const for values that don't change
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const users = ['Anna', 'Boris']; // array can be mutated!

users.push('Kate'); // ok — we are not reassigning users

// let for values that change
let attempts = 0;
attempts = attempts + 1;`,
            },
        ],
        tasks: [
            {
                id: 'js-var-task-1',
                type: 'theory',
                promptRu: 'Чем отличается let от const?',
                promptEn: 'What is the difference between let and const?',
                answerRu: 'let позволяет переприсвоить значение позже, а const — нет. const объявляет неизменяемую привязку.',
                answerEn: 'let allows reassignment later, const does not. const declares an immutable binding.',
                placeholderRu: 'Опиши разницу',
                placeholderEn: 'Describe the difference',
                validation: { mode: 'includesAny', keywords: ['менять', 'присво', 'reassign', 'change', 'immut'] },
            },
            {
                id: 'js-var-task-2',
                type: 'code',
                promptRu: 'Создай переменную greeting с шаблонной строкой, которая содержит имя и возраст.',
                promptEn: 'Create a greeting variable with a template literal containing name and age.',
                answerRu: 'Используй обратные кавычки и ${name}, ${age}.',
                answerEn: 'Use backticks and ${name}, ${age}.',
                starterCode: `const name = 'Макс';
const age = 20;

const greeting = '';`,
                validation: { mode: 'includesAll', keywords: ['`', '${', 'name', 'age'] },
            },
            {
                id: 'js-var-task-3',
                type: 'code',
                promptRu: 'Объяви три переменные: строку, число и boolean. Выведи typeof каждой.',
                promptEn: 'Declare three variables: a string, a number, and a boolean. Log typeof for each.',
                answerRu: 'const str = "hello"; const num = 10; const flag = true; console.log(typeof str);',
                answerEn: 'const str = "hello"; const num = 10; const flag = true; console.log(typeof str);',
                starterCode: `// Объяви переменные здесь

`,
                validation: { mode: 'includesAll', keywords: ['const', 'typeof', 'console.log'] },
            },
            {
                id: 'js-var-task-4',
                type: 'challenge',
                promptRu: 'Почему typeof null возвращает "object"?',
                promptEn: 'Why does typeof null return "object"?',
                answerRu: 'Это историческая ошибка JavaScript, которая осталась для обратной совместимости.',
                answerEn: 'It is a historical JavaScript bug kept for backward compatibility.',
                placeholderRu: 'Напиши своё объяснение',
                placeholderEn: 'Write your explanation',
                validation: { mode: 'includesAny', keywords: ['истор', 'ошибк', 'баг', 'bug', 'histor', 'legacy'] },
            },
        ],
    },
    {
        id: 'js-arrays',
        day: 2,
        level: 1,
        xp: 40,
        duration: '12 min',
        kind: 'javascript',
        titleRu: 'Массивы и методы',
        titleEn: 'Arrays and Methods',
        subtitleRu: 'map, filter, reduce и цепочки',
        subtitleEn: 'map, filter, reduce and chaining',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Разберись, как преобразовывать списки, не мутировать исходные данные и собирать результат в одну цепочку.',
        descriptionEn: 'Learn how to transform lists, avoid mutation, and build one clean transformation pipeline.',
        theory: [
            {
                id: 'js-arrays-deep-1',
                titleRu: 'Что такое массив простыми словами',
                titleEn: 'What an array is in simple terms',
                bodyRu: 'Массив — это список значений, которые лежат в определённом порядке. Представь список покупок: у каждого элемента есть своё место. В JavaScript массивы нужны постоянно: список пользователей, карточки товаров, уроки курса. Массив — это структура, с которой удобно выполнять одинаковые действия над многими элементами.',
                bodyEn: 'An array is a list of values stored in a specific order. Think of a shopping list: each item has its own position. In JavaScript, arrays are everywhere: users, products, lessons. An array is a structure that makes it easy to perform the same operation on many items.',
                exampleRu: `const topics = ['JavaScript', 'TypeScript', 'React'];

console.log(topics[0]);    // 'JavaScript'
console.log(topics.length); // 3

for (const topic of topics) {
  console.log('Изучаем тему:', topic);
}`,
                exampleEn: `const topics = ['JavaScript', 'TypeScript', 'React'];

console.log(topics[0]);    // 'JavaScript'
console.log(topics.length); // 3

for (const topic of topics) {
  console.log('Studying topic:', topic);
}`,
            },
            {
                id: 'js-arrays-deep-2',
                titleRu: 'map создаёт новый массив',
                titleEn: 'map creates a new array',
                bodyRu: 'map нужен тогда, когда у тебя уже есть массив, и ты хочешь получить новый массив такой же длины, но с изменёнными значениями. Это очень частый сценарий: взять список пользователей и превратить его в список имён, взять массив чисел и получить строки. map не удаляет элементы и не изменяет исходный массив.',
                bodyEn: 'Use map when you already have an array and want a new array of the same length with transformed values. This is very common: take users and turn into names, take numbers and turn into strings. map does not remove items and does not mutate the original.',
                exampleRu: `const prices = [199, 299, 499];

const labels = prices.map((price) => {
  return \`Цена: \${price} ₽\`;
});

console.log(labels);
// ['Цена: 199 ₽', 'Цена: 299 ₽', 'Цена: 499 ₽']

// Исходный массив не изменился:
console.log(prices); // [199, 299, 499]`,
                exampleEn: `const prices = [199, 299, 499];

const labels = prices.map((price) => {
  return \`Price: \${price}\`;
});

console.log(labels);
// ['Price: 199', 'Price: 299', 'Price: 499']

// Original array unchanged:
console.log(prices); // [199, 299, 499]`,
            },
            {
                id: 'js-arrays-deep-3',
                titleRu: 'filter отбирает элементы',
                titleEn: 'filter keeps matching items',
                bodyRu: 'filter полезен, когда из большого списка нужно оставить только подходящие элементы. Callback внутри filter должен вернуть true или false. Если true — элемент остаётся в новом массиве, если false — исчезает из результата.',
                bodyEn: 'filter is useful when you need to keep only matching items from a list. The callback inside filter returns true or false. If true, the item stays in the new array. If false, it is removed.',
                exampleRu: `type User = {
  name: string;
  isActive: boolean;
};

const users: User[] = [
  { name: 'Ира', isActive: true },
  { name: 'Макс', isActive: false },
  { name: 'Сара', isActive: true },
];

const activeUsers = users.filter((user) => {
  return user.isActive === true;
});

console.log(activeUsers);
// [{ name: 'Ира', isActive: true }, { name: 'Сара', isActive: true }]`,
                exampleEn: `type User = {
  name: string;
  isActive: boolean;
};

const users: User[] = [
  { name: 'Ira', isActive: true },
  { name: 'Max', isActive: false },
  { name: 'Sara', isActive: true },
];

const activeUsers = users.filter((user) => {
  return user.isActive === true;
});

console.log(activeUsers);
// [{ name: 'Ira', isActive: true }, { name: 'Sara', isActive: true }]`,
            },
            {
                id: 'js-arrays-deep-4',
                titleRu: 'reduce — аккумулятор',
                titleEn: 'reduce is an accumulator',
                bodyRu: 'reduce берёт массив и постепенно собирает один итог. Итогом может быть сумма, объект, словарь или группировка. Проговаривай reduce по шагам: берём стартовое значение, идём по элементам, обновляем итог, возвращаем итог.',
                bodyEn: 'reduce takes an array and gradually builds one final result. That result can be a sum, object, dictionary, or grouped data. Say it step by step: start with initial value, go through items, update result, return result.',
                exampleRu: `const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, currentNumber) => {
  const nextSum = sum + currentNumber;
  return nextSum;
}, 0);

console.log(total); // 100`,
                exampleEn: `const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, currentNumber) => {
  const nextSum = sum + currentNumber;
  return nextSum;
}, 0);

console.log(total); // 100`,
            },
            {
                id: 'js-arrays-deep-5',
                titleRu: 'Цепочки методов',
                titleEn: 'Method chaining',
                bodyRu: 'Когда ты видишь filter, потом map, потом reduce, читай сверху вниз: какие элементы остаются? как преобразуются? какой итог? Если цепочка длинная, разбей на промежуточные переменные.',
                bodyEn: 'When you see filter, then map, then reduce, read top to bottom: which items stay? how are they transformed? what final result? If the chain is long, use intermediate variables.',
                exampleRu: `type Student = {
  name: string;
  score: number;
  isActive: boolean;
};

const students: Student[] = [
  { name: 'Аня', score: 92, isActive: true },
  { name: 'Олег', score: 55, isActive: false },
  { name: 'Мира', score: 81, isActive: true },
];

const activeStudents = students.filter((s) => s.isActive);
const names = activeStudents.map((s) => s.name.toUpperCase());
const result = names.join(', ');

console.log(result); // 'АНЯ, МИРА'`,
                exampleEn: `type Student = {
  name: string;
  score: number;
  isActive: boolean;
};

const students: Student[] = [
  { name: 'Anna', score: 92, isActive: true },
  { name: 'Oleg', score: 55, isActive: false },
  { name: 'Mira', score: 81, isActive: true },
];

const activeStudents = students.filter((s) => s.isActive);
const names = activeStudents.map((s) => s.name.toUpperCase());
const result = names.join(', ');

console.log(result); // 'ANNA, MIRA'`,
            },
        ],
        tasks: [
            {
                id: 'js-arr-task-1',
                type: 'theory',
                promptRu: 'Что вернёт [1, 2, 3].map((n) => n * 2)?',
                promptEn: 'What does [1, 2, 3].map((n) => n * 2) return?',
                answerRu: 'Новый массив [2, 4, 6]. Исходный массив останется без изменений.',
                answerEn: 'A new array [2, 4, 6]. The original array stays unchanged.',
                placeholderRu: 'Напиши ответ',
                placeholderEn: 'Write your answer',
                validation: { mode: 'includesAll', keywords: ['2', '4', '6'] },
            },
            {
                id: 'js-arr-task-2',
                type: 'code',
                promptRu: 'Напиши функцию getAdults, которая возвращает пользователей с age >= 18.',
                promptEn: 'Write a getAdults function that returns users with age >= 18.',
                answerRu: 'users.filter((user) => user.age >= 18)',
                answerEn: 'users.filter((user) => user.age >= 18)',
                starterCode: `type User = { name: string; age: number };

const users: User[] = [
  { name: 'Ira', age: 17 },
  { name: 'Max', age: 21 },
  { name: 'Sara', age: 25 },
];

function getAdults(list: User[]) {
  return list;
}`,
                validation: { mode: 'includesAll', keywords: ['filter', 'age', '18'] },
            },
            {
                id: 'js-arr-task-3',
                type: 'code',
                promptRu: 'С помощью reduce посчитай сумму массива [10, 20, 30].',
                promptEn: 'Use reduce to calculate the sum of [10, 20, 30].',
                answerRu: 'numbers.reduce((sum, n) => sum + n, 0)',
                answerEn: 'numbers.reduce((sum, n) => sum + n, 0)',
                starterCode: `const numbers = [10, 20, 30];

const total = 0;`,
                validation: { mode: 'includesAll', keywords: ['reduce', 'sum', '0'] },
            },
            {
                id: 'js-arr-task-4',
                type: 'code',
                promptRu: 'Собери массив имён активных пользователей в верхнем регистре через filter и map.',
                promptEn: 'Build an array of active user names in uppercase using filter and map.',
                answerRu: 'filter по isActive + map с toUpperCase',
                answerEn: 'filter on isActive + map with toUpperCase',
                starterCode: `type User = { name: string; isActive: boolean };

const users: User[] = [
  { name: 'Ira', isActive: true },
  { name: 'Max', isActive: false },
  { name: 'Sara', isActive: true },
];

const result = users;`,
                validation: { mode: 'includesAll', keywords: ['filter', 'map', 'touppercase'] },
            },
            {
                id: 'js-arr-task-5',
                type: 'challenge',
                promptRu: 'Когда reduce лучше, чем map + filter?',
                promptEn: 'When is reduce better than map + filter?',
                answerRu: 'Когда нужно собрать одно итоговое значение: сумму, объект, словарь.',
                answerEn: 'When you need one accumulated result: sum, object, dictionary.',
                placeholderRu: 'Например: сумма, группировка...',
                placeholderEn: 'For example: sum, grouping...',
                validation: { mode: 'includesAny', keywords: ['сум', 'объект', 'sum', 'object', 'group'] },
            },
        ],
    },
    {
        id: 'js-conditions-loops',
        day: 3,
        level: 1,
        xp: 45,
        duration: '13 min',
        kind: 'javascript',
        titleRu: 'Условия и циклы',
        titleEn: 'Conditions and Loops',
        subtitleRu: 'if, ternary, for...of и early return',
        subtitleEn: 'if, ternary, for...of and early return',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Научись выбирать между if, тернарным оператором и циклами.',
        descriptionEn: 'Learn when to use if, ternary expressions, and loops.',
        theory: [
            {
                id: 'js-cond-deep-1',
                titleRu: 'Условие — это развилка',
                titleEn: 'A condition is a fork',
                bodyRu: 'Программа почти никогда не идёт по одному и тому же пути. Иногда пользователь авторизован, иногда нет. if описывает: «если произошло это — делаем одно, иначе — другое». Полезно мысленно проговаривать код на человеческом языке.',
                bodyEn: 'A program almost never follows the exact same path. Sometimes the user is signed in, sometimes not. if describes: "if this is true, do one thing, otherwise another". It helps to read code like normal language.',
                exampleRu: `const isLoggedIn = true;

if (isLoggedIn) {
  console.log('Показываем личный кабинет');
} else {
  console.log('Показываем экран входа');
}`,
                exampleEn: `const isLoggedIn = true;

if (isLoggedIn) {
  console.log('Show the dashboard');
} else {
  console.log('Show the sign-in screen');
}`,
            },
            {
                id: 'js-cond-deep-2',
                titleRu: 'Тернарный оператор для коротких решений',
                titleEn: 'Ternary for compact decisions',
                bodyRu: 'Тернарный оператор хорош для маленьких и очевидных решений. Если же внутри много текста или несколько условий, обычный if читается лучше. Читаемость важнее краткости.',
                bodyEn: 'A ternary works well for small obvious decisions. If there is complex logic, a regular if is much easier to read. Readability matters more than brevity.',
                exampleRu: `function getStatusLabel(isLoading: boolean, hasError: boolean) {
  if (hasError) {
    return 'Ошибка загрузки';
  }

  if (isLoading) {
    return 'Загрузка';
  }

  return 'Готово';
}

// Тернарный для простого случая:
const label = isLoading ? 'Загрузка' : 'Готово';`,
                exampleEn: `function getStatusLabel(isLoading: boolean, hasError: boolean) {
  if (hasError) {
    return 'Loading error';
  }

  if (isLoading) {
    return 'Loading';
  }

  return 'Done';
}

// Ternary for a simple case:
const label = isLoading ? 'Loading' : 'Done';`,
            },
            {
                id: 'js-cond-deep-3',
                titleRu: 'for...of — удобный цикл',
                titleEn: 'for...of is a convenient loop',
                bodyRu: 'Если тебе нужно сделать одно и то же для каждого элемента, не копируй код. Используй for...of — он хорошо читается: «для каждого элемента в коллекции сделай...».',
                bodyEn: 'If you need to do the same thing for every item, do not copy code. Use for...of — it reads clearly: "for each item in the collection, do...".',
                exampleRu: `const lessons = ['Массивы', 'Функции', 'React'];

for (const lesson of lessons) {
  console.log('Изучаем урок:', lesson);
}`,
                exampleEn: `const lessons = ['Arrays', 'Functions', 'React'];

for (const lesson of lessons) {
  console.log('Studying lesson:', lesson);
}`,
            },
            {
                id: 'js-cond-deep-4',
                titleRu: 'Early return делает код плоским',
                titleEn: 'Early return keeps code flat',
                bodyRu: 'Глубокая вложенность — частая проблема новичков. Early return помогает: сначала проверяем плохие случаи и выходим. После этого основная логика остаётся плоской.',
                bodyEn: 'Deep nesting is a common beginner problem. Early return helps: handle bad cases first and return. Then the main logic stays flat.',
                exampleRu: `function getUserGreeting(user?: { name: string }) {
  if (!user) {
    return 'Пользователь не найден';
  }

  return \`Привет, \${user.name}!\`;
}`,
                exampleEn: `function getUserGreeting(user?: { name: string }) {
  if (!user) {
    return 'User not found';
  }

  return \`Hello, \${user.name}!\`;
}`,
            },
        ],
        tasks: [
            {
                id: 'js-cond-t1',
                type: 'theory',
                promptRu: 'Когда тернарный оператор хуже обычного if?',
                promptEn: 'When is a ternary worse than a normal if?',
                answerRu: 'Когда логика длинная или вложенная — if читается лучше.',
                answerEn: 'When the logic is long or nested — if is clearer.',
                placeholderRu: 'Опиши',
                placeholderEn: 'Describe',
                validation: { mode: 'includesAny', keywords: ['длин', 'влож', 'чит', 'long', 'nested', 'read'] },
            },
            {
                id: 'js-cond-t2',
                type: 'code',
                promptRu: 'Верни "adult", если age >= 18, иначе "minor".',
                promptEn: 'Return "adult" if age >= 18, otherwise "minor".',
                answerRu: 'return age >= 18 ? "adult" : "minor";',
                answerEn: 'return age >= 18 ? "adult" : "minor";',
                starterCode: `function getAccessLabel(age: number) {
  return "";
}`,
                validation: { mode: 'includesAll', keywords: ['18', 'adult', 'minor'] },
            },
            {
                id: 'js-cond-t3',
                type: 'code',
                promptRu: 'С помощью for...of посчитай сумму чисел массива numbers.',
                promptEn: 'Use for...of to calculate the sum of numbers.',
                answerRu: 'Используй let sum = 0 и for...of.',
                answerEn: 'Use let sum = 0 and for...of.',
                starterCode: `const numbers = [4, 8, 15, 16, 23, 42];
let sum = 0;

`,
                validation: { mode: 'includesAll', keywords: ['for', 'of', 'sum'] },
            },
            {
                id: 'js-cond-t4',
                type: 'challenge',
                promptRu: 'Зачем делать early return в начале функции?',
                promptEn: 'Why use an early return at the start?',
                answerRu: 'Чтобы обработать крайние случаи и уменьшить вложенность.',
                answerEn: 'To handle edge cases and reduce nesting.',
                placeholderRu: 'Напиши кратко',
                placeholderEn: 'Answer briefly',
                validation: { mode: 'includesAny', keywords: ['влож', 'крайн', 'nest', 'edge'] },
            },
        ],
    },
    {
        id: 'js-functions-scope',
        day: 4,
        level: 2,
        xp: 55,
        duration: '15 min',
        kind: 'javascript',
        titleRu: 'Функции и область видимости',
        titleEn: 'Functions and Scope',
        subtitleRu: 'Параметры, замыкания, чистые функции',
        subtitleEn: 'Parameters, closures, pure functions',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Пойми, как функции получают доступ к переменным и что такое замыкание.',
        descriptionEn: 'Understand how functions access variables and what closures are.',
        theory: [
            {
                id: 'js-fn-d1',
                titleRu: 'Функция принимает и возвращает',
                titleEn: 'A function takes and returns',
                bodyRu: 'Хорошая функция делает одну понятную вещь: принимает данные, обрабатывает и отдаёт результат. Стрелочные функции — более короткий синтаксис для записи функций.',
                bodyEn: 'A good function does one clear thing: takes data, processes it, returns a result. Arrow functions are a shorter syntax for writing functions.',
                exampleRu: `// Обычная функция
function add(a: number, b: number): number {
  return a + b;
}

// Стрелочная функция
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Краткая форма (одно выражение)
const double = (n: number) => n * 2;

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(double(7));      // 14`,
                exampleEn: `// Regular function
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Short form (single expression)
const double = (n: number) => n * 2;

console.log(add(2, 3));      // 5
console.log(multiply(4, 5)); // 20
console.log(double(7));      // 14`,
            },
            {
                id: 'js-fn-d2',
                titleRu: 'Замыкание помнит внешние переменные',
                titleEn: 'A closure remembers outer variables',
                bodyRu: 'Вложенная функция имеет доступ к переменным родительской функции даже после её завершения. Это мощный паттерн для создания «фабрик» функций.',
                bodyEn: 'A nested function can access variables from its parent function even after the parent has finished. This is a powerful pattern for creating function "factories".',
                exampleRu: `function createCounter() {
  let count = 0;

  return {
    increment: () => {
      count += 1;
      return count;
    },
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`,
                exampleEn: `function createCounter() {
  let count = 0;

  return {
    increment: () => {
      count += 1;
      return count;
    },
    getCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`,
            },
            {
                id: 'js-fn-d3',
                titleRu: 'let и const блочно ограничены',
                titleEn: 'let and const are block-scoped',
                bodyRu: 'Переменные, объявленные через let и const, существуют только внутри своего блока {}. Это помогает избегать конфликтов имён.',
                bodyEn: 'Variables declared with let and const exist only inside their block {}. This helps avoid name conflicts.',
                exampleRu: `function example() {
  const outer = 'я снаружи';

  if (true) {
    const inner = 'я внутри';
    console.log(outer); // 'я снаружи' — доступно
    console.log(inner); // 'я внутри'
  }

  console.log(outer); // 'я снаружи'
  // console.log(inner); // Ошибка! inner не видна здесь
}`,
                exampleEn: `function example() {
  const outer = 'I am outside';

  if (true) {
    const inner = 'I am inside';
    console.log(outer); // 'I am outside' — accessible
    console.log(inner); // 'I am inside'
  }

  console.log(outer); // 'I am outside'
  // console.log(inner); // Error! inner is not visible here
}`,
            },
            {
                id: 'js-fn-d4',
                titleRu: 'Чистые функции проще тестировать',
                titleEn: 'Pure functions are easier to test',
                bodyRu: 'Если функция зависит только от входных данных и не меняет внешний мир, её легче предсказать и тестировать. Результат всегда один и тот же при одинаковых аргументах.',
                bodyEn: 'If a function depends only on inputs and does not affect the outside world, it is easier to predict and test. The result is always the same for the same arguments.',
                exampleRu: `// Чистая функция — зависит только от аргументов
const calculateTax = (price: number, rate: number) => {
  return price * rate;
};

console.log(calculateTax(100, 0.2)); // всегда 20
console.log(calculateTax(100, 0.2)); // всегда 20

// Не чистая — зависит от внешней переменной
let globalRate = 0.2;
const calculateTaxBad = (price: number) => {
  return price * globalRate; // зависит от globalRate
};`,
                exampleEn: `// Pure function — depends only on arguments
const calculateTax = (price: number, rate: number) => {
  return price * rate;
};

console.log(calculateTax(100, 0.2)); // always 20
console.log(calculateTax(100, 0.2)); // always 20

// Not pure — depends on external variable
let globalRate = 0.2;
const calculateTaxBad = (price: number) => {
  return price * globalRate; // depends on globalRate
};`,
            },
        ],
        tasks: [
            {
                id: 'js-fn-t1',
                type: 'theory',
                promptRu: 'Что такое замыкание?',
                promptEn: 'What is a closure?',
                answerRu: 'Функция, которая помнит переменные из внешней области видимости.',
                answerEn: 'A function that remembers variables from an outer scope.',
                placeholderRu: 'Опиши коротко',
                placeholderEn: 'Describe briefly',
                validation: { mode: 'includesAny', keywords: ['внеш', 'област', 'remember', 'outer', 'scope'] },
            },
            {
                id: 'js-fn-t2',
                type: 'code',
                promptRu: 'Создай функцию multiply(a, b), которая возвращает произведение.',
                promptEn: 'Create a multiply(a, b) function that returns the product.',
                answerRu: 'return a * b;',
                answerEn: 'return a * b;',
                starterCode: `function multiply(a: number, b: number) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['return', '*'] },
            },
            {
                id: 'js-fn-t3',
                type: 'code',
                promptRu: 'Сделай createGreeter(name), которая возвращает функцию приветствия.',
                promptEn: 'Make createGreeter(name) that returns a greeting function.',
                answerRu: 'return () => `Привет, ${name}!`;',
                answerEn: 'return () => `Hello, ${name}!`;',
                starterCode: `function createGreeter(name: string) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['return', 'name'] },
            },
            {
                id: 'js-fn-t4',
                type: 'challenge',
                promptRu: 'Почему чистые функции удобны?',
                promptEn: 'Why are pure functions convenient?',
                answerRu: 'Их легче понимать и тестировать, результат зависит только от аргументов.',
                answerEn: 'They are easier to understand and test, result depends only on arguments.',
                placeholderRu: 'Укажи про предсказуемость',
                placeholderEn: 'Mention predictability',
                validation: { mode: 'includesAny', keywords: ['тест', 'предс', 'test', 'predict'] },
            },
        ],
    },
    {
        id: 'js-objects-destructuring',
        day: 5,
        level: 2,
        xp: 50,
        duration: '14 min',
        kind: 'javascript',
        titleRu: 'Объекты и деструктуризация',
        titleEn: 'Objects and Destructuring',
        subtitleRu: 'Ключи, spread, rest, вложенность',
        subtitleEn: 'Keys, spread, rest, nesting',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Научись удобно работать с объектами: извлекать данные, копировать и комбинировать.',
        descriptionEn: 'Learn to work with objects: extract data, copy and combine them.',
        theory: [
            {
                id: 'js-obj-d1',
                titleRu: 'Объект — набор пар ключ-значение',
                titleEn: 'An object is a set of key-value pairs',
                bodyRu: 'Объект хранит данные в виде свойств. Каждое свойство — это пара ключ: значение. Объекты повсюду: пользователи, настройки, ответы API.',
                bodyEn: 'An object stores data as properties. Each property is a key: value pair. Objects are everywhere: users, settings, API responses.',
                exampleRu: `const user = {
  name: 'Анна',
  age: 25,
  isActive: true,
};

console.log(user.name);    // 'Анна'
console.log(user['age']);  // 25

// Добавление нового свойства
user.email = 'anna@mail.com';`,
                exampleEn: `const user = {
  name: 'Anna',
  age: 25,
  isActive: true,
};

console.log(user.name);    // 'Anna'
console.log(user['age']);  // 25

// Adding a new property
user.email = 'anna@mail.com';`,
            },
            {
                id: 'js-obj-d2',
                titleRu: 'Деструктуризация извлекает данные',
                titleEn: 'Destructuring extracts data',
                bodyRu: 'Деструктуризация позволяет «распаковать» свойства объекта в отдельные переменные за одну строку. Это делает код короче и понятнее.',
                bodyEn: 'Destructuring lets you "unpack" object properties into separate variables in one line. This makes code shorter and clearer.',
                exampleRu: `const user = { name: 'Макс', age: 30, city: 'Москва' };

// Без деструктуризации
const name1 = user.name;
const age1 = user.age;

// С деструктуризацией
const { name, age, city } = user;

console.log(name); // 'Макс'
console.log(age);  // 30
console.log(city); // 'Москва'

// Переименование при деструктуризации
const { name: userName } = user;
console.log(userName); // 'Макс'`,
                exampleEn: `const user = { name: 'Max', age: 30, city: 'Moscow' };

// Without destructuring
const name1 = user.name;
const age1 = user.age;

// With destructuring
const { name, age, city } = user;

console.log(name); // 'Max'
console.log(age);  // 30
console.log(city); // 'Moscow'

// Renaming during destructuring
const { name: userName } = user;
console.log(userName); // 'Max'`,
            },
            {
                id: 'js-obj-d3',
                titleRu: 'Spread копирует и комбинирует',
                titleEn: 'Spread copies and combines',
                bodyRu: 'Оператор ... (spread) позволяет скопировать все свойства одного объекта в другой. Это удобно для иммутабельных обновлений.',
                bodyEn: 'The ... (spread) operator lets you copy all properties from one object to another. This is useful for immutable updates.',
                exampleRu: `const defaults = { theme: 'dark', lang: 'ru', fontSize: 14 };
const userSettings = { lang: 'en', fontSize: 18 };

// Комбинируем: userSettings перезаписывает defaults
const merged = { ...defaults, ...userSettings };

console.log(merged);
// { theme: 'dark', lang: 'en', fontSize: 18 }

// Копия с одним изменённым полем
const updated = { ...merged, theme: 'light' };
console.log(updated.theme); // 'light'`,
                exampleEn: `const defaults = { theme: 'dark', lang: 'ru', fontSize: 14 };
const userSettings = { lang: 'en', fontSize: 18 };

// Combine: userSettings overrides defaults
const merged = { ...defaults, ...userSettings };

console.log(merged);
// { theme: 'dark', lang: 'en', fontSize: 18 }

// Copy with one changed field
const updated = { ...merged, theme: 'light' };
console.log(updated.theme); // 'light'`,
            },
            {
                id: 'js-obj-d4',
                titleRu: 'Rest собирает оставшееся',
                titleEn: 'Rest collects the remaining',
                bodyRu: 'При деструктуризации оператор ...rest собирает все не извлечённые свойства в новый объект. Полезно для отделения известных полей от остальных.',
                bodyEn: 'During destructuring, the ...rest operator collects all non-extracted properties into a new object. Useful for separating known fields from the rest.',
                exampleRu: `const user = { id: 1, name: 'Ира', age: 22, city: 'Казань' };

const { id, ...rest } = user;

console.log(id);   // 1
console.log(rest); // { name: 'Ира', age: 22, city: 'Казань' }`,
                exampleEn: `const user = { id: 1, name: 'Ira', age: 22, city: 'Kazan' };

const { id, ...rest } = user;

console.log(id);   // 1
console.log(rest); // { name: 'Ira', age: 22, city: 'Kazan' }`,
            },
        ],
        tasks: [
            {
                id: 'js-obj-t1',
                type: 'code',
                promptRu: 'Деструктуризируй объект user и извлеки name и age.',
                promptEn: 'Destructure the user object and extract name and age.',
                answerRu: 'const { name, age } = user;',
                answerEn: 'const { name, age } = user;',
                starterCode: `const user = { name: 'Ira', age: 22, city: 'Moscow' };

// извлеки name и age`,
                validation: { mode: 'includesAll', keywords: ['{', 'name', 'age', '}'] },
            },
            {
                id: 'js-obj-t2',
                type: 'code',
                promptRu: 'Создай копию объекта settings с изменённым theme на "light" через spread.',
                promptEn: 'Create a copy of settings with theme changed to "light" using spread.',
                answerRu: 'const updated = { ...settings, theme: "light" };',
                answerEn: 'const updated = { ...settings, theme: "light" };',
                starterCode: `const settings = { theme: 'dark', lang: 'ru' };

const updated = settings;`,
                validation: { mode: 'includesAll', keywords: ['...settings', 'theme', 'light'] },
            },
            {
                id: 'js-obj-t3',
                type: 'theory',
                promptRu: 'Чем spread отличается от rest?',
                promptEn: 'How is spread different from rest?',
                answerRu: 'Spread разворачивает объект/массив в элементы, а rest собирает оставшиеся элементы в один объект/массив.',
                answerEn: 'Spread expands an object/array into elements, rest collects remaining elements into one object/array.',
                placeholderRu: 'Опиши разницу',
                placeholderEn: 'Describe the difference',
                validation: { mode: 'includesAny', keywords: ['развор', 'собир', 'expand', 'collect', 'остав', 'remain'] },
            },
            {
                id: 'js-obj-t4',
                type: 'code',
                promptRu: 'Используй rest, чтобы отделить id от остальных полей объекта.',
                promptEn: 'Use rest to separate id from the other fields.',
                answerRu: 'const { id, ...rest } = user;',
                answerEn: 'const { id, ...rest } = user;',
                starterCode: `const user = { id: 1, name: 'Max', role: 'admin' };

`,
                validation: { mode: 'includesAll', keywords: ['id', '...rest'] },
            },
        ],
    },
    {
        id: 'js-async',
        day: 6,
        level: 3,
        xp: 65,
        duration: '18 min',
        kind: 'javascript',
        titleRu: 'Асинхронность: Promise и async/await',
        titleEn: 'Async: Promise and async/await',
        subtitleRu: 'Промисы, await, обработка ошибок',
        subtitleEn: 'Promises, await, error handling',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Пойми, как JavaScript работает с асинхронными операциями: запросами, таймерами.',
        descriptionEn: 'Understand how JavaScript handles async operations: requests, timers.',
        theory: [
            {
                id: 'js-async-d1',
                titleRu: 'Что такое асинхронность',
                titleEn: 'What is asynchrony',
                bodyRu: 'JavaScript однопоточный — он выполняет код строка за строкой. Но некоторые операции (запросы к серверу, таймеры) занимают время. Вместо блокировки JS запускает операцию и продолжает дальше, а результат приходит позже.',
                bodyEn: 'JavaScript is single-threaded — it runs code line by line. But some operations (server requests, timers) take time. Instead of blocking, JS starts the operation and continues, then handles the result later.',
                exampleRu: `console.log('1. Начало');

setTimeout(() => {
  console.log('2. Таймер сработал');
}, 1000);

console.log('3. Конец');

// Порядок вывода:
// 1. Начало
// 3. Конец
// 2. Таймер сработал (через 1 секунду)`,
                exampleEn: `console.log('1. Start');

setTimeout(() => {
  console.log('2. Timer fired');
}, 1000);

console.log('3. End');

// Output order:
// 1. Start
// 3. End
// 2. Timer fired (after 1 second)`,
            },
            {
                id: 'js-async-d2',
                titleRu: 'Promise — обещание результата',
                titleEn: 'Promise — a promise of a result',
                bodyRu: 'Promise — это объект, который представляет будущий результат операции. Он может быть в трёх состояниях: pending (ожидание), fulfilled (успех), rejected (ошибка). Метод .then() обрабатывает успех, .catch() — ошибку.',
                bodyEn: 'A Promise is an object representing a future result. It can be in three states: pending, fulfilled, rejected. The .then() method handles success, .catch() handles errors.',
                exampleRu: `const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: 'Анна', age: 25 });
      } else {
        reject(new Error('Не удалось загрузить'));
      }
    }, 1000);
  });
};

fetchUser()
  .then((user) => {
    console.log('Пользователь:', user.name);
  })
  .catch((error) => {
    console.log('Ошибка:', error.message);
  });`,
                exampleEn: `const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: 'Anna', age: 25 });
      } else {
        reject(new Error('Failed to load'));
      }
    }, 1000);
  });
};

fetchUser()
  .then((user) => {
    console.log('User:', user.name);
  })
  .catch((error) => {
    console.log('Error:', error.message);
  });`,
            },
            {
                id: 'js-async-d3',
                titleRu: 'async/await — удобный синтаксис',
                titleEn: 'async/await — convenient syntax',
                bodyRu: 'async/await — это синтаксический сахар над Promise. Функция с async всегда возвращает Promise. await приостанавливает выполнение до получения результата. Код выглядит как синхронный, но работает асинхронно.',
                bodyEn: 'async/await is syntactic sugar over Promises. A function with async always returns a Promise. await pauses execution until the result arrives. Code looks synchronous but works asynchronously.',
                exampleRu: `async function loadUser() {
  try {
    console.log('Загружаем...');
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    console.log('Имя:', user.name);
    return user;
  } catch (error) {
    console.log('Ошибка загрузки:', error);
    return null;
  }
}

// Вызов
loadUser();`,
                exampleEn: `async function loadUser() {
  try {
    console.log('Loading...');
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    console.log('Name:', user.name);
    return user;
  } catch (error) {
    console.log('Load error:', error);
    return null;
  }
}

// Call
loadUser();`,
            },
            {
                id: 'js-async-d4',
                titleRu: 'Обработка ошибок с try/catch',
                titleEn: 'Error handling with try/catch',
                bodyRu: 'При работе с async/await ошибки ловятся через try/catch. Это важно, потому что запрос к серверу может упасть, и приложение не должно при этом ломаться.',
                bodyEn: 'With async/await, errors are caught using try/catch. This matters because a server request can fail, and the app should not crash.',
                exampleRu: `async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`HTTP ошибка: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Произошла ошибка:', error);
    return null;
  } finally {
    console.log('Запрос завершён');
  }
}`,
                exampleEn: `async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`HTTP error: \${response.status}\`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  } finally {
    console.log('Request finished');
  }
}`,
            },
        ],
        tasks: [
            {
                id: 'js-async-t1',
                type: 'theory',
                promptRu: 'Что такое Promise и зачем он нужен?',
                promptEn: 'What is a Promise and why is it needed?',
                answerRu: 'Promise — объект, представляющий будущий результат асинхронной операции.',
                answerEn: 'A Promise is an object representing the future result of an async operation.',
                placeholderRu: 'Опиши простыми словами',
                placeholderEn: 'Describe in simple words',
                validation: { mode: 'includesAny', keywords: ['будущ', 'результ', 'асинхр', 'future', 'result', 'async'] },
            },
            {
                id: 'js-async-t2',
                type: 'code',
                promptRu: 'Напиши async-функцию, которая ждёт 1 секунду и возвращает "done".',
                promptEn: 'Write an async function that waits 1 second and returns "done".',
                answerRu: 'async function delay() { await new Promise(r => setTimeout(r, 1000)); return "done"; }',
                answerEn: 'async function delay() { await new Promise(r => setTimeout(r, 1000)); return "done"; }',
                starterCode: `async function waitAndReturn() {
  
}`,
                validation: { mode: 'includesAll', keywords: ['await', 'settimeout', 'return'] },
            },
            {
                id: 'js-async-t3',
                type: 'code',
                promptRu: 'Добавь try/catch в async-функцию fetchData.',
                promptEn: 'Add try/catch to the async function fetchData.',
                answerRu: 'try { const data = await fetch(url); } catch (error) { console.error(error); }',
                answerEn: 'try { const data = await fetch(url); } catch (error) { console.error(error); }',
                starterCode: `async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}`,
                validation: { mode: 'includesAll', keywords: ['try', 'catch', 'error'] },
            },
            {
                id: 'js-async-t4',
                type: 'challenge',
                promptRu: 'Чем async/await лучше цепочки .then().catch()?',
                promptEn: 'How is async/await better than .then().catch() chains?',
                answerRu: 'Код читается линейно, проще отлаживать и добавлять условия.',
                answerEn: 'Code reads linearly, easier to debug and add conditions.',
                placeholderRu: 'Укажи про читаемость',
                placeholderEn: 'Mention readability',
                validation: { mode: 'includesAny', keywords: ['чит', 'линей', 'read', 'linear', 'debug'] },
            },
        ],
    },
    {
        id: 'js-error-handling',
        day: 7,
        level: 3,
        xp: 60,
        duration: '15 min',
        kind: 'javascript',
        titleRu: 'Обработка ошибок и отладка',
        titleEn: 'Error Handling and Debugging',
        subtitleRu: 'try/catch, throw, console, typeof проверки',
        subtitleEn: 'try/catch, throw, console, typeof checks',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Научись ловить ошибки, выбрасывать свои исключения и отлаживать код.',
        descriptionEn: 'Learn to catch errors, throw your own exceptions, and debug code.',
        theory: [
            {
                id: 'js-err-d1',
                titleRu: 'try/catch ловит ошибки',
                titleEn: 'try/catch catches errors',
                bodyRu: 'Когда код может упасть (парсинг JSON, работа с API), оберни его в try/catch. Если произойдёт ошибка, выполнение перейдёт в catch, и приложение не сломается.',
                bodyEn: 'When code might fail (JSON parsing, API calls), wrap it in try/catch. If an error occurs, execution moves to catch, and the app does not crash.',
                exampleRu: `function parseJSON(text: string) {
  try {
    const data = JSON.parse(text);
    console.log('Успешно:', data);
    return data;
  } catch (error) {
    console.error('Ошибка парсинга:', error);
    return null;
  }
}

parseJSON('{"name": "Ира"}'); // Успешно
parseJSON('not json');        // Ошибка парсинга`,
                exampleEn: `function parseJSON(text: string) {
  try {
    const data = JSON.parse(text);
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Parse error:', error);
    return null;
  }
}

parseJSON('{"name": "Ira"}'); // Success
parseJSON('not json');        // Parse error`,
            },
            {
                id: 'js-err-d2',
                titleRu: 'throw создаёт свою ошибку',
                titleEn: 'throw creates your own error',
                bodyRu: 'Ты можешь выбросить ошибку с понятным сообщением, чтобы было ясно, что пошло не так. throw new Error("сообщение") — стандартный способ.',
                bodyEn: 'You can throw an error with a clear message so it is obvious what went wrong. throw new Error("message") is the standard way.',
                exampleRu: `function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Деление на ноль невозможно');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (error) {
  console.error(error.message);
  // 'Деление на ноль невозможно'
}`,
                exampleEn: `function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
} catch (error) {
  console.error(error.message);
  // 'Cannot divide by zero'
}`,
            },
            {
                id: 'js-err-d3',
                titleRu: 'console для отладки',
                titleEn: 'console for debugging',
                bodyRu: 'console.log, console.warn, console.error — твои лучшие друзья при отладке. console.table красиво выводит массивы и объекты. console.time/timeEnd измеряет время.',
                bodyEn: 'console.log, console.warn, console.error are your best debugging friends. console.table prettily prints arrays and objects. console.time/timeEnd measures time.',
                exampleRu: `const users = [
  { name: 'Ира', age: 22 },
  { name: 'Макс', age: 30 },
];

console.log('Список пользователей:', users);
console.table(users);

console.time('операция');
// ... какая-то работа ...
console.timeEnd('операция'); // операция: 0.5ms`,
                exampleEn: `const users = [
  { name: 'Ira', age: 22 },
  { name: 'Max', age: 30 },
];

console.log('User list:', users);
console.table(users);

console.time('operation');
// ... some work ...
console.timeEnd('operation'); // operation: 0.5ms`,
            },
        ],
        tasks: [
            {
                id: 'js-err-t1',
                type: 'code',
                promptRu: 'Напиши функцию safeParse, которая парсит JSON и возвращает null при ошибке.',
                promptEn: 'Write a safeParse function that parses JSON and returns null on error.',
                answerRu: 'try { return JSON.parse(text); } catch { return null; }',
                answerEn: 'try { return JSON.parse(text); } catch { return null; }',
                starterCode: `function safeParse(text: string) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['try', 'catch', 'json.parse', 'null'] },
            },
            {
                id: 'js-err-t2',
                type: 'code',
                promptRu: 'Добавь проверку: если age < 0, выброси ошибку "Invalid age".',
                promptEn: 'Add a check: if age < 0, throw an error "Invalid age".',
                answerRu: 'if (age < 0) { throw new Error("Invalid age"); }',
                answerEn: 'if (age < 0) { throw new Error("Invalid age"); }',
                starterCode: `function setAge(age: number) {
  // проверка здесь
  return age;
}`,
                validation: { mode: 'includesAll', keywords: ['throw', 'error', 'age'] },
            },
            {
                id: 'js-err-t3',
                type: 'challenge',
                promptRu: 'Почему нельзя просто игнорировать ошибки?',
                promptEn: 'Why should you not just ignore errors?',
                answerRu: 'Скрытые ошибки приводят к неожиданному поведению и трудноуловимым багам.',
                answerEn: 'Hidden errors lead to unexpected behavior and hard-to-find bugs.',
                placeholderRu: 'Напиши про баги',
                placeholderEn: 'Mention bugs',
                validation: { mode: 'includesAny', keywords: ['баг', 'неожид', 'bug', 'unexpected'] },
            },
        ],
    },
];
