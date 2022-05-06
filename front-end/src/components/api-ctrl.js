import axios from "axios";

const postController = {
  getAll: async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/posts");
      return response.data.results;
    } catch (error) {
      console.log("oups");
    }
  },
};

export default postController;