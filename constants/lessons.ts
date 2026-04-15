export type { Lesson, LessonKind, LessonTask, LessonTaskValidation, LessonTheoryPoint, TaskType } from './lessons-types';
export { ALL_SECTIONS, SECTION_LABELS } from './lessons-types';

import { javascriptLessons } from './lessons-javascript';
import { typescriptLessons } from './lessons-typescript';
import { reactLessons } from './lessons-react';
import { nodejsLessons } from './lessons-nodejs';
import { gitLessons } from './lessons-git';
import { nextjsLessons } from './lessons-nextjs';
import { nestjsLessons } from './lessons-nestjs';
import { muiLessons } from './lessons-mui';
import { tailwindLessons } from './lessons-tailwind';
import type { Lesson, LessonKind } from './lessons-types';

export const dailyLessons: Lesson[] = [
    ...javascriptLessons,
    ...typescriptLessons,
    ...reactLessons,
    ...nodejsLessons,
    ...gitLessons,
    ...nextjsLessons,
    ...nestjsLessons,
    ...muiLessons,
    ...tailwindLessons,
];

export function getLessonsByKind(kind: LessonKind): Lesson[] {
    return dailyLessons.filter((lesson) => lesson.kind === kind);
}
