import { setToLocalStorage } from "@/utils/local-storage";


export const storeUserInfo = ({ acessToken }: { acessToken: string }) => {
    return setToLocalStorage('accessToken', acessToken as string);
}