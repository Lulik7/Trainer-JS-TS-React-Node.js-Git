import { Lesson } from './lessons-types';

export const gitLessons: Lesson[] = [
    {
        id: 'git-basics',
        day: 26,
        level: 1,
        xp: 40,
        duration: '12 min',
        kind: 'git',
        titleRu: 'Основы Git',
        titleEn: 'Git Basics',
        subtitleRu: 'init, add, commit, status, log',
        subtitleEn: 'init, add, commit, status, log',
        difficultyRu: 'Начинающий',
        difficultyEn: 'Beginner',
        descriptionRu: 'Зачем нужен Git, как создать репозиторий и делать коммиты.',
        descriptionEn: 'Why Git exists, how to create a repository, and make commits.',
        theory: [
            {
                id: 'git-bas-d1',
                titleRu: 'Что такое Git',
                titleEn: 'What is Git',
                bodyRu: 'Git — это система контроля версий. Она сохраняет историю изменений кода. Можно вернуться к любой предыдущей версии, посмотреть кто и когда что изменил, работать над проектом командой без конфликтов. Git — стандарт индустрии, его знание обязательно для разработчика.',
                bodyEn: 'Git is a version control system. It saves the history of code changes. You can return to any previous version, see who changed what and when, and work on a project as a team without conflicts. Git is an industry standard, knowing it is essential for a developer.',
                exampleRu: `# Создание нового репозитория
git init

# Проверка статуса — какие файлы изменены
git status

# Добавление файлов в staging area
git add index.ts           # один файл
git add .                  # все файлы

# Создание коммита с сообщением
git commit -m "feat: добавить главную страницу"

# Просмотр истории коммитов
git log --oneline
# a1b2c3d feat: добавить главную страницу
# d4e5f6g init: начальная структура`,
                exampleEn: `# Creating a new repository
git init

# Check status — which files are changed
git status

# Adding files to staging area
git add index.ts           # one file
git add .                  # all files

# Creating a commit with a message
git commit -m "feat: add home page"

# Viewing commit history
git log --oneline
# a1b2c3d feat: add home page
# d4e5f6g init: initial structure`,
            },
            {
                id: 'git-bas-d2',
                titleRu: 'Три зоны Git',
                titleEn: 'Three Git zones',
                bodyRu: 'В Git файлы проходят через три зоны: Working Directory (рабочая папка — файлы, которые ты редактируешь), Staging Area (подготовка — файлы, выбранные для коммита через git add), Repository (хранилище — зафиксированные коммиты).',
                bodyEn: 'In Git, files pass through three zones: Working Directory (files you edit), Staging Area (files selected for commit via git add), Repository (committed snapshots).',
                exampleRu: `# Рабочий процесс:

# 1. Редактируешь файлы (Working Directory)
# Файл app.ts изменён

# 2. Выбираешь, что коммитить (Staging Area)
git add app.ts

# 3. Фиксируешь изменения (Repository)
git commit -m "fix: исправить навигацию"

# Посмотреть, что в staging area:
git diff --staged

# Убрать файл из staging (не удаляя изменения):
git reset HEAD app.ts

# Отменить изменения в файле (осторожно!):
git checkout -- app.ts`,
                exampleEn: `# Workflow:

# 1. Edit files (Working Directory)
# File app.ts is modified

# 2. Select what to commit (Staging Area)
git add app.ts

# 3. Commit changes (Repository)
git commit -m "fix: fix navigation"

# See what's in staging area:
git diff --staged

# Remove file from staging (keeping changes):
git reset HEAD app.ts

# Discard changes in a file (careful!):
git checkout -- app.ts`,
            },
            {
                id: 'git-bas-d3',
                titleRu: 'Хорошие сообщения коммитов',
                titleEn: 'Good commit messages',
                bodyRu: 'Сообщение коммита должно описывать ЧТО изменилось и ЗАЧЕМ. Популярный формат: тип: описание. Типы: feat (новая функция), fix (исправление), refactor (рефакторинг), docs (документация), style (оформление).',
                bodyEn: 'A commit message should describe WHAT changed and WHY. Popular format: type: description. Types: feat (new feature), fix (bugfix), refactor (refactoring), docs (documentation), style (formatting).',
                exampleRu: `# Хорошие сообщения коммитов:
git commit -m "feat: добавить экран авторизации"
git commit -m "fix: исправить краш при пустом списке"
git commit -m "refactor: вынести логику в отдельный хук"
git commit -m "style: обновить цвета кнопок"
git commit -m "docs: добавить README"

# Плохие сообщения:
git commit -m "fix"
git commit -m "update"
git commit -m "asdfgh"
git commit -m "done"`,
                exampleEn: `# Good commit messages:
git commit -m "feat: add auth screen"
git commit -m "fix: fix crash on empty list"
git commit -m "refactor: extract logic into a separate hook"
git commit -m "style: update button colors"
git commit -m "docs: add README"

# Bad messages:
git commit -m "fix"
git commit -m "update"
git commit -m "asdfgh"
git commit -m "done"`,
            },
        ],
        tasks: [
            {
                id: 'git-bas-t1',
                type: 'theory',
                promptRu: 'Какие три зоны есть в Git?',
                promptEn: 'What are the three zones in Git?',
                answerRu: 'Working Directory (рабочая папка), Staging Area (подготовка), Repository (хранилище коммитов).',
                answerEn: 'Working Directory, Staging Area, Repository (committed snapshots).',
                placeholderRu: 'Перечисли три зоны',
                placeholderEn: 'List the three zones',
                validation: { mode: 'includesAll', keywords: ['working', 'staging'] },
            },
            {
                id: 'git-bas-t2',
                type: 'code',
                promptRu: 'Напиши последовательность команд: добавить все файлы и сделать коммит.',
                promptEn: 'Write the command sequence: add all files and make a commit.',
                answerRu: 'git add . && git commit -m "сообщение"',
                answerEn: 'git add . && git commit -m "message"',
                starterCode: `# Добавь файлы и сделай коммит
`,
                validation: { mode: 'includesAll', keywords: ['git add', 'git commit', '-m'] },
            },
            {
                id: 'git-bas-t3',
                type: 'challenge',
                promptRu: 'Почему важны хорошие сообщения коммитов?',
                promptEn: 'Why are good commit messages important?',
                answerRu: 'Они помогают понять историю проекта, найти нужные изменения и облегчают командную работу.',
                answerEn: 'They help understand project history, find needed changes, and ease teamwork.',
                placeholderRu: 'Укажи про историю и команду',
                placeholderEn: 'Mention history and teamwork',
                validation: { mode: 'includesAny', keywords: ['истор', 'команд', 'history', 'team', 'понять', 'understand'] },
            },
        ],
    },
    {
        id: 'git-branches',
        day: 27,
        level: 2,
        xp: 60,
        duration: '18 min',
        kind: 'git',
        titleRu: 'Ветки и слияние',
        titleEn: 'Branches and Merging',
        subtitleRu: 'branch, checkout, merge, конфликты',
        subtitleEn: 'branch, checkout, merge, conflicts',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Как работать с ветками: создавать, переключаться и сливать.',
        descriptionEn: 'How to work with branches: create, switch, and merge.',
        theory: [
            {
                id: 'git-br-d1',
                titleRu: 'Ветки — параллельные линии разработки',
                titleEn: 'Branches — parallel development lines',
                bodyRu: 'Ветка — это независимая линия разработки. Основная ветка обычно называется main. Для каждой новой функции создаётся отдельная ветка. Когда функция готова, ветку сливают (merge) обратно в main.',
                bodyEn: 'A branch is an independent development line. The main branch is usually called main. For each new feature, a separate branch is created. When the feature is ready, the branch is merged back into main.',
                exampleRu: `# Создать новую ветку и переключиться на неё
git checkout -b feature/auth-screen

# Или два отдельных шага:
git branch feature/auth-screen
git checkout feature/auth-screen

# Современная альтернатива checkout:
git switch -c feature/auth-screen

# Посмотреть все ветки
git branch
# * feature/auth-screen
#   main

# Переключиться на другую ветку
git checkout main
# или
git switch main

# Удалить ветку (после слияния)
git branch -d feature/auth-screen`,
                exampleEn: `# Create a new branch and switch to it
git checkout -b feature/auth-screen

# Or two separate steps:
git branch feature/auth-screen
git checkout feature/auth-screen

# Modern alternative to checkout:
git switch -c feature/auth-screen

# List all branches
git branch
# * feature/auth-screen
#   main

# Switch to another branch
git checkout main
# or
git switch main

# Delete a branch (after merging)
git branch -d feature/auth-screen`,
            },
            {
                id: 'git-br-d2',
                titleRu: 'Слияние (merge)',
                titleEn: 'Merging',
                bodyRu: 'Когда работа в ветке закончена, ты сливаешь её в основную ветку. Если изменения не пересекаются, Git сольёт автоматически. Если затронуты одни и те же строки — возникнет конфликт, который нужно решить вручную.',
                bodyEn: 'When work in a branch is done, you merge it into the main branch. If changes do not overlap, Git merges automatically. If the same lines are changed — a conflict occurs that needs manual resolution.',
                exampleRu: `# 1. Переключаемся на main
git checkout main

# 2. Сливаем ветку feature
git merge feature/auth-screen

# Если конфликтов нет — всё готово!

# Если есть конфликт, Git покажет:
# CONFLICT (content): Merge conflict in app.ts
# Automatic merge failed; fix conflicts and then commit

# В файле будет:
# <<<<<<< HEAD
# const title = 'Главная';
# =======
# const title = 'Авторизация';
# >>>>>>> feature/auth-screen

# Решаешь конфликт, оставляя нужный код:
# const title = 'Авторизация';

# Затем:
git add app.ts
git commit -m "merge: слить auth-screen в main"`,
                exampleEn: `# 1. Switch to main
git checkout main

# 2. Merge the feature branch
git merge feature/auth-screen

# If no conflicts — done!

# If there's a conflict, Git shows:
# CONFLICT (content): Merge conflict in app.ts
# Automatic merge failed; fix conflicts and then commit

# The file will contain:
# <<<<<<< HEAD
# const title = 'Home';
# =======
# const title = 'Auth';
# >>>>>>> feature/auth-screen

# Resolve the conflict by keeping the right code:
# const title = 'Auth';

# Then:
git add app.ts
git commit -m "merge: merge auth-screen into main"`,
            },
        ],
        tasks: [
            {
                id: 'git-br-t1',
                type: 'code',
                promptRu: 'Создай ветку feature/login и переключись на неё.',
                promptEn: 'Create a branch feature/login and switch to it.',
                answerRu: 'git checkout -b feature/login',
                answerEn: 'git checkout -b feature/login',
                starterCode: `# Создай ветку и переключись
`,
                validation: { mode: 'includesAll', keywords: ['git', 'feature/login'] },
            },
            {
                id: 'git-br-t2',
                type: 'code',
                promptRu: 'Слей ветку feature/login в main.',
                promptEn: 'Merge feature/login branch into main.',
                answerRu: 'git checkout main && git merge feature/login',
                answerEn: 'git checkout main && git merge feature/login',
                starterCode: `# Переключись на main и слей ветку
`,
                validation: { mode: 'includesAll', keywords: ['checkout main', 'merge'] },
            },
            {
                id: 'git-br-t3',
                type: 'theory',
                promptRu: 'Что такое конфликт слияния и как его решить?',
                promptEn: 'What is a merge conflict and how to resolve it?',
                answerRu: 'Конфликт возникает, когда одни и те же строки изменены в двух ветках. Нужно вручную выбрать правильный код.',
                answerEn: 'A conflict occurs when the same lines are changed in two branches. You need to manually choose the correct code.',
                placeholderRu: 'Опиши процесс',
                placeholderEn: 'Describe the process',
                validation: { mode: 'includesAny', keywords: ['строк', 'вручн', 'line', 'manual', 'выбр', 'choose'] },
            },
        ],
    },
    {
        id: 'git-remote',
        day: 28,
        level: 2,
        xp: 55,
        duration: '16 min',
        kind: 'git',
        titleRu: 'Удалённые репозитории',
        titleEn: 'Remote Repositories',
        subtitleRu: 'GitHub, push, pull, clone',
        subtitleEn: 'GitHub, push, pull, clone',
        difficultyRu: 'Уровень 2',
        difficultyEn: 'Level 2',
        descriptionRu: 'Как работать с GitHub: отправлять и получать код.',
        descriptionEn: 'How to work with GitHub: push and pull code.',
        theory: [
            {
                id: 'git-rem-d1',
                titleRu: 'GitHub — хранилище в облаке',
                titleEn: 'GitHub — cloud storage',
                bodyRu: 'GitHub — платформа для хранения Git-репозиториев в облаке. Команда push отправляет коммиты на сервер, pull — скачивает изменения. clone — копирует весь репозиторий на компьютер.',
                bodyEn: 'GitHub is a platform for storing Git repositories in the cloud. push sends commits to the server, pull downloads changes. clone copies the entire repository to your computer.',
                exampleRu: `# Клонировать репозиторий
git clone https://github.com/user/repo.git

# Добавить удалённый репозиторий
git remote add origin https://github.com/user/repo.git

# Отправить коммиты на сервер
git push origin main

# Скачать изменения с сервера
git pull origin main

# Посмотреть удалённые репозитории
git remote -v
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)`,
                exampleEn: `# Clone a repository
git clone https://github.com/user/repo.git

# Add a remote repository
git remote add origin https://github.com/user/repo.git

# Push commits to the server
git push origin main

# Pull changes from the server
git pull origin main

# List remote repositories
git remote -v
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)`,
            },
            {
                id: 'git-rem-d2',
                titleRu: '.gitignore — что не коммитить',
                titleEn: '.gitignore — what not to commit',
                bodyRu: 'Файл .gitignore указывает, какие файлы и папки Git должен игнорировать. Обязательно игнорируй: node_modules, .env, файлы сборки, системные файлы.',
                bodyEn: 'The .gitignore file tells Git which files and folders to ignore. Always ignore: node_modules, .env, build files, system files.',
                exampleRu: `# .gitignore — пример для Node.js/React проекта

# Зависимости
node_modules/

# Переменные среды (секреты!)
.env
.env.local
.env.production

# Файлы сборки
dist/
build/
.expo/

# Системные файлы
.DS_Store
Thumbs.db

# Логи
*.log
npm-debug.log*

# Кэш
.cache/
.turbo/`,
                exampleEn: `# .gitignore — example for Node.js/React project

# Dependencies
node_modules/

# Environment variables (secrets!)
.env
.env.local
.env.production

# Build files
dist/
build/
.expo/

# System files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Cache
.cache/
.turbo/`,
            },
        ],
        tasks: [
            {
                id: 'git-rem-t1',
                type: 'code',
                promptRu: 'Отправь коммиты на GitHub: git push origin main.',
                promptEn: 'Push commits to GitHub: git push origin main.',
                answerRu: 'git push origin main',
                answerEn: 'git push origin main',
                starterCode: `# Отправь коммиты на сервер
`,
                validation: { mode: 'includesAll', keywords: ['git push', 'origin', 'main'] },
            },
            {
                id: 'git-rem-t2',
                type: 'theory',
                promptRu: 'Что должно быть в .gitignore?',
                promptEn: 'What should be in .gitignore?',
                answerRu: 'node_modules, .env файлы с секретами, файлы сборки, системные файлы.',
                answerEn: 'node_modules, .env files with secrets, build files, system files.',
                placeholderRu: 'Перечисли основные',
                placeholderEn: 'List the main ones',
                validation: { mode: 'includesAny', keywords: ['node_modules', '.env', 'секрет', 'secret', 'сборк', 'build'] },
            },
            {
                id: 'git-rem-t3',
                type: 'code',
                promptRu: 'Клонируй репозиторий по URL.',
                promptEn: 'Clone a repository by URL.',
                answerRu: 'git clone https://github.com/user/repo.git',
                answerEn: 'git clone https://github.com/user/repo.git',
                starterCode: `# Клонируй репозиторий
`,
                validation: { mode: 'includesAll', keywords: ['git clone'] },
            },
        ],
    },
    {
        id: 'git-workflow',
        day: 29,
        level: 3,
        xp: 70,
        duration: '20 min',
        kind: 'git',
        titleRu: 'Git-воркфлоу и Pull Request',
        titleEn: 'Git Workflow and Pull Requests',
        subtitleRu: 'Feature branch, PR, code review',
        subtitleEn: 'Feature branch, PR, code review',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Профессиональный рабочий процесс с ветками и Pull Request.',
        descriptionEn: 'Professional workflow with branches and Pull Requests.',
        theory: [
            {
                id: 'git-wf-d1',
                titleRu: 'Feature Branch Workflow',
                titleEn: 'Feature Branch Workflow',
                bodyRu: 'Самый популярный подход: для каждой задачи создаётся отдельная ветка от main. После завершения работы открывается Pull Request (PR) — запрос на слияние. Коллеги проверяют код (code review), и после одобрения ветка сливается в main.',
                bodyEn: 'The most popular approach: for each task a separate branch is created from main. After work is done, a Pull Request (PR) is opened — a merge request. Colleagues review the code, and after approval the branch is merged into main.',
                exampleRu: `# 1. Обновляем main
git checkout main
git pull origin main

# 2. Создаём ветку для задачи
git checkout -b feature/user-profile

# 3. Работаем, делаем коммиты
git add .
git commit -m "feat: добавить экран профиля"
git commit -m "feat: добавить аватар и настройки"

# 4. Пушим ветку на GitHub
git push origin feature/user-profile

# 5. На GitHub открываем Pull Request
# feature/user-profile → main

# 6. Коллеги проверяют код (Code Review)
# Оставляют комментарии, предлагают изменения

# 7. После approve — сливаем PR
# И удаляем ветку

# 8. Обновляем локальный main
git checkout main
git pull origin main`,
                exampleEn: `# 1. Update main
git checkout main
git pull origin main

# 2. Create a branch for the task
git checkout -b feature/user-profile

# 3. Work, make commits
git add .
git commit -m "feat: add profile screen"
git commit -m "feat: add avatar and settings"

# 4. Push the branch to GitHub
git push origin feature/user-profile

# 5. On GitHub open a Pull Request
# feature/user-profile → main

# 6. Colleagues review the code (Code Review)
# Leave comments, suggest changes

# 7. After approval — merge the PR
# And delete the branch

# 8. Update local main
git checkout main
git pull origin main`,
            },
            {
                id: 'git-wf-d2',
                titleRu: 'Полезные команды для работы',
                titleEn: 'Useful commands for daily work',
                bodyRu: 'Несколько команд, которые часто нужны в повседневной работе с Git: stash для временного сохранения, rebase для чистой истории, cherry-pick для выборочного переноса коммитов.',
                bodyEn: 'Several commands often needed in daily Git work: stash for temporary saving, rebase for clean history, cherry-pick for selective commit transfer.',
                exampleRu: `# Временно сохранить незакоммиченные изменения
git stash
# Работаем с другой веткой...
git stash pop  # вернуть сохранённые изменения

# Посмотреть разницу между ветками
git diff main..feature/login

# Отменить последний коммит (сохранив изменения)
git reset --soft HEAD~1

# Изменить сообщение последнего коммита
git commit --amend -m "новое сообщение"

# Посмотреть красивый лог
git log --oneline --graph --all`,
                exampleEn: `# Temporarily save uncommitted changes
git stash
# Work on another branch...
git stash pop  # restore saved changes

# See differences between branches
git diff main..feature/login

# Undo last commit (keeping changes)
git reset --soft HEAD~1

# Change last commit message
git commit --amend -m "new message"

# View a nice log
git log --oneline --graph --all`,
            },
        ],
        tasks: [
            {
                id: 'git-wf-t1',
                type: 'theory',
                promptRu: 'Что такое Pull Request и зачем он нужен?',
                promptEn: 'What is a Pull Request and why is it needed?',
                answerRu: 'PR — это запрос на слияние ветки в main. Позволяет провести code review перед слиянием.',
                answerEn: 'A PR is a request to merge a branch into main. It allows code review before merging.',
                placeholderRu: 'Укажи про review',
                placeholderEn: 'Mention review',
                validation: { mode: 'includesAny', keywords: ['review', 'слиян', 'merge', 'провер', 'check'] },
            },
            {
                id: 'git-wf-t2',
                type: 'code',
                promptRu: 'Напиши полный цикл: обнови main, создай ветку, сделай коммит, запушь.',
                promptEn: 'Write the full cycle: update main, create a branch, commit, push.',
                answerRu: 'git checkout main && git pull && git checkout -b feature/x && git add . && git commit -m "feat: x" && git push origin feature/x',
                answerEn: 'git checkout main && git pull && git checkout -b feature/x && git add . && git commit -m "feat: x" && git push origin feature/x',
                starterCode: `# Полный цикл работы с git
`,
                validation: { mode: 'includesAll', keywords: ['checkout', 'pull', 'commit', 'push'] },
            },
            {
                id: 'git-wf-t3',
                type: 'code',
                promptRu: 'Сохрани изменения во временное хранилище через git stash.',
                promptEn: 'Save changes to temporary storage using git stash.',
                answerRu: 'git stash',
                answerEn: 'git stash',
                starterCode: `# Сохрани изменения временно
`,
                validation: { mode: 'includesAll', keywords: ['git stash'] },
            },
        ],
    },
    {
        id: 'git-advanced',
        day: 30,
        level: 3,
        xp: 75,
        duration: '20 min',
        kind: 'git',
        titleRu: 'Продвинутый Git',
        titleEn: 'Advanced Git',
        subtitleRu: 'rebase, cherry-pick, reset, reflog',
        subtitleEn: 'rebase, cherry-pick, reset, reflog',
        difficultyRu: 'Уровень 3',
        difficultyEn: 'Level 3',
        descriptionRu: 'Продвинутые инструменты Git для чистой истории и восстановления.',
        descriptionEn: 'Advanced Git tools for clean history and recovery.',
        theory: [
            {
                id: 'git-adv-d1',
                titleRu: 'Rebase — перебазирование',
                titleEn: 'Rebase — rebasing',
                bodyRu: 'Rebase переносит коммиты ветки на новую базу. В отличие от merge, rebase создаёт линейную историю без merge-коммитов. Используй rebase для обновления feature-ветки из main.',
                bodyEn: 'Rebase moves branch commits onto a new base. Unlike merge, rebase creates linear history without merge commits. Use rebase to update a feature branch from main.',
                exampleRu: `# Ситуация: ты работаешь в feature-ветке,
# а в main появились новые коммиты

# Вместо merge (создаёт merge-коммит):
git checkout feature/login
git merge main

# Используем rebase (линейная история):
git checkout feature/login
git rebase main

# Если возникли конфликты при rebase:
# 1. Решаешь конфликт в файлах
# 2. git add .
# 3. git rebase --continue

# Отменить rebase:
git rebase --abort

# ВАЖНО: не делай rebase публичных веток,
# которые используют другие люди!`,
                exampleEn: `# Situation: you're working in a feature branch,
# and main got new commits

# Instead of merge (creates a merge commit):
git checkout feature/login
git merge main

# Use rebase (linear history):
git checkout feature/login
git rebase main

# If conflicts occur during rebase:
# 1. Resolve conflicts in files
# 2. git add .
# 3. git rebase --continue

# Cancel rebase:
git rebase --abort

# IMPORTANT: don't rebase public branches
# that other people use!`,
            },
            {
                id: 'git-adv-d2',
                titleRu: 'Cherry-pick и восстановление',
                titleEn: 'Cherry-pick and recovery',
                bodyRu: 'cherry-pick копирует конкретный коммит из одной ветки в другую. reflog показывает полную историю всех действий — даже удалённых коммитов. Это спасательный круг при ошибках.',
                bodyEn: 'cherry-pick copies a specific commit from one branch to another. reflog shows the full history of all actions — even deleted commits. It is a lifeline when things go wrong.',
                exampleRu: `# Cherry-pick — взять один коммит из другой ветки
git cherry-pick a1b2c3d

# Reflog — история всех действий в Git
git reflog
# a1b2c3d HEAD@{0}: commit: feat: добавить форму
# d4e5f6g HEAD@{1}: checkout: moving from main to feature
# ...

# Восстановить удалённый коммит:
git checkout -b recovery HEAD@{5}

# Или сбросить к определённому состоянию:
git reset --hard HEAD@{3}

# Разница между reset вариантами:
# --soft  — убирает коммит, но оставляет изменения в staging
# --mixed — убирает коммит, оставляет изменения в working dir
# --hard  — убирает всё (осторожно!)`,
                exampleEn: `# Cherry-pick — take one commit from another branch
git cherry-pick a1b2c3d

# Reflog — history of all Git actions
git reflog
# a1b2c3d HEAD@{0}: commit: feat: add form
# d4e5f6g HEAD@{1}: checkout: moving from main to feature
# ...

# Restore a deleted commit:
git checkout -b recovery HEAD@{5}

# Or reset to a specific state:
git reset --hard HEAD@{3}

# Difference between reset variants:
# --soft  — removes commit, keeps changes in staging
# --mixed — removes commit, keeps changes in working dir
# --hard  — removes everything (careful!)`,
            },
        ],
        tasks: [
            {
                id: 'git-adv-t1',
                type: 'theory',
                promptRu: 'Чем rebase отличается от merge?',
                promptEn: 'How does rebase differ from merge?',
                answerRu: 'Rebase создаёт линейную историю, перенося коммиты на новую базу. Merge создаёт merge-коммит.',
                answerEn: 'Rebase creates linear history by moving commits onto a new base. Merge creates a merge commit.',
                placeholderRu: 'Укажи про линейную историю',
                placeholderEn: 'Mention linear history',
                validation: { mode: 'includesAny', keywords: ['линейн', 'linear', 'merge-коммит', 'merge commit', 'перенос', 'move'] },
            },
            {
                id: 'git-adv-t2',
                type: 'code',
                promptRu: 'Перебазируй текущую ветку на main через rebase.',
                promptEn: 'Rebase the current branch onto main.',
                answerRu: 'git rebase main',
                answerEn: 'git rebase main',
                starterCode: `# Перебазируй на main
`,
                validation: { mode: 'includesAll', keywords: ['git rebase', 'main'] },
            },
            {
                id: 'git-adv-t3',
                type: 'challenge',
                promptRu: 'Как восстановить случайно удалённый коммит?',
                promptEn: 'How to recover an accidentally deleted commit?',
                answerRu: 'Через git reflog найти хеш коммита и создать ветку от него или сделать reset.',
                answerEn: 'Use git reflog to find the commit hash and create a branch from it or reset.',
                placeholderRu: 'Укажи про reflog',
                placeholderEn: 'Mention reflog',
                validation: { mode: 'includesAny', keywords: ['reflog', 'хеш', 'hash', 'HEAD@'] },
            },
        ],
    },
];
