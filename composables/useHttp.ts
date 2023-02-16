const useHttp = async (
  method: string = "GET",
  endpoint: string,
  body: any = null
) => {
  const config = useRuntimeConfig();

  const data = await $fetch<PostData[]>(endpoint, {
    baseURL: config.public.apiBase,
    method: method.toUpperCase(),
    body: body ? body : null,
  });
  return data;
};

export default useHttp;
