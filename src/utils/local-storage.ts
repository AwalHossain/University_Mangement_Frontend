export const setToLocalStorage = (key: string, value: string) => {

    console.log("setToLocalStorage", key, value);
    if (!key || !value || typeof window === 'undefined') { return ""; }

    return localStorage.setItem(key, value);
}


export const getFromLocalStorage = (key: string) => {


    if (!key || typeof window === 'undefined') { return ""; }

    return localStorage.getItem(key);
}