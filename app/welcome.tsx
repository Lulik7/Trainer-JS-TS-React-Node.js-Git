import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Code2, GitBranch, Layers3, Server, Sparkles } from 'lucide-react-native';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
                        <Text style={styles.logoText}>DEVELOPER TRAINER</Text>
                    </View>

                    {/* Заголовок */}
                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>Учи код</Text>
                        <Text style={styles.title}>каждый день.</Text>
                        <Text style={styles.titleSub}>70 дней · 9 технологий · 700+ задач</Text>
                    </View>

                    {/* Картинка */}
                    <Image
                        source={require('../assets/images/welcome.jpg')}
                        style={styles.image}
                        resizeMode="contain"
                    />

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
    image: {
        width: '100%',
        height: 180,
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