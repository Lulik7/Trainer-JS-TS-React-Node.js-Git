import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';
import { useMutation, useQuery } from '@tanstack/react-query';
import * as Haptics from 'expo-haptics';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { dailyLessons } from '@/constants/lessons';

const STORAGE_KEY = 'code-sprint-learning-state';
const WELCOME_KEY = 'developer-trainer-welcomed';

export type AppLanguage = 'ru' | 'en';

export interface LearningState {
    language: AppLanguage;
    completedLessonIds: string[];
    streak: number;
}

const defaultState: LearningState = {
    language: 'ru',
    completedLessonIds: [],
    streak: 3,
};

export const [LearningProvider, useLearning] = createContextHook(() => {
    const [state, setState] = useState<LearningState>(defaultState);
    const [hasSeenWelcome, setHasSeenWelcome] = useState<boolean>(false);
    const [welcomeReady, setWelcomeReady] = useState<boolean>(false);

    useEffect(() => {
        AsyncStorage.getItem(WELCOME_KEY).then((value) => {
            setHasSeenWelcome(!!value);
            setWelcomeReady(true);
        });
    }, []);

    const markWelcomeSeen = useCallback(() => {
        AsyncStorage.setItem(WELCOME_KEY, 'true').catch(() => undefined);
        setHasSeenWelcome(true);
    }, []);

    const stateQuery = useQuery<LearningState>({
        queryKey: ['learning-state'],
        queryFn: async () => {
            console.log('[LearningProvider] Loading state from storage');
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (!stored) {
                return defaultState;
            }

            try {
                const parsed = JSON.parse(stored) as Partial<LearningState>;
                return {
                    language: parsed.language === 'en' ? 'en' : 'ru',
                    completedLessonIds: Array.isArray(parsed.completedLessonIds)
                        ? parsed.completedLessonIds.filter((item): item is string => typeof item === 'string')
                        : [],
                    streak: typeof parsed.streak === 'number' ? parsed.streak : defaultState.streak,
                };
            } catch (error) {
                console.log('[LearningProvider] Failed to parse persisted state', error);
                return defaultState;
            }
        },
    });

    const saveMutation = useMutation({
        mutationFn: async (nextState: LearningState) => {
            console.log('[LearningProvider] Persisting state', nextState);
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
            return nextState;
        },
    });

    useEffect(() => {
        if (stateQuery.data) {
            setState(stateQuery.data);
        }
    }, [stateQuery.data]);

    const stateRef = React.useRef<LearningState>(state);
    stateRef.current = state;

    const persistState = useCallback(
        (updater: (current: LearningState) => LearningState) => {
            const nextState = updater(stateRef.current);
            setState(nextState);
            saveMutation.mutate(nextState);
        },
        [saveMutation],
    );

    const toggleLanguage = useCallback(() => {
        Haptics.selectionAsync().catch(() => undefined);
        persistState((current) => ({
            ...current,
            language: current.language === 'ru' ? 'en' : 'ru',
        }));
    }, [persistState]);

    const completeLesson = useCallback(
        (lessonId: string) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => undefined);
            persistState((current) => {
                if (current.completedLessonIds.includes(lessonId)) {
                    return current;
                }

                return {
                    ...current,
                    completedLessonIds: [...current.completedLessonIds, lessonId],
                    streak: current.streak + 1,
                };
            });
        },
        [persistState],
    );

    const totalXp = useMemo(() => {
        return dailyLessons
            .filter((lesson) => state.completedLessonIds.includes(lesson.id))
            .reduce((sum, lesson) => sum + lesson.xp, 0);
    }, [state.completedLessonIds]);

    const completionRate = useMemo(() => {
        if (dailyLessons.length === 0) {
            return 0;
        }

        return state.completedLessonIds.length / dailyLessons.length;
    }, [state.completedLessonIds.length]);

    return {
        language: state.language,
        completedLessonIds: state.completedLessonIds,
        streak: state.streak,
        totalXp,
        completionRate,
        isReady: !stateQuery.isLoading && welcomeReady,
        isSaving: saveMutation.isPending,
        toggleLanguage,
        completeLesson,
        hasSeenWelcome,
        markWelcomeSeen,
    };
});