import medicomasAuthAxiosClient from "../auth-axios-client";
import UserService from "./user.service";

type Credentials = {
    username: string;
    password: string;
};

type AuthResponse = {
    token: string;
};

const RESOURCE = "/auth/login";

const AuthService = {
    login: async (credentials: Credentials): Promise<AuthResponse> => {
        const response = await medicomasAuthAxiosClient.post(`${RESOURCE}`, credentials);
        if (response.data.token) UserService.setToken(response.data.token);
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
