import React from 'react';
import PostItem from '../PostItem';

const Post = (props) => {
  return(
     props.post.map((post)=>(
        <PostItem key={post.id} title={post.title} url={post.thumbnailUrl} id={post.id}/>
     )) 
      
  )
};

export default Post;
