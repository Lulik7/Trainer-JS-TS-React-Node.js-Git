import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Code2, GitBranch, Layers3, Server, Sparkles } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function WelcomeScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
        }).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, { toValue: 1.3, duration: 700, useNativeDriver: true }),
                Animated.timing(pulseAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
            ])
        ).start();
    }, []);

    return (
        <LinearGradient colors={['#050B1B', '#0A0F2E', '#050B1B']} style={styles.screen}>
            <SafeAreaView style={styles.safe}>
                <Animated.View style={[styles.container, { opacity: fadeAnim }]}>

                    {/* Лого */}
                    <View style={styles.logoWrap}>
                        <Animated.Text style={[styles.logoIcon, { transform: [{ scale: pulseAnim }] }]}>
                            ⚡
                        </Animated.Text>
                        <Text style={styles.logoText}>CODE SPRINT</Text>
                    </View>

                    {/* Заголовок */}
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>Учи код</Text>
                        <Text style={styles.title}>каждый день.</Text>
                        <Text style={styles.titleSub}>30 дней · 5 технологий · 500+ задач</Text>
                    </View>

                    {/* Иллюстрация */}
                    <View style={styles.illustration}>
                        <Svg width="100%" height="160" viewBox="0 0 320 160">
                            {/* экран */}
                            <Rect x="20" y="10" width="280" height="110" rx="12" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
                            {/* кнопки окна */}
                            <Circle cx="40" cy="28" r="5" fill="#F05032" />
                            <Circle cx="56" cy="28" r="5" fill="#F7DF1E" />
                            <Circle cx="72" cy="28" r="5" fill="#68A063" />
                            {/* строки кода */}
                            <Rect x="36" y="46" width="60" height="6" rx="3" fill="#3178C6" opacity="0.8" />
                            <Rect x="104" y="46" width="40" height="6" rx="3" fill="#61DAFB" opacity="0.8" />
                            <Rect x="36" y="62" width="20" height="6" rx="3" fill="#F7DF1E" opacity="0.8" />
                            <Rect x="64" y="62" width="80" height="6" rx="3" fill="#22D3EE" opacity="0.6" />
                            <Rect x="36" y="78" width="100" height="6" rx="3" fill="#818CF8" opacity="0.7" />
                            <Rect x="144" y="78" width="30" height="6" rx="3" fill="#F05032" opacity="0.7" />
                            <Rect x="36" y="94" width="50" height="6" rx="3" fill="#34D399" opacity="0.7" />
                            <Rect x="94" y="94" width="70" height="6" rx="3" fill="#22D3EE" opacity="0.5" />
                            {/* подставка */}
                            <Rect x="140" y="120" width="40" height="8" rx="4" fill="#1E293B" />
                            <Rect x="120" y="128" width="80" height="6" rx="3" fill="#1E293B" />
                        </Svg>
                    </View>

                    {/* Иконки технологий */}
                    <View style={styles.icons}>
                        {[
                            { Icon: Code2, color: '#F7DF1E', label: 'JavaScript' },
                            { Icon: Layers3, color: '#3178C6', label: 'TypeScript' },
                            { Icon: Sparkles, color: '#61DAFB', label: 'React' },
                            { Icon: Server, color: '#68A063', label: 'Node.js' },
                            { Icon: GitBranch, color: '#F05032', label: 'Git' },
                        ].map(({ Icon, color, label }) => (
                            <View key={label} style={styles.iconItem}>
                                <Icon color={color} size={26} />
                                <Text style={[styles.iconLabel, { color }]}>{label}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Кнопка */}
                    <Pressable
                        style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
                        onPress={() => router.replace('/')}
                    >
                        <Text style={styles.btnText}>Начать →</Text>
                    </Pressable>

                </Animated.View>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1 },
    safe: { flex: 1 },
    container: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center',
        gap: 32,
    },
    logoWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    logoIcon: { fontSize: 20 },
    logoText: {
        color: '#22D3EE',
        fontSize: 12,
        fontWeight: '800',
        letterSpacing: 2,
    },
    titleWrap: { gap: 6 },
    title: {
        color: '#FFFFFF',
        fontSize: 44,
        fontWeight: '900',
        lineHeight: 50,
        letterSpacing: -0.5,
    },
    titleSub: {
        color: 'rgba(255,255,255,0.45)',
        fontSize: 14,
        marginTop: 8,
    },
    illustration: {
        alignItems: 'center',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconItem: {
        alignItems: 'center',
        gap: 6,
    },
    iconLabel: {
        fontSize: 9,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    btn: {
        backgroundColor: '#22D3EE',
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
    },
    btnText: {
        color: '#050B1B',
        fontSize: 16,
        fontWeight: '900',
    },
});