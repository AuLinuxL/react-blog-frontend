import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "../assets/view.jpg"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TagListContext } from '../pages/Home'
import { Pagination } from 'antd';
import updateURLParameter from "../utils/updateURLParameter";
import { Button } from "antd";
import Dialog from "./Dialog";
import authApi from "../authApi";
import "../styles/Home.css"

export function ListItem({id,title,summary,cover,date,tags,isAdmin}){

    const navigate = useNavigate();

    const {tagList} = useContext(TagListContext);
    const [dialogShow,setDialogShow] = useState(false)

    const handleItemOnClick = () => {
        navigate(`/post/${id}`)
    }

    const dateTrans = new Date(date);
    const postDate = dateTrans.getFullYear() + '-' + dateTrans.getMonth() + '-' + dateTrans.getDay()

    console.log(tagList)

    const tagNameList = []
    if(tags.length !== 0){
        for(const tag of tagList){
            if(tags.includes(tag.id)){
                console.log('name',tag.name)
                tagNameList.push(tag)
            }
            if(tagNameList.length > 3){
                break
            }
        }
    }

    const handleTagOnClick = (e, id) => {
        e.stopPropagation();
        window.location.href = `/?tag=${id}`;
        // window.location.reload();
    }

    const handleOnAccept = async(id) => {
        const res = await authApi.delete(`/api/post/delete/${id}/`);
        setDialogShow(false);
    }

    const handleDelete = (e) => {
        e.stopPropagation();
        setDialogShow(true)
    }

    const handleEdit = (e,id) => {
        e.stopPropagation();
        navigate(`/admin/editor/${id}`);
    }

    return (
        <>
            <div 
                className="post-item" 
                onClick={() => handleItemOnClick()}
                >
                    {cover ? <img className='post-cover' src={cover}/> : <></>}
                    <div className="post-info">
                        <h3 className="post-info-title">{title}</h3>
                        <h4 className="post-info-summary">{summary}</h4>
                        <div className='post-sub-info'>
                            <div className='post-tag-container'>
                                {tagNameList.map(
                                    (tag) => {
                                        return (
                                            <div key={tag.id} className='post-tag' onClick={(e) => handleTagOnClick(e, tag.id)}>
                                                <spam>{'#' + tag.name}</spam>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <div className="info-date-container">
                                <div className="info-date-style"/>
                                <spam className="info-date">{postDate}</spam>
                            </div>
                        </div>
                        {
                            isAdmin ? (
                                <div className="admin-btn-container">
                                    <Button type="primary" onClick={(e) => handleEdit(e,id)}>Edit</Button>
                                    <Button type="primary" danger onClick={(e) => handleDelete(e,id)}>Delete</Button>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
            </div>
            {dialogShow ? <Dialog msg='Sure to delete?' accept={() => handleOnAccept(id)} cancel={() => {setDialogShow(false)}}/> : <></>}
        </>
    )
}

function PostList({listObject,pageNum,isAdmin}){


    let items = [];
    let total = 1;

    if(listObject.results){
        items = listObject.results
        total = listObject.count
    }

    console.log('listObject',listObject);

    console.log('items.length' + items.length);

    if(items.length === 0){
        return(
            <div className="post-list">
                <p>
                    No post yet!
                </p>
            </div>
        )
    }

    const pageItemNum = 10;

    const [currentPage,setCurrentPage] = useState(1)

    const handleOnChange = (page) => {
        setCurrentPage(page);
        // if(page !== 1){
        let addr = window.location.href;
        addr = updateURLParameter(addr,'p',page);
        window.location.href = addr;
        // }else{
        //     window.location.href = `/`
        // }
    }

    return (
        // <div className="row justify-content-center">
        <div className="post-list">

            {items.map(
                (item) => {
                    console.log(item)
                    const props = { ...item, isAdmin:isAdmin };
                    return (
                        <div key={item.id} className="post-item-container col-12 width:'100%'">
                            {(items.indexOf(item) === 0) ? (<div className="list-decorator">
                                <div className="list-decorator-text"><span>·_·</span> Welcome To My <span style={{
                                    color:'#e99312'
                                }}>React | Blog</span></div>
                            </div>):<></>}
                            <ListItem {...props}/>
                        </div>
                    )
                }
            )}
            {
                (items.length === 0) ? <></> : (
                    <div className="pagination-container">
                        <Pagination defaultCurrent={1} current={pageNum} total={total} pageSize={pageItemNum} onChange={handleOnChange}/>
                    </div>
                )
            }

        </div>
    )
}
export default PostList;


