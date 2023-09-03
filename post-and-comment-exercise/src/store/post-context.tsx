import React, { createContext, useState } from "react";
import { Post } from "../Posts";
import { postsData } from "../data";

//definisanje tipa objekta koji ce se koristiti u kontekstu
interface PostsContextObj {
  posts: Post[];
}

//kreiaranje konteksta i postavljanje inicijalnih vrednosti na prazan niz, ti podaci ce da se koriste ako se kontekst koristi van provajdera
export const PostsContext = createContext<PostsContextObj>({
  posts: [],
});

//ocekuje children kao prop gde children predstavlja komponente koje ce biti omotane ovim kontekstom
interface PostsContextProviderProps {
  children: React.ReactNode;
}

//kreiramo provajder komponentu koja ce da omota ostale komponente koje ce da koriste kontekst
const PostsContextProvider: React.FC<PostsContextProviderProps> = (props) => {
  //cuvamo podatke u usestate-u
  const [posts, setPosts] = useState<Post[]>(postsData);

  //kreiramo objekat koji sadrzi trenutne vrednosti koje ce da koriste komponente
  const contextValue: PostsContextObj = {
    posts,
  };

  //vracamo postcontext komponentu sa dodatim vrenostima iz contextvalue
  return (
    <PostsContext.Provider value={contextValue}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
