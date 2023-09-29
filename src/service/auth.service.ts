'use client'
import { authKey } from "@/constant/storageKey";
import decodedToken from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";


export const storeUserInfo = ({ acessToken }: { acessToken: string }) => {
    return setToLocalStorage(authKey as string, acessToken);
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage(authKey as string);

    if (authToken) {
        return decodedToken(authToken);
    } else {
        return "";
    }

}


export const isLoggedIn = () => {
    const authToken = getFromLocalStorage(authKey as string);
    console.log("isLoggedIn---", authToken);

    return !!authToken;
}


export const removeUserInfo = () => {
    return localStorage.removeItem(authKey as string);
}


