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
        const data = await $fetch<PostData>("/api/posts/1", {
          baseURL: process.env.BASE_URL_PRODUCTION
            ? process.env.BASE_URL_PRODUCTION
            : "http://127.0.0.1:3000",
        });
        this.setPost(data);   
        return data;
      } catch (e) {
        this.setPost(null);
        return null;
      }
    },
  },
});
