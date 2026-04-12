export const palette = {
    ink: '#0F172A',
    slate: '#1E293B',
    mist: '#8FA3BF',
    snow: '#F8FAFC',
    cloud: '#E2E8F0',
    line: 'rgba(148, 163, 184, 0.18)',
    night: '#020617',
    ocean: '#0A2540',
    cyan: '#22D3EE',
    aqua: '#67E8F9',
    emerald: '#34D399',
    amber: '#F59E0B',
    rose: '#FB7185',
    violet: '#7C3AED',
    card: 'rgba(15, 23, 42, 0.72)',
    cardStrong: 'rgba(15, 23, 42, 0.9)',
    overlay: 'rgba(2, 6, 23, 0.7)',
    white: '#FFFFFF',
} as const;

export const gradients = {
    screen: ['#020617', '#0A2540', '#0B1120'] as const,
    hero: ['#22D3EE', '#2563EB', '#7C3AED'] as const,
    accent: ['#34D399', '#22D3EE'] as const,
    warm: ['#F59E0B', '#FB7185'] as const,
} as const;

const Colors = {
    light: {
        text: palette.ink,
        background: palette.snow,
        tint: palette.cyan,
        tabIconDefault: palette.mist,
        tabIconSelected: palette.cyan,
    },
};

export default Colors;
