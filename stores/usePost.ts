interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const usePostStore = defineStore("post", {
  state: () => {
    return {
      post: null as PostData | null,
    };
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    setPost(post: PostData | null) {
      this.post = post;
    },

    async getPostData() {
      try {
        const data = await $fetch<PostData>(API_ENDPOINT.AUTH.PROFILE, {
          baseURL: process.server ? "http://127.0.0.1:3000" : undefined,
        });
        this.setPost(data);
      } catch (e) {
        this.setPost(null);
      }
    },
  },
});
