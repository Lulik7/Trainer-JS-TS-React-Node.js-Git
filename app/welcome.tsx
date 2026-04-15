import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Code2, GitBranch, Layout, Layers3, Palette, Server, Sparkles, Wind } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                        <Text style={styles.logoText}>DEVELOPER TRAINER</Text>
                    </View>

                    {/* Заголовок */}
                    <View style={styles.titleWrap}>
                        <Text style={styles.titleEn}>Level up yourself!</Text>
                        <Text style={styles.title}>Прокачай себя!</Text>
                        <Text style={styles.titleSmall}>Learn to code every day · Учи код каждый день</Text>
                        <Text style={styles.titleSub}>70 days · 9 technologies · 700+ tasks</Text>
                    </View>

                    {/* Картинка */}
                    <Image
                        source={require('../assets/images/muscles.jpg')}
                        style={styles.image}
                        resizeMode="contain"
                    />

                    {/* Иконки технологий */}
                    <View style={styles.icons}>
                        {[
                            { Icon: Code2, color: '#F7DF1E', label: 'JS' },
                            { Icon: Layers3, color: '#3178C6', label: 'TS' },
                            { Icon: Sparkles, color: '#61DAFB', label: 'React' },
                            { Icon: Server, color: '#68A063', label: 'Node' },
                            { Icon: GitBranch, color: '#F05032', label: 'Git' },
                            { Icon: Layout, color: '#FFFFFF', label: 'Next' },
                            { Icon: Server, color: '#E0234E', label: 'Nest' },
                            { Icon: Palette, color: '#007FFF', label: 'MUI' },
                            { Icon: Wind, color: '#38BDF8', label: 'Tailwind' },
                        ].map(({ Icon, color, label }) => (
                            <View key={label} style={styles.iconItem}>
                                <Icon color={color} size={20} />
                                <Text style={[styles.iconLabel, { color }]}>{label}</Text>
                            </View>
                        ))}
                    </View>

                    {/* Кнопка */}
                    <Pressable
                        style={({ pressed }) => [styles.btn, pressed && { opacity: 0.8 }]}
                        onPress={async () => {
                            await AsyncStorage.setItem('welcomed', 'true');
                            router.replace('/');
                        }}
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
        gap: 24,
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
    titleWrap: { gap: 4 },
    titleEn: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 44,
        fontWeight: '900',
        lineHeight: 50,
        letterSpacing: -0.5,
    },
    titleSmall: {
        color: 'rgba(255,255,255,0.4)',
        fontSize: 13,
        fontWeight: '500',
        marginTop: 4,
    },
    titleSub: {
        color: 'rgba(255,255,255,0.45)',
        fontSize: 14,
        marginTop: 4,
    },
    image: {
        width: '100%',
        height: 160,
    },
    icons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 12,
        alignItems: 'center',
    },
    iconItem: {
        alignItems: 'center',
        gap: 4,
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