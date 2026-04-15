import { router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Check, Globe2, Sparkles, Target, X } from 'lucide-react-native';
import React, { useCallback, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { gradients, palette } from '@/constants/colors';
import { dailyLessons } from '@/constants/lessons';
import { useLearning } from '@/providers/learning-provider';

export default function ModalScreen() {
    const { completionRate, completedLessonIds, isSaving, language, streak, toggleLanguage, totalXp } = useLearning();

    const completionLabel = useMemo(() => `${Math.round(completionRate * 100)}%`, [completionRate]);

    const handleToggleLanguage = useCallback(() => {
        console.log('[ModalScreen] Toggle language pressed, current:', language);
        toggleLanguage();
    }, [toggleLanguage, language]);

    const handleClose = useCallback(() => {
        router.back();
    }, []);

    return (
        <View style={styles.screen} testID="settings-screen">
            <Stack.Screen options={{ title: language === 'ru' ? 'Настройки' : 'Settings' }} />
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <LinearGradient colors={gradients.hero} style={styles.hero}>
                    <View style={styles.heroTextWrap}>
                        <Text style={styles.eyebrow}>Developer Trainer Settings</Text>
                        <Text style={styles.heroTitle}>{language === 'ru' ? 'Настройки и прогресс' : 'Settings and progress'}</Text>
                    </View>
                    <Pressable style={styles.closeButton} onPress={handleClose} testID="settings-close-button">
                        <X color={palette.white} size={18} />
                    </Pressable>
                </LinearGradient>

                <View style={styles.card} testID="settings-card">
                    <View style={styles.section}>
                        <View style={styles.rowBetween}>
                            <View style={styles.inline}>
                                <Globe2 color={palette.aqua} size={18} />
                                <Text style={styles.sectionTitle}>{language === 'ru' ? 'Язык интерфейса' : 'Interface language'}</Text>
                            </View>
                        </View>
                        <Text style={styles.helperText}>
                            {language === 'ru'
                                ? 'Контент курса сразу переключится на английский. Это удобно для практики терминов.'
                                : 'The full learning content switches to Russian instantly. It is useful for bilingual practice.'}
                        </Text>
                        <View style={styles.langRow}>
                            <Pressable
                                style={[styles.langOption, language === 'ru' && styles.langOptionActive]}
                                onPress={language === 'en' ? handleToggleLanguage : undefined}
                                testID="lang-ru-button"
                            >
                                <Text style={[styles.langOptionText, language === 'ru' && styles.langOptionTextActive]}>🇷🇺  Русский</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.langOption, language === 'en' && styles.langOptionActive]}
                                onPress={language === 'ru' ? handleToggleLanguage : undefined}
                                testID="lang-en-button"
                            >
                                <Text style={[styles.langOptionText, language === 'en' && styles.langOptionTextActive]}>🇬🇧  English</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.metricsGrid}>
                        <View style={styles.metricCard}>
                            <Sparkles color={palette.amber} size={18} />
                            <Text style={styles.metricValue}>{totalXp}</Text>
                            <Text style={styles.metricLabel}>XP</Text>
                        </View>
                        <View style={styles.metricCard}>
                            <Target color={palette.emerald} size={18} />
                            <Text style={styles.metricValue}>{streak}</Text>
                            <Text style={styles.metricLabel}>{language === 'ru' ? 'дней' : 'days'}</Text>
                        </View>
                        <View style={styles.metricCard}>
                            <Check color={palette.cyan} size={18} />
                            <Text style={styles.metricValue}>{completionLabel}</Text>
                            <Text style={styles.metricLabel}>{language === 'ru' ? 'курс' : 'course'}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>{language === 'ru' ? 'Программа курса' : 'Course program'}</Text>
                        <Text style={styles.helperText}>
                            {language === 'ru'
                                ? `Доступно ${dailyLessons.length} уроков, завершено ${completedLessonIds.length}.`
                                : `${dailyLessons.length} lessons available, ${completedLessonIds.length} completed.`}
                        </Text>
                        <View style={styles.listWrap}>
                            {dailyLessons.map((lesson) => (
                                <View key={lesson.id} style={styles.listItem}>
                                    <Text style={styles.listTitle}>{language === 'ru' ? lesson.titleRu : lesson.titleEn}</Text>
                                    <Text style={styles.listMeta}>{lesson.duration} · {lesson.xp} XP</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    <Text style={styles.footerText}>{isSaving ? (language === 'ru' ? 'Сохранение…' : 'Saving…') : ' '}</Text>
                </View>
            </ScrollView>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#020617',
    },
    scrollContent: {
        paddingBottom: 40,
    },
    card: {
        paddingHorizontal: 20,
        gap: 20,
    },
    hero: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    heroTextWrap: {
        flex: 1,
        gap: 6,
        paddingRight: 16,
    },
    eyebrow: {
        color: 'rgba(255,255,255,0.78)',
        fontSize: 12,
        fontWeight: '700' as const,
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    heroTitle: {
        color: palette.white,
        fontSize: 26,
        fontWeight: '800' as const,
        lineHeight: 30,
    },
    closeButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.16)',
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    },
    section: {
        gap: 10,
    },
    rowBetween: {
        flexDirection: 'row' as const,
        justifyContent: 'space-between' as const,
        alignItems: 'center' as const,
        gap: 12,
    },
    inline: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: 8,
        flex: 1,
    },
    sectionTitle: {
        color: palette.white,
        fontSize: 17,
        fontWeight: '700' as const,
    },
    helperText: {
        color: palette.cloud,
        fontSize: 14,
        lineHeight: 20,
    },
    langRow: {
        flexDirection: 'row' as const,
        gap: 12,
        marginTop: 4,
    },
    langOption: {
        flex: 1,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: palette.line,
        backgroundColor: 'rgba(255,255,255,0.04)',
        paddingVertical: 14,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    },
    langOptionActive: {
        backgroundColor: 'rgba(103, 232, 249, 0.14)',
        borderColor: palette.aqua,
    },
    langOptionText: {
        color: palette.mist,
        fontSize: 15,
        fontWeight: '700' as const,
    },
    langOptionTextActive: {
        color: palette.white,
    },
    metricsGrid: {
        flexDirection: 'row' as const,
        gap: 12,
    },
    metricCard: {
        flex: 1,
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: palette.line,
        padding: 14,
        gap: 10,
    },
    metricValue: {
        color: palette.white,
        fontSize: 22,
        fontWeight: '800' as const,
    },
    metricLabel: {
        color: palette.mist,
        fontSize: 12,
        fontWeight: '700' as const,
        textTransform: 'uppercase' as const,
        letterSpacing: 1,
    },
    listWrap: {
        gap: 10,
        paddingBottom: 12,
    },
    listItem: {
        backgroundColor: 'rgba(255,255,255,0.03)',
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: palette.line,
        gap: 4,
    },
    listTitle: {
        color: palette.white,
        fontSize: 15,
        fontWeight: '700' as const,
    },
    listMeta: {
        color: palette.mist,
        fontSize: 13,
    },
    footerText: {
        minHeight: 24,
        paddingTop: 8,
        color: palette.mist,
        fontSize: 12,
    },
});
