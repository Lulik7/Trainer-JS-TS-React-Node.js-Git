import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { router, Stack, useLocalSearchParams } from 'expo-router';
import { CheckCircle2, CircleHelp, Code2, Lightbulb, Sparkles } from 'lucide-react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { gradients, palette } from '@/constants/colors';
import { dailyLessons, LessonKind, LessonTask, LessonTaskValidation } from '@/constants/lessons';
import { useLearning } from '@/providers/learning-provider';

interface ValidationResult {
    isCorrect: boolean;
    matchedKeywords: string[];
    missingKeywords: string[];
}

function normalizeInput(value: string): string {
    return value.trim().toLowerCase();
}

function validateAnswer(input: string, validation: LessonTaskValidation): ValidationResult {
    const normalizedInput = normalizeInput(input);
    const matchedKeywords = validation.keywords.filter((keyword) => normalizedInput.includes(normalizeInput(keyword)));
    const missingKeywords = validation.keywords.filter((keyword) => !normalizedInput.includes(normalizeInput(keyword)));
    const isCorrect = validation.mode === 'includesAll' ? missingKeywords.length === 0 : matchedKeywords.length > 0;

    return {
        isCorrect,
        matchedKeywords,
        missingKeywords,
    };
}

function LessonScreen() {
    const params = useLocalSearchParams<{ id?: string }>();
    const { completeLesson, completedLessonIds, language } = useLearning();
    const [activeTaskId, setActiveTaskId] = useState<string>('');
    const [draftAnswer, setDraftAnswer] = useState<string>('');
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [hasCheckedAnswer, setHasCheckedAnswer] = useState<boolean>(false);

    const lesson = useMemo(() => {
        return dailyLessons.find((item) => item.id === params.id) ?? dailyLessons[0];
    }, [params.id]);

    const activeTask = useMemo<LessonTask>(() => {
        const fallback = lesson.tasks[0];
        return lesson.tasks.find((task) => task.id === activeTaskId) ?? fallback;
    }, [activeTaskId, lesson.tasks]);

    const isCompleted = completedLessonIds.includes(lesson.id);
    const title = language === 'ru' ? lesson.titleRu : lesson.titleEn;
    const subtitle = language === 'ru' ? lesson.descriptionRu : lesson.descriptionEn;
    const taskCounterLabel = language === 'ru' ? `${lesson.tasks.length} заданий` : `${lesson.tasks.length} tasks`;

    const validationResult = useMemo<ValidationResult>(() => {
        return validateAnswer(draftAnswer, activeTask.validation);
    }, [activeTask.validation, draftAnswer]);

    useEffect(() => {
        const firstTask = lesson.tasks[0];
        setActiveTaskId(firstTask?.id ?? '');
        setDraftAnswer(firstTask?.starterCode ?? '');
        setShowAnswer(false);
        setHasCheckedAnswer(false);
    }, [lesson]);

    const handleSelectTask = useCallback((task: LessonTask) => {
        console.log('[LessonScreen] Selecting task', task.id);
        Haptics.selectionAsync().catch(() => undefined);
        setActiveTaskId(task.id);
        setDraftAnswer(task.starterCode ?? '');
        setShowAnswer(false);
        setHasCheckedAnswer(false);
    }, []);

    const handleCheckAnswer = useCallback(() => {
        console.log('[LessonScreen] Checking answer', {
            lessonId: lesson.id,
            taskId: activeTask.id,
            answerLength: draftAnswer.length,
            isCorrect: validationResult.isCorrect,
            matchedKeywords: validationResult.matchedKeywords,
        });

        setHasCheckedAnswer(true);
        Haptics.notificationAsync(
            validationResult.isCorrect ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning,
        ).catch(() => undefined);
    }, [activeTask.id, draftAnswer.length, lesson.id, validationResult.isCorrect, validationResult.matchedKeywords]);

    const handleComplete = useCallback(() => {
        console.log('[LessonScreen] Completing lesson', lesson.id);
        completeLesson(lesson.id);
        router.back();
    }, [completeLesson, lesson.id]);

    const answerPlaceholder = activeTask.starterCode
        ? language === 'ru'
            ? 'Пиши решение здесь…'
            : 'Write your solution here…'
        : language === 'ru'
            ? activeTask.placeholderRu ?? 'Напиши ответ своими словами…'
            : activeTask.placeholderEn ?? 'Write your answer in your own words…';

    const feedbackTitle = hasCheckedAnswer
        ? validationResult.isCorrect
            ? language === 'ru'
                ? 'Ответ принят'
                : 'Answer accepted'
            : language === 'ru'
                ? 'Нужно доработать'
                : 'Needs improvement'
        : '';

    const feedbackBody = hasCheckedAnswer
        ? validationResult.isCorrect
            ? language === 'ru'
                ? 'Хорошо. Основные элементы ответа найдены — можно переходить дальше или сравнить свой вариант с эталоном.'
                : 'Nice work. The key parts of the answer were found — you can move on or compare your version with the expected one.'
            : language === 'ru'
                ? `Добавь в ответ: ${validationResult.missingKeywords.slice(0, 4).join(', ') || 'больше конкретики'}.`
                : `Add more detail to your answer: ${validationResult.missingKeywords.slice(0, 4).join(', ') || 'be more specific'}.`
        : '';

    return (
        <LinearGradient colors={gradients.screen} style={styles.screen}>
            <Stack.Screen options={{ title, headerBackTitle: language === 'ru' ? 'Назад' : 'Back' }} />
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false} testID="lesson-screen">
                <View style={styles.heroCard}>
                    <Text style={styles.eyebrow}>{language === 'ru' ? `День ${lesson.day}` : `Day ${lesson.day}`}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>

                    <View style={styles.heroMetaRow}>
                        <View style={styles.metaPill}>
                            <Sparkles color={palette.aqua} size={16} />
                            <Text style={styles.metaPillText}>{lesson.xp} XP</Text>
                        </View>
                        <View style={styles.metaPill}>
                            <CircleHelp color={palette.amber} size={16} />
                            <Text style={styles.metaPillText}>{lesson.duration}</Text>
                        </View>
                        <View style={styles.metaPill}>
                            <Code2 color={palette.aqua} size={16} />
                            <Text style={styles.metaPillText}>{taskCounterLabel}</Text>
                        </View>
                        <View style={styles.metaPill}>
                            <Text style={styles.metaPillLevel}>{language === 'ru' ? `Уровень ${lesson.level}` : `Level ${lesson.level}`}</Text>
                        </View>
                        <View style={styles.metaPill}>
                            <CheckCircle2 color={isCompleted ? palette.emerald : palette.mist} size={16} />
                            <Text style={styles.metaPillText}>
                                {isCompleted ? (language === 'ru' ? 'Готово' : 'Done') : language === 'ru' ? 'В процессе' : 'In progress'}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Lightbulb color={palette.aqua} size={18} />
                        <Text style={styles.sectionTitle}>{language === 'ru' ? 'Ключевая теория' : 'Key theory'}</Text>
                    </View>
                    {lesson.theory.map((point) => {
                        const example = language === 'ru' ? point.exampleRu : point.exampleEn;

                        return (
                            <View key={point.id} style={styles.theoryCard}>
                                <Text style={styles.theoryTitle}>{language === 'ru' ? point.titleRu : point.titleEn}</Text>
                                <Text style={styles.theoryBody}>{language === 'ru' ? point.bodyRu : point.bodyEn}</Text>
                                {example ? (
                                    <View style={styles.exampleCard}>
                                        <Text style={styles.exampleLabel}>{language === 'ru' ? 'Пример кода' : 'Code example'}</Text>
                                        <Text style={styles.exampleCode}>{example}</Text>
                                    </View>
                                ) : null}
                            </View>
                        );
                    })}
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Code2 color={palette.emerald} size={18} />
                        <Text style={styles.sectionTitle}>{language === 'ru' ? 'Практика и задачи' : 'Practice and tasks'}</Text>
                    </View>

                    <View style={styles.taskTabs}>
                        {lesson.tasks.map((task, index) => {
                            const selected = activeTask.id === task.id;
                            return (
                                <Pressable
                                    key={task.id}
                                    style={[styles.taskChip, selected ? styles.taskChipActive : null]}
                                    onPress={() => handleSelectTask(task)}
                                    testID={`task-chip-${task.id}`}
                                >
                                    <Text style={[styles.taskChipText, selected ? styles.taskChipTextActive : null]}>
                                        {language === 'ru' ? `Задание ${index + 1}` : `Task ${index + 1}`}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>

                    <View style={styles.practiceCard}>
                        <Text style={styles.taskType}>{activeTask.type.toUpperCase()}</Text>
                        <Text style={styles.taskPrompt}>{language === 'ru' ? activeTask.promptRu : activeTask.promptEn}</Text>

                        <TextInput
                            value={draftAnswer}
                            onChangeText={(value) => {
                                setDraftAnswer(value);
                                if (hasCheckedAnswer) {
                                    setHasCheckedAnswer(false);
                                }
                            }}
                            multiline
                            style={[styles.editor, !activeTask.starterCode ? styles.answerInput : null]}
                            placeholder={answerPlaceholder}
                            placeholderTextColor={palette.mist}
                            textAlignVertical="top"
                            testID="lesson-answer-input"
                        />

                        <View style={styles.actionRow}>
                            <Pressable style={styles.secondaryButton} onPress={() => setShowAnswer((current) => !current)} testID="toggle-answer-button">
                                <Text style={styles.secondaryButtonText}>
                                    {showAnswer ? (language === 'ru' ? 'Скрыть ответ' : 'Hide answer') : language === 'ru' ? 'Показать ответ' : 'Show answer'}
                                </Text>
                            </Pressable>
                            <Pressable style={styles.checkButton} onPress={handleCheckAnswer} testID="check-answer-button">
                                <Text style={styles.checkButtonText}>{language === 'ru' ? 'Проверить' : 'Check'}</Text>
                            </Pressable>
                            <Pressable style={styles.primaryButton} onPress={handleComplete} testID="complete-lesson-button">
                                <Text style={styles.primaryButtonText}>{language === 'ru' ? 'Завершить урок' : 'Complete lesson'}</Text>
                            </Pressable>
                        </View>

                        {hasCheckedAnswer ? (
                            <View style={[styles.feedbackCard, validationResult.isCorrect ? styles.feedbackCardSuccess : styles.feedbackCardWarning]} testID="answer-feedback-card">
                                <Text style={[styles.feedbackTitle, validationResult.isCorrect ? styles.feedbackTitleSuccess : styles.feedbackTitleWarning]}>{feedbackTitle}</Text>
                                <Text style={styles.feedbackBody}>{feedbackBody}</Text>
                            </View>
                        ) : null}

                        {showAnswer ? (
                            <View style={styles.answerCard}>
                                <Text style={styles.answerTitle}>{language === 'ru' ? 'Ожидаемый ответ' : 'Expected answer'}</Text>
                                <Text style={styles.answerBody}>{language === 'ru' ? activeTask.answerRu : activeTask.answerEn}</Text>
                            </View>
                        ) : null}
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default React.memo(LessonScreen);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        padding: 20,
        gap: 18,
        paddingBottom: 32,
    },
    heroCard: {
        backgroundColor: palette.cardStrong,
        borderRadius: 28,
        padding: 20,
        gap: 14,
        borderWidth: 1,
        borderColor: palette.line,
    },
    eyebrow: {
        color: palette.aqua,
        fontSize: 12,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    title: {
        color: palette.white,
        fontSize: 28,
        fontWeight: '800',
    },
    subtitle: {
        color: palette.cloud,
        fontSize: 15,
        lineHeight: 22,
    },
    heroMetaRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    metaPill: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    metaPillText: {
        color: palette.white,
        fontSize: 13,
        fontWeight: '700',
    },
    metaPillLevel: {
        color: palette.amber,
        fontSize: 13,
        fontWeight: '800',
    },
    section: {
        gap: 12,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    sectionTitle: {
        color: palette.white,
        fontSize: 19,
        fontWeight: '800',
    },
    theoryCard: {
        backgroundColor: palette.card,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: palette.line,
        padding: 16,
        gap: 10,
    },
    theoryTitle: {
        color: palette.white,
        fontSize: 16,
        fontWeight: '700',
    },
    theoryBody: {
        color: palette.cloud,
        fontSize: 15,
        lineHeight: 24,
    },
    exampleCard: {
        borderRadius: 18,
        backgroundColor: '#020817',
        borderWidth: 1,
        borderColor: 'rgba(103, 232, 249, 0.16)',
        padding: 14,
        gap: 8,
    },
    exampleLabel: {
        color: palette.aqua,
        fontSize: 12,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    exampleCode: {
        color: palette.white,
        fontSize: 13,
        lineHeight: 21,
        fontFamily: Platform.select({
            ios: 'Menlo',
            android: 'monospace',
            web: 'monospace',
            default: 'monospace',
        }),
    },
    taskTabs: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    taskChip: {
        backgroundColor: 'rgba(255,255,255,0.06)',
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: palette.line,
    },
    taskChipActive: {
        backgroundColor: palette.white,
    },
    taskChipText: {
        color: palette.white,
        fontSize: 13,
        fontWeight: '700',
    },
    taskChipTextActive: {
        color: palette.ink,
    },
    practiceCard: {
        backgroundColor: palette.cardStrong,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: palette.line,
        padding: 18,
        gap: 14,
    },
    taskType: {
        color: palette.aqua,
        fontSize: 12,
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    taskPrompt: {
        color: palette.white,
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 25,
    },
    editor: {
        minHeight: 220,
        borderRadius: 20,
        backgroundColor: '#020817',
        borderWidth: 1,
        borderColor: 'rgba(103, 232, 249, 0.16)',
        padding: 16,
        color: palette.white,
        fontSize: 14,
        lineHeight: 21,
    },
    answerInput: {
        minHeight: 140,
    },
    actionRow: {
        flexDirection: 'row',
        gap: 12,
    },
    secondaryButton: {
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: palette.line,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    secondaryButtonText: {
        color: palette.white,
        fontSize: 14,
        fontWeight: '700',
    },
    checkButton: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: palette.aqua,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    checkButtonText: {
        color: palette.ink,
        fontSize: 14,
        fontWeight: '800',
    },
    primaryButton: {
        flex: 1,
        borderRadius: 16,
        backgroundColor: palette.emerald,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 10,
    },
    primaryButtonText: {
        color: palette.night,
        fontSize: 14,
        fontWeight: '800',
    },
    feedbackCard: {
        borderRadius: 20,
        padding: 16,
        gap: 8,
        borderWidth: 1,
    },
    feedbackCardSuccess: {
        backgroundColor: 'rgba(52, 211, 153, 0.08)',
        borderColor: 'rgba(52, 211, 153, 0.28)',
    },
    feedbackCardWarning: {
        backgroundColor: 'rgba(245, 158, 11, 0.08)',
        borderColor: 'rgba(245, 158, 11, 0.28)',
    },
    feedbackTitle: {
        fontSize: 14,
        fontWeight: '800',
    },
    feedbackTitleSuccess: {
        color: palette.emerald,
    },
    feedbackTitleWarning: {
        color: palette.amber,
    },
    feedbackBody: {
        color: palette.white,
        fontSize: 14,
        lineHeight: 21,
    },
    answerCard: {
        backgroundColor: 'rgba(52, 211, 153, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(52, 211, 153, 0.25)',
        borderRadius: 20,
        padding: 16,
        gap: 8,
    },
    answerTitle: {
        color: palette.emerald,
        fontSize: 14,
        fontWeight: '800',
    },
    answerBody: {
        color: palette.white,
        fontSize: 14,
        lineHeight: 21,
    },
});
