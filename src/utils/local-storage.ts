export const setToLocalStorage = (key: string, value: string) => {

    console.log("setToLocalStorage", key, value);
    if (!key || !value || typeof window === 'undefined') { return ""; }

    localStorage.setItem(key, value);
}