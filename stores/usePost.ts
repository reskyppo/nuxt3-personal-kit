import { PostData } from "types/PostData";

export const usePostStore = defineStore("post", {
  state: () => {
    return {
      post: null as PostData[] | null,
      post_detail: null as PostData | null,
    };
  },
  actions: {
    setPost(post: PostData[] | null) {
      this.post = post;
    },

    setPostDetail(post: PostData | null) {
      this.post_detail = post;
    },

    async getPostData() {
      const http = useHttp();

      try {
        const data: PostData[] = await http.get("/api/posts");
        this.setPost(data);
        return data;
      } catch (e) {
        this.setPost(null);
        return null;
      }
    },

    async getPostDataDetail(id: string) {
      const http = useHttp();

      try {
        const data: PostData = await http.get(`/api/posts/${id}`);
        this.setPostDetail(data);
        return data;
      } catch (e) {
        this.setPostDetail(null);
        return null;
      }
    },

    async updatePostData(id: string, body: any) {
      const http = useHttp();
      try {
        const data: PostData = await http.put(`/api/posts/${id}`, body);
        return data;
      } catch (e) {
        this.setPost(null);
        return null;
      }
    },
  },
});
