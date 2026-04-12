import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Award, BookOpen, ChevronRight, Code2, Flame, GitBranch, Globe2, Layers3, Play, Server, Sparkles } from 'lucide-react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { gradients, palette } from '@/constants/colors';
import { ALL_SECTIONS, dailyLessons, getLessonsByKind, LessonKind, SECTION_LABELS } from '@/constants/lessons';
import { useLearning } from '@/providers/learning-provider';

const kindIcons: Record<LessonKind, React.ComponentType<{ color: string; size?: number }>> = {
    javascript: Code2,
    typescript: Layers3,
    react: Sparkles,
    nodejs: Server,
    git: GitBranch,
};

const kindColors: Record<LessonKind, string> = {
    javascript: '#F7DF1E',
    typescript: '#3178C6',
    react: '#61DAFB',
    nodejs: '#68A063',
    git: '#F05032',
};

const kindBgColors: Record<LessonKind, string> = {
    javascript: '#2D2A00',
    typescript: '#1A2E4A',
    react: '#0A2A3A',
    nodejs: '#1A2E1A',
    git: '#3A1A1A',
};

function HomeScreen() {
    const { completedLessonIds, completionRate, isReady, language, streak, totalXp } = useLearning();
    const [activeSection, setActiveSection] = useState<LessonKind | 'all'>('all');

    const completionLabel = useMemo(() => `${Math.round(completionRate * 100)}%`, [completionRate]);

    const filteredLessons = useMemo(() => {
        if (activeSection === 'all') return dailyLessons;
        return getLessonsByKind(activeSection);
    }, [activeSection]);

    const handleSelectSection = useCallback((section: LessonKind | 'all') => {
        setActiveSection(section);
    }, []);

    const headline = language === 'ru' ? 'Прокачивай навыки каждый день' : 'Train your skills every day';
    const subheadline =
        language === 'ru'
            ? 'JavaScript, TypeScript, React, Node.js и Git — теория, задачи и практика кода.'
            : 'JavaScript, TypeScript, React, Node.js and Git — theory, tasks, and code practice.';

    return (
        <LinearGradient colors={gradients.screen} style={styles.screen}>
            <View style={styles.backgroundOrbTop} />
            <View style={styles.backgroundOrbBottom} />
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content} testID="home-screen">
                    <View style={styles.headerRow}>
                        <View style={styles.headerTextWrap}>
                            <Text style={styles.brand}>CODE SPRINT · 30 DAYS</Text>
                            <Text style={styles.headerTitle}>{language === 'ru' ? 'Ежедневная тренировка' : 'Daily skill workout'}</Text>
                        </View>
                        <Pressable style={styles.headerChip} onPress={() => router.push('/modal')} testID="open-settings-button">
                            <Globe2 color={palette.white} size={18} />
                            <Text style={styles.headerChipText}>RU/EN</Text>
                        </Pressable>
                    </View>

                    <LinearGradient colors={gradients.hero} style={styles.heroCard}>
                        <BlurView intensity={30} tint="dark" style={styles.heroBlur}>
                            <View style={styles.heroBadge}>
                                <Flame color={palette.white} size={14} />
                                <Text style={styles.heroBadgeText}>{language === 'ru' ? `${streak} дня подряд` : `${streak} day streak`}</Text>
                            </View>
                            <Text style={styles.heroTitle}>{headline}</Text>
                            <Text style={styles.heroDescription}>{subheadline}</Text>

                            <View style={styles.heroStats}>
                                <View style={styles.statCard}>
                                    <Award color={palette.amber} size={18} />
                                    <Text style={styles.statValue}>{totalXp}</Text>
                                    <Text style={styles.statLabel}>XP</Text>
                                </View>
                                <View style={styles.statCard}>
                                    <BookOpen color={palette.aqua} size={18} />
                                    <Text style={styles.statValue}>{dailyLessons.length}</Text>
                                    <Text style={styles.statLabel}>{language === 'ru' ? 'уроков' : 'lessons'}</Text>
                                </View>
                                <View style={styles.statCard}>
                                    <Sparkles color={palette.emerald} size={18} />
                                    <Text style={styles.statValue}>{completionLabel}</Text>
                                    <Text style={styles.statLabel}>{language === 'ru' ? 'прогресс' : 'progress'}</Text>
                                </View>
                            </View>

                            <Pressable style={styles.primaryButton} onPress={() => {
                                const firstIncomplete = dailyLessons.find((l) => !completedLessonIds.includes(l.id));
                                router.push(`/lesson/${firstIncomplete?.id ?? dailyLessons[0].id}`);
                            }} testID="start-today-button">
                                <Play color={palette.ink} size={18} fill={palette.ink} />
                                <Text style={styles.primaryButtonText}>{language === 'ru' ? 'Продолжить обучение' : 'Continue learning'}</Text>
                            </Pressable>
                        </BlurView>
                    </LinearGradient>

                    <View style={styles.sectionRow}>
                        <Text style={styles.sectionTitle}>{language === 'ru' ? 'Разделы' : 'Sections'}</Text>
                        <Text style={styles.sectionCaption}>
                            {isReady ? (language === 'ru' ? `${completedLessonIds.length}/${dailyLessons.length}` : `${completedLessonIds.length}/${dailyLessons.length}`) : '...'}
                        </Text>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.sectionTabs}>
                        <Pressable
                            style={[styles.sectionChip, activeSection === 'all' && styles.sectionChipActive]}
                            onPress={() => handleSelectSection('all')}
                            testID="section-all"
                        >
                            <Text style={[styles.sectionChipText, activeSection === 'all' && styles.sectionChipTextActive]}>
                                {language === 'ru' ? 'Все' : 'All'}
                            </Text>
                        </Pressable>
                        {ALL_SECTIONS.map((section) => {
                            const Icon = kindIcons[section];
                            const isActive = activeSection === section;
                            const sectionLessons = getLessonsByKind(section);
                            const completedCount = sectionLessons.filter((l) => completedLessonIds.includes(l.id)).length;
                            return (
                                <Pressable
                                    key={section}
                                    style={[styles.sectionChip, isActive && styles.sectionChipActive]}
                                    onPress={() => handleSelectSection(section)}
                                    testID={`section-${section}`}
                                >
                                    <Icon color={isActive ? palette.ink : kindColors[section]} size={14} />
                                    <Text style={[styles.sectionChipText, isActive && styles.sectionChipTextActive]}>
                                        {language === 'ru' ? SECTION_LABELS[section].ru : SECTION_LABELS[section].en}
                                    </Text>
                                    <View style={[styles.sectionBadge, isActive && styles.sectionBadgeActive]}>
                                        <Text style={[styles.sectionBadgeText, isActive && styles.sectionBadgeTextActive]}>
                                            {completedCount}/{sectionLessons.length}
                                        </Text>
                                    </View>
                                </Pressable>
                            );
                        })}
                    </ScrollView>

                    <View style={styles.lessonList}>
                        {filteredLessons.map((lesson) => {
                            const Icon = kindIcons[lesson.kind];
                            const isCompleted = completedLessonIds.includes(lesson.id);
                            return (
                                <Pressable
                                    key={lesson.id}
                                    style={[styles.lessonCard, isCompleted && styles.lessonCardCompleted]}
                                    onPress={() => router.push(`/lesson/${lesson.id}`)}
                                    testID={`lesson-card-${lesson.id}`}
                                >
                                    <View style={[styles.lessonIconWrap, { backgroundColor: kindBgColors[lesson.kind] }]}>
                                        <Icon color={kindColors[lesson.kind]} size={20} />
                                    </View>
                                    <View style={styles.lessonBody}>
                                        <View style={styles.lessonMetaRow}>
                                            <Text style={styles.lessonEyebrow}>{language === 'ru' ? `День ${lesson.day}` : `Day ${lesson.day}`}</Text>
                                            <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                                        </View>
                                        <Text style={styles.lessonTitle}>{language === 'ru' ? lesson.titleRu : lesson.titleEn}</Text>
                                        <Text style={styles.lessonSubtitle} numberOfLines={1}>{language === 'ru' ? lesson.subtitleRu : lesson.subtitleEn}</Text>
                                        <View style={styles.lessonFooter}>
                                            <View style={styles.lessonTag}>
                                                <Text style={styles.lessonTagText}>{language === 'ru' ? lesson.difficultyRu : lesson.difficultyEn}</Text>
                                            </View>
                                            <Text style={styles.lessonXp}>{lesson.xp} XP</Text>
                                        </View>
                                    </View>
                                    <ChevronRight color={palette.mist} size={18} />
                                </Pressable>
                            );
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 18,
    },
    backgroundOrbTop: {
        position: 'absolute',
        top: -60,
        right: -30,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(34, 211, 238, 0.15)',
    },
    backgroundOrbBottom: {
        position: 'absolute',
        bottom: 100,
        left: -50,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: 'rgba(124, 58, 237, 0.12)',
    },
    headerRow: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTextWrap: {
        flex: 1,
        paddingRight: 12,
    },
    brand: {
        color: palette.aqua,
        fontSize: 11,
        fontWeight: '800' as const,
        letterSpacing: 1.8,
    },
    headerTitle: {
        color: palette.white,
        fontSize: 26,
        fontWeight: '800' as const,
        marginTop: 6,
    },
    headerChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: 'rgba(255,255,255,0.08)',
        borderWidth: 1,
        borderColor: palette.line,
        borderRadius: 18,
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
    headerChipText: {
        color: palette.white,
        fontSize: 13,
        fontWeight: '700' as const,
    },
    heroCard: {
        borderRadius: 30,
        overflow: 'hidden',
    },
    heroBlur: {
        padding: 22,
        gap: 16,
    },
    heroBadge: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderRadius: 999,
        backgroundColor: 'rgba(255,255,255,0.16)',
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    heroBadgeText: {
        color: palette.white,
        fontSize: 13,
        fontWeight: '700' as const,
    },
    heroTitle: {
        color: palette.white,
        fontSize: 28,
        fontWeight: '800' as const,
        lineHeight: 34,
    },
    heroDescription: {
        color: 'rgba(255,255,255,0.86)',
        fontSize: 14,
        lineHeight: 22,
        maxWidth: '94%',
    },
    heroStats: {
        flexDirection: 'row',
        gap: 10,
    },
    statCard: {
        flex: 1,
        backgroundColor: 'rgba(5, 11, 27, 0.34)',
        borderRadius: 18,
        padding: 12,
        gap: 8,
    },
    statValue: {
        color: palette.white,
        fontSize: 20,
        fontWeight: '800' as const,
    },
    statLabel: {
        color: 'rgba(255,255,255,0.74)',
        fontSize: 11,
        fontWeight: '700' as const,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    primaryButton: {
        backgroundColor: palette.white,
        borderRadius: 18,
        paddingVertical: 16,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    primaryButtonText: {
        color: palette.ink,
        fontSize: 15,
        fontWeight: '800' as const,
    },
    sectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        color: palette.white,
        fontSize: 20,
        fontWeight: '800' as const,
    },
    sectionCaption: {
        color: palette.mist,
        fontSize: 12,
        fontWeight: '700' as const,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    sectionTabs: {
        gap: 8,
        paddingRight: 20,
    },
    sectionChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderWidth: 1,
        borderColor: palette.line,
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 10,
    },
    sectionChipActive: {
        backgroundColor: palette.white,
        borderColor: palette.white,
    },
    sectionChipText: {
        color: palette.white,
        fontSize: 13,
        fontWeight: '700' as const,
    },
    sectionChipTextActive: {
        color: palette.ink,
    },
    sectionBadge: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    sectionBadgeActive: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    sectionBadgeText: {
        color: palette.mist,
        fontSize: 11,
        fontWeight: '700' as const,
    },
    sectionBadgeTextActive: {
        color: palette.ink,
    },
    lessonList: {
        gap: 12,
    },
    lessonCard: {
        backgroundColor: palette.card,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: palette.line,
        padding: 16,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
    },
    lessonCardCompleted: {
        borderColor: 'rgba(52, 211, 153, 0.55)',
    },
    lessonIconWrap: {
        width: 44,
        height: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lessonBody: {
        flex: 1,
        gap: 4,
    },
    lessonMetaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lessonEyebrow: {
        color: palette.aqua,
        fontSize: 11,
        fontWeight: '800' as const,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    lessonDuration: {
        color: palette.mist,
        fontSize: 11,
        fontWeight: '600' as const,
    },
    lessonTitle: {
        color: palette.white,
        fontSize: 16,
        fontWeight: '800' as const,
    },
    lessonSubtitle: {
        color: palette.cloud,
        fontSize: 13,
        lineHeight: 18,
    },
    lessonFooter: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lessonTag: {
        backgroundColor: 'rgba(255,255,255,0.07)',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    lessonTagText: {
        color: palette.white,
        fontSize: 11,
        fontWeight: '700' as const,
    },
    lessonXp: {
        color: palette.aqua,
        fontSize: 12,
        fontWeight: '700' as const,
    },
});
