import apiClient from "./instance";

export const getAllPost = () => {
  const response = apiClient.get("/posts");
  //https://jsonplaceholder.typicode.com/posts

  return response;
};
