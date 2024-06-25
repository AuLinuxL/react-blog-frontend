import React from 'react';
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import Markdown from 'react-markdown';
import { useGetPost } from "../hooks/useGetPost";
import "../styles/Post.css";
import CodeBlock from '../components/CodeBlock';
import Comment from '../components/Comment';

function Post({ theme = 'light' }) {
    const { postId } = useParams();
    const post = useGetPost(postId);
    const content = post.content;
    const title = post.title;

    return (
        <div>
            <NavBar />
            <div className='post-page'>
                <h1 className="post-title">{title}</h1>
                <Markdown
                    className="post-content"
                    components={{
                        code({ children, ...props }) {
                            return <CodeBlock code={children} mod={theme} />
                        }
                    }}
                >
                    {content}
                </Markdown>
                <Comment id={postId}/>
            </div>
        </div>
    );
}

export default Post;

