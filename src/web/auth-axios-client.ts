import { AxiosClientFactory } from "./factory/axios-client.factory"

const baseUrl = import.meta.env.VITE_MEDICOMAS_API_URL;

const medicomasAuthAxiosClient = AxiosClientFactory.createAxiosClient({
    baseUrl,
    useAuthRequest: false
});

export default medicomasAuthAxiosClient;
