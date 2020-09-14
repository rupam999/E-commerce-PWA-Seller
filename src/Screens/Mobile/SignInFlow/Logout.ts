export const Logout = (history) => {
    localStorage.clear();
    history.replace('/login', 0)
}