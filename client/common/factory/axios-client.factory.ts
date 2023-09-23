import axios, { AxiosInstance } from "axios";
import { buildMemoryStorage, defaultHeaderInterpreter, defaultKeyGenerator, setupCache } from 'axios-cache-interceptor';
import { authRequestInterceptor } from "../interceptors";

const createClient = (
    baseUrl: string,
    useAuthRequestInterceptor = true
) => {

    const client = setupCache(
        axios.create({
            baseURL: baseUrl,
        }),
        {
            storage: buildMemoryStorage(),
            generateKey: defaultKeyGenerator,
            headerInterpreter: defaultHeaderInterpreter,
        }
    );

    if (useAuthRequestInterceptor) client.interceptors.request.use(authRequestInterceptor);

    return client;
};

export const AxiosClientFactory = {
    createClient
};
