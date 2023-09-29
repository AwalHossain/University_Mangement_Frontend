import jwtDecode from "jwt-decode";


const decodedToken = (token: string) => {
    return jwtDecode(token);
}

export default decodedToken;