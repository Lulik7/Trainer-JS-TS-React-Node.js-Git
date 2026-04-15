import { Lesson } from './lessons-types';

export const nestjsLessons: Lesson[] = [
    {
        id: 'nest-intro',
        day: 41,
        level: 1,
        xp: 45,
        duration: '14 min',
        kind: 'nestjs',
        titleRu: 'Что такое NestJS',
        titleEn: 'What is NestJS',
        subtitleRu: 'Серверный фреймворк, модули, TypeScript',
        subtitleEn: 'Server framework, modules, TypeScript',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Зачем NestJS, архитектура, модули и контроллеры.',
        descriptionEn: 'Why NestJS, architecture, modules and controllers.',
        theory: [
            {
                id: 'nest-intro-d1',
                titleRu: 'NestJS — фреймворк для серверов',
                titleEn: 'NestJS — a server framework',
                bodyRu: 'NestJS — это прогрессивный Node.js-фреймворк для создания серверных приложений. Он использует TypeScript по умолчанию и вдохновлён Angular: модули, декораторы, dependency injection. NestJS помогает структурировать большие проекты.',
                bodyEn: 'NestJS is a progressive Node.js framework for building server-side applications. It uses TypeScript by default and is inspired by Angular: modules, decorators, dependency injection. NestJS helps structure large projects.',
                exampleRu: `// Создание проекта
npm i -g @nestjs/cli
nest new my-api
cd my-api
npm run start:dev

// Структура проекта NestJS:
// src/
//   app.module.ts      — корневой модуль
//   app.controller.ts  — контроллер
//   app.service.ts     — сервис (бизнес-логика)
//   main.ts            — точка входа
//
// Каждый модуль объединяет контроллеры и сервисы`,
                exampleEn: `// Creating a project
npm i -g @nestjs/cli
nest new my-api
cd my-api
npm run start:dev

// NestJS project structure:
// src/
//   app.module.ts      — root module
//   app.controller.ts  — controller
//   app.service.ts     — service (business logic)
//   main.ts            — entry point
//
// Each module groups controllers and services`,
            },
            {
                id: 'nest-intro-d2',
                titleRu: 'Контроллер обрабатывает запросы',
                titleEn: 'A controller handles requests',
                bodyRu: 'Контроллер — это класс с декораторами, который обрабатывает HTTP-запросы. @Controller() задаёт базовый путь, @Get(), @Post() и т.д. задают метод и подпуть.',
                bodyEn: 'A controller is a class with decorators that handles HTTP requests. @Controller() sets the base path, @Get(), @Post() etc. set the method and sub-path.',
                exampleRu: `import { Controller, Get, Post, Body, Param } from '@nestjs/common';

interface CreateUserDto {
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users = [
    { id: 1, name: 'Анна', email: 'anna@mail.com' },
  ];

  @Get()
  findAll() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users.find((u) => u.id === Number(id));
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...dto };
    this.users.push(newUser);
    return newUser;
  }
}`,
                exampleEn: `import { Controller, Get, Post, Body, Param } from '@nestjs/common';

interface CreateUserDto {
  name: string;
  email: string;
}

@Controller('users')
export class UsersController {
  private users = [
    { id: 1, name: 'Anna', email: 'anna@mail.com' },
  ];

  @Get()
  findAll() {
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.users.find((u) => u.id === Number(id));
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    const newUser = { id: this.users.length + 1, ...dto };
    this.users.push(newUser);
    return newUser;
  }
}`,
            },
        ],
        tasks: [
            { id: 'nest-intro-t1', type: 'theory', promptRu: 'Чем NestJS отличается от Express?', promptEn: 'How does NestJS differ from Express?', answerRu: 'NestJS добавляет структуру: модули, декораторы, DI, TypeScript — Express не навязывает архитектуру.', answerEn: 'NestJS adds structure: modules, decorators, DI, TypeScript — Express does not enforce architecture.', placeholderRu: 'Укажи про структуру', placeholderEn: 'Mention structure', validation: { mode: 'includesAny', keywords: ['структур', 'модул', 'structure', 'module', 'декоратор', 'decorator'] } },
            { id: 'nest-intro-t2', type: 'code', promptRu: 'Создай контроллер с декоратором @Controller("tasks") и методом @Get().', promptEn: 'Create a controller with @Controller("tasks") and a @Get() method.', answerRu: '@Controller("tasks") export class TasksController { @Get() findAll() { return []; } }', answerEn: '@Controller("tasks") export class TasksController { @Get() findAll() { return []; } }', starterCode: `import { Controller, Get } from '@nestjs/common';\n\n`, validation: { mode: 'includesAll', keywords: ['@controller', '@get'] } },
            { id: 'nest-intro-t3', type: 'challenge', promptRu: 'Что даёт декоратор @Body()?', promptEn: 'What does the @Body() decorator do?', answerRu: 'Извлекает тело HTTP-запроса и передаёт его как параметр метода.', answerEn: 'Extracts the HTTP request body and passes it as a method parameter.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['тело', 'body', 'запрос', 'request', 'параметр', 'parameter'] } },
        ],
    },
    {
        id: 'nest-modules-services',
        day: 42, level: 2, xp: 60, duration: '18 min', kind: 'nestjs',
        titleRu: 'Модули и сервисы', titleEn: 'Modules and Services',
        subtitleRu: '@Module, @Injectable, Dependency Injection', subtitleEn: '@Module, @Injectable, Dependency Injection',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Как разделять логику на модули и сервисы с DI.', descriptionEn: 'How to split logic into modules and services with DI.',
        theory: [
            { id: 'nest-ms-d1', titleRu: 'Сервис — бизнес-логика', titleEn: 'Service — business logic', bodyRu: 'Сервис — это класс с @Injectable(). Он содержит бизнес-логику: работу с БД, валидацию, вычисления. Контроллер вызывает сервис, а не содержит логику сам. NestJS автоматически внедряет сервис через конструктор (DI).', bodyEn: 'A service is a class with @Injectable(). It contains business logic: DB access, validation, calculations. The controller calls the service instead of containing logic itself. NestJS automatically injects the service via constructor (DI).',
                exampleRu: `import { Injectable } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      isDone: false,
    };
    this.tasks.push(task);
    return task;
  }

  toggle(id: number): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.isDone = !task.isDone;
    }
    return task;
  }
}`,
                exampleEn: `import { Injectable } from '@nestjs/common';

interface Task {
  id: number;
  title: string;
  isDone: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      isDone: false,
    };
    this.tasks.push(task);
    return task;
  }

  toggle(id: number): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.isDone = !task.isDone;
    }
    return task;
  }
}` },
            { id: 'nest-ms-d2', titleRu: 'Модуль объединяет всё', titleEn: 'A module groups everything', bodyRu: '@Module() объединяет контроллеры и провайдеры (сервисы). Корневой AppModule импортирует остальные модули. Это основа масштабируемости NestJS.', bodyEn: '@Module() groups controllers and providers (services). The root AppModule imports other modules. This is the foundation of NestJS scalability.',
                exampleRu: `import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

// app.module.ts
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}`,
                exampleEn: `import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}

// app.module.ts
import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}` },
        ],
        tasks: [
            { id: 'nest-ms-t1', type: 'code', promptRu: 'Создай сервис с @Injectable() и методом findAll().', promptEn: 'Create a service with @Injectable() and a findAll() method.', answerRu: '@Injectable() export class TasksService { findAll() { return []; } }', answerEn: '@Injectable() export class TasksService { findAll() { return []; } }', starterCode: `import { Injectable } from '@nestjs/common';\n\n`, validation: { mode: 'includesAll', keywords: ['@injectable', 'findall'] } },
            { id: 'nest-ms-t2', type: 'code', promptRu: 'Создай модуль @Module с controllers и providers.', promptEn: 'Create a @Module with controllers and providers.', answerRu: '@Module({ controllers: [TasksController], providers: [TasksService] }) export class TasksModule {}', answerEn: '@Module({ controllers: [TasksController], providers: [TasksService] }) export class TasksModule {}', starterCode: `import { Module } from '@nestjs/common';\n\n`, validation: { mode: 'includesAll', keywords: ['@module', 'controllers', 'providers'] } },
            { id: 'nest-ms-t3', type: 'theory', promptRu: 'Что такое Dependency Injection?', promptEn: 'What is Dependency Injection?', answerRu: 'DI — паттерн, при котором зависимости (сервисы) автоматически передаются через конструктор, а не создаются вручную.', answerEn: 'DI is a pattern where dependencies (services) are automatically passed via constructor, not created manually.', placeholderRu: 'Опиши простыми словами', placeholderEn: 'Describe in simple words', validation: { mode: 'includesAny', keywords: ['конструктор', 'constructor', 'автоматич', 'automatic', 'зависимос', 'depend'] } },
        ],
    },
    {
        id: 'nest-dto-validation',
        day: 43, level: 2, xp: 55, duration: '16 min', kind: 'nestjs',
        titleRu: 'DTO и валидация', titleEn: 'DTO and Validation',
        subtitleRu: 'class-validator, ValidationPipe, DTO', subtitleEn: 'class-validator, ValidationPipe, DTO',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Data Transfer Objects и автоматическая валидация входных данных.', descriptionEn: 'Data Transfer Objects and automatic input validation.',
        theory: [
            { id: 'nest-dto-d1', titleRu: 'DTO описывает входные данные', titleEn: 'DTO describes input data', bodyRu: 'DTO (Data Transfer Object) — класс, описывающий форму данных запроса. С декораторами из class-validator можно автоматически проверять входные данные. ValidationPipe отклонит невалидный запрос с 400 ошибкой.', bodyEn: 'A DTO (Data Transfer Object) is a class describing the request data shape. With class-validator decorators you can automatically validate input. ValidationPipe rejects invalid requests with a 400 error.',
                exampleRu: `import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  bio?: string;
}

// В контроллере
@Post()
create(@Body() dto: CreateUserDto) {
  return this.usersService.create(dto);
}

// В main.ts — включаем валидацию глобально
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  await app.listen(3000);
}`,
                exampleEn: `import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  bio?: string;
}

// In the controller
@Post()
create(@Body() dto: CreateUserDto) {
  return this.usersService.create(dto);
}

// In main.ts — enable validation globally
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));
  await app.listen(3000);
}` },
        ],
        tasks: [
            { id: 'nest-dto-t1', type: 'code', promptRu: 'Создай CreateTaskDto с @IsString() для title.', promptEn: 'Create a CreateTaskDto with @IsString() for title.', answerRu: 'export class CreateTaskDto { @IsString() title: string; }', answerEn: 'export class CreateTaskDto { @IsString() title: string; }', starterCode: `import { IsString } from 'class-validator';\n\n`, validation: { mode: 'includesAll', keywords: ['@isstring', 'title', 'class'] } },
            { id: 'nest-dto-t2', type: 'theory', promptRu: 'Что делает ValidationPipe?', promptEn: 'What does ValidationPipe do?', answerRu: 'Автоматически проверяет входные данные по правилам декораторов и возвращает 400 при ошибке.', answerEn: 'Automatically validates input against decorator rules and returns 400 on error.', placeholderRu: 'Укажи про проверку', placeholderEn: 'Mention validation', validation: { mode: 'includesAny', keywords: ['провер', 'valid', '400', 'автомат', 'automat'] } },
        ],
    },
    {
        id: 'nest-pipes-guards',
        day: 44, level: 3, xp: 70, duration: '20 min', kind: 'nestjs',
        titleRu: 'Guards и Pipes', titleEn: 'Guards and Pipes',
        subtitleRu: 'Авторизация, трансформация, защита роутов', subtitleEn: 'Auth, transformation, route protection',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Guards для авторизации, Pipes для преобразования данных.', descriptionEn: 'Guards for auth, Pipes for data transformation.',
        theory: [
            { id: 'nest-pg-d1', titleRu: 'Guard проверяет доступ', titleEn: 'Guard checks access', bodyRu: 'Guard — это класс с @Injectable() и методом canActivate(). Он решает, пропустить запрос или нет. Используй для авторизации: проверки JWT-токена, ролей, прав.', bodyEn: 'A Guard is a class with @Injectable() and a canActivate() method. It decides whether to allow a request. Use for auth: checking JWT tokens, roles, permissions.',
                exampleRu: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token) {
      return false;
    }

    return true;
  }
}

// Использование на контроллере
@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  @Get()
  findAll() {
    return [];
  }
}`,
                exampleEn: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    if (!token) {
      return false;
    }

    return true;
  }
}

// Usage on a controller
@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  @Get()
  findAll() {
    return [];
  }
}` },
        ],
        tasks: [
            { id: 'nest-pg-t1', type: 'code', promptRu: 'Создай AuthGuard с canActivate, проверяющий наличие authorization header.', promptEn: 'Create an AuthGuard with canActivate that checks for an authorization header.', answerRu: '@Injectable() export class AuthGuard implements CanActivate { canActivate(context) { ... } }', answerEn: '@Injectable() export class AuthGuard implements CanActivate { canActivate(context) { ... } }', starterCode: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\n\n`, validation: { mode: 'includesAll', keywords: ['canactivate', 'authorization'] } },
            { id: 'nest-pg-t2', type: 'theory', promptRu: 'Чем Guard отличается от Middleware?', promptEn: 'How does a Guard differ from Middleware?', answerRu: 'Guard имеет доступ к контексту выполнения и возвращает boolean — пускать или нет. Middleware — более общий перехватчик.', answerEn: 'A Guard has access to the execution context and returns boolean — allow or not. Middleware is a more general interceptor.', placeholderRu: 'Укажи про boolean', placeholderEn: 'Mention boolean', validation: { mode: 'includesAny', keywords: ['boolean', 'контекст', 'context', 'пуска', 'allow'] } },
        ],
    },
    {
        id: 'nest-interceptors',
        day: 45, level: 3, xp: 65, duration: '18 min', kind: 'nestjs',
        titleRu: 'Interceptors и Exception Filters', titleEn: 'Interceptors and Exception Filters',
        subtitleRu: 'Перехват ответов, логирование, обработка ошибок', subtitleEn: 'Response interception, logging, error handling',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Interceptors для преобразования ответов и Exception Filters для ошибок.', descriptionEn: 'Interceptors for transforming responses and Exception Filters for errors.',
        theory: [
            { id: 'nest-ie-d1', titleRu: 'Interceptor обрабатывает запрос и ответ', titleEn: 'Interceptor processes request and response', bodyRu: 'Interceptor оборачивает обработчик запроса. Может логировать, замерять время, трансформировать ответ. Используют паттерн RxJS с pipe() и map().', bodyEn: 'An Interceptor wraps the request handler. It can log, measure time, transform the response. Uses the RxJS pattern with pipe() and map().',
                exampleRu: `import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    console.log(\`→ \${request.method} \${request.url}\`);

    return next.handle().pipe(
      tap(() => {
        console.log(\`← \${Date.now() - now}ms\`);
      }),
    );
  }
}`,
                exampleEn: `import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();

    console.log(\`→ \${request.method} \${request.url}\`);

    return next.handle().pipe(
      tap(() => {
        console.log(\`← \${Date.now() - now}ms\`);
      }),
    );
  }
}` },
        ],
        tasks: [
            { id: 'nest-ie-t1', type: 'theory', promptRu: 'Что делает Interceptor?', promptEn: 'What does an Interceptor do?', answerRu: 'Оборачивает обработчик запроса — может логировать, замерять время, трансформировать ответ.', answerEn: 'Wraps the request handler — can log, measure time, transform the response.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['оборач', 'wrap', 'логир', 'log', 'трансформ', 'transform'] } },
            { id: 'nest-ie-t2', type: 'code', promptRu: 'Создай Interceptor, который замеряет время выполнения.', promptEn: 'Create an Interceptor that measures execution time.', answerRu: 'return next.handle().pipe(tap(() => console.log(Date.now() - now)));', answerEn: 'return next.handle().pipe(tap(() => console.log(Date.now() - now)));', starterCode: `import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { tap } from 'rxjs/operators';\n\n`, validation: { mode: 'includesAll', keywords: ['intercept', 'next.handle', 'tap'] } },
        ],
    },
    {
        id: 'nest-database',
        day: 46, level: 3, xp: 75, duration: '22 min', kind: 'nestjs',
        titleRu: 'Работа с базой данных', titleEn: 'Database Integration',
        subtitleRu: 'TypeORM, Prisma, Repository', subtitleEn: 'TypeORM, Prisma, Repository',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Подключение базы данных через ORM и паттерн Repository.', descriptionEn: 'Connecting a database via ORM and the Repository pattern.',
        theory: [
            { id: 'nest-db-d1', titleRu: 'Prisma в NestJS', titleEn: 'Prisma in NestJS', bodyRu: 'Prisma — современный ORM для Node.js. Описываешь модели в schema.prisma, генерируешь клиент, используешь его в сервисах. NestJS отлично интегрируется с Prisma через Injectable сервис.', bodyEn: 'Prisma is a modern ORM for Node.js. Define models in schema.prisma, generate the client, use it in services. NestJS integrates well with Prisma through an Injectable service.',
                exampleRu: `// prisma/schema.prisma
// model User {
//   id    Int    @id @default(autoincrement())
//   name  String
//   email String @unique
//   posts Post[]
// }

// prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(name: string, email: string) {
    return this.prisma.user.create({
      data: { name, email },
    });
  }
}`,
                exampleEn: `// prisma/schema.prisma
// model User {
//   id    Int    @id @default(autoincrement())
//   name  String
//   email String @unique
//   posts Post[]
// }

// prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  create(name: string, email: string) {
    return this.prisma.user.create({
      data: { name, email },
    });
  }
}` },
        ],
        tasks: [
            { id: 'nest-db-t1', type: 'code', promptRu: 'Создай PrismaService, расширяющий PrismaClient с onModuleInit.', promptEn: 'Create a PrismaService extending PrismaClient with onModuleInit.', answerRu: '@Injectable() export class PrismaService extends PrismaClient implements OnModuleInit { async onModuleInit() { await this.$connect(); } }', answerEn: '@Injectable() export class PrismaService extends PrismaClient implements OnModuleInit { async onModuleInit() { await this.$connect(); } }', starterCode: `import { Injectable, OnModuleInit } from '@nestjs/common';\n\n`, validation: { mode: 'includesAll', keywords: ['prismaservice', 'onmoduleinit', '$connect'] } },
            { id: 'nest-db-t2', type: 'theory', promptRu: 'Что такое ORM?', promptEn: 'What is an ORM?', answerRu: 'Object-Relational Mapping — позволяет работать с БД через объекты и методы вместо SQL-запросов.', answerEn: 'Object-Relational Mapping — lets you work with a DB through objects and methods instead of SQL queries.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['object', 'объект', 'sql', 'маппинг', 'mapping'] } },
        ],
    },
    {
        id: 'nest-auth-jwt',
        day: 47, level: 4, xp: 80, duration: '22 min', kind: 'nestjs',
        titleRu: 'JWT-авторизация', titleEn: 'JWT Authentication',
        subtitleRu: 'Passport, JWT, стратегии', subtitleEn: 'Passport, JWT, strategies',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Авторизация через JWT-токены с Passport.', descriptionEn: 'Authentication via JWT tokens with Passport.',
        theory: [
            { id: 'nest-jwt-d1', titleRu: 'JWT — JSON Web Token', titleEn: 'JWT — JSON Web Token', bodyRu: 'JWT — это токен, содержащий зашифрованные данные пользователя. Сервер создаёт токен при логине, клиент отправляет его в заголовке Authorization. NestJS использует @nestjs/passport и @nestjs/jwt для авторизации.', bodyEn: 'JWT is a token containing encoded user data. The server creates it on login, the client sends it in the Authorization header. NestJS uses @nestjs/passport and @nestjs/jwt for auth.',
                exampleRu: `// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: { id: number; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch {
      return null;
    }
  }
}`,
                exampleEn: `// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: { id: number; email: string }) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch {
      return null;
    }
  }
}` },
        ],
        tasks: [
            { id: 'nest-jwt-t1', type: 'code', promptRu: 'Создай метод login, который генерирует JWT-токен через jwtService.sign().', promptEn: 'Create a login method that generates a JWT token via jwtService.sign().', answerRu: 'async login(user) { const payload = { sub: user.id }; return { access_token: this.jwtService.sign(payload) }; }', answerEn: 'async login(user) { const payload = { sub: user.id }; return { access_token: this.jwtService.sign(payload) }; }', starterCode: `// Создай метод login\n`, validation: { mode: 'includesAll', keywords: ['jwtservice.sign', 'payload', 'access_token'] } },
            { id: 'nest-jwt-t2', type: 'theory', promptRu: 'Что содержит JWT-токен?', promptEn: 'What does a JWT token contain?', answerRu: 'Три части: header (алгоритм), payload (данные пользователя), signature (подпись).', answerEn: 'Three parts: header (algorithm), payload (user data), signature.', placeholderRu: 'Перечисли части', placeholderEn: 'List the parts', validation: { mode: 'includesAny', keywords: ['header', 'payload', 'signature', 'подпис', 'данные', 'data'] } },
        ],
    },
    {
        id: 'nest-testing',
        day: 48, level: 4, xp: 70, duration: '18 min', kind: 'nestjs',
        titleRu: 'Тестирование в NestJS', titleEn: 'Testing in NestJS',
        subtitleRu: 'Unit-тесты, Jest, Test.createTestingModule', subtitleEn: 'Unit tests, Jest, Test.createTestingModule',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Как тестировать контроллеры и сервисы в NestJS.', descriptionEn: 'How to test controllers and services in NestJS.',
        theory: [
            { id: 'nest-test-d1', titleRu: 'Unit-тесты сервисов', titleEn: 'Service unit tests', bodyRu: 'NestJS использует Jest и предоставляет Test.createTestingModule() для создания изолированного тестового модуля. Можно подменять зависимости через DI.', bodyEn: 'NestJS uses Jest and provides Test.createTestingModule() for creating isolated test modules. Dependencies can be mocked via DI.',
                exampleRu: `import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should create a task', () => {
    const task = service.create('Test task');
    expect(task.title).toBe('Test task');
    expect(task.isDone).toBe(false);
  });

  it('should return all tasks', () => {
    service.create('Task 1');
    service.create('Task 2');
    expect(service.findAll()).toHaveLength(2);
  });
});`,
                exampleEn: `import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should create a task', () => {
    const task = service.create('Test task');
    expect(task.title).toBe('Test task');
    expect(task.isDone).toBe(false);
  });

  it('should return all tasks', () => {
    service.create('Task 1');
    service.create('Task 2');
    expect(service.findAll()).toHaveLength(2);
  });
});` },
        ],
        tasks: [
            { id: 'nest-test-t1', type: 'code', promptRu: 'Напиши тест для сервиса с Test.createTestingModule.', promptEn: 'Write a test for a service using Test.createTestingModule.', answerRu: 'const module = await Test.createTestingModule({ providers: [TasksService] }).compile(); const service = module.get(TasksService);', answerEn: 'const module = await Test.createTestingModule({ providers: [TasksService] }).compile(); const service = module.get(TasksService);', starterCode: `import { Test } from '@nestjs/testing';\n\n`, validation: { mode: 'includesAll', keywords: ['createtestingmodule', 'compile', 'get'] } },
            { id: 'nest-test-t2', type: 'theory', promptRu: 'Зачем нужен Test.createTestingModule?', promptEn: 'Why is Test.createTestingModule needed?', answerRu: 'Для создания изолированного DI-контейнера с подменёнными зависимостями при тестировании.', answerEn: 'To create an isolated DI container with mocked dependencies for testing.', placeholderRu: 'Укажи про изоляцию', placeholderEn: 'Mention isolation', validation: { mode: 'includesAny', keywords: ['изолир', 'isolat', 'di', 'зависим', 'depend', 'mock'] } },
        ],
    },
    {
        id: 'nest-swagger-deploy',
        day: 49, level: 4, xp: 65, duration: '16 min', kind: 'nestjs',
        titleRu: 'Swagger и деплой', titleEn: 'Swagger and Deployment',
        subtitleRu: 'Документация API, Docker, production', subtitleEn: 'API documentation, Docker, production',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Автодокументация API через Swagger и подготовка к деплою.', descriptionEn: 'Auto-documenting API with Swagger and preparing for deployment.',
        theory: [
            { id: 'nest-sw-d1', titleRu: 'Swagger — документация API', titleEn: 'Swagger — API documentation', bodyRu: '@nestjs/swagger автоматически генерирует документацию на основе DTO и декораторов. Swagger UI доступен в браузере — удобно для тестирования и командной работы.', bodyEn: '@nestjs/swagger automatically generates documentation from DTOs and decorators. Swagger UI is available in the browser — convenient for testing and teamwork.',
                exampleRu: `import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API для управления задачами')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log('Swagger: http://localhost:3000/api/docs');
}

bootstrap();`,
                exampleEn: `import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API for managing tasks')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log('Swagger: http://localhost:3000/api/docs');
}

bootstrap();` },
        ],
        tasks: [
            { id: 'nest-sw-t1', type: 'code', promptRu: 'Настрой Swagger через DocumentBuilder с title и description.', promptEn: 'Set up Swagger via DocumentBuilder with title and description.', answerRu: 'const config = new DocumentBuilder().setTitle("API").setDescription("Docs").build();', answerEn: 'const config = new DocumentBuilder().setTitle("API").setDescription("Docs").build();', starterCode: `import { DocumentBuilder } from '@nestjs/swagger';\n\n`, validation: { mode: 'includesAll', keywords: ['documentbuilder', 'settitle', 'build'] } },
            { id: 'nest-sw-t2', type: 'theory', promptRu: 'Зачем нужна Swagger-документация?', promptEn: 'Why is Swagger documentation needed?', answerRu: 'Для автоматической интерактивной документации API — команда и фронтенд видят все endpoints.', answerEn: 'For automatic interactive API docs — the team and frontend can see all endpoints.', placeholderRu: 'Укажи про команду', placeholderEn: 'Mention the team', validation: { mode: 'includesAny', keywords: ['команд', 'team', 'endpoint', 'документ', 'document', 'фронтенд', 'frontend'] } },
        ],
    },
    {
        id: 'nest-websockets',
        day: 50, level: 5, xp: 85, duration: '20 min', kind: 'nestjs',
        titleRu: 'WebSockets в NestJS', titleEn: 'WebSockets in NestJS',
        subtitleRu: 'Gateway, событийная архитектура', subtitleEn: 'Gateway, event-driven architecture',
        difficultyRu: 'Уровень 5', difficultyEn: 'Level 5',
        descriptionRu: 'Реалтайм-коммуникация через WebSocket Gateway.', descriptionEn: 'Real-time communication via WebSocket Gateway.',
        theory: [
            { id: 'nest-ws-d1', titleRu: 'WebSocket Gateway', titleEn: 'WebSocket Gateway', bodyRu: 'NestJS поддерживает WebSockets через @WebSocketGateway(). Gateway — это класс, который обрабатывает события от клиентов в реальном времени. Используй для чатов, уведомлений, живых обновлений.', bodyEn: 'NestJS supports WebSockets via @WebSocketGateway(). A Gateway is a class that handles events from clients in real time. Use for chats, notifications, live updates.',
                exampleRu: `import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { user: string; text: string }) {
    console.log('Сообщение:', data);
    this.server.emit('message', data);
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() data: { room: string }) {
    console.log('Пользователь зашёл в комнату:', data.room);
  }
}`,
                exampleEn: `import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: { user: string; text: string }) {
    console.log('Message:', data);
    this.server.emit('message', data);
  }

  @SubscribeMessage('join')
  handleJoin(@MessageBody() data: { room: string }) {
    console.log('User joined room:', data.room);
  }
}` },
        ],
        tasks: [
            { id: 'nest-ws-t1', type: 'code', promptRu: 'Создай Gateway с @SubscribeMessage("message") для обработки сообщений.', promptEn: 'Create a Gateway with @SubscribeMessage("message") for handling messages.', answerRu: '@WebSocketGateway() export class ChatGateway { @SubscribeMessage("message") handleMessage(@MessageBody() data) { this.server.emit("message", data); } }', answerEn: '@WebSocketGateway() export class ChatGateway { @SubscribeMessage("message") handleMessage(@MessageBody() data) { this.server.emit("message", data); } }', starterCode: `import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';\n\n`, validation: { mode: 'includesAll', keywords: ['@subscribemessage', 'message', 'emit'] } },
            { id: 'nest-ws-t2', type: 'theory', promptRu: 'Когда нужны WebSockets вместо REST?', promptEn: 'When are WebSockets needed instead of REST?', answerRu: 'Когда нужна двусторонняя реалтайм-связь: чаты, уведомления, live-обновления, игры.', answerEn: 'When you need bidirectional real-time communication: chats, notifications, live updates, games.', placeholderRu: 'Приведи примеры', placeholderEn: 'Give examples', validation: { mode: 'includesAny', keywords: ['чат', 'chat', 'реалтайм', 'realtime', 'real-time', 'уведомлен', 'notification'] } },
        ],
    },
];
