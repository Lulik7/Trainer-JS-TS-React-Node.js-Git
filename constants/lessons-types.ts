export type LessonKind = 'javascript' | 'typescript' | 'react' | 'nodejs' | 'git';
export type TaskType = 'theory' | 'code' | 'challenge';

export interface LessonTaskValidation {
    mode: 'includesAll' | 'includesAny';
    keywords: string[];
}

export interface LessonTask {
    id: string;
    type: TaskType;
    promptRu: string;
    promptEn: string;
    answerRu: string;
    answerEn: string;
    starterCode?: string;
    placeholderRu?: string;
    placeholderEn?: string;
    validation: LessonTaskValidation;
}

export interface LessonTheoryPoint {
    id: string;
    titleRu: string;
    titleEn: string;
    bodyRu: string;
    bodyEn: string;
    exampleRu?: string;
    exampleEn?: string;
}

export interface Lesson {
    id: string;
    day: number;
    level: number;
    xp: number;
    duration: string;
    kind: LessonKind;
    titleRu: string;
    titleEn: string;
    subtitleRu: string;
    subtitleEn: string;
    difficultyRu: string;
    difficultyEn: string;
    descriptionRu: string;
    descriptionEn: string;
    theory: LessonTheoryPoint[];
    tasks: LessonTask[];
}

export const SECTION_LABELS: Record<LessonKind, { ru: string; en: string }> = {
    javascript: { ru: 'JavaScript', en: 'JavaScript' },
    typescript: { ru: 'TypeScript', en: 'TypeScript' },
    react: { ru: 'React', en: 'React' },
    nodejs: { ru: 'Node.js', en: 'Node.js' },
    git: { ru: 'Git', en: 'Git' },
};

export const ALL_SECTIONS: LessonKind[] = ['javascript', 'typescript', 'react', 'nodejs', 'git'];
