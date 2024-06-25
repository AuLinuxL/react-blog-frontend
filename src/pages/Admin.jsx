import NavBar from "../components/NavBar";
import PostList from "../components/PostList";
import { useGetList } from "../hooks/useGetList"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import CreateBtn from "../components/CreateBtn";
import { useEffect,useContext } from "react";
import Alert from "../components/Alert";
import { AlertContext } from "../App";
import { useSearchParams } from "react-router-dom";
import { TagListContext } from "./Home";
import Dialog from "../components/Dialog";

function Admin(){

    const [searchParam] = useSearchParams();
    let pageNum = searchParam.get('p');
    console.log('pageNum',pageNum)
    if (pageNum === null){
        pageNum = 1;
    }

    const {data: postList, error: postListError} = useGetList(`/api/post/list/?p=${pageNum}`);
    const {alert, setAlert} =  useContext(AlertContext)

    const {data: tagList, error: tagListError} = useGetList('/api/tags');

    useEffect(
        () => {
            if(postListError){
                setAlert({ 'show': true, 'variant': 'danger', 'content': "Get Data Failed!" })
            }
        },[postListError]
    )

    return (
        <div style={{position:"relative"}}>
            <Alert/>
            <NavBar/>
                <TagListContext.Provider value={{tagList}}>
                    <Container className="list-container my-4 justify-content-center">
                        <PostList listObject={postList} pageNum={pageNum} isAdmin={true}/>
                    </Container>
                </TagListContext.Provider>
            <CreateBtn/>
            {/* <Dialog/> */}
        </div>
    )
}

export default Admin;