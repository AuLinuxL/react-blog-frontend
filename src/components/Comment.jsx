import Editor from '../components/Editor'
import authApi from '../authApi';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import api from '../api';
import MDEditor from '@uiw/react-md-editor';
import Markdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import Form from 'react-bootstrap/Form';
import { User } from '../assets/icons';

function CommentList({comments}){

    const ListItem = ({comment}) => {
        return (
            // <Container>
                <div className='comment-item'>
                    <div className='comment-info'>
                        <User onClick={
                            () => {
                                if (comment.site) {
                                    const url = comment.site.startsWith('http://') || comment.site.startsWith('https://')
                                      ? comment.site
                                      : `https://${comment.site}`;
                                    window.location.href = url;
                                }
                            }
                        }/>
                        <spam className='comment-name'>
                            {comment.name + ':'}
                        </spam>
                    </div>
                    <Markdown
                        className="comment-content"
                        components={{
                            code({ children, ...props }) {
                                return <CodeBlock code={children} mod='light' />
                            }
                        }}
                    >
                        {comment.comment}
                    </Markdown>
                </div>
            // </Container>
        )
    }

    return (
        <div className='comment-list-container'>
            {comments.map(
                (comment) => {
                    return <ListItem key={comment.id} comment={comment}/>
                }
            )}
        </div>
    )
}

function InfoForm(props){
    return (
        <div className='info-form'>
            <Form.Label className='form-label'>Name</Form.Label>
            <Form.Control className="name-input" type='text' value={props.username} onChange={(e) => {props.setUserName(e.target.value)}}/>
            <Form.Label className='form-label'>Site</Form.Label>
            <Form.Control type='text' value={props.site} onChange={(e) => {props.setSite(e.target.value)}}/>
        </div>
    ) 
}

function Comment({id}){

    const [comment,setComment] = useState('')
    const [commentList,setCommentList] = useState([])
    const [username,setUserName] = useState('')
    const [site,setSite] = useState('')
    const [warmInfo,setWarmInfo] = useState('')

    useEffect(
        () => {
            if(warmInfo !== ''){
                setTimeout(
                    () => {
                        setWarmInfo('')
                    },2000
                )
            }
        },[warmInfo]
    )

    const getComment = async() => {
        try{
            const res = await api.get(`/api/comment/?id=${id}`);
            setCommentList(res.data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(
        () => {
            getComment()
        },[]
    )

    const handleOnClick = async() => {
        if(comment === ''){
            setWarmInfo('Comment emty!')
            return
        }
        if(username === ''){
            setWarmInfo('Name emty!')
            return
        }
        try{
            const res = await authApi.post(
                '/api/comment/',
                {
                    'comment':comment,
                    'post':id,
                    'name':username,
                    'site':site
                }
            )
            window.location.reload()
        }catch(e){
            console.log(e)
        }
    }

    return(
        <div className="comment-container">
            <InfoForm username={username} setUserName={setUserName} site={site} setSite={setSite}/>
            <div className='comment-editor-container'>
                {/* <Editor value={comment} setValue={setComment} colorMod='light'/> */}
                {/* <div className='editor-container'> */}
                    <MDEditor
                        className='comment-editor'
                        value={comment}
                        onChange={setComment}
                        data-color-mode='light'
                    />
                {/* </div> */}
                <div className='comment-bar'>
                    <spam className='warm-info'>{warmInfo}</spam>
                    <button className='send-btn' onClick={handleOnClick}>发送</button>
                </div>
            </div>
            <CommentList comments={commentList}/>
        </div>
    )
}

export default Comment;