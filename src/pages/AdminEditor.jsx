import Editor from "../components/Editor"
import NavBar from "../components/NavBar"
import Form from 'react-bootstrap/Form';
import { Button, Container, Card, FormGroup } from "react-bootstrap";
import { useEffect, useState, useRef,useContext,createContext } from "react";
import api from "../authApi";
import { useParams } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import "../styles/AdminEditor.css"

const editValueContext = createContext(null)
const onEditContext = createContext(null)
const tagListContext = createContext(null)

function TagList(){

    const [onEdit,setOnEdit] = useState(null)

    const [editValue,setEditValue] = useState('')
    const {tagList,setTagList} = useContext(tagListContext)

    const [isNew,setIsNew] = useState(false)

    const handleOnEdit = (id,name) => {

        if(isNew){
            setIsNew(false);
        }

        if(!onEdit){
            setOnEdit(id);
            setEditValue(name);
        }
    }

    const handleOnAdd = () => {
        if(!isNew){
            setIsNew(true)
        }
        if(onEdit){
            setOnEdit(null) 
        }
        setEditValue('')
    }

    const handleOnSave = (e) => {
        e.stopPropagation()
        if(onEdit){
            setOnEdit(null) 
        }
        setEditValue('')
        if(isNew){
            setIsNew(false)
        }
    }

    const Tag = ({id,name}) => {
        return (
            (id === onEdit) ? (
                <Card key={id} className="tag" style={{backgroundColor:"red"}} onClick={() => handleOnEdit(id,name)}>
                    <p className="tag-text" style={{color:'white'}} onClick={handleOnSave}>{name}</p>
                </Card>
            ) : (
                <Card key={id} className="tag" onClick={() => handleOnEdit(id,name)}>
                    <p className="tag-text">{name}</p>
                </Card>
            )
        )
    }

    return (
        <div>
            <Card className="tag-container">
                {tagList.map(
                    (tag) => {
                        return (
                            <Tag key={tag.id} id={tag.id} name={tag.name}/>
                        )
                    }
                )}
                {isNew ? (
                    <Card className="tag" style={{backgroundColor:"red"}} onClick={() => {
                        if(isNew){
                            setIsNew(false)
                        }
                    }}>
                        <p className="tag-text">+</p>
                    </Card>
                ):(
                    <Card className="tag" onClick={handleOnAdd}>
                        <p className="tag-text">+</p>
                    </Card>
                )}

            </Card>
            <editValueContext.Provider value={{editValue,setEditValue}}>
                <onEditContext.Provider value={{onEdit,setOnEdit}}>
                    <TagEditor onEdit={onEdit} isNew={isNew} setIsNew={setIsNew}/>
                </onEditContext.Provider>
            </editValueContext.Provider>
        </div>
    )
}

function TagEditor({isNew,setIsNew}) {

    const {editValue,setEditValue} = useContext(editValueContext)
    const {onEdit,setOnEdit} = useContext(onEditContext)
    const {tagList,setTagList} = useContext(tagListContext)

    const handleOnClick = () => {
        let newList = [...tagList]
        if(editValue === null){
            console.log('Empty value!')
            return
        }
        if(isNew){
            newList.push({'id':newList.length + 1,'name':editValue})
            setTagList(newList)
            setIsNew(false)
            setEditValue('')
            return
        }
        for(let tag of newList){
            if(tag.id === onEdit){
                tag.name = editValue
            }
        }
        setTagList(newList)
        console.log(newList)
        setOnEdit(null)
        setEditValue('')
    }

    return (
        (onEdit || isNew) ? (
            <div>
                <Card className="tag-editor-container">
                    <div style={{
                            // position:"relative",
                            display:"flex",
                            gap:"1rem",
                            width:"100%",
                            height:"2rem"
                        }}>
                        <Form.Label style={{
                            marginTop:"0.2rem",
                            marginBottom:"0",
                            width:"6.6rem"
                        }}>Tag Name</Form.Label>
                        <Form.Control className="tag-editor" type='text' value={editValue} onChange={(e) => {setEditValue(e.target.value)}}/>
                    </div>
                    <button className="tag-editor-btn" onClick={handleOnClick}>Save</button>
                </Card>
            </div>
        ) : (
            <></>
        )
    )
}

function AdminEditor(){

    const id = useParams()['postId']

    const post = useGetPost(id)

    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');

    const fileInputRef = useRef(null)

    const [editorContent, setEditorContent] = useState("**Hello world!!!**");
    const [colorMod,setColorMode] = useState('light');

    const [coverPreview,setCoverPreview] = useState(null)
    const [cover,setCover] = useState(null)

    const [tagList,setTagList] = useState([])

    const [fileSize,setFileSize] = useState('')
    const [fileType,setFileType] = useState('')

    useEffect(
        () => {
            if(post){
                setTitle(post.title);
                setSummary(post.summary);
                setEditorContent(post.content);
                setTagList(post['tags'])
                console.log(post['tags'])
            }
        },[post]
    )

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title',title)
        formData.append('summary',summary)
        formData.append('content',editorContent)
        formData.append('cover',cover)

        // const tags = [{ 'name': '1' }, { 'name': '2' }];
        formData.append('tags', JSON.stringify(tagList));

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try{
            if(post){
                const res = await api.put(`/api/post/update/${id}/`,formData,{headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                console.log(res.status)
            }else{
                const res = await api.post('/api/post/create',formData,{headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                console.log(res.status)

                // const res = await api.post('/api/post/create', {
                //     title: 'gg',
                //     summary: 'l',
                //     content: 'Hello world!!!',
                //     tags: [{ "name": "1" }, { "name": "2" }] // 直接提交数组
                //   })
                console.log(res.status)
            }
        }catch(error){
            console.error('Error create post',error)
        }
    }

    const handleUpload = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        setCover(file)
        reader.onloadend = () => {
            setCoverPreview(reader.result);
        }
        
        if(file){
            reader.readAsDataURL(file);  // 转换图像为base64
        }

        setFileSize(`${(file.size / 1024 / 1024).toFixed(2).toString()}Mb`)
        setFileType(`${file.type}`)
        // console.log('Selected files:', file);
    }

    return(
        <Form onSubmit={(e) => handleSubmit(e)}>
            <NavBar/>
            <Container style={{position:"relative"}}>
                <div>
                    <Card className="cover-update-container" onClick={handleUpload}>
                        {cover ?(
                            <div style={{display:"flex"}}>
                                <img className="cover-preview" src={coverPreview}></img>
                                <div className="cover-info">
                                    <p style={{marginBottom:"0rem"}}>{"Size:  " + fileSize}</p>
                                    <p>{"Type:  " + fileType}</p>
                                </div>
                            </div>
                        ):(           
                            <svg fill="#dddddd" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 45.402 45.402" xmlSpace="preserve" stroke="#dddddd">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <g> <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141 c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27 c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435 c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/> </g> </g>
                            </svg>
                        )}
                    </Card>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{display: 'none'}}
                        onChange={handleFileChange}
                    />
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control value={title} className="title-input" type="text" onChange={(e) => {setTitle(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post Summary</Form.Label>
                    <Form.Control value={summary} className="summary-input" as="textarea" rows={3} onChange={(e) => {setSummary(e.target.value)}}/>
                </Form.Group>
                <tagListContext.Provider value={{tagList,setTagList}}>
                    <TagList/>
                </tagListContext.Provider>
            </Container>
            <Editor value={editorContent} setValue={setEditorContent} colorMod="light"/>
            <div className="text-center">
                <Button type="submit" className="">Save</Button>
            </div>
        </Form>
    )
}

export default AdminEditor;