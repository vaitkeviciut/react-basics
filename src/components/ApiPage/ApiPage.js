import { useState, useEffect } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import './ApiPage.scss'
import BackButton from '../BackButton';

import userImage from '../images/user-picture-small.jpg';

const ApiPage = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        fetch(`http://localhost:3000/posts?_expand=user`)
        .then(res => res.json())
        .then(postsData => {
            console.log(postsData)
            setPosts(postsData)
        })
    }, [])

    const newPostHandler = () => {
        fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title: 'Sukurtas pirmas postas',
            body: 'Sukurto posto turinys',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

    const deletePostHandler = (id) => {
        fetch(`http://localhost:3000/posts/${id}`, {
            method: 'DELETE',
            });
    }

    const editPostHandler = () => {
        fetch('http://localhost:3000/posts/2', {
        method: 'PUT',
        body: JSON.stringify({
            id: 2,
            title: 'Edited post',
            body: 'Edited post content',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }

  return (
    <>
    <BackButton />
    <div className="posts-wrapper">
        <button onClick={newPostHandler}>New Post</button>
        
        <button onClick={editPostHandler}>Edit 2</button>
        {posts && posts.length > 0 && posts.map((post, index) => (
            <div className="one-posts-all-wrapper" key={index}>
                <div className="one-post-wrapper">
                    <div className="user-shortcut-wrapper">
                        <img className="user-photo-small" src={userImage} alt={userImage} width='60' />
                        <button onClick={() => deletePostHandler(post.id)}>Delete</button>
                        <div className="user-shortcut-near-photo-wrapper">
                            <Link className="user-name-link" to={`apipage/users/` + post.userId}>
                                <div className="user-name-username-wrapper">
                                    <h3 className="user-name-post">{post.user.name}</h3>
                                    <span className="username-text-post">({post.user.username})</span>
                                </div>
                                <div className="user-company-wrapper">
                                    <span className="user-company-item">Works @ {post.user.company.name}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="post-text-wrapper">
                        <Link to={`apipage/posts/` + post.id}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">{post.body}</p>
                        </Link>
                    </div>
                </div>
                
                
            </div>
        ))}
        
    </div>
    </>
    
    
  )
}

export default ApiPage