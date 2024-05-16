import { createContext, useContext } from "react";

export const PostsContext = createContext(null);
export const PostsProvider = PostsContext.Provider;
export const usePosts = () => useContext(PostsContext);
