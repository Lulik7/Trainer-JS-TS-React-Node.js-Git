import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ArrowRight, BookOpen, Code2, GitBranch, Layout, Layers3, Palette, Rocket, Server, Sparkles, Terminal, Wind, Zap } from 'lucide-react-native';
import React, { useCallback, useEffect, useRef } from 'react';
import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { palette } from '@/constants/colors';
import { useLearning } from '@/providers/learning-provider';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TECH_ITEMS = [
    { icon: Code2, label: 'JavaScript', color: '#F7DF1E', bg: '#2D2A00' },
    { icon: Layers3, label: 'TypeScript', color: '#3178C6', bg: '#1A2E4A' },
    { icon: Sparkles, label: 'React', color: '#61DAFB', bg: '#0A2A3A' },
    { icon: Server, label: 'Node.js', color: '#68A063', bg: '#1A2E1A' },
    { icon: GitBranch, label: 'Git', color: '#F05032', bg: '#3A1A1A' },
    { icon: Layout, label: 'Next.js', color: '#FFFFFF', bg: '#1A1A2E' },
    { icon: Server, label: 'Nest.js', color: '#E0234E', bg: '#2E1A1E' },
    { icon: Palette, label: 'MUI', color: '#007FFF', bg: '#0A1A3A' },
    { icon: Wind, label: 'Tailwind', color: '#38BDF8', bg: '#0A2A3A' },
];

const FEATURES_RU = [
    { icon: BookOpen, text: '70 уроков · 9 разделов' },
    { icon: Terminal, text: 'Практика кода' },
    { icon: Zap, text: 'От простого к сложному' },
];

const FEATURES_EN = [
    { icon: BookOpen, text: '70 lessons · 9 sections' },
    { icon: Terminal, text: 'Code practice' },
    { icon: Zap, text: 'From easy to advanced' },
];

function WelcomeScreen() {
    const { hasSeenWelcome, isReady, language, markWelcomeSeen } = useLearning();

    const fadeMain = useRef(new Animated.Value(0)).current;
    const slideUp = useRef(new Animated.Value(40)).current;
    const fadeTitle = useRef(new Animated.Value(0)).current;
    const slideTitleUp = useRef(new Animated.Value(30)).current;
    const fadeTechs = useRef(new Animated.Value(0)).current;
    const slideTechsUp = useRef(new Animated.Value(30)).current;
    const fadeFeatures = useRef(new Animated.Value(0)).current;
    const slideFeaturesUp = useRef(new Animated.Value(30)).current;
    const fadeButton = useRef(new Animated.Value(0)).current;
    const slideButtonUp = useRef(new Animated.Value(30)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;
    const orbFloat1 = useRef(new Animated.Value(0)).current;
    const orbFloat2 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isReady && hasSeenWelcome) {
            router.replace('/');
            return;
        }

        if (!isReady) return;

        Animated.loop(
            Animated.sequence([
                Animated.timing(orbFloat1, { toValue: 15, duration: 3000, useNativeDriver: true }),
                Animated.timing(orbFloat1, { toValue: 0, duration: 3000, useNativeDriver: true }),
            ]),
        ).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(orbFloat2, { toValue: -12, duration: 2500, useNativeDriver: true }),
                Animated.timing(orbFloat2, { toValue: 0, duration: 2500, useNativeDriver: true }),
            ]),
        ).start();

        Animated.stagger(180, [
            Animated.parallel([
                Animated.timing(fadeMain, { toValue: 1, duration: 600, useNativeDriver: true }),
                Animated.timing(slideUp, { toValue: 0, duration: 600, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.timing(fadeTitle, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(slideTitleUp, { toValue: 0, duration: 500, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.timing(fadeTechs, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(slideTechsUp, { toValue: 0, duration: 500, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.timing(fadeFeatures, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(slideFeaturesUp, { toValue: 0, duration: 500, useNativeDriver: true }),
            ]),
            Animated.parallel([
                Animated.timing(fadeButton, { toValue: 1, duration: 500, useNativeDriver: true }),
                Animated.timing(slideButtonUp, { toValue: 0, duration: 500, useNativeDriver: true }),
            ]),
        ]).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, { toValue: 1.04, duration: 1200, useNativeDriver: true }),
                Animated.timing(pulseAnim, { toValue: 1, duration: 1200, useNativeDriver: true }),
            ]),
        ).start();
    }, [isReady, hasSeenWelcome]);

    const handleStart = useCallback(() => {
        markWelcomeSeen();
        router.replace('/');
    }, [markWelcomeSeen]);

    if (!isReady || hasSeenWelcome) {
        return (
            <View style={styles.loadingScreen}>
                <View style={styles.loadingDot} />
            </View>
        );
    }

    const features = language === 'ru' ? FEATURES_RU : FEATURES_EN;

    return (
        <LinearGradient colors={['#020617', '#071E3D', '#0A1628']} style={styles.screen}>
            <Animated.View style={[styles.orbTopRight, { transform: [{ translateY: orbFloat1 }] }]} />
            <Animated.View style={[styles.orbBottomLeft, { transform: [{ translateY: orbFloat2 }] }]} />
            <View style={styles.orbCenter} />
            <View style={styles.gridOverlay}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <View key={`h-${i}`} style={[styles.gridLineH, { top: `${(i + 1) * 14}%` }]} />
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                    <View key={`v-${i}`} style={[styles.gridLineV, { left: `${(i + 1) * 25}%` }]} />
                ))}
            </View>

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Animated.View style={[styles.topSection, { opacity: fadeMain, transform: [{ translateY: slideUp }] }]}>
                        <View style={styles.logoBadge}>
                            <LinearGradient colors={['#22D3EE', '#2563EB']} style={styles.logoGradient}>
                                <Rocket color="#FFFFFF" size={22} />
                            </LinearGradient>
                        </View>
                        <Text style={styles.eyebrow}>CODE SPRINT</Text>
                        <View style={styles.versionBadge}>
                            <Text style={styles.versionText}>70 {language === 'ru' ? 'ДНЕЙ' : 'DAYS'}</Text>
                        </View>
                    </Animated.View>

                    <Animated.View style={{ opacity: fadeTitle, transform: [{ translateY: slideTitleUp }] }}>
                        <Text style={styles.title}>
                            {language === 'ru' ? 'Прокачай свои знания' : 'Level up your skills'}
                        </Text>
                        <Text style={styles.subtitle}>
                            {language === 'ru'
                                ? 'JS, TS, React, Next.js, Nest.js, MUI, Tailwind и другое — всё для старта'
                                : 'JS, TS, React, Next.js, Nest.js, MUI, Tailwind and more — all you need'}
                        </Text>
                    </Animated.View>

                    <Animated.View style={[styles.techRow, { opacity: fadeTechs, transform: [{ translateY: slideTechsUp }] }]}>
                        {TECH_ITEMS.map((tech) => {
                            const Icon = tech.icon;
                            return (
                                <View key={tech.label} style={[styles.techChip, { backgroundColor: tech.bg }]}>
                                    <Icon color={tech.color} size={16} />
                                    <Text style={[styles.techLabel, { color: tech.color }]}>{tech.label}</Text>
                                </View>
                            );
                        })}
                    </Animated.View>

                    <Animated.View style={[styles.featuresWrap, { opacity: fadeFeatures, transform: [{ translateY: slideFeaturesUp }] }]}>
                        {features.map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                                <View key={idx} style={styles.featureRow}>
                                    <View style={styles.featureIconWrap}>
                                        <Icon color={palette.aqua} size={16} />
                                    </View>
                                    <Text style={styles.featureText}>{feat.text}</Text>
                                </View>
                            );
                        })}
                    </Animated.View>

                    <View style={styles.bottomSection}>
                        <Animated.View style={{ opacity: fadeButton, transform: [{ translateY: slideButtonUp }, { scale: pulseAnim }] }}>
                            <Pressable
                                style={({ pressed }) => [styles.startButton, pressed && styles.startButtonPressed]}
                                onPress={handleStart}
                                testID="welcome-start-button"
                            >
                                <LinearGradient
                                    colors={['#22D3EE', '#2563EB']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.startButtonGradient}
                                >
                                    <Text style={styles.startButtonText}>
                                        {language === 'ru' ? 'Начать обучение' : 'Start learning'}
                                    </Text>
                                    <ArrowRight color="#FFFFFF" size={20} />
                                </LinearGradient>
                            </Pressable>
                        </Animated.View>

                        <Animated.View style={{ opacity: fadeButton }}>
                            <Text style={styles.footerNote}>
                                {language === 'ru' ? 'Бесплатно · Без регистрации · Оффлайн' : 'Free · No sign up · Offline'}
                            </Text>
                        </Animated.View>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default React.memo(WelcomeScreen);

const styles = StyleSheet.create({
    loadingScreen: {
        flex: 1,
        backgroundColor: '#020617',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#22D3EE',
        opacity: 0.6,
    },
    screen: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 28,
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 12,
    },
    orbTopRight: {
        position: 'absolute',
        top: -40,
        right: -60,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: 'rgba(34, 211, 238, 0.08)',
    },
    orbBottomLeft: {
        position: 'absolute',
        bottom: 60,
        left: -80,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: 'rgba(37, 99, 235, 0.1)',
    },
    orbCenter: {
        position: 'absolute',
        top: '35%',
        left: '30%',
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: 'rgba(34, 211, 238, 0.04)',
    },
    gridOverlay: {
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
    },
    gridLineH: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: 'rgba(34, 211, 238, 0.03)',
    },
    gridLineV: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 1,
        backgroundColor: 'rgba(34, 211, 238, 0.03)',
    },
    topSection: {
        alignItems: 'center',
        gap: 12,
    },
    logoBadge: {
        width: 56,
        height: 56,
        borderRadius: 18,
        overflow: 'hidden',
        marginBottom: 4,
    },
    logoGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    eyebrow: {
        color: palette.aqua,
        fontSize: 14,
        fontWeight: '900' as const,
        letterSpacing: 4,
    },
    versionBadge: {
        backgroundColor: 'rgba(34, 211, 238, 0.12)',
        borderWidth: 1,
        borderColor: 'rgba(34, 211, 238, 0.2)',
        borderRadius: 999,
        paddingHorizontal: 14,
        paddingVertical: 5,
    },
    versionText: {
        color: palette.aqua,
        fontSize: 11,
        fontWeight: '800' as const,
        letterSpacing: 2,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '900' as const,
        lineHeight: 40,
        textAlign: 'center',
        marginBottom: 14,
    },
    subtitle: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 15,
        lineHeight: 24,
        textAlign: 'center',
        maxWidth: 320,
        alignSelf: 'center' as const,
    },
    techRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
    },
    techChip: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
    },
    techLabel: {
        fontSize: 12,
        fontWeight: '700' as const,
    },
    featuresWrap: {
        gap: 14,
        paddingHorizontal: 10,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    featureIconWrap: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: 'rgba(34, 211, 238, 0.08)',
        borderWidth: 1,
        borderColor: 'rgba(34, 211, 238, 0.15)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featureText: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 15,
        fontWeight: '600' as const,
    },
    bottomSection: {
        alignItems: 'center',
        gap: 16,
    },
    startButton: {
        borderRadius: 20,
        overflow: 'hidden',
        width: SCREEN_WIDTH - 56,
    },
    startButtonPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.97 }],
    },
    startButtonGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingVertical: 18,
        paddingHorizontal: 24,
    },
    startButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '800' as const,
    },
    footerNote: {
        color: 'rgba(255,255,255,0.35)',
        fontSize: 12,
        fontWeight: '600' as const,
        letterSpacing: 0.5,
        textAlign: 'center' as const,
    },
});
