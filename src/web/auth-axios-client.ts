import { AxiosClientFactory } from './factory/axios-client.factory';

export const API_BASE_URL = import.meta.env.VITE_MEDICOMAS_API_URL;
export const API_VERSION = 'v1';

const medicomasAuthAxiosClient = AxiosClientFactory.createAxiosClient({
  baseUrl: `${API_BASE_URL}/${API_VERSION}`,
  useAuthRequest: false,
});

export default medicomasAuthAxiosClient;
