import axios from 'axios';

import { setupCache, buildMemoryStorage, defaultKeyGenerator, defaultHeaderInterpreter } from 'axios-cache-interceptor';

import { authRequestInterceptor } from '../interceptors';

const createClient = ({ baseUrl = '', useAuthRequest = true }) => {
  const AxiosClient = setupCache(
    axios.create({
      baseURL: baseUrl,
    }),
    {
      storage: buildMemoryStorage(),
      generateKey: defaultKeyGenerator,
      headerInterpreter: defaultHeaderInterpreter,
      debug: undefined,
    },
  );

  if (useAuthRequest) AxiosClient.interceptors.request.use(authRequestInterceptor);

  return AxiosClient;
};

export const AxiosClientFactory = {
  createAxiosClient: createClient,
};
