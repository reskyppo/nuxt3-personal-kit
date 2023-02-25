interface bodyInterface {
  title: string;
  body: string;
  userId: number | string;
}

interface useHttpInterface {
  get: (endpoint: string) => any;
  put: (endpoint: string, body: bodyInterface) => any;
  //   post: (endpoint: string, body: bodyInterface) => any;
  //   delete: (endpoint: string) => any;
}

const useHttp = (): useHttpInterface => {
  const config = useRuntimeConfig();
  const get = async (endpoint: string): Promise<any> => {
    const data = await $fetch(endpoint, {
      baseURL: config.public.apiBase,
    });
    return data;
  };

  const put = async (
    endpoint: string,
    body: { title: string; body: string; userId: number | string }
  ): Promise<any> => {
    const data = await $fetch(endpoint, {
      baseURL: config.public.apiBase,
      method: "PUT",
      body: JSON.stringify(body),
    });

    return data;
  };

  return {
    get,
    put,
  };
};

export default useHttp;
