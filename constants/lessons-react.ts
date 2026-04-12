import { Lesson } from './lessons-types';

export const reactLessons: Lesson[] = [
    {
        id: 'react-jsx-basics',
        day: 13,
        level: 1,
        xp: 45,
        duration: '14 min',
        kind: 'react',
        titleRu: 'JSX и компоненты',
        titleEn: 'JSX and Components',
        subtitleRu: 'Что такое JSX, как создавать компоненты',
        subtitleEn: 'What is JSX, how to create components',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Основы React: JSX-синтаксис, компоненты как функции, вложенность.',
        descriptionEn: 'React basics: JSX syntax, components as functions, nesting.',
        theory: [
            {
                id: 'react-jsx-d1',
                titleRu: 'Что такое JSX',
                titleEn: 'What is JSX',
                bodyRu: 'JSX — это синтаксическое расширение JavaScript, которое позволяет писать разметку прямо в JS-коде. Выглядит как HTML, но это JavaScript. Каждый JSX-элемент превращается в вызов функции React.createElement(). Внутри JSX можно вставлять JavaScript-выражения через фигурные скобки {}.',
                bodyEn: 'JSX is a syntax extension for JavaScript that lets you write markup directly in JS code. It looks like HTML but it is JavaScript. Each JSX element turns into a React.createElement() call. Inside JSX you can embed JavaScript expressions using curly braces {}.',
                exampleRu: `import React from 'react';
import { Text, View } from 'react-native';

function WelcomeScreen() {
  const userName = 'Анна';
  const currentYear = new Date().getFullYear();

  return (
    <View>
      <Text>Привет, {userName}!</Text>
      <Text>Год: {currentYear}</Text>
      <Text>2 + 2 = {2 + 2}</Text>
    </View>
  );
}`,
                exampleEn: `import React from 'react';
import { Text, View } from 'react-native';

function WelcomeScreen() {
  const userName = 'Anna';
  const currentYear = new Date().getFullYear();

  return (
    <View>
      <Text>Hello, {userName}!</Text>
      <Text>Year: {currentYear}</Text>
      <Text>2 + 2 = {2 + 2}</Text>
    </View>
  );
}`,
            },
            {
                id: 'react-jsx-d2',
                titleRu: 'Компонент — это функция',
                titleEn: 'A component is a function',
                bodyRu: 'В React компонент — это обычная функция, которая возвращает JSX. Имя компонента всегда начинается с большой буквы. Это правило обязательно — иначе React не отличит компонент от HTML-тега.',
                bodyEn: 'In React, a component is a regular function that returns JSX. Component names always start with a capital letter. This rule is mandatory — otherwise React cannot tell a component from an HTML tag.',
                exampleRu: `import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Простой компонент без пропсов
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Мой экран</Text>
    </View>
  );
}

// Использование компонента
function App() {
  return (
    <View>
      <Header />
      <Text>Контент приложения</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16, backgroundColor: '#1E293B' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
});`,
                exampleEn: `import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Simple component without props
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Screen</Text>
    </View>
  );
}

// Using the component
function App() {
  return (
    <View>
      <Header />
      <Text>App content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16, backgroundColor: '#1E293B' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
});`,
            },
            {
                id: 'react-jsx-d3',
                titleRu: 'Условный рендеринг',
                titleEn: 'Conditional rendering',
                bodyRu: 'В JSX можно показывать разный контент в зависимости от условий. Используй тернарный оператор или оператор && для условного рендеринга.',
                bodyEn: 'In JSX you can show different content depending on conditions. Use the ternary operator or && for conditional rendering.',
                exampleRu: `import React from 'react';
import { Text, View } from 'react-native';

interface UserCardProps {
  name: string;
  isOnline: boolean;
  bio?: string;
}

function UserCard({ name, isOnline, bio }: UserCardProps) {
  return (
    <View>
      <Text>{name}</Text>

      {/* Тернарный оператор — если/иначе */}
      <Text>
        {isOnline ? 'В сети' : 'Не в сети'}
      </Text>

      {/* && — показать только если true */}
      {bio && <Text>{bio}</Text>}

      {/* Без лишнего контента если null */}
      {!bio && <Text>Биография не указана</Text>}
    </View>
  );
}`,
                exampleEn: `import React from 'react';
import { Text, View } from 'react-native';

interface UserCardProps {
  name: string;
  isOnline: boolean;
  bio?: string;
}

function UserCard({ name, isOnline, bio }: UserCardProps) {
  return (
    <View>
      <Text>{name}</Text>

      {/* Ternary — if/else */}
      <Text>
        {isOnline ? 'Online' : 'Offline'}
      </Text>

      {/* && — show only if true */}
      {bio && <Text>{bio}</Text>}

      {/* Nothing extra if null */}
      {!bio && <Text>No bio provided</Text>}
    </View>
  );
}`,
            },
            {
                id: 'react-jsx-d4',
                titleRu: 'Рендеринг списков с map',
                titleEn: 'Rendering lists with map',
                bodyRu: 'Для отображения списков в JSX используй метод map(). Каждому элементу нужен уникальный key — React использует его для эффективного обновления.',
                bodyEn: 'To display lists in JSX, use the map() method. Each element needs a unique key — React uses it for efficient updates.',
                exampleRu: `import React from 'react';
import { Text, View, FlatList } from 'react-native';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

const tasks: Task[] = [
  { id: '1', title: 'Изучить JSX', isDone: true },
  { id: '2', title: 'Написать компонент', isDone: false },
  { id: '3', title: 'Добавить стили', isDone: false },
];

function TaskList() {
  return (
    <View>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>
            {task.isDone ? '✅' : '⬜'} {task.title}
          </Text>
        </View>
      ))}
    </View>
  );
}`,
                exampleEn: `import React from 'react';
import { Text, View, FlatList } from 'react-native';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

const tasks: Task[] = [
  { id: '1', title: 'Learn JSX', isDone: true },
  { id: '2', title: 'Write a component', isDone: false },
  { id: '3', title: 'Add styles', isDone: false },
];

function TaskList() {
  return (
    <View>
      {tasks.map((task) => (
        <View key={task.id}>
          <Text>
            {task.isDone ? '✅' : '⬜'} {task.title}
          </Text>
        </View>
      ))}
    </View>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'react-jsx-t1',
                type: 'code',
                promptRu: 'Создай компонент Greeting, который выводит "Привет, {name}!" через пропсы.',
                promptEn: 'Create a Greeting component that displays "Hello, {name}!" via props.',
                answerRu: 'function Greeting({ name }: { name: string }) { return <Text>Привет, {name}!</Text>; }',
                answerEn: 'function Greeting({ name }: { name: string }) { return <Text>Hello, {name}!</Text>; }',
                starterCode: `import React from 'react';
import { Text } from 'react-native';

function Greeting() {
  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['name', '<text>', '{name}'] },
            },
            {
                id: 'react-jsx-t2',
                type: 'code',
                promptRu: 'Добавь условный рендеринг: если isLoading — покажи "Загрузка...", иначе — контент.',
                promptEn: 'Add conditional rendering: if isLoading — show "Loading...", otherwise — content.',
                answerRu: '{isLoading ? <Text>Загрузка...</Text> : <Text>Контент</Text>}',
                answerEn: '{isLoading ? <Text>Loading...</Text> : <Text>Content</Text>}',
                starterCode: `import React from 'react';
import { Text, View } from 'react-native';

function Screen({ isLoading }: { isLoading: boolean }) {
  return (
    <View>
    </View>
  );
}`,
                validation: { mode: 'includesAll', keywords: ['isloading', '?', ':'] },
            },
            {
                id: 'react-jsx-t3',
                type: 'code',
                promptRu: 'Отрендери список items через map() с key.',
                promptEn: 'Render a list of items using map() with key.',
                answerRu: 'items.map((item) => <Text key={item.id}>{item.title}</Text>)',
                answerEn: 'items.map((item) => <Text key={item.id}>{item.title}</Text>)',
                starterCode: `import React from 'react';
import { Text, View } from 'react-native';

const items = [
  { id: '1', title: 'First' },
  { id: '2', title: 'Second' },
];

function ItemList() {
  return (
    <View>
    </View>
  );
}`,
                validation: { mode: 'includesAll', keywords: ['map', 'key'] },
            },
            {
                id: 'react-jsx-t4',
                type: 'theory',
                promptRu: 'Зачем нужен key при рендеринге списков?',
                promptEn: 'Why is key needed when rendering lists?',
                answerRu: 'React использует key для эффективного обновления: понимает, какие элементы добавлены, удалены или изменены.',
                answerEn: 'React uses key for efficient updates: it understands which elements were added, removed, or changed.',
                placeholderRu: 'Укажи про обновление DOM',
                placeholderEn: 'Mention DOM updates',
                validation: { mode: 'includesAny', keywords: ['обновл', 'эффект', 'update', 'efficient', 'identif'] },
            },
        ],
    },
    {
        id: 'react-props-deep',
        day: 14,
        level: 2,
        xp: 55,
        duration: '16 min',
        kind: 'react',
        titleRu: 'Props и типизация',
        titleEn: 'Props and Typing',
        subtitleRu: 'Интерфейсы props, children, callback-props',
        subtitleEn: 'Props interfaces, children, callback props',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Проектируй компоненты с понятным API через типизированные props.',
        descriptionEn: 'Design components with clear APIs using typed props.',
        theory: [
            {
                id: 'react-props-d1',
                titleRu: 'Props — входные данные компонента',
                titleEn: 'Props are component inputs',
                bodyRu: 'Props — это аргументы, которые компонент получает от родителя. Они неизменяемы (read-only) внутри компонента. Типизируй props через interface, чтобы API компонента был явным.',
                bodyEn: 'Props are arguments a component receives from its parent. They are read-only inside the component. Type props using an interface to make the component API explicit.',
                exampleRu: `import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress: () => void;
}

function Button({ label, variant = 'primary', disabled = false, onPress }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelSecondary]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12 },
  primary: { backgroundColor: '#2563EB' },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2563EB' },
  disabled: { opacity: 0.5 },
  label: { fontSize: 16, fontWeight: '600', textAlign: 'center' as const },
  labelPrimary: { color: '#fff' },
  labelSecondary: { color: '#2563EB' },
});`,
                exampleEn: `import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onPress: () => void;
}

function Button({ label, variant = 'primary', disabled = false, onPress }: ButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelSecondary]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12 },
  primary: { backgroundColor: '#2563EB' },
  secondary: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2563EB' },
  disabled: { opacity: 0.5 },
  label: { fontSize: 16, fontWeight: '600', textAlign: 'center' as const },
  labelPrimary: { color: '#fff' },
  labelSecondary: { color: '#2563EB' },
});`,
            },
            {
                id: 'react-props-d2',
                titleRu: 'children — вложенный контент',
                titleEn: 'children — nested content',
                bodyRu: 'Специальный проп children позволяет вкладывать JSX внутрь компонента. Это основа композиции в React.',
                bodyEn: 'The special children prop lets you nest JSX inside a component. This is the foundation of composition in React.',
                exampleRu: `import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: ReactNode;
  padding?: number;
}

function Card({ children, padding = 16 }: CardProps) {
  return (
    <View style={[styles.card, { padding }]}>
      {children}
    </View>
  );
}

// Использование
function Screen() {
  return (
    <Card padding={20}>
      <Text>Заголовок</Text>
      <Text>Описание карточки</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
});`,
                exampleEn: `import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CardProps {
  children: ReactNode;
  padding?: number;
}

function Card({ children, padding = 16 }: CardProps) {
  return (
    <View style={[styles.card, { padding }]}>
      {children}
    </View>
  );
}

// Usage
function Screen() {
  return (
    <Card padding={20}>
      <Text>Title</Text>
      <Text>Card description</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
});`,
            },
            {
                id: 'react-props-d3',
                titleRu: 'Callback-props для событий',
                titleEn: 'Callback props for events',
                bodyRu: 'Компонент может сообщать родителю о событиях через callback-props: onPress, onChange, onSubmit. Родитель передаёт функцию, ребёнок её вызывает.',
                bodyEn: 'A component can notify its parent about events via callback props: onPress, onChange, onSubmit. The parent passes a function, the child calls it.',
                exampleRu: `import React from 'react';
import { Pressable, Text } from 'react-native';

interface TaskItemProps {
  id: string;
  title: string;
  isDone: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({ id, title, isDone, onToggle, onDelete }: TaskItemProps) {
  return (
    <Pressable onPress={() => onToggle(id)}>
      <Text>{isDone ? '✅' : '⬜'} {title}</Text>
      <Pressable onPress={() => onDelete(id)}>
        <Text>Удалить</Text>
      </Pressable>
    </Pressable>
  );
}

// Родительский компонент
function TaskList() {
  const handleToggle = (id: string) => {
    console.log('Toggle task:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete task:', id);
  };

  return (
    <TaskItem
      id="1"
      title="Изучить React"
      isDone={false}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
}`,
                exampleEn: `import React from 'react';
import { Pressable, Text } from 'react-native';

interface TaskItemProps {
  id: string;
  title: string;
  isDone: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TaskItem({ id, title, isDone, onToggle, onDelete }: TaskItemProps) {
  return (
    <Pressable onPress={() => onToggle(id)}>
      <Text>{isDone ? '✅' : '⬜'} {title}</Text>
      <Pressable onPress={() => onDelete(id)}>
        <Text>Delete</Text>
      </Pressable>
    </Pressable>
  );
}

// Parent component
function TaskList() {
  const handleToggle = (id: string) => {
    console.log('Toggle task:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete task:', id);
  };

  return (
    <TaskItem
      id="1"
      title="Learn React"
      isDone={false}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'react-props-t1',
                type: 'code',
                promptRu: 'Создай интерфейс AvatarProps с name: string, imageUrl?: string и size?: number.',
                promptEn: 'Create an AvatarProps interface with name: string, imageUrl?: string, and size?: number.',
                answerRu: 'interface AvatarProps { name: string; imageUrl?: string; size?: number; }',
                answerEn: 'interface AvatarProps { name: string; imageUrl?: string; size?: number; }',
                starterCode: `interface AvatarProps {
  
}`,
                validation: { mode: 'includesAll', keywords: ['name', 'string', 'imageurl?', 'size?'] },
            },
            {
                id: 'react-props-t2',
                type: 'code',
                promptRu: 'Создай компонент Card с children: ReactNode.',
                promptEn: 'Create a Card component with children: ReactNode.',
                answerRu: 'function Card({ children }: { children: ReactNode }) { return <View>{children}</View>; }',
                answerEn: 'function Card({ children }: { children: ReactNode }) { return <View>{children}</View>; }',
                starterCode: `import React from 'react';
import { View } from 'react-native';

function Card() {
  return <View />;
}`,
                validation: { mode: 'includesAll', keywords: ['children', 'reactnode'] },
            },
            {
                id: 'react-props-t3',
                type: 'challenge',
                promptRu: 'Почему props нельзя изменять внутри компонента?',
                promptEn: 'Why cannot props be changed inside a component?',
                answerRu: 'Props — read-only. Однонаправленный поток данных делает приложение предсказуемым.',
                answerEn: 'Props are read-only. One-way data flow makes the app predictable.',
                placeholderRu: 'Укажи про однонаправленность',
                placeholderEn: 'Mention one-way flow',
                validation: { mode: 'includesAny', keywords: ['read-only', 'однонапр', 'one-way', 'предсказ', 'predict', 'immut'] },
            },
        ],
    },
    {
        id: 'react-state',
        day: 15,
        level: 2,
        xp: 60,
        duration: '18 min',
        kind: 'react',
        titleRu: 'State и обновления',
        titleEn: 'State and Updates',
        subtitleRu: 'useState, функциональные обновления, формы',
        subtitleEn: 'useState, functional updates, forms',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Пойми, как state вызывает перерисовки и как писать обновления предсказуемо.',
        descriptionEn: 'Understand how state triggers rerenders and how to write predictable updates.',
        theory: [
            {
                id: 'react-st-d1',
                titleRu: 'State — данные, от которых зависит UI',
                titleEn: 'State is data your UI depends on',
                bodyRu: 'Когда state меняется, React перерисовывает компонент. useState возвращает пару: текущее значение и функцию для обновления. Всегда указывай явный тип для useState.',
                bodyEn: 'When state changes, React rerenders the component. useState returns a pair: current value and an update function. Always specify an explicit type for useState.',
                exampleRu: `import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => setCount((prev) => prev - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => setCount(0)}>
        <Text>Сбросить</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 16 },
  count: { fontSize: 48, fontWeight: 'bold', color: '#fff' },
  row: { flexDirection: 'row', gap: 16 },
  button: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});`,
                exampleEn: `import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => setCount((prev) => prev - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => setCount(0)}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 16 },
  count: { fontSize: 48, fontWeight: 'bold', color: '#fff' },
  row: { flexDirection: 'row', gap: 16 },
  button: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
});`,
            },
            {
                id: 'react-st-d2',
                titleRu: 'Функциональные обновления',
                titleEn: 'Functional updates',
                bodyRu: 'Если новое значение зависит от предыдущего, используй callback-форму: prev => prev + 1. Это избавляет от проблем с устаревшим состоянием.',
                bodyEn: 'If the next value depends on the previous one, use the callback form: prev => prev + 1. This avoids stale state problems.',
                exampleRu: `import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title, isDone: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Pressable onPress={() => addTodo('Новая задача')}>
        <Text>Добавить</Text>
      </Pressable>
      {todos.map((todo) => (
        <Pressable key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text>{todo.isDone ? '✅' : '⬜'} {todo.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}`,
                exampleEn: `import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), title, isDone: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Pressable onPress={() => addTodo('New task')}>
        <Text>Add</Text>
      </Pressable>
      {todos.map((todo) => (
        <Pressable key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text>{todo.isDone ? '✅' : '⬜'} {todo.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}`,
            },
            {
                id: 'react-st-d3',
                titleRu: 'Работа с формами',
                titleEn: 'Working with forms',
                bodyRu: 'В React Native формы работают через TextInput с onChangeText. Каждое поле формы — отдельный useState или один объект состояния.',
                bodyEn: 'In React Native, forms use TextInput with onChangeText. Each form field is a separate useState or one state object.',
                exampleRu: `import React, { useState } from 'react';
import { TextInput, Text, View, Pressable, StyleSheet } from 'react-native';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log('Login:', { email, password });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secureTextEntry
      />
      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Войти</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 12 },
  input: { borderWidth: 1, borderColor: '#334155', borderRadius: 12, padding: 14, color: '#fff', fontSize: 16 },
  submitButton: { backgroundColor: '#2563EB', padding: 16, borderRadius: 12, alignItems: 'center' },
  submitText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});`,
                exampleEn: `import React, { useState } from 'react';
import { TextInput, Text, View, Pressable, StyleSheet } from 'react-native';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = () => {
    console.log('Login:', { email, password });
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { gap: 12 },
  input: { borderWidth: 1, borderColor: '#334155', borderRadius: 12, padding: 14, color: '#fff', fontSize: 16 },
  submitButton: { backgroundColor: '#2563EB', padding: 16, borderRadius: 12, alignItems: 'center' },
  submitText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});`,
            },
        ],
        tasks: [
            {
                id: 'react-st-t1',
                type: 'code',
                promptRu: 'Создай компонент Counter с кнопками +, - и сбросить.',
                promptEn: 'Create a Counter component with +, -, and reset buttons.',
                answerRu: 'useState<number>(0), setCount((prev) => prev + 1), setCount(0)',
                answerEn: 'useState<number>(0), setCount((prev) => prev + 1), setCount(0)',
                starterCode: `import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

function Counter() {
  return <View />;
}`,
                validation: { mode: 'includesAll', keywords: ['usestate', 'setcount', 'prev'] },
            },
            {
                id: 'react-st-t2',
                type: 'code',
                promptRu: 'Добавь функцию addItem, которая добавляет элемент в массив state через setItems(prev => [...prev, newItem]).',
                promptEn: 'Add an addItem function that adds an element to the array state using setItems(prev => [...prev, newItem]).',
                answerRu: 'setItems((prev) => [...prev, newItem]);',
                answerEn: 'setItems((prev) => [...prev, newItem]);',
                starterCode: `import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = () => {
    // добавь элемент
  };

  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['setitems', 'prev', '...prev'] },
            },
            {
                id: 'react-st-t3',
                type: 'challenge',
                promptRu: 'Почему функциональное обновление state (prev => ...) безопаснее прямого?',
                promptEn: 'Why is functional state update (prev => ...) safer than direct?',
                answerRu: 'Потому что оно всегда использует актуальное значение state, а не устаревшее из замыкания.',
                answerEn: 'Because it always uses the current state value, not a stale one from a closure.',
                placeholderRu: 'Укажи про актуальное значение',
                placeholderEn: 'Mention current value',
                validation: { mode: 'includesAny', keywords: ['актуальн', 'устарев', 'current', 'stale', 'closure', 'замыкан'] },
            },
        ],
    },
    {
        id: 'react-effects',
        day: 16,
        level: 3,
        xp: 70,
        duration: '20 min',
        kind: 'react',
        titleRu: 'useEffect и побочные эффекты',
        titleEn: 'useEffect and Side Effects',
        subtitleRu: 'Загрузка данных, cleanup, зависимости',
        subtitleEn: 'Data loading, cleanup, dependencies',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Когда нужен эффект, как управлять зависимостями и зачем cleanup.',
        descriptionEn: 'When to use effects, how to manage dependencies, and why cleanup matters.',
        theory: [
            {
                id: 'react-eff-d1',
                titleRu: 'Эффект для синхронизации с внешним миром',
                titleEn: 'Effects sync with the outside world',
                bodyRu: 'useEffect нужен для операций, которые нельзя делать во время рендера: запросы к API, таймеры, подписки, работа с storage. Если значение можно посчитать из props/state — эффект не нужен.',
                bodyEn: 'useEffect is for operations you cannot do during render: API calls, timers, subscriptions, storage. If a value can be derived from props/state — no effect needed.',
                exampleRu: `import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

interface User {
  id: string;
  name: string;
}

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      setIsLoading(true);
      try {
        const response = await fetch(
          \`https://api.example.com/users/\${userId}\`
        );
        const data = await response.json();

        if (!cancelled) {
          setUser(data);
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (isLoading) return <Text>Загрузка...</Text>;
  if (!user) return <Text>Пользователь не найден</Text>;

  return <Text>{user.name}</Text>;
}`,
                exampleEn: `import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

interface User {
  id: string;
  name: string;
}

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      setIsLoading(true);
      try {
        const response = await fetch(
          \`https://api.example.com/users/\${userId}\`
        );
        const data = await response.json();

        if (!cancelled) {
          setUser(data);
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (isLoading) return <Text>Loading...</Text>;
  if (!user) return <Text>User not found</Text>;

  return <Text>{user.name}</Text>;
}`,
            },
            {
                id: 'react-eff-d2',
                titleRu: 'Cleanup освобождает ресурсы',
                titleEn: 'Cleanup releases resources',
                bodyRu: 'Если ты запускаешь таймер, подписку или запрос, верни функцию очистки. React вызовет её перед следующим выполнением эффекта и при размонтировании.',
                bodyEn: 'If you start a timer, subscription, or request, return a cleanup function. React calls it before the next effect run and on unmount.',
                exampleRu: `import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function Timer() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup — очищаем таймер
    return () => {
      clearInterval(intervalId);
    };
  }, []); // [] — запускается один раз при монтировании

  return <Text>Прошло: {seconds} секунд</Text>;
}`,
                exampleEn: `import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function Timer() {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup — clear the timer
    return () => {
      clearInterval(intervalId);
    };
  }, []); // [] — runs once on mount

  return <Text>Elapsed: {seconds} seconds</Text>;
}`,
            },
            {
                id: 'react-eff-d3',
                titleRu: 'Не делай из useEffect калькулятор',
                titleEn: 'Do not use useEffect as a calculator',
                bodyRu: 'Если значение можно посчитать из props и state, считай его через переменную или useMemo, а не через эффект. Эффект — для внешнего мира.',
                bodyEn: 'If a value can be derived from props and state, compute it with a variable or useMemo, not an effect. Effects are for the outside world.',
                exampleRu: `// ❌ Плохо — useEffect для вычисления
function BadExample({ price, quantity }: { price: number; quantity: number }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price * quantity);
  }, [price, quantity]);

  return <Text>Итого: {total}</Text>;
}

// ✅ Хорошо — прямое вычисление
function GoodExample({ price, quantity }: { price: number; quantity: number }) {
  const total = price * quantity;

  return <Text>Итого: {total}</Text>;
}`,
                exampleEn: `// ❌ Bad — useEffect for calculation
function BadExample({ price, quantity }: { price: number; quantity: number }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price * quantity);
  }, [price, quantity]);

  return <Text>Total: {total}</Text>;
}

// ✅ Good — direct calculation
function GoodExample({ price, quantity }: { price: number; quantity: number }) {
  const total = price * quantity;

  return <Text>Total: {total}</Text>;
}`,
            },
        ],
        tasks: [
            {
                id: 'react-eff-t1',
                type: 'code',
                promptRu: 'Создай таймер с useEffect, setInterval и cleanup через clearInterval.',
                promptEn: 'Create a timer with useEffect, setInterval, and cleanup via clearInterval.',
                answerRu: 'useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);',
                answerEn: 'useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []);',
                starterCode: `import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

function Timer() {
  const [seconds, setSeconds] = useState<number>(0);

  return <Text>{seconds}</Text>;
}`,
                validation: { mode: 'includesAll', keywords: ['useeffect', 'setinterval', 'clearinterval'] },
            },
            {
                id: 'react-eff-t2',
                type: 'theory',
                promptRu: 'Когда useEffect действительно нужен?',
                promptEn: 'When is useEffect actually needed?',
                answerRu: 'Для синхронизации с внешним миром: API-запросы, таймеры, подписки, storage.',
                answerEn: 'For syncing with the outside world: API calls, timers, subscriptions, storage.',
                placeholderRu: 'Приведи примеры',
                placeholderEn: 'Give examples',
                validation: { mode: 'includesAny', keywords: ['api', 'таймер', 'timer', 'запрос', 'request', 'storage'] },
            },
            {
                id: 'react-eff-t3',
                type: 'code',
                promptRu: 'Вместо эффекта посчитай total из price и quantity прямо в рендере.',
                promptEn: 'Instead of an effect, compute total from price and quantity directly in render.',
                answerRu: 'const total = price * quantity;',
                answerEn: 'const total = price * quantity;',
                starterCode: `function Summary({ price, quantity }: { price: number; quantity: number }) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['const total', 'price', 'quantity'] },
            },
        ],
    },
    {
        id: 'react-hooks-custom',
        day: 17,
        level: 3,
        xp: 75,
        duration: '20 min',
        kind: 'react',
        titleRu: 'Кастомные хуки',
        titleEn: 'Custom Hooks',
        subtitleRu: 'Извлечение логики в переиспользуемые хуки',
        subtitleEn: 'Extracting logic into reusable hooks',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Научись выносить повторяющуюся логику в кастомные хуки.',
        descriptionEn: 'Learn to extract repeated logic into custom hooks.',
        theory: [
            {
                id: 'react-hook-d1',
                titleRu: 'Что такое кастомный хук',
                titleEn: 'What is a custom hook',
                bodyRu: 'Кастомный хук — это обычная функция, имя которой начинается с use. Внутри можно использовать useState, useEffect и другие хуки. Это способ переиспользовать логику между компонентами.',
                bodyEn: 'A custom hook is a regular function whose name starts with use. Inside you can use useState, useEffect, and other hooks. It is a way to reuse logic between components.',
                exampleRu: `import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Использование в компоненте
function SearchScreen() {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Ищем:', debouncedQuery);
    }
  }, [debouncedQuery]);

  return null;
}`,
                exampleEn: `import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage in a component
function SearchScreen() {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Searching:', debouncedQuery);
    }
  }, [debouncedQuery]);

  return null;
}`,
            },
            {
                id: 'react-hook-d2',
                titleRu: 'useToggle — простой пример',
                titleEn: 'useToggle — a simple example',
                bodyRu: 'Часто нужен boolean-state с функцией переключения. Вместо копирования кода, создай хук useToggle.',
                bodyEn: 'Often you need a boolean state with a toggle function. Instead of copying code, create a useToggle hook.',
                exampleRu: `import { useState, useCallback } from 'react';

function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse } as const;
}

// Использование
function ModalExample() {
  const { value: isOpen, toggle, setFalse: close } = useToggle();

  return (
    <View>
      <Pressable onPress={toggle}>
        <Text>Переключить</Text>
      </Pressable>
      {isOpen && (
        <View>
          <Text>Модалка открыта</Text>
          <Pressable onPress={close}>
            <Text>Закрыть</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}`,
                exampleEn: `import { useState, useCallback } from 'react';

function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse } as const;
}

// Usage
function ModalExample() {
  const { value: isOpen, toggle, setFalse: close } = useToggle();

  return (
    <View>
      <Pressable onPress={toggle}>
        <Text>Toggle</Text>
      </Pressable>
      {isOpen && (
        <View>
          <Text>Modal is open</Text>
          <Pressable onPress={close}>
            <Text>Close</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'react-hook-t1',
                type: 'code',
                promptRu: 'Создай хук useToggle, который возвращает value и toggle.',
                promptEn: 'Create a useToggle hook that returns value and toggle.',
                answerRu: 'function useToggle(initial = false) { const [value, setValue] = useState(initial); const toggle = () => setValue(p => !p); return { value, toggle }; }',
                answerEn: 'function useToggle(initial = false) { const [value, setValue] = useState(initial); const toggle = () => setValue(p => !p); return { value, toggle }; }',
                starterCode: `import { useState } from 'react';

function useToggle() {
  
}`,
                validation: { mode: 'includesAll', keywords: ['usestate', 'toggle', '!prev'] },
            },
            {
                id: 'react-hook-t2',
                type: 'code',
                promptRu: 'Создай хук useCounter с increment, decrement и reset.',
                promptEn: 'Create a useCounter hook with increment, decrement, and reset.',
                answerRu: 'return { count, increment: () => setCount(p => p+1), decrement: () => setCount(p => p-1), reset: () => setCount(0) };',
                answerEn: 'return { count, increment: () => setCount(p => p+1), decrement: () => setCount(p => p-1), reset: () => setCount(0) };',
                starterCode: `import { useState } from 'react';

function useCounter(initialValue: number = 0) {
  
}`,
                validation: { mode: 'includesAll', keywords: ['usestate', 'increment', 'decrement'] },
            },
            {
                id: 'react-hook-t3',
                type: 'challenge',
                promptRu: 'Когда стоит создавать кастомный хук?',
                promptEn: 'When should you create a custom hook?',
                answerRu: 'Когда одинаковая логика повторяется в нескольких компонентах.',
                answerEn: 'When the same logic repeats in multiple components.',
                placeholderRu: 'Укажи про повторение',
                placeholderEn: 'Mention repetition',
                validation: { mode: 'includesAny', keywords: ['повтор', 'переиспольз', 'repeat', 'reuse', 'multiple'] },
            },
        ],
    },
    {
        id: 'react-performance',
        day: 18,
        level: 4,
        xp: 85,
        duration: '22 min',
        kind: 'react',
        titleRu: 'Производительность React',
        titleEn: 'React Performance',
        subtitleRu: 'memo, useMemo, useCallback',
        subtitleEn: 'memo, useMemo, useCallback',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Ручные оптимизации и когда их применять.',
        descriptionEn: 'Manual optimizations and when to apply them.',
        theory: [
            {
                id: 'react-perf-d1',
                titleRu: 'React.memo для компонентов',
                titleEn: 'React.memo for components',
                bodyRu: 'React.memo оборачивает компонент и пропускает ререндер, если props не изменились. Полезно для списков и часто обновляющихся родителей.',
                bodyEn: 'React.memo wraps a component and skips rerender if props have not changed. Useful for lists and frequently updating parents.',
                exampleRu: `import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard = React.memo(function UserCard({ name, email }: UserCardProps) {
  console.log('UserCard render:', name);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
});

// Родитель может ререндериться, но UserCard
// перерисуется только если name или email изменились

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1E293B', borderRadius: 12, gap: 4 },
  name: { color: '#fff', fontSize: 16, fontWeight: '600' },
  email: { color: '#94A3B8', fontSize: 14 },
});

export default UserCard;`,
                exampleEn: `import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserCardProps {
  name: string;
  email: string;
}

const UserCard = React.memo(function UserCard({ name, email }: UserCardProps) {
  console.log('UserCard render:', name);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
});

// Parent can rerender, but UserCard
// only rerenders if name or email changed

const styles = StyleSheet.create({
  card: { padding: 16, backgroundColor: '#1E293B', borderRadius: 12, gap: 4 },
  name: { color: '#fff', fontSize: 16, fontWeight: '600' },
  email: { color: '#94A3B8', fontSize: 14 },
});

export default UserCard;`,
            },
            {
                id: 'react-perf-d2',
                titleRu: 'useMemo кэширует вычисления',
                titleEn: 'useMemo caches computations',
                bodyRu: 'useMemo пересчитывает значение только когда зависимости изменились. Используй для дорогих вычислений или стабильных ссылок.',
                bodyEn: 'useMemo recalculates only when dependencies change. Use for expensive computations or stable references.',
                exampleRu: `import React, { useMemo, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

function ProductList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string>('');

  const filteredProducts = useMemo(() => {
    console.log('Фильтрация запущена');
    return products.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return null;
}`,
                exampleEn: `import React, { useMemo, useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

function ProductList({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string>('');

  const filteredProducts = useMemo(() => {
    console.log('Filtering started');
    return products.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [products, filter]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return null;
}`,
            },
            {
                id: 'react-perf-d3',
                titleRu: 'useCallback стабилизирует функцию',
                titleEn: 'useCallback stabilizes a function',
                bodyRu: 'useCallback возвращает ту же ссылку на функцию, пока зависимости не изменились. Нужен, когда передаёшь callback в memo-компонент.',
                bodyEn: 'useCallback returns the same function reference as long as dependencies have not changed. Needed when passing callbacks to memo components.',
                exampleRu: `import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = useCallback((item: string) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const handleRemove = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return null;
}`,
                exampleEn: `import React, { useCallback, useState } from 'react';

function ParentComponent() {
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = useCallback((item: string) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const handleRemove = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return null;
}`,
            },
        ],
        tasks: [
            {
                id: 'react-perf-t1',
                type: 'code',
                promptRu: 'Оберни компонент UserCard в React.memo.',
                promptEn: 'Wrap UserCard component with React.memo.',
                answerRu: 'export default React.memo(UserCard);',
                answerEn: 'export default React.memo(UserCard);',
                starterCode: `function UserCard({ name }: { name: string }) {
  return null;
}

export default UserCard;`,
                validation: { mode: 'includesAll', keywords: ['react.memo'] },
            },
            {
                id: 'react-perf-t2',
                type: 'code',
                promptRu: 'Мемоизируй фильтрацию через useMemo.',
                promptEn: 'Memoize filtering with useMemo.',
                answerRu: 'const filtered = useMemo(() => items.filter(...), [items, query]);',
                answerEn: 'const filtered = useMemo(() => items.filter(...), [items, query]);',
                starterCode: `import React, { useMemo, useState } from 'react';

function List({ items }: { items: string[] }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter((i) => i.includes(query));
  return null;
}`,
                validation: { mode: 'includesAll', keywords: ['usememo', 'filter'] },
            },
            {
                id: 'react-perf-t3',
                type: 'challenge',
                promptRu: 'Когда React.memo вреден?',
                promptEn: 'When is React.memo harmful?',
                answerRu: 'Когда props всё равно меняются каждый рендер — сравнение добавляет лишнюю работу.',
                answerEn: 'When props change every render anyway — comparison adds unnecessary work.',
                placeholderRu: 'Укажи про лишнее сравнение',
                placeholderEn: 'Mention unnecessary comparison',
                validation: { mode: 'includesAny', keywords: ['сравнен', 'лишн', 'compari', 'unnecess', 'overhead'] },
            },
        ],
    },
    {
        id: 'react-navigation',
        day: 19,
        level: 4,
        xp: 80,
        duration: '20 min',
        kind: 'react',
        titleRu: 'Навигация и роутинг',
        titleEn: 'Navigation and Routing',
        subtitleRu: 'Expo Router, Stack, параметры',
        subtitleEn: 'Expo Router, Stack, parameters',
        difficultyRu: 'Уровень 4',
        difficultyEn: 'Level 4',
        descriptionRu: 'Файловая маршрутизация в Expo Router: страницы, переходы, параметры.',
        descriptionEn: 'File-based routing in Expo Router: pages, transitions, parameters.',
        theory: [
            {
                id: 'react-nav-d1',
                titleRu: 'Файловая маршрутизация',
                titleEn: 'File-based routing',
                bodyRu: 'В Expo Router каждый файл в папке app/ автоматически становится маршрутом. index.tsx — главная страница, [id].tsx — динамический маршрут. _layout.tsx задаёт обёртку.',
                bodyEn: 'In Expo Router, every file in the app/ folder automatically becomes a route. index.tsx is the home page, [id].tsx is a dynamic route. _layout.tsx defines the wrapper.',
                exampleRu: `// app/index.tsx — маршрут "/"
// app/profile.tsx — маршрут "/profile"
// app/user/[id].tsx — маршрут "/user/123"

// Навигация между страницами
import { router } from 'expo-router';

// Переход на страницу
router.push('/profile');

// Переход с параметром
router.push('/user/123');

// Назад
router.back();`,
                exampleEn: `// app/index.tsx — route "/"
// app/profile.tsx — route "/profile"
// app/user/[id].tsx — route "/user/123"

// Navigation between pages
import { router } from 'expo-router';

// Navigate to a page
router.push('/profile');

// Navigate with a parameter
router.push('/user/123');

// Go back
router.back();`,
            },
            {
                id: 'react-nav-d2',
                titleRu: 'Динамические параметры',
                titleEn: 'Dynamic parameters',
                bodyRu: 'Файл [id].tsx создаёт динамический маршрут. Параметр извлекается через useLocalSearchParams().',
                bodyEn: 'A file [id].tsx creates a dynamic route. The parameter is extracted via useLocalSearchParams().',
                exampleRu: `// app/user/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UserScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Пользователь: {id}</Text>
    </View>
  );
}`,
                exampleEn: `// app/user/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function UserScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>User: {id}</Text>
    </View>
  );
}`,
            },
        ],
        tasks: [
            {
                id: 'react-nav-t1',
                type: 'code',
                promptRu: 'Напиши router.push для перехода на /lesson/js-arrays.',
                promptEn: 'Write router.push to navigate to /lesson/js-arrays.',
                answerRu: "router.push('/lesson/js-arrays');",
                answerEn: "router.push('/lesson/js-arrays');",
                starterCode: `import { router } from 'expo-router';

function handleStart() {
  
}`,
                validation: { mode: 'includesAll', keywords: ['router.push', '/lesson/'] },
            },
            {
                id: 'react-nav-t2',
                type: 'code',
                promptRu: 'Извлеки параметр id из useLocalSearchParams.',
                promptEn: 'Extract the id parameter from useLocalSearchParams.',
                answerRu: 'const { id } = useLocalSearchParams<{ id: string }>();',
                answerEn: 'const { id } = useLocalSearchParams<{ id: string }>();',
                starterCode: `import { useLocalSearchParams } from 'expo-router';

export default function DetailScreen() {
  // извлеки id
}`,
                validation: { mode: 'includesAll', keywords: ['uselocalsearchparams', 'id'] },
            },
            {
                id: 'react-nav-t3',
                type: 'theory',
                promptRu: 'Зачем нужен _layout.tsx?',
                promptEn: 'Why is _layout.tsx needed?',
                answerRu: 'Для определения обёртки навигации (Stack, Tabs) и общих настроек экранов.',
                answerEn: 'To define the navigation wrapper (Stack, Tabs) and shared screen options.',
                placeholderRu: 'Укажи про навигацию',
                placeholderEn: 'Mention navigation',
                validation: { mode: 'includesAny', keywords: ['stack', 'tabs', 'навигац', 'navigat', 'wrapper', 'обёртк'] },
            },
        ],
    },
    {
        id: 'react-patterns',
        day: 20,
        level: 5,
        xp: 90,
        duration: '24 min',
        kind: 'react',
        titleRu: 'Паттерны React',
        titleEn: 'React Patterns',
        subtitleRu: 'Context, композиция, разделение логики',
        subtitleEn: 'Context, composition, separating logic',
        difficultyRu: 'Уровень 5',
        difficultyEn: 'Level 5',
        descriptionRu: 'Продвинутые паттерны для масштабируемых приложений.',
        descriptionEn: 'Advanced patterns for scalable applications.',
        theory: [
            {
                id: 'react-pat-d1',
                titleRu: 'Context для глобальных данных',
                titleEn: 'Context for global data',
                bodyRu: 'Context позволяет пробрасывать данные через дерево компонентов без передачи props на каждом уровне. Используй для темы, языка, авторизации.',
                bodyEn: 'Context lets you pass data through the component tree without prop drilling. Use for theme, language, auth.',
                exampleRu: `import createContextHook from '@nkzw/create-context-hook';
import { useState } from 'react';

type Theme = 'light' | 'dark';

export const [ThemeProvider, useTheme] = createContextHook(() => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
});

// Использование в компоненте
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme}>
      <Text>Тема: {theme}</Text>
    </Pressable>
  );
}`,
                exampleEn: `import createContextHook from '@nkzw/create-context-hook';
import { useState } from 'react';

type Theme = 'light' | 'dark';

export const [ThemeProvider, useTheme] = createContextHook(() => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
});

// Usage in a component
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Pressable onPress={toggleTheme}>
      <Text>Theme: {theme}</Text>
    </Pressable>
  );
}`,
            },
            {
                id: 'react-pat-d2',
                titleRu: 'Композиция вместо наследования',
                titleEn: 'Composition over inheritance',
                bodyRu: 'В React нет наследования компонентов. Вместо этого используй композицию: вкладывай компоненты друг в друга, передавай children, создавай обёртки.',
                bodyEn: 'React has no component inheritance. Instead, use composition: nest components, pass children, create wrappers.',
                exampleRu: `import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScreenWrapperProps {
  title: string;
  children: ReactNode;
  rightAction?: ReactNode;
}

function ScreenWrapper({ title, children, rightAction }: ScreenWrapperProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {rightAction}
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

// Использование
function ProfileScreen() {
  return (
    <ScreenWrapper
      title="Профиль"
      rightAction={<Text>Редактировать</Text>}
    >
      <Text>Контент профиля</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 16 },
});`,
                exampleEn: `import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScreenWrapperProps {
  title: string;
  children: ReactNode;
  rightAction?: ReactNode;
}

function ScreenWrapper({ title, children, rightAction }: ScreenWrapperProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {rightAction}
      </View>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

// Usage
function ProfileScreen() {
  return (
    <ScreenWrapper
      title="Profile"
      rightAction={<Text>Edit</Text>}
    >
      <Text>Profile content</Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  content: { flex: 1, padding: 16 },
});`,
            },
        ],
        tasks: [
            {
                id: 'react-pat-t1',
                type: 'code',
                promptRu: 'Создай провайдер темы с createContextHook: theme и toggleTheme.',
                promptEn: 'Create a theme provider with createContextHook: theme and toggleTheme.',
                answerRu: 'const [ThemeProvider, useTheme] = createContextHook(() => { ... });',
                answerEn: 'const [ThemeProvider, useTheme] = createContextHook(() => { ... });',
                starterCode: `import createContextHook from '@nkzw/create-context-hook';
import { useState } from 'react';

`,
                validation: { mode: 'includesAll', keywords: ['createcontexthook', 'theme', 'toggle'] },
            },
            {
                id: 'react-pat-t2',
                type: 'challenge',
                promptRu: 'Когда Context лучше, чем props drilling?',
                promptEn: 'When is Context better than props drilling?',
                answerRu: 'Когда данные нужны многим компонентам на разных уровнях вложенности.',
                answerEn: 'When data is needed by many components at different nesting levels.',
                placeholderRu: 'Укажи про уровни вложенности',
                placeholderEn: 'Mention nesting levels',
                validation: { mode: 'includesAny', keywords: ['уровн', 'вложен', 'level', 'nest', 'many', 'множ'] },
            },
        ],
    },
];
