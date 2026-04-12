import { Lesson } from './lessons-types';

export const typescriptLessons: Lesson[] = [
    {
        id: 'ts-basics',
        day: 8,
        level: 1,
        xp: 40,
        duration: '12 min',
        kind: 'typescript',
        titleRu: 'Основы TypeScript',
        titleEn: 'TypeScript Basics',
        subtitleRu: 'Типы, аннотации, вывод типов',
        subtitleEn: 'Types, annotations, type inference',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Зачем нужен TypeScript, как добавлять типы и как работает вывод типов.',
        descriptionEn: 'Why TypeScript exists, how to add types, and how type inference works.',
        theory: [
            {
                id: 'ts-bas-1',
                titleRu: 'Зачем TypeScript',
                titleEn: 'Why TypeScript',
                bodyRu: 'TypeScript добавляет типы поверх JavaScript. Это значит, что ещё до запуска кода редактор подскажет ошибки: неправильный аргумент, несуществующее свойство, опечатка в имени. Для начинающих это как GPS — помогает не заблудиться в коде.',
                bodyEn: 'TypeScript adds types on top of JavaScript. This means the editor catches mistakes before you run the code: wrong argument, missing property, typo in a name. For beginners it is like GPS — helps you not get lost in code.',
                exampleRu: `// JavaScript — ошибка только при запуске
function greet(name) {
  return 'Привет, ' + name.toUpperCase();
}
greet(42); // Упадёт!

// TypeScript — ошибка видна сразу в редакторе
function greetTS(name: string): string {
  return 'Привет, ' + name.toUpperCase();
}
// greetTS(42); // Ошибка: Argument of type 'number'
greetTS('Анна'); // ОК`,
                exampleEn: `// JavaScript — error only at runtime
function greet(name) {
  return 'Hello, ' + name.toUpperCase();
}
greet(42); // Crashes!

// TypeScript — error visible instantly in editor
function greetTS(name: string): string {
  return 'Hello, ' + name.toUpperCase();
}
// greetTS(42); // Error: Argument of type 'number'
greetTS('Anna'); // OK`,
            },
            {
                id: 'ts-bas-2',
                titleRu: 'Аннотации типов',
                titleEn: 'Type annotations',
                bodyRu: 'Аннотация типа — это когда ты явно указываешь тип после двоеточия. Можно аннотировать переменные, параметры функций и возвращаемые значения.',
                bodyEn: 'A type annotation is when you explicitly specify the type after a colon. You can annotate variables, function parameters, and return values.',
                exampleRu: `// Переменные
const userName: string = 'Макс';
const userAge: number = 25;
const isActive: boolean = true;

// Параметры и возврат функции
function add(a: number, b: number): number {
  return a + b;
}

// Массивы
const scores: number[] = [90, 85, 72];
const names: string[] = ['Ира', 'Макс'];`,
                exampleEn: `// Variables
const userName: string = 'Max';
const userAge: number = 25;
const isActive: boolean = true;

// Function parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrays
const scores: number[] = [90, 85, 72];
const names: string[] = ['Ira', 'Max'];`,
            },
            {
                id: 'ts-bas-3',
                titleRu: 'Вывод типов (type inference)',
                titleEn: 'Type inference',
                bodyRu: 'TypeScript умеет определять типы автоматически. Если ты пишешь const x = 10, он сам поймёт, что x — number. Явные аннотации нужны, когда тип неочевиден или хочется быть точнее.',
                bodyEn: 'TypeScript can determine types automatically. If you write const x = 10, it understands x is a number. Explicit annotations are needed when the type is not obvious or you want to be more precise.',
                exampleRu: `// TypeScript выводит тип сам
const message = 'Привет'; // тип: string
const count = 42;         // тип: number
const items = [1, 2, 3];  // тип: number[]

// Здесь нужна явная аннотация
const scores: number[] = []; // без аннотации будет never[]

// useState в React — тоже нужна аннотация
// const [users, setUsers] = useState<User[]>([]);`,
                exampleEn: `// TypeScript infers the type
const message = 'Hello'; // type: string
const count = 42;        // type: number
const items = [1, 2, 3]; // type: number[]

// Here explicit annotation is needed
const scores: number[] = []; // without annotation it's never[]

// useState in React — also needs annotation
// const [users, setUsers] = useState<User[]>([]);`,
            },
        ],
        tasks: [
            {
                id: 'ts-bas-t1',
                type: 'theory',
                promptRu: 'Зачем нужен TypeScript, если JavaScript и так работает?',
                promptEn: 'Why use TypeScript if JavaScript already works?',
                answerRu: 'TypeScript ловит ошибки до запуска, улучшает подсказки в редакторе и делает код надёжнее.',
                answerEn: 'TypeScript catches errors before runtime, improves editor hints, and makes code more reliable.',
                placeholderRu: 'Укажи про ошибки и редактор',
                placeholderEn: 'Mention errors and editor',
                validation: { mode: 'includesAny', keywords: ['ошиб', 'редакт', 'error', 'editor', 'надёж', 'reliab'] },
            },
            {
                id: 'ts-bas-t2',
                type: 'code',
                promptRu: 'Добавь типы параметрам и возвращаемому значению функции multiply.',
                promptEn: 'Add types to the parameters and return value of multiply.',
                answerRu: 'function multiply(a: number, b: number): number',
                answerEn: 'function multiply(a: number, b: number): number',
                starterCode: `function multiply(a, b) {
  return a * b;
}`,
                validation: { mode: 'includesAll', keywords: ['a: number', 'b: number', ': number'] },
            },
            {
                id: 'ts-bas-t3',
                type: 'code',
                promptRu: 'Объяви массив строк names с типом string[].',
                promptEn: 'Declare a names array with type string[].',
                answerRu: 'const names: string[] = [];',
                answerEn: 'const names: string[] = [];',
                starterCode: `const names = [];`,
                validation: { mode: 'includesAll', keywords: ['string[]'] },
            },
            {
                id: 'ts-bas-t4',
                type: 'challenge',
                promptRu: 'Когда явная аннотация типа обязательна?',
                promptEn: 'When is an explicit type annotation required?',
                answerRu: 'Когда TypeScript не может вывести тип сам, например пустой массив или useState.',
                answerEn: 'When TypeScript cannot infer the type itself, like an empty array or useState.',
                placeholderRu: 'Приведи пример',
                placeholderEn: 'Give an example',
                validation: { mode: 'includesAny', keywords: ['пуст', 'empty', 'useState', 'вывест', 'infer'] },
            },
        ],
    },
    {
        id: 'ts-objects',
        day: 9,
        level: 2,
        xp: 60,
        duration: '16 min',
        kind: 'typescript',
        titleRu: 'Типы объектов',
        titleEn: 'Object Types',
        subtitleRu: 'interface, readonly, optional, вложенные поля',
        subtitleEn: 'interface, readonly, optional, nested fields',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Научись проектировать понятные типы для данных и UI.',
        descriptionEn: 'Design clear types for data and UI.',
        theory: [
            {
                id: 'ts-obj-d1',
                titleRu: 'Интерфейс описывает форму объекта',
                titleEn: 'An interface describes object shape',
                bodyRu: 'Если ты работаешь с повторяющимися структурами — пользователь, задача, урок — интерфейс делает код согласованным. Каждый раз, когда создаёшь объект этого типа, редактор проверит все поля.',
                bodyEn: 'If you work with repeated structures like users, tasks, or lessons, an interface keeps code consistent. Every time you create an object of this type, the editor checks all fields.',
                exampleRu: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const user: User = {
  id: '1',
  name: 'Анна',
  email: 'anna@mail.com',
  age: 25,
};

// Ошибка — забыли email:
// const badUser: User = { id: '2', name: 'Макс', age: 30 };

function greet(user: User): string {
  return \`Привет, \${user.name}!\`;
}`,
                exampleEn: `interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const user: User = {
  id: '1',
  name: 'Anna',
  email: 'anna@mail.com',
  age: 25,
};

// Error — forgot email:
// const badUser: User = { id: '2', name: 'Max', age: 30 };

function greet(user: User): string {
  return \`Hello, \${user.name}!\`;
}`,
            },
            {
                id: 'ts-obj-d2',
                titleRu: 'Optional поле может отсутствовать',
                titleEn: 'An optional field may be missing',
                bodyRu: 'Знак вопроса после имени поля означает, что оно не обязательно. При чтении используй optional chaining (?.) или проверку.',
                bodyEn: 'A question mark after a field name means it is not required. When reading, use optional chaining (?.) or a guard.',
                exampleRu: `interface Profile {
  name: string;
  bio?: string;       // может отсутствовать
  avatarUrl?: string; // может отсутствовать
}

const user1: Profile = { name: 'Ира' }; // OK
const user2: Profile = { name: 'Макс', bio: 'Разработчик' }; // OK

// Безопасное чтение optional поля
const bioLength = user1.bio?.length ?? 0;
console.log(bioLength); // 0`,
                exampleEn: `interface Profile {
  name: string;
  bio?: string;       // may be missing
  avatarUrl?: string; // may be missing
}

const user1: Profile = { name: 'Ira' }; // OK
const user2: Profile = { name: 'Max', bio: 'Developer' }; // OK

// Safe reading of optional field
const bioLength = user1.bio?.length ?? 0;
console.log(bioLength); // 0`,
            },
            {
                id: 'ts-obj-d3',
                titleRu: 'readonly защищает от изменений',
                titleEn: 'readonly prevents changes',
                bodyRu: 'Если id не должен меняться после создания, пометь его readonly. TypeScript выдаст ошибку при попытке изменить.',
                bodyEn: 'If an id should not change after creation, mark it readonly. TypeScript will error on attempts to change it.',
                exampleRu: `interface Lesson {
  readonly id: string;
  title: string;
}

const lesson: Lesson = { id: 'js-1', title: 'Массивы' };
lesson.title = 'Массивы и методы'; // OK
// lesson.id = 'js-2'; // Ошибка! readonly`,
                exampleEn: `interface Lesson {
  readonly id: string;
  title: string;
}

const lesson: Lesson = { id: 'js-1', title: 'Arrays' };
lesson.title = 'Arrays and Methods'; // OK
// lesson.id = 'js-2'; // Error! readonly`,
            },
            {
                id: 'ts-obj-d4',
                titleRu: 'Вложенные типы',
                titleEn: 'Nested types',
                bodyRu: 'Если объект сложный, типизируй вложенные части отдельно. Это улучшает подсказки и переиспользуемость.',
                bodyEn: 'If an object is complex, type nested parts separately. This improves hints and reusability.',
                exampleRu: `interface Address {
  city: string;
  street: string;
  zip: string;
}

interface Company {
  name: string;
  address: Address;
}

interface Employee {
  name: string;
  company: Company;
}

const employee: Employee = {
  name: 'Макс',
  company: {
    name: 'TechCorp',
    address: { city: 'Москва', street: 'Тверская', zip: '101000' },
  },
};

console.log(employee.company.address.city); // 'Москва'`,
                exampleEn: `interface Address {
  city: string;
  street: string;
  zip: string;
}

interface Company {
  name: string;
  address: Address;
}

interface Employee {
  name: string;
  company: Company;
}

const employee: Employee = {
  name: 'Max',
  company: {
    name: 'TechCorp',
    address: { city: 'Moscow', street: 'Tverskaya', zip: '101000' },
  },
};

console.log(employee.company.address.city); // 'Moscow'`,
            },
        ],
        tasks: [
            {
                id: 'ts-obj-t1',
                type: 'code',
                promptRu: 'Опиши интерфейс Product с id: string, name: string, price: number и optional description.',
                promptEn: 'Describe a Product interface with id: string, name: string, price: number, and optional description.',
                answerRu: 'interface Product { id: string; name: string; price: number; description?: string; }',
                answerEn: 'interface Product { id: string; name: string; price: number; description?: string; }',
                starterCode: `interface Product {
  
}`,
                validation: { mode: 'includesAll', keywords: ['id', 'name', 'price', 'description?'] },
            },
            {
                id: 'ts-obj-t2',
                type: 'code',
                promptRu: 'Добавь readonly к полю id в интерфейсе User.',
                promptEn: 'Add readonly to the id field in the User interface.',
                answerRu: 'readonly id: string;',
                answerEn: 'readonly id: string;',
                starterCode: `interface User {
  id: string;
  name: string;
}`,
                validation: { mode: 'includesAll', keywords: ['readonly', 'id'] },
            },
            {
                id: 'ts-obj-t3',
                type: 'theory',
                promptRu: 'Почему any опасен?',
                promptEn: 'Why is any dangerous?',
                answerRu: 'Он отключает проверку типов и скрывает ошибки.',
                answerEn: 'It disables type checks and hides mistakes.',
                placeholderRu: 'Укажи про ошибки',
                placeholderEn: 'Mention errors',
                validation: { mode: 'includesAny', keywords: ['ошиб', 'тип', 'error', 'type', 'check'] },
            },
            {
                id: 'ts-obj-t4',
                type: 'code',
                promptRu: 'Создай вложенные типы: Address с city и Post с author: {name: string} и address: Address.',
                promptEn: 'Create nested types: Address with city and Post with author: {name: string} and address: Address.',
                answerRu: 'interface Address { city: string } interface Post { author: { name: string }; address: Address }',
                answerEn: 'interface Address { city: string } interface Post { author: { name: string }; address: Address }',
                starterCode: `// Опиши типы здесь
`,
                validation: { mode: 'includesAll', keywords: ['interface', 'address', 'city', 'author'] },
            },
        ],
    },
    {
        id: 'ts-unions-narrowing',
        day: 10,
        level: 3,
        xp: 70,
        duration: '18 min',
        kind: 'typescript',
        titleRu: 'Unions и narrowing',
        titleEn: 'Unions and Narrowing',
        subtitleRu: 'Типы-суммы, проверки typeof, in, discriminated unions',
        subtitleEn: 'Union types, typeof, in, discriminated unions',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Научись проверять форму данных перед использованием свойств.',
        descriptionEn: 'Learn to check data shape before using properties.',
        theory: [
            {
                id: 'ts-un-d1',
                titleRu: 'Union объединяет варианты',
                titleEn: 'A union combines variants',
                bodyRu: 'string | number означает, что значение может быть либо строкой, либо числом. Использовать методы можно только после уточнения типа (narrowing).',
                bodyEn: 'string | number means the value can be either a string or a number. You can use specific methods only after narrowing.',
                exampleRu: `type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
  // Здесь value может быть и string, и number
  // value.toUpperCase(); // Ошибка! number не имеет toUpperCase

  if (typeof value === 'string') {
    // Здесь TypeScript знает, что value — string
    console.log(value.toUpperCase());
  } else {
    // Здесь value — number
    console.log(value.toFixed(2));
  }
}

printValue('привет'); // ПРИВЕТ
printValue(3.14159);  // 3.14`,
                exampleEn: `type StringOrNumber = string | number;

function printValue(value: StringOrNumber) {
  // Here value can be string or number
  // value.toUpperCase(); // Error! number has no toUpperCase

  if (typeof value === 'string') {
    // Here TypeScript knows value is string
    console.log(value.toUpperCase());
  } else {
    // Here value is number
    console.log(value.toFixed(2));
  }
}

printValue('hello'); // HELLO
printValue(3.14159); // 3.14`,
            },
            {
                id: 'ts-un-d2',
                titleRu: 'Discriminated unions',
                titleEn: 'Discriminated unions',
                bodyRu: 'Общее поле kind или type позволяет строить switch и получать точные подсказки по каждому варианту. Это самый надёжный способ работы с union-типами объектов.',
                bodyEn: 'A shared kind or type field lets you write a clean switch with precise hints for each variant. This is the most reliable way to work with object union types.',
                exampleRu: `type ApiResponse =
  | { status: 'success'; data: { name: string } }
  | { status: 'error'; message: string }
  | { status: 'loading' };

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case 'success':
      console.log('Данные:', response.data.name);
      break;
    case 'error':
      console.log('Ошибка:', response.message);
      break;
    case 'loading':
      console.log('Загрузка...');
      break;
  }
}`,
                exampleEn: `type ApiResponse =
  | { status: 'success'; data: { name: string } }
  | { status: 'error'; message: string }
  | { status: 'loading' };

function handleResponse(response: ApiResponse) {
  switch (response.status) {
    case 'success':
      console.log('Data:', response.data.name);
      break;
    case 'error':
      console.log('Error:', response.message);
      break;
    case 'loading':
      console.log('Loading...');
      break;
  }
}`,
            },
            {
                id: 'ts-un-d3',
                titleRu: 'Оператор in для объектов',
                titleEn: 'The in operator for objects',
                bodyRu: 'Если у одного варианта есть свойство, которого нет у другого, оператор in помогает уточнить тип.',
                bodyEn: 'If one variant has a property the other does not, the in operator helps narrow the type.',
                exampleRu: `type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim(); // TypeScript знает: это Fish
  } else {
    animal.fly();  // TypeScript знает: это Bird
  }
}`,
                exampleEn: `type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim(); // TypeScript knows: it's Fish
  } else {
    animal.fly();  // TypeScript knows: it's Bird
  }
}`,
            },
        ],
        tasks: [
            {
                id: 'ts-un-t1',
                type: 'code',
                promptRu: 'Напиши функцию formatValue: для строки верни toUpperCase(), для числа — toFixed(2).',
                promptEn: 'Write a formatValue function: for strings return toUpperCase(), for numbers return toFixed(2).',
                answerRu: 'if (typeof value === "string") { return value.toUpperCase(); } else { return value.toFixed(2); }',
                answerEn: 'if (typeof value === "string") { return value.toUpperCase(); } else { return value.toFixed(2); }',
                starterCode: `function formatValue(value: string | number): string {
  return '';
}`,
                validation: { mode: 'includesAll', keywords: ['typeof', 'string', 'touppercase'] },
            },
            {
                id: 'ts-un-t2',
                type: 'code',
                promptRu: 'Опиши discriminated union Result с вариантами success и error.',
                promptEn: 'Describe a discriminated union Result with success and error variants.',
                answerRu: 'type Result = { kind: "success"; data: string } | { kind: "error"; message: string }',
                answerEn: 'type Result = { kind: "success"; data: string } | { kind: "error"; message: string }',
                starterCode: `type Result = `,
                validation: { mode: 'includesAll', keywords: ['success', 'error'] },
            },
            {
                id: 'ts-un-t3',
                type: 'challenge',
                promptRu: 'Зачем нужен narrowing?',
                promptEn: 'Why do you need narrowing?',
                answerRu: 'Чтобы безопасно использовать свойства конкретного варианта union-типа.',
                answerEn: 'To safely use properties of a specific union variant.',
                placeholderRu: 'Укажи про безопасность',
                placeholderEn: 'Mention safety',
                validation: { mode: 'includesAny', keywords: ['безопас', 'свойств', 'safe', 'property'] },
            },
        ],
    },
    {
        id: 'ts-generics',
        day: 11,
        level: 4,
        xp: 80,
        duration: '20 min',
        kind: 'typescript',
        titleRu: 'Generics',
        titleEn: 'Generics',
        subtitleRu: 'Параметры типов, extends, переиспользование',
        subtitleEn: 'Type parameters, extends, reuse',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Пойми, как generics сохраняют информацию о типе и помогают писать переиспользуемые утилиты.',
        descriptionEn: 'Understand how generics preserve type info and help build reusable utilities.',
        theory: [
            {
                id: 'ts-gen-d1',
                titleRu: 'Generic — параметр типа',
                titleEn: 'A generic is a type parameter',
                bodyRu: 'Вместо конкретного string или number ты задаёшь T и позволяешь TypeScript вывести тип автоматически. Это сохраняет связь между входом и выходом.',
                bodyEn: 'Instead of a concrete string or number, you define T and let TypeScript infer the type. This preserves the input-output relationship.',
                exampleRu: `// Без generic — теряем информацию о типе
function identityBad(value: any): any {
  return value;
}
const a = identityBad('hello'); // тип: any 😢

// С generic — тип сохраняется
function identity<T>(value: T): T {
  return value;
}
const b = identity('hello'); // тип: string ✅
const c = identity(42);      // тип: number ✅

// TypeScript выводит T автоматически из аргумента`,
                exampleEn: `// Without generic — type info is lost
function identityBad(value: any): any {
  return value;
}
const a = identityBad('hello'); // type: any 😢

// With generic — type is preserved
function identity<T>(value: T): T {
  return value;
}
const b = identity('hello'); // type: string ✅
const c = identity(42);      // type: number ✅

// TypeScript infers T automatically from the argument`,
            },
            {
                id: 'ts-gen-d2',
                titleRu: 'Ограничения с extends',
                titleEn: 'Constraints with extends',
                bodyRu: 'Иногда generic должен иметь минимальный набор полей. Укажи ограничение через extends.',
                bodyEn: 'Sometimes a generic needs minimum fields. Add a constraint with extends.',
                exampleRu: `interface HasId {
  id: string;
}

function getId<T extends HasId>(item: T): string {
  return item.id;
}

// Работает с любым объектом, у которого есть id
getId({ id: '1', name: 'Анна' });       // '1'
getId({ id: '2', title: 'Массивы' });   // '2'

// Ошибка — нет id:
// getId({ name: 'Без id' });`,
                exampleEn: `interface HasId {
  id: string;
}

function getId<T extends HasId>(item: T): string {
  return item.id;
}

// Works with any object that has an id
getId({ id: '1', name: 'Anna' });       // '1'
getId({ id: '2', title: 'Arrays' });    // '2'

// Error — no id:
// getId({ name: 'No id' });`,
            },
            {
                id: 'ts-gen-d3',
                titleRu: 'Generic в интерфейсах',
                titleEn: 'Generics in interfaces',
                bodyRu: 'Generics удобны для описания контейнеров: ответ API, список с пагинацией, результат операции.',
                bodyEn: 'Generics are convenient for describing containers: API response, paginated list, operation result.',
                exampleRu: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: string;
  name: string;
}

// Типизированный ответ
const response: ApiResponse<User> = {
  data: { id: '1', name: 'Анна' },
  status: 200,
  message: 'OK',
};

// Для списка
const listResponse: ApiResponse<User[]> = {
  data: [{ id: '1', name: 'Анна' }],
  status: 200,
  message: 'OK',
};`,
                exampleEn: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: string;
  name: string;
}

// Typed response
const response: ApiResponse<User> = {
  data: { id: '1', name: 'Anna' },
  status: 200,
  message: 'OK',
};

// For a list
const listResponse: ApiResponse<User[]> = {
  data: [{ id: '1', name: 'Anna' }],
  status: 200,
  message: 'OK',
};`,
            },
        ],
        tasks: [
            {
                id: 'ts-gen-t1',
                type: 'code',
                promptRu: 'Сделай generic-функцию identity<T>, которая возвращает то же значение.',
                promptEn: 'Create a generic identity<T> function that returns the same value.',
                answerRu: 'function identity<T>(value: T): T { return value; }',
                answerEn: 'function identity<T>(value: T): T { return value; }',
                starterCode: `function identity(value) {
  return value;
}`,
                validation: { mode: 'includesAll', keywords: ['<t>', 'return value'] },
            },
            {
                id: 'ts-gen-t2',
                type: 'code',
                promptRu: 'Добавь ограничение T extends { id: string } в функцию getId.',
                promptEn: 'Add T extends { id: string } constraint to getId.',
                answerRu: 'function getId<T extends { id: string }>(item: T) { return item.id; }',
                answerEn: 'function getId<T extends { id: string }>(item: T) { return item.id; }',
                starterCode: `function getId(item) {
  return item.id;
}`,
                validation: { mode: 'includesAll', keywords: ['extends', 'id: string'] },
            },
            {
                id: 'ts-gen-t3',
                type: 'theory',
                promptRu: 'Что generic даёт по сравнению с any?',
                promptEn: 'What does a generic give you compared with any?',
                answerRu: 'Generic сохраняет конкретный тип и связь между входом и выходом.',
                answerEn: 'A generic preserves the concrete type and the input-output relationship.',
                placeholderRu: 'Укажи связь типов',
                placeholderEn: 'Mention type relationship',
                validation: { mode: 'includesAny', keywords: ['связ', 'тип', 'relationship', 'type', 'preserv'] },
            },
            {
                id: 'ts-gen-t4',
                type: 'code',
                promptRu: 'Опиши generic интерфейс ApiResponse<T> с полями data: T и status: number.',
                promptEn: 'Describe a generic interface ApiResponse<T> with data: T and status: number.',
                answerRu: 'interface ApiResponse<T> { data: T; status: number; }',
                answerEn: 'interface ApiResponse<T> { data: T; status: number; }',
                starterCode: `interface ApiResponse {
  
}`,
                validation: { mode: 'includesAll', keywords: ['<t>', 'data: t', 'status'] },
            },
        ],
    },
    {
        id: 'ts-utility-types',
        day: 12,
        level: 4,
        xp: 75,
        duration: '18 min',
        kind: 'typescript',
        titleRu: 'Утилитарные типы',
        titleEn: 'Utility Types',
        subtitleRu: 'Partial, Pick, Omit, Record',
        subtitleEn: 'Partial, Pick, Omit, Record',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Изучи встроенные утилиты TypeScript для трансформации типов.',
        descriptionEn: 'Study built-in TypeScript utilities for transforming types.',
        theory: [
            {
                id: 'ts-util-d1',
                titleRu: 'Partial делает все поля optional',
                titleEn: 'Partial makes all fields optional',
                bodyRu: 'Partial<T> берёт тип и делает каждое поле необязательным. Это удобно для формы обновления, где не все поля могут быть заполнены.',
                bodyEn: 'Partial<T> takes a type and makes every field optional. This is useful for update forms where not all fields may be filled.',
                exampleRu: `interface User {
  name: string;
  email: string;
  age: number;
}

// Partial<User> = { name?: string; email?: string; age?: number }

function updateUser(id: string, updates: Partial<User>) {
  console.log('Обновляем пользователя', id, updates);
}

// Можно передать только те поля, которые меняются
updateUser('1', { name: 'Новое имя' });
updateUser('1', { age: 26, email: 'new@mail.com' });`,
                exampleEn: `interface User {
  name: string;
  email: string;
  age: number;
}

// Partial<User> = { name?: string; email?: string; age?: number }

function updateUser(id: string, updates: Partial<User>) {
  console.log('Updating user', id, updates);
}

// Can pass only the fields that change
updateUser('1', { name: 'New name' });
updateUser('1', { age: 26, email: 'new@mail.com' });`,
            },
            {
                id: 'ts-util-d2',
                titleRu: 'Pick и Omit выбирают поля',
                titleEn: 'Pick and Omit select fields',
                bodyRu: 'Pick<T, Keys> оставляет только указанные поля. Omit<T, Keys> убирает указанные поля. Удобно для создания подмножеств типа.',
                bodyEn: 'Pick<T, Keys> keeps only the specified fields. Omit<T, Keys> removes specified fields. Useful for creating type subsets.',
                exampleRu: `interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Только имя и email
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Все поля, кроме password
type SafeUser = Omit<User, 'password'>;

const publicUser: PublicUser = {
  id: '1',
  name: 'Анна',
  email: 'anna@mail.com',
};`,
                exampleEn: `interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Only name and email
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// All fields except password
type SafeUser = Omit<User, 'password'>;

const publicUser: PublicUser = {
  id: '1',
  name: 'Anna',
  email: 'anna@mail.com',
};`,
            },
            {
                id: 'ts-util-d3',
                titleRu: 'Record для словарей',
                titleEn: 'Record for dictionaries',
                bodyRu: 'Record<Keys, Value> создаёт тип объекта с ключами Keys и значениями Value. Удобно для маппингов и конфигов.',
                bodyEn: 'Record<Keys, Value> creates an object type with Keys as keys and Value as values. Useful for mappings and configs.',
                exampleRu: `type Theme = 'light' | 'dark';

interface ThemeColors {
  background: string;
  text: string;
}

const themes: Record<Theme, ThemeColors> = {
  light: { background: '#fff', text: '#000' },
  dark: { background: '#000', text: '#fff' },
};

console.log(themes.dark.background); // '#000'`,
                exampleEn: `type Theme = 'light' | 'dark';

interface ThemeColors {
  background: string;
  text: string;
}

const themes: Record<Theme, ThemeColors> = {
  light: { background: '#fff', text: '#000' },
  dark: { background: '#000', text: '#fff' },
};

console.log(themes.dark.background); // '#000'`,
            },
        ],
        tasks: [
            {
                id: 'ts-util-t1',
                type: 'code',
                promptRu: 'Создай функцию updateUser, принимающую Partial<User> для обновления.',
                promptEn: 'Create an updateUser function accepting Partial<User> for updates.',
                answerRu: 'function updateUser(id: string, updates: Partial<User>) {}',
                answerEn: 'function updateUser(id: string, updates: Partial<User>) {}',
                starterCode: `interface User {
  name: string;
  email: string;
  age: number;
}

function updateUser(id: string, updates) {
  console.log('update', id, updates);
}`,
                validation: { mode: 'includesAll', keywords: ['partial', 'user'] },
            },
            {
                id: 'ts-util-t2',
                type: 'code',
                promptRu: 'Создай тип SafeUser через Omit, убрав поле password из User.',
                promptEn: 'Create SafeUser type using Omit, removing password from User.',
                answerRu: 'type SafeUser = Omit<User, "password">;',
                answerEn: 'type SafeUser = Omit<User, "password">;',
                starterCode: `interface User {
  id: string;
  name: string;
  password: string;
}

type SafeUser = `,
                validation: { mode: 'includesAll', keywords: ['omit', 'password'] },
            },
            {
                id: 'ts-util-t3',
                type: 'code',
                promptRu: 'Создай Record<string, number> для словаря баллов студентов.',
                promptEn: 'Create a Record<string, number> for a student scores dictionary.',
                answerRu: 'const scores: Record<string, number> = {};',
                answerEn: 'const scores: Record<string, number> = {};',
                starterCode: `const scores = {};`,
                validation: { mode: 'includesAll', keywords: ['record', 'string', 'number'] },
            },
            {
                id: 'ts-util-t4',
                type: 'challenge',
                promptRu: 'Когда Pick лучше, чем новый интерфейс?',
                promptEn: 'When is Pick better than a new interface?',
                answerRu: 'Когда подмножество берётся из существующего типа и должно оставаться с ним синхронизированным.',
                answerEn: 'When a subset comes from an existing type and should stay in sync with it.',
                placeholderRu: 'Напиши про синхронизацию типов',
                placeholderEn: 'Mention type synchronization',
                validation: { mode: 'includesAny', keywords: ['синхр', 'существ', 'sync', 'exist', 'source'] },
            },
        ],
    },
];
