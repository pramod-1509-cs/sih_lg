// src/CommunityPage.js
import React, { useState } from 'react';
import './Community.css';

function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim() !== '') {
      setPosts([...posts, { text: newPost, replies: [] }]);
      setNewPost('');
    }
  };

  const handleReplySubmit = (postIndex, replyText) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].replies.push(replyText);
    setPosts(updatedPosts);
  };

  return (
    <div className="community-page">
      <h1>Community Page</h1>
      <div className="post-form">
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
      <div className="posts">
        {posts.map((post, postIndex) => (
          <div key={postIndex} className="post">
            <p>{post.text}</p>
            <div className="reply-form">
              <input
                type="text"
                placeholder="Reply to this post"
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button onClick={() => handleReplySubmit(postIndex, newPost)}>
                Reply
              </button>
            </div>
            <div className="replies">
              {post.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="reply">
                  <p>{reply}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityPage;
