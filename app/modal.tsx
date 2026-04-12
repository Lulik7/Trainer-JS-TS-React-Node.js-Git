import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { Check, Globe2, Sparkles, Target, X } from 'lucide-react-native';
import React, { useMemo } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { gradients, palette } from '@/constants/colors';
import { dailyLessons } from '@/constants/lessons';
import { useLearning } from '@/providers/learning-provider';

export default function ModalScreen() {
    const { completionRate, completedLessonIds, isSaving, language, streak, toggleLanguage, totalXp } = useLearning();

    const completionLabel = useMemo(() => `${Math.round(completionRate * 100)}%`, [completionRate]);

    const handleToggleLanguage = () => {
        Haptics.selectionAsync().catch(() => undefined);
        toggleLanguage();
    };

    return (
        <Modal animationType="fade" transparent visible onRequestClose={() => router.back()}>
            <Pressable style={styles.overlay} onPress={() => router.back()} testID="settings-overlay">
                <Pressable style={styles.card} onPress={(event) => event.stopPropagation()} testID="settings-card">
                    <LinearGradient colors={gradients.hero} style={styles.hero}>
                        <View style={styles.heroTextWrap}>
                            <Text style={styles.eyebrow}>Code Sprint Settings</Text>
                            <Text style={styles.heroTitle}>{language === 'ru' ? 'Настройки и прогресс' : 'Settings and progress'}</Text>
                        </View>
                        <Pressable style={styles.closeButton} onPress={() => router.back()} testID="settings-close-button">
                            <X color={palette.white} size={18} />
                        </Pressable>
                    </LinearGradient>

                    <View style={styles.section}>
                        <View style={styles.rowBetween}>
                            <View style={styles.inline}>
                                <Globe2 color={palette.aqua} size={18} />
                                <Text style={styles.sectionTitle}>{language === 'ru' ? 'Язык интерфейса' : 'Interface language'}</Text>
                            </View>
                            <Pressable style={styles.toggleButton} onPress={handleToggleLanguage} testID="language-toggle-button">
                                <Text style={styles.toggleButtonText}>{language === 'ru' ? 'RU → EN' : 'EN → RU'}</Text>
                            </Pressable>
                        </View>
                        <Text style={styles.helperText}>
                            {language === 'ru'
                                ? 'Контент курса сразу переключится на английский. Это удобно для практики терминов.'
                                : 'The full learning content switches to Russian instantly. It is useful for bilingual practice.'}
                        </Text>
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
                        <Text style={styles.sectionTitle}>{language === 'ru' ? 'Сегодня в программе' : 'Today in your flow'}</Text>
                        <Text style={styles.helperText}>
                            {language === 'ru'
                                ? `Доступно ${dailyLessons.length} урока, завершено ${completedLessonIds.length}.`
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
                </Pressable>
            </Pressable>
            <StatusBar style="light" />
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: palette.overlay,
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    card: {
        backgroundColor: '#06111F',
        borderRadius: 28,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: palette.line,
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
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    heroTitle: {
        color: palette.white,
        fontSize: 26,
        fontWeight: '800',
        lineHeight: 30,
    },
    closeButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'rgba(255,255,255,0.16)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        paddingHorizontal: 20,
        paddingTop: 18,
        gap: 10,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    sectionTitle: {
        color: palette.white,
        fontSize: 17,
        fontWeight: '700',
    },
    helperText: {
        color: palette.cloud,
        fontSize: 14,
        lineHeight: 20,
    },
    toggleButton: {
        backgroundColor: 'rgba(103, 232, 249, 0.12)',
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    toggleButtonText: {
        color: palette.aqua,
        fontSize: 13,
        fontWeight: '700',
    },
    metricsGrid: {
        paddingHorizontal: 20,
        paddingTop: 18,
        flexDirection: 'row',
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
        fontWeight: '800',
    },
    metricLabel: {
        color: palette.mist,
        fontSize: 12,
        fontWeight: '700',
        textTransform: 'uppercase',
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
        fontWeight: '700',
    },
    listMeta: {
        color: palette.mist,
        fontSize: 13,
    },
    footerText: {
        minHeight: 24,
        paddingHorizontal: 20,
        paddingBottom: 16,
        color: palette.mist,
        fontSize: 12,
    },
});
