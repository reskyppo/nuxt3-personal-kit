interface bodyInterface {
  title: string;
  body: string;
  userId: number | string;
}

interface useHttpInterface {
  get: (endpoint: string) => any;
  put: (endpoint: string, body: bodyInterface) => any;
  post: (endpoint: string, body: bodyInterface) => any;
  destroy: (endpoint: string) => any;
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

  const post = async (
    endpoint: string,
    body: { title: string; body: string; userId: number | string }
  ): Promise<any> => {
    const data = await $fetch(endpoint, {
      baseURL: config.public.apiBase,
      method: "POST",
      body: JSON.stringify(body),
    });

    return data;
  };

  const destroy = async (endpoint: string): Promise<any> => {
    const data = await $fetch(endpoint, {
      baseURL: config.public.apiBase,
      method: "DELETE",
    });

    return data;
  };

  return {
    get,
    put,
    post,
    destroy,
  };
};

export default useHttp;
