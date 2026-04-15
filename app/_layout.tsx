import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppErrorBoundary } from '@/components/error-boundary';
import { LearningProvider } from '@/providers/learning-provider';

SplashScreen.preventAutoHideAsync().catch(() => undefined);

const queryClient = new QueryClient();
const rootBackgroundColor = '#020617';
const rootHeaderTitle = 'Code Sprint';

function RootLayoutNav() {
    return (
        <Stack
            initialRouteName="welcome"
            screenOptions={{
                headerBackTitle: 'Back',
                headerTintColor: '#E2E8F0',
                headerStyle: {
                    backgroundColor: rootBackgroundColor,
                },
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: rootBackgroundColor,
                },
            }}
        >
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="lesson/[id]" options={{ title: rootHeaderTitle }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Настройки' }} />
            <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
    );
}

export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync().catch(() => undefined);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <LearningProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <AppErrorBoundary>
                        <RootLayoutNav />
                    </AppErrorBoundary>
                </GestureHandlerRootView>
            </LearningProvider>
        </QueryClientProvider>
    );
}