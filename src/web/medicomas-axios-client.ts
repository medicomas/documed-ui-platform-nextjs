import { AxiosClientFactory } from "./factory/axios-client.factory"

const baseUrl = import.meta.env.VITE_MEDICOMAS_API_URL;

const medicomasAxiosClient = AxiosClientFactory.createAxiosClient({
    baseUrl,
    useAuthRequest: true
});

export default medicomasAxiosClient;
