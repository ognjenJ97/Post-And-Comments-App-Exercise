import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostsContext } from "./store/post-context";

interface SinglePostProps {
  message: string;
}

const SinglePost: React.FC<SinglePostProps> = ({ message }) => {
  console.log(`${message}-Post component`);

  var navigate = useNavigate();
  const { id } = useParams();

  const { posts } = useContext(PostsContext);

  const goToPosts = () => {
    navigate(`/posts`);
  };

  if (id === undefined || isNaN(parseInt(id, 10))) {
    return (
      <>
        <div onClick={goToPosts} className="post-box-goback">
          Click to go back
        </div>
        <div>Invalid ID</div>
      </>
    );
  }

  const postId = parseInt(id, 10);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return (
      <>
        <div onClick={goToPosts} className="post-box-goback">
          Click to go back
        </div>
        <div>Post not found</div>
      </>
    );
  }

  return (
    <div className="post-box">
      <div onClick={goToPosts} className="post-box-goback">
        Click to go back
      </div>
      <div className="post-single">
        <h2>Theme: {post.theme}</h2>
        <p>Author: {post.username}</p>
        <p>Text: {post.text}</p>
        <h3>Comments:</h3>
        <ul>
          {post.comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SinglePost;
