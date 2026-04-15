import { Lesson } from './lessons-types';

export const muiLessons: Lesson[] = [
    {
        id: 'mui-intro', day: 51, level: 1, xp: 40, duration: '12 min', kind: 'mui',
        titleRu: 'Что такое Material UI', titleEn: 'What is Material UI',
        subtitleRu: 'Библиотека компонентов, Material Design', subtitleEn: 'Component library, Material Design',
        difficultyRu: 'Начинающий', difficultyEn: 'Beginner',
        descriptionRu: 'Зачем MUI, установка и первые компоненты.', descriptionEn: 'Why MUI, installation, and first components.',
        theory: [
            { id: 'mui-intro-d1', titleRu: 'MUI — готовые React-компоненты', titleEn: 'MUI — ready-made React components', bodyRu: 'Material UI (MUI) — самая популярная библиотека React-компонентов. Она реализует Material Design от Google: кнопки, карточки, диалоги, таблицы. Вместо написания CSS с нуля, используешь готовые стилизованные компоненты с кастомизацией через theme.', bodyEn: 'Material UI (MUI) is the most popular React component library. It implements Material Design from Google: buttons, cards, dialogs, tables. Instead of writing CSS from scratch, you use ready-styled components with customization via theme.',
                exampleRu: `// Установка
npm install @mui/material @emotion/react @emotion/styled

// Использование компонентов
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Вход в систему
        </Typography>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Пароль" type="password" fullWidth margin="normal" />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Войти
        </Button>
      </CardContent>
    </Card>
  );
}`,
                exampleEn: `// Installation
npm install @mui/material @emotion/react @emotion/styled

// Using components
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';

function App() {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
}` },
        ],
        tasks: [
            { id: 'mui-intro-t1', type: 'code', promptRu: 'Создай кнопку с variant="contained" и текстом "Отправить".', promptEn: 'Create a button with variant="contained" and text "Submit".', answerRu: '<Button variant="contained">Отправить</Button>', answerEn: '<Button variant="contained">Submit</Button>', starterCode: `import { Button } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['button', 'variant', 'contained'] } },
            { id: 'mui-intro-t2', type: 'theory', promptRu: 'Что такое Material Design?', promptEn: 'What is Material Design?', answerRu: 'Дизайн-система от Google с принципами: тени, слои, типографика, цвета.', answerEn: 'A design system from Google with principles: shadows, layers, typography, colors.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['google', 'дизайн', 'design', 'тени', 'shadow', 'типограф', 'typography'] } },
        ],
    },
    {
        id: 'mui-sx-styling', day: 52, level: 1, xp: 50, duration: '14 min', kind: 'mui',
        titleRu: 'sx prop и стилизация', titleEn: 'sx Prop and Styling',
        subtitleRu: 'sx, theme spacing, responsive', subtitleEn: 'sx, theme spacing, responsive',
        difficultyRu: 'Начинающий', difficultyEn: 'Beginner',
        descriptionRu: 'Как стилизовать компоненты MUI через sx prop.', descriptionEn: 'How to style MUI components via the sx prop.',
        theory: [
            { id: 'mui-sx-d1', titleRu: 'sx — главный способ стилизации', titleEn: 'sx — the main styling method', bodyRu: 'sx prop принимает объект стилей с доступом к теме. Поддерживает шорткаты: mt (margin-top), px (padding-x), bgcolor. Числа привязаны к spacing (по умолчанию 8px). Можно задавать responsive стили через breakpoints.', bodyEn: 'The sx prop accepts a styles object with theme access. Supports shortcuts: mt (margin-top), px (padding-x), bgcolor. Numbers are tied to spacing (default 8px). You can set responsive styles via breakpoints.',
                exampleRu: `import { Box, Typography, Button } from '@mui/material';

function StyledCard() {
  return (
    <Box
      sx={{
        p: 3,              // padding: 24px (3 * 8px)
        mt: 2,             // margin-top: 16px
        bgcolor: 'grey.100',
        borderRadius: 2,   // 16px
        boxShadow: 3,
        maxWidth: { xs: '100%', sm: 400 }, // responsive
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
        Заголовок карточки
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Описание контента карточки
      </Typography>
      <Button variant="outlined" size="small">
        Подробнее
      </Button>
    </Box>
  );
}`,
                exampleEn: `import { Box, Typography, Button } from '@mui/material';

function StyledCard() {
  return (
    <Box
      sx={{
        p: 3,              // padding: 24px (3 * 8px)
        mt: 2,             // margin-top: 16px
        bgcolor: 'grey.100',
        borderRadius: 2,   // 16px
        boxShadow: 3,
        maxWidth: { xs: '100%', sm: 400 }, // responsive
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
        Card Title
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 2 }}>
        Card content description
      </Typography>
      <Button variant="outlined" size="small">
        Learn More
      </Button>
    </Box>
  );
}` },
        ],
        tasks: [
            { id: 'mui-sx-t1', type: 'code', promptRu: 'Стилизуй Box через sx: p: 3, mt: 2, bgcolor: "grey.100".', promptEn: 'Style a Box via sx: p: 3, mt: 2, bgcolor: "grey.100".', answerRu: '<Box sx={{ p: 3, mt: 2, bgcolor: "grey.100" }}>Контент</Box>', answerEn: '<Box sx={{ p: 3, mt: 2, bgcolor: "grey.100" }}>Content</Box>', starterCode: `import { Box } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['sx', 'p:', 'mt:', 'bgcolor'] } },
            { id: 'mui-sx-t2', type: 'theory', promptRu: 'Что означает mt: 2 в sx?', promptEn: 'What does mt: 2 mean in sx?', answerRu: 'margin-top: 16px (2 × 8px, где 8px — единица spacing по умолчанию).', answerEn: 'margin-top: 16px (2 × 8px, where 8px is the default spacing unit).', placeholderRu: 'Укажи про spacing', placeholderEn: 'Mention spacing', validation: { mode: 'includesAny', keywords: ['16', '8px', 'spacing', 'margin'] } },
        ],
    },
    {
        id: 'mui-theme', day: 53, level: 2, xp: 60, duration: '18 min', kind: 'mui',
        titleRu: 'Тема и кастомизация', titleEn: 'Theme and Customization',
        subtitleRu: 'createTheme, ThemeProvider, палитра', subtitleEn: 'createTheme, ThemeProvider, palette',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Создание своей темы: цвета, шрифты, тени.', descriptionEn: 'Creating a custom theme: colors, fonts, shadows.',
        theory: [
            { id: 'mui-theme-d1', titleRu: 'createTheme — своя палитра', titleEn: 'createTheme — custom palette', bodyRu: 'createTheme позволяет переопределить цвета, шрифты, breakpoints. ThemeProvider оборачивает приложение и делает тему доступной всем компонентам.', bodyEn: 'createTheme lets you override colors, fonts, breakpoints. ThemeProvider wraps the app and makes the theme available to all components.',
                exampleRu: `import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#2563EB' },
    secondary: { main: '#F59E0B' },
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, fontSize: '2.5rem' },
  },
  shape: { borderRadius: 12 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">Стилизованная кнопка</Button>
    </ThemeProvider>
  );
}`,
                exampleEn: `import { createTheme, ThemeProvider, CssBaseline, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: { main: '#2563EB' },
    secondary: { main: '#F59E0B' },
    background: { default: '#F8FAFC', paper: '#FFFFFF' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontWeight: 800, fontSize: '2.5rem' },
  },
  shape: { borderRadius: 12 },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained">Styled Button</Button>
    </ThemeProvider>
  );
}` },
        ],
        tasks: [
            { id: 'mui-theme-t1', type: 'code', promptRu: 'Создай тему с primary.main = "#10B981" через createTheme.', promptEn: 'Create a theme with primary.main = "#10B981" via createTheme.', answerRu: 'const theme = createTheme({ palette: { primary: { main: "#10B981" } } });', answerEn: 'const theme = createTheme({ palette: { primary: { main: "#10B981" } } });', starterCode: `import { createTheme } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['createtheme', 'primary', 'main'] } },
            { id: 'mui-theme-t2', type: 'theory', promptRu: 'Зачем нужен ThemeProvider?', promptEn: 'Why is ThemeProvider needed?', answerRu: 'Чтобы передать тему всем MUI-компонентам через контекст.', answerEn: 'To pass the theme to all MUI components via context.', placeholderRu: 'Укажи про контекст', placeholderEn: 'Mention context', validation: { mode: 'includesAny', keywords: ['контекст', 'context', 'компонент', 'component', 'перед', 'pass'] } },
        ],
    },
    {
        id: 'mui-layout', day: 54, level: 2, xp: 55, duration: '16 min', kind: 'mui',
        titleRu: 'Grid и Layout', titleEn: 'Grid and Layout',
        subtitleRu: 'Grid2, Stack, Container, responsive', subtitleEn: 'Grid2, Stack, Container, responsive',
        difficultyRu: 'Уровень 2', difficultyEn: 'Level 2',
        descriptionRu: 'Сетка и расположение элементов с MUI.', descriptionEn: 'Grid and element positioning with MUI.',
        theory: [
            { id: 'mui-lay-d1', titleRu: 'Grid — адаптивная сетка', titleEn: 'Grid — responsive grid', bodyRu: 'Grid использует 12-колоночную систему. xs, sm, md, lg, xl задают количество колонок на каждом breakpoint. Stack — для вертикального/горизонтального расположения. Container ограничивает ширину.', bodyEn: 'Grid uses a 12-column system. xs, sm, md, lg, xl set column counts at each breakpoint. Stack is for vertical/horizontal layouts. Container limits width.',
                exampleRu: `import { Grid, Stack, Container, Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Основной контент</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Card><CardContent><Typography>Виджет 1</Typography></CardContent></Card>
            <Card><CardContent><Typography>Виджет 2</Typography></CardContent></Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}`,
                exampleEn: `import { Grid, Stack, Container, Card, CardContent, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Main content</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Card><CardContent><Typography>Widget 1</Typography></CardContent></Card>
            <Card><CardContent><Typography>Widget 2</Typography></CardContent></Card>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}` },
        ],
        tasks: [
            { id: 'mui-lay-t1', type: 'code', promptRu: 'Создай Grid с двумя колонками: xs={12} md={6}.', promptEn: 'Create a Grid with two columns: xs={12} md={6}.', answerRu: '<Grid container spacing={2}><Grid item xs={12} md={6}>Left</Grid><Grid item xs={12} md={6}>Right</Grid></Grid>', answerEn: '<Grid container spacing={2}><Grid item xs={12} md={6}>Left</Grid><Grid item xs={12} md={6}>Right</Grid></Grid>', starterCode: `import { Grid } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['grid', 'container', 'xs={12}', 'md={6}'] } },
            { id: 'mui-lay-t2', type: 'theory', promptRu: 'Сколько колонок в Grid-системе MUI?', promptEn: 'How many columns does the MUI Grid system have?', answerRu: '12 колонок. Каждый Grid item занимает от 1 до 12 колонок.', answerEn: '12 columns. Each Grid item takes 1 to 12 columns.', placeholderRu: 'Укажи число', placeholderEn: 'State the number', validation: { mode: 'includesAny', keywords: ['12'] } },
        ],
    },
    {
        id: 'mui-forms', day: 55, level: 3, xp: 65, duration: '18 min', kind: 'mui',
        titleRu: 'Формы и inputs', titleEn: 'Forms and Inputs',
        subtitleRu: 'TextField, Select, Checkbox, Radio', subtitleEn: 'TextField, Select, Checkbox, Radio',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Работа с формами: текстовые поля, выбор, чекбоксы.', descriptionEn: 'Working with forms: text fields, select, checkboxes.',
        theory: [
            { id: 'mui-form-d1', titleRu: 'TextField — основной input', titleEn: 'TextField — the main input', bodyRu: 'TextField — универсальный компонент для ввода. Поддерживает variant (outlined, filled, standard), helperText для подсказок, error для ошибок валидации.', bodyEn: 'TextField is the universal input component. Supports variant (outlined, filled, standard), helperText for hints, error for validation errors.',
                exampleRu: `import { useState } from 'react';
import { TextField, Button, Stack, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  const [agree, setAgree] = useState(false);

  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <TextField
        label="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={name.length > 0 && name.length < 2}
        helperText={name.length > 0 && name.length < 2 ? 'Минимум 2 символа' : ''}
        fullWidth
      />
      <TextField
        select
        label="Роль"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
      >
        <MenuItem value="user">Пользователь</MenuItem>
        <MenuItem value="admin">Администратор</MenuItem>
      </TextField>
      <FormControlLabel
        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />}
        label="Согласен с условиями"
      />
      <Button variant="contained" disabled={!agree}>
        Зарегистрироваться
      </Button>
    </Stack>
  );
}`,
                exampleEn: `import { useState } from 'react';
import { TextField, Button, Stack, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  const [agree, setAgree] = useState(false);

  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={name.length > 0 && name.length < 2}
        helperText={name.length > 0 && name.length < 2 ? 'At least 2 characters' : ''}
        fullWidth
      />
      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        fullWidth
      >
        <MenuItem value="user">User</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </TextField>
      <FormControlLabel
        control={<Checkbox checked={agree} onChange={(e) => setAgree(e.target.checked)} />}
        label="I agree to the terms"
      />
      <Button variant="contained" disabled={!agree}>
        Register
      </Button>
    </Stack>
  );
}` },
        ],
        tasks: [
            { id: 'mui-form-t1', type: 'code', promptRu: 'Создай TextField с label, error и helperText.', promptEn: 'Create a TextField with label, error, and helperText.', answerRu: '<TextField label="Email" error={!valid} helperText={!valid ? "Неверный email" : ""} />', answerEn: '<TextField label="Email" error={!valid} helperText={!valid ? "Invalid email" : ""} />', starterCode: `import { TextField } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['textfield', 'label', 'error', 'helpertext'] } },
            { id: 'mui-form-t2', type: 'theory', promptRu: 'Какие variant есть у TextField?', promptEn: 'What variants does TextField have?', answerRu: 'outlined (по умолчанию, с рамкой), filled (заполненный фон), standard (подчёркивание).', answerEn: 'outlined (default, with border), filled (filled background), standard (underline).', placeholderRu: 'Перечисли все', placeholderEn: 'List them all', validation: { mode: 'includesAny', keywords: ['outlined', 'filled', 'standard'] } },
        ],
    },
    {
        id: 'mui-dialogs-snackbar', day: 56, level: 3, xp: 60, duration: '16 min', kind: 'mui',
        titleRu: 'Диалоги и уведомления', titleEn: 'Dialogs and Notifications',
        subtitleRu: 'Dialog, Snackbar, Alert', subtitleEn: 'Dialog, Snackbar, Alert',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Модальные окна и уведомления с MUI.', descriptionEn: 'Modal dialogs and notifications with MUI.',
        theory: [
            { id: 'mui-dlg-d1', titleRu: 'Dialog — модальное окно', titleEn: 'Dialog — modal window', bodyRu: 'Dialog блокирует взаимодействие с фоном. Состоит из DialogTitle, DialogContent, DialogActions. Управляется через open/onClose.', bodyEn: 'Dialog blocks background interaction. Consists of DialogTitle, DialogContent, DialogActions. Controlled via open/onClose.',
                exampleRu: `import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Snackbar, Alert } from '@mui/material';

function DeleteDialog() {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false);
    setSnackOpen(true);
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        Удалить
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Подтвердите удаление</DialogTitle>
        <DialogContent>Это действие необратимо.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button color="error" onClick={handleDelete}>Удалить</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackOpen} autoHideDuration={3000} onClose={() => setSnackOpen(false)}>
        <Alert severity="success">Удалено успешно</Alert>
      </Snackbar>
    </>
  );
}`,
                exampleEn: `import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Snackbar, Alert } from '@mui/material';

function DeleteDialog() {
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false);
    setSnackOpen(true);
  };

  return (
    <>
      <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
        Delete
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm deletion</DialogTitle>
        <DialogContent>This action is irreversible.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={snackOpen} autoHideDuration={3000} onClose={() => setSnackOpen(false)}>
        <Alert severity="success">Deleted successfully</Alert>
      </Snackbar>
    </>
  );
}` },
        ],
        tasks: [
            { id: 'mui-dlg-t1', type: 'code', promptRu: 'Создай Dialog с DialogTitle, DialogContent и DialogActions.', promptEn: 'Create a Dialog with DialogTitle, DialogContent, and DialogActions.', answerRu: '<Dialog open={open} onClose={handleClose}><DialogTitle>Title</DialogTitle><DialogContent>Content</DialogContent><DialogActions><Button>OK</Button></DialogActions></Dialog>', answerEn: '<Dialog open={open} onClose={handleClose}><DialogTitle>Title</DialogTitle><DialogContent>Content</DialogContent><DialogActions><Button>OK</Button></DialogActions></Dialog>', starterCode: `import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['dialog', 'dialogtitle', 'dialogcontent', 'dialogactions'] } },
            { id: 'mui-dlg-t2', type: 'theory', promptRu: 'Чем Snackbar отличается от Alert?', promptEn: 'How does Snackbar differ from Alert?', answerRu: 'Snackbar — контейнер для временных уведомлений внизу экрана. Alert — содержимое с цветом и иконкой (success, error).', answerEn: 'Snackbar is a container for temporary notifications at the bottom. Alert is content with color and icon (success, error).', placeholderRu: 'Опиши разницу', placeholderEn: 'Describe the difference', validation: { mode: 'includesAny', keywords: ['контейнер', 'container', 'временн', 'temporary', 'уведомлен', 'notification'] } },
        ],
    },
    {
        id: 'mui-data-display', day: 57, level: 3, xp: 70, duration: '20 min', kind: 'mui',
        titleRu: 'Таблицы и списки', titleEn: 'Tables and Lists',
        subtitleRu: 'Table, List, Chip, Avatar, Badge', subtitleEn: 'Table, List, Chip, Avatar, Badge',
        difficultyRu: 'Уровень 3', difficultyEn: 'Level 3',
        descriptionRu: 'Отображение данных: таблицы, списки, чипы.', descriptionEn: 'Displaying data: tables, lists, chips.',
        theory: [
            { id: 'mui-dd-d1', titleRu: 'Table — таблица данных', titleEn: 'Table — data table', bodyRu: 'MUI Table состоит из TableContainer, Table, TableHead, TableBody, TableRow, TableCell. Для сортировки и пагинации используй TableSortLabel и TablePagination.', bodyEn: 'MUI Table consists of TableContainer, Table, TableHead, TableBody, TableRow, TableCell. Use TableSortLabel and TablePagination for sorting and pagination.',
                exampleRu: `import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Анна', email: 'anna@mail.com', role: 'admin' },
  { id: 2, name: 'Макс', email: 'max@mail.com', role: 'user' },
];

function UsersTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Пользователь</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Роль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell>
                <Avatar sx={{ mr: 1, display: 'inline-flex' }}>{user.name[0]}</Avatar>
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Chip
                  label={user.role}
                  color={user.role === 'admin' ? 'primary' : 'default'}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`,
                exampleEn: `import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Avatar } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const users: User[] = [
  { id: 1, name: 'Anna', email: 'anna@mail.com', role: 'admin' },
  { id: 2, name: 'Max', email: 'max@mail.com', role: 'user' },
];

function UsersTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell>
                <Avatar sx={{ mr: 1, display: 'inline-flex' }}>{user.name[0]}</Avatar>
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Chip
                  label={user.role}
                  color={user.role === 'admin' ? 'primary' : 'default'}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}` },
        ],
        tasks: [
            { id: 'mui-dd-t1', type: 'code', promptRu: 'Создай Table с TableHead и TableBody.', promptEn: 'Create a Table with TableHead and TableBody.', answerRu: '<Table><TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead><TableBody>...</TableBody></Table>', answerEn: '<Table><TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead><TableBody>...</TableBody></Table>', starterCode: `import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['table', 'tablehead', 'tablebody', 'tablerow'] } },
            { id: 'mui-dd-t2', type: 'code', promptRu: 'Создай Chip с label и color="primary".', promptEn: 'Create a Chip with label and color="primary".', answerRu: '<Chip label="Admin" color="primary" />', answerEn: '<Chip label="Admin" color="primary" />', starterCode: `import { Chip } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['chip', 'label', 'color'] } },
        ],
    },
    {
        id: 'mui-navigation', day: 58, level: 4, xp: 65, duration: '16 min', kind: 'mui',
        titleRu: 'Навигация MUI', titleEn: 'MUI Navigation',
        subtitleRu: 'AppBar, Drawer, Tabs, Breadcrumbs', subtitleEn: 'AppBar, Drawer, Tabs, Breadcrumbs',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Компоненты навигации: шапка, боковая панель, табы.', descriptionEn: 'Navigation components: header, sidebar, tabs.',
        theory: [
            { id: 'mui-nav-d1', titleRu: 'AppBar и Drawer', titleEn: 'AppBar and Drawer', bodyRu: 'AppBar — верхняя панель навигации с Toolbar внутри. Drawer — боковая панель (sidebar), может быть постоянной или временной. Вместе они формируют основу навигации dashboard-приложений.', bodyEn: 'AppBar is a top navigation bar with a Toolbar inside. Drawer is a sidebar that can be permanent or temporary. Together they form the navigation foundation of dashboard apps.',
                exampleRu: `import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {['Главная', 'Профиль', 'Настройки'].map((text) => (
            <ListItem key={text} button>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}`,
                exampleEn: `import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {['Home', 'Profile', 'Settings'].map((text) => (
            <ListItem key={text} button>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}` },
        ],
        tasks: [
            { id: 'mui-nav-t1', type: 'code', promptRu: 'Создай AppBar с Toolbar и Typography.', promptEn: 'Create an AppBar with Toolbar and Typography.', answerRu: '<AppBar><Toolbar><Typography variant="h6">App</Typography></Toolbar></AppBar>', answerEn: '<AppBar><Toolbar><Typography variant="h6">App</Typography></Toolbar></AppBar>', starterCode: `import { AppBar, Toolbar, Typography } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['appbar', 'toolbar', 'typography'] } },
            { id: 'mui-nav-t2', type: 'theory', promptRu: 'Чем permanent Drawer отличается от temporary?', promptEn: 'How does a permanent Drawer differ from temporary?', answerRu: 'Permanent всегда видим (для desktop), temporary открывается/закрывается (для mobile).', answerEn: 'Permanent is always visible (for desktop), temporary opens/closes (for mobile).', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['всегда', 'always', 'desktop', 'mobile', 'открыв', 'open'] } },
        ],
    },
    {
        id: 'mui-dark-mode', day: 59, level: 4, xp: 70, duration: '16 min', kind: 'mui',
        titleRu: 'Тёмная тема и переключение', titleEn: 'Dark Mode and Switching',
        subtitleRu: 'useMediaQuery, dark palette, toggle', subtitleEn: 'useMediaQuery, dark palette, toggle',
        difficultyRu: 'Уровень 4', difficultyEn: 'Level 4',
        descriptionRu: 'Создание тёмной темы и переключение между light/dark.', descriptionEn: 'Creating a dark theme and toggling between light/dark.',
        theory: [
            { id: 'mui-dark-d1', titleRu: 'Тёмная тема через mode', titleEn: 'Dark theme via mode', bodyRu: 'MUI переключает тему через palette.mode: "light" или "dark". Все компоненты автоматически адаптируются. Можно определить системные настройки через useMediaQuery.', bodyEn: 'MUI switches themes via palette.mode: "light" or "dark". All components automatically adapt. System settings can be detected with useMediaQuery.',
                exampleRu: `import { useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#2563EB' },
    },
  }), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton onClick={toggleMode}>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </ThemeProvider>
  );
}`,
                exampleEn: `import { useMemo, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: '#2563EB' },
    },
  }), [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton onClick={toggleMode}>
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </ThemeProvider>
  );
}` },
        ],
        tasks: [
            { id: 'mui-dark-t1', type: 'code', promptRu: 'Создай тему с palette.mode = "dark".', promptEn: 'Create a theme with palette.mode = "dark".', answerRu: 'const theme = createTheme({ palette: { mode: "dark" } });', answerEn: 'const theme = createTheme({ palette: { mode: "dark" } });', starterCode: `import { createTheme } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['createtheme', 'mode', 'dark'] } },
            { id: 'mui-dark-t2', type: 'theory', promptRu: 'Что делает CssBaseline?', promptEn: 'What does CssBaseline do?', answerRu: 'Нормализует стили браузера и применяет цвет фона/текста из темы ко всей странице.', answerEn: 'Normalizes browser styles and applies background/text colors from the theme to the entire page.', placeholderRu: 'Опиши', placeholderEn: 'Describe', validation: { mode: 'includesAny', keywords: ['нормализ', 'normaliz', 'фон', 'background', 'стил', 'style'] } },
        ],
    },
    {
        id: 'mui-advanced', day: 60, level: 5, xp: 75, duration: '20 min', kind: 'mui',
        titleRu: 'Продвинутый MUI', titleEn: 'Advanced MUI',
        subtitleRu: 'styled(), Autocomplete, DataGrid', subtitleEn: 'styled(), Autocomplete, DataGrid',
        difficultyRu: 'Уровень 5', difficultyEn: 'Level 5',
        descriptionRu: 'styled API, сложные компоненты и DataGrid.', descriptionEn: 'styled API, complex components, and DataGrid.',
        theory: [
            { id: 'mui-adv-d1', titleRu: 'styled() — кастомные компоненты', titleEn: 'styled() — custom components', bodyRu: 'styled() создаёт компонент с встроенными стилями и доступом к теме. Полезен для создания переиспользуемых стилизованных элементов.', bodyEn: 'styled() creates a component with built-in styles and theme access. Useful for creating reusable styled elements.',
                exampleRu: `import { styled } from '@mui/material/styles';
import { Button, Card } from '@mui/material';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: 16,
  fontWeight: 700,
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8],
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: 20,
}));

function App() {
  return (
    <GlassCard>
      <GradientButton>Красивая кнопка</GradientButton>
    </GlassCard>
  );
}`,
                exampleEn: `import { styled } from '@mui/material/styles';
import { Button, Card } from '@mui/material';

const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#fff',
  padding: '12px 32px',
  borderRadius: 16,
  fontWeight: 700,
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8],
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: 20,
}));

function App() {
  return (
    <GlassCard>
      <GradientButton>Beautiful Button</GradientButton>
    </GlassCard>
  );
}` },
        ],
        tasks: [
            { id: 'mui-adv-t1', type: 'code', promptRu: 'Создай styled Button с gradient background.', promptEn: 'Create a styled Button with gradient background.', answerRu: 'const GradientButton = styled(Button)({ background: "linear-gradient(...)" });', answerEn: 'const GradientButton = styled(Button)({ background: "linear-gradient(...)" });', starterCode: `import { styled } from '@mui/material/styles';\nimport { Button } from '@mui/material';\n\n`, validation: { mode: 'includesAll', keywords: ['styled', 'button', 'gradient'] } },
            { id: 'mui-adv-t2', type: 'theory', promptRu: 'Когда styled() лучше, чем sx?', promptEn: 'When is styled() better than sx?', answerRu: 'Для переиспользуемых компонентов с фиксированными стилями — styled создаёт отдельный компонент.', answerEn: 'For reusable components with fixed styles — styled creates a separate component.', placeholderRu: 'Укажи про переиспользование', placeholderEn: 'Mention reusability', validation: { mode: 'includesAny', keywords: ['переиспольз', 'reusab', 'компонент', 'component'] } },
        ],
    },
];
