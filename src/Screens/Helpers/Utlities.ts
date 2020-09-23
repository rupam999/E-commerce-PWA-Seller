export const pathCheck = (history: any, path: string) => {
    if (history.location.pathname !== path) {
        return true;
    }
    return false;
};
