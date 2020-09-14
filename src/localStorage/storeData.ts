export const storeData = (key: string, value: any) => {
    return localStorage.setItem(key, JSON.stringify(value));
}