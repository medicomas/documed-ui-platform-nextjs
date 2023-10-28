import { RedirectService } from "@/components/auth/redirect.service";
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

const RESOURCE = "/auth/login";

const AuthService = {
    login: async (credentials: Credentials): Promise<AuthResponse> => {
        const response = await medicomasAuthAxiosClient.post(`${API_VERSION}${RESOURCE}`, credentials);
        if(response.data.token) UserService.setToken(response.data.token);
        return response.data.token;
    }, 
    logout: async (): Promise<boolean> => {
        let successSignOut = false;
        try {
            UserService.removeToken();
            successSignOut = true;
           
        } catch(e) {
            console.error(e);
        } 
        return new Promise((resolve) => {resolve(successSignOut)});
    }
}

export { AuthService }
