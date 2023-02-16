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
  actions: {
    setPost(post: PostData | null) {
      this.post = post;
    },

    async getPostData() {
      try {
        const data = await useHttp("get", "/api/posts");
        this.setPost(data);
        return data;
      } catch (e) {
        this.setPost(null);
        return null;
      }
    },
    async getPostDataDetail(id: string) {
      try {
        const data = await useHttp("get", `/api/posts/${id}`);
        this.setPost(data);
        return data;
      } catch (e) {
        this.setPost(null);
        return null;
      }
    },
  },
});
