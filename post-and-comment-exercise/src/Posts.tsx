import React, { useContext, useState }  from 'react'
import './Posts.css';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from './store/post-context';

interface Comment {
    id: number;
    text: string;
  }
  
  export interface Post {
    id: number;
    text: string;
    theme: string;
    username: string;
    comments: Comment[];
  }

interface PostsProps {
    message: string;
  }

const Posts: React.FC<PostsProps> = ({message}) => {

    const { posts } = useContext(PostsContext);

    const allPosts: Post[] = posts;
    console.log(allPosts)
    console.log(`${message}-Posts component`);
    const navigate = useNavigate();

    const [filteredPosts, setFilteredPosts] = useState<Post[]>(allPosts);

    const handleFilter = (theme: string, user: string) => {
        const filtered = allPosts.filter((post) => {
            return (
                post.theme.toLowerCase().includes(theme.toLowerCase()) &&
                (user === '' || post.username === user)
              );
        });
        setFilteredPosts(filtered);
      };

      const goToPost = (postId: any) => {
        navigate(`/post/${postId}`);
      }

      const postSingle = (post : Post) => {
        return  (
            <div key={post.id} className="post-single" onClick={() => goToPost(post.id)}>
            <h2>{post.theme}</h2>
            <p>Author: {post.username}</p>
            <p>{post.text}</p>
          </div>
        )
      }

  return (
    <div>
        <div className='search'><Search message={message} posts={posts} onFilter={handleFilter}/></div>
        <div className='topics'>Topics:</div>
        <div className='posts'>{filteredPosts.map((post) => postSingle(post))}</div>
    </div>
  )
}

export default Posts