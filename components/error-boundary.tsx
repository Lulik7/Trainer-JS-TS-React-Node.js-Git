import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { palette } from '@/constants/colors';

interface State {
    hasError: boolean;
}

interface Props {
    children: React.ReactNode;
}

export class AppErrorBoundary extends React.Component<Props, State> {
    public state: State = { hasError: false };

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error): void {
        console.log('[AppErrorBoundary] Caught error', error);
    }

    private handleReset = (): void => {
        this.setState({ hasError: false });
    };

    public render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <View style={styles.container} testID="error-boundary-screen">
                    <Text style={styles.badge}>Recovery mode</Text>
                    <Text style={styles.title}>Что-то пошло не так</Text>
                    <Text style={styles.description}>
                        Попробуй открыть экран ещё раз. Если ошибка повторится, перезапусти приложение.
                    </Text>
                    <Pressable style={styles.button} onPress={this.handleReset} testID="error-boundary-reset">
                        <Text style={styles.buttonText}>Повторить</Text>
                    </Pressable>
                </View>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.night,
        paddingHorizontal: 24,
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 14,
    },
    badge: {
        color: palette.aqua,
        fontSize: 13,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    title: {
        color: palette.white,
        fontSize: 32,
        fontWeight: '800',
    },
    description: {
        color: palette.cloud,
        fontSize: 16,
        lineHeight: 24,
    },
    button: {
        marginTop: 8,
        backgroundColor: palette.white,
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 14,
    },
    buttonText: {
        color: palette.ink,
        fontSize: 15,
        fontWeight: '700',
    },
});
