const MockUserService = {
    getToken: () => null
};

// Todo remove any, figure out how to type this
export const authRequestInterceptor = async (config: any) => {
    const token = await MockUserService.getToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

};
