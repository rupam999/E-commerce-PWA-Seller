export const getData = (key: string) => {
    return JSON.parse(localStorage.getItem(key) || "{}");
};
