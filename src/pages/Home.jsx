import { useState,useEffect,useContext } from "react";
import NavBar from "../components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css"
import PostList from "../components/PostList";
// import TagGrid from "../components/TagList";
import TagGrid from "../components/TagGrid";
import Alert from "../components/Alert";
import { useGetList } from "../hooks/useGetList"
import "../styles/Component.css"
import { AlertContext } from "../App";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import '../styles/Component.css'
import HomeNavBar from "../components/NavBar";

export const TagListContext = createContext()

function Home(){
    // const [isLoading,setIsLoading] = useState(false);

    const [searchParam] = useSearchParams();
    let pageNum = searchParam.get('p');
    let tagId = searchParam.get('tag');
    if (pageNum === null){
        pageNum = 1;
    }

    let postList = null
    let postListError = null

    console.log('tagId',tagId)

    // const {data: postList, error: postListError} = useGetList(`/api/post/list/`);
    if(tagId){
        const res = useGetList(`/api/post/list/?tag=${tagId}&p=${pageNum}`);
        postList = res.data
        postListError = res.error
    }else{
        const res = useGetList(`/api/post/list/?p=${pageNum}`);
        postList = res.data
        postListError = res.error
    }

    console.log('postList',postList)
    console.log('postListError',postListError)

    const {data: tagList, error: tagListError} = useGetList('/api/tags');

    const {alert, setAlert} =  useContext(AlertContext)

    // let tagList = [{'id':1,'name':'a'},{'id':2,'name':'b'}]

    useEffect(
        () => {
            if(postListError || tagListError){
                setAlert({ 'show': true, 'variant': 'danger', 'content': "Get Data Failed!" })
            }
        },[tagListError,postListError]
    )
    // setAlert({ 'show': true, 'variant': 'danger', 'content': "Get Post Failed!" })

    return (
        <div className="home-page">
            <Alert/>
            <NavBar/>
            {/* <div className="list-container my-4 justify-content-center"> */}
            <TagListContext.Provider value={{tagList}}>
                <div className="page-body">
                    {/* <div className="mid-are"> */}
                    <div className="left-are">
                        <SideBar/>
                    </div>
                        <PostList listObject={postList} pageNum={pageNum}/>
                        <div className="right-are">
                            <TagGrid className='tag-grid'/>
                        </div>
                </div>
            </TagListContext.Provider>
        </div>
    )
}

export default Home;