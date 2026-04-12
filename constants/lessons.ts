export type { Lesson, LessonKind, LessonTask, LessonTaskValidation, LessonTheoryPoint, TaskType } from './lessons-types';
export { ALL_SECTIONS, SECTION_LABELS } from './lessons-types';

import { javascriptLessons } from './lessons-javascript';
import { typescriptLessons } from './lessons-typescript';
import { reactLessons } from './lessons-react';
import { nodejsLessons } from './lessons-nodejs';
import { gitLessons } from './lessons-git';
import type { Lesson, LessonKind } from './lessons-types';

export const dailyLessons: Lesson[] = [
    ...javascriptLessons,
    ...typescriptLessons,
    ...reactLessons,
    ...nodejsLessons,
    ...gitLessons,
];

export function getLessonsByKind(kind: LessonKind): Lesson[] {
    return dailyLessons.filter((lesson) => lesson.kind === kind);
}
