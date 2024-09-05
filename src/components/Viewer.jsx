import { Card } from "react-bootstrap";
import { useEffect,useState,useRef } from "react";
import api from "../api";
import { Col } from "react-bootstrap";

function Viewer({addr}){

    const[image,setImage] = useState(null)
    const[pause,setPause] = useState(false)
    const intervalIdRef = useRef(null)

    const getImageController = () => {
        if(!pause && !intervalIdRef.current){
            intervalIdRef.current = setInterval(() => {
                getImage();
            }, 50);
            console.log(intervalIdRef.current)
        }
        if(pause && intervalIdRef.current){
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
            console.log("Interval cleared!")
            console.log(intervalIdRef.current)
        }
    }

    const getImage = async() => {
        const response = await api.get(
            addr, { responseType: 'blob' }
        )
        if (response.status === 200){
            const imageUrl = URL.createObjectURL(new Blob([response.data]));
            setImage(imageUrl); // 设置状态为这个URL
        }else{
            console.error("Api get pic Error!")
        }
    }

    useEffect(() => {
        console.log(pause)
        getImageController()

        return () => {
          if (intervalIdRef.current) { 
            clearInterval(intervalIdRef.current)
            intervalIdRef.current = null
          }
        }
    },[pause])

    // useEffect(
    //   () => {
    //     console.log("begin")
    //     getImageController()
    //   },
    //   []
    // )

    const onPauseHandler = () => {
        setPause((p) => !p);
    }

    return (
        <>
            <Col className="d-flex justify-content-center mb-4" sm>
                <Card className="d-flex justify-content-center">
                    <img src={image} onClick={onPauseHandler} style={{width:"500px",borderRadius:"10px"}} alt="View"/>
                </Card>
            </Col>
        </>
    )
}

export default Viewer;
