import jwtDecode from "jwt-decode";
interface DecodedToken {
    userId: string;
    iat: number;
    exp: number;
    email: string
}

const decodedToken = (token: string) => {
    return jwtDecode(token) as DecodedToken;
}

export default decodedToken;