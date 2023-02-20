interface useHttpInterface {
  get: (endpoint: string, schema: any) => any;
  post: (text: string) => any;
  put: (text: string) => any;
  delete: (text: string) => any;
}

const useHttp = (): useHttpInterface => {
  const config = useRuntimeConfig();
  const get = async (endpoint: string, schema: any): any => {
    const data = await $fetch(endpoint, {
      baseURL: config.public.apiBase,
    });
    return data;
  };

  return {
    get,
  };
};

export default useHttp;
