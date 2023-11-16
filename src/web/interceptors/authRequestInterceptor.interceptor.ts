import UserService from '../services/user.service';

export const authRequestInterceptor = async (config: any) => {
  const token = UserService.getToken();

  const authPrefix = 'Bearer';

  if (token) {
    config.headers.Authorization = token ? `${authPrefix} ${token}` : '';
  }

  return config;
};
