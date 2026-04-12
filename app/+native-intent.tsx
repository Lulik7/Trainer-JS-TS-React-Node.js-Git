export function redirectSystemPath({ path }: { path: string; initial: boolean }) {
    console.log('[redirectSystemPath] Received path', path);
    console.log('[redirectSystemPath] Redirecting to the home learning flow for Code Sprint');
    return '/';
}
