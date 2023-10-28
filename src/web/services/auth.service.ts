import medicomasAuthAxiosClient from "../auth-axios-client";
import UserService from "./user.service";

type Credentials = {
    username: string;
    password: string;
};

type AuthResponse = {
    token: string;
};

const API_VERSION = '/v1';

const RESOURCE = "/auth/login"

const AuthService = {
    login: async (credentials: Credentials): Promise<AuthResponse> => {
        const response = await medicomasAuthAxiosClient.post(`${API_VERSION}${RESOURCE}`, credentials);
        if(response.data.token) UserService.setToken(response.data.token);
        return response.data.token;
    }, 
    logout: () => UserService.removeToken()
}

export { AuthService }
