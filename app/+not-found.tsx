import { Link, Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { House, SearchX } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { gradients, palette } from '@/constants/colors';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Not found' }} />
            <LinearGradient colors={gradients.screen} style={styles.container}>
                <View style={styles.card} testID="not-found-screen">
                    <View style={styles.iconWrap}>
                        <SearchX color={palette.white} size={28} />
                    </View>
                    <Text style={styles.title}>Экран не найден в Code Sprint</Text>
                    <Text style={styles.description}>
                        Похоже, ссылка устарела или маршрут был изменён. Вернись к ежедневной тренировке.
                    </Text>
                    <Link href="/" style={styles.link} testID="not-found-home-link">
                        <House color={palette.ink} size={18} />
                        <Text style={styles.linkText}>На главную</Text>
                    </Link>
                </View>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: palette.cardStrong,
        borderRadius: 32,
        borderWidth: 1,
        borderColor: palette.line,
        padding: 24,
        gap: 16,
    },
    iconWrap: {
        width: 56,
        height: 56,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.violet,
    },
    title: {
        color: palette.white,
        fontSize: 28,
        fontWeight: '800',
    },
    description: {
        color: palette.cloud,
        fontSize: 15,
        lineHeight: 22,
    },
    link: {
        marginTop: 8,
        backgroundColor: palette.white,
        borderRadius: 18,
        paddingHorizontal: 18,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    linkText: {
        color: palette.ink,
        fontSize: 15,
        fontWeight: '700',
    },
});

