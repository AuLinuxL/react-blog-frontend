function Viewer({addr}){

    const[image,setImage] = useState(null)
    const[pause,setPause] = useState(false)
    // const intervalIdRef = useRef(null)

    const getImageController = () => {
        if(!pause){
            getImage()
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
    })

    const onPauseHandler = () => {
        console.log(pause)
        setPause(!pause);
    }

    return (
        <>
            <Col className="d-flex justify-content-center mb-4" sm>
                <Card className="d-flex justify-content-center">
                    <img src={image} onClick={onPauseHandler} style={{width:"500px",borderRadius:"10px"}}/>
                </Card>
            </Col>
        </>
    )
}

export default Viewer;


// import { useEffect, useState, useRef } from "react";
// import api from "../api";
// import { Col, Card } from "react-bootstrap";

// function Viewer({ addr }) {
//   const [image, setImage] = useState(null);
//   const [pause, setPause] = useState(false);
//   const intervalIdRef = useRef(null);

//   // 获取图片
//   const getImage = async () => {
//     try {
//       const response = await api.get(addr, { responseType: 'blob' });
//       const imageUrl = URL.createObjectURL(new Blob([response.data]));
//       setImage(imageUrl); // 更新图片的 URL 状态
//     } catch (error) {
//       console.error("Api get pic Error!", error);
//     }
//   };

//   // 控制器，开启或清除定时器
//   const getImageController = () => {
//     if (!pause && !intervalIdRef.current) {
//       intervalIdRef.current = setInterval(getImage, 100);
//     }
//     if (pause && intervalIdRef.current) {
//       clearInterval(intervalIdRef.current);
//       intervalIdRef.current = null;
//       console.log("Interval cleared!");
//     }
//   };

//   // 初始化或当“pause”变更时，控制定时器
//   useEffect(() => {
//     getImageController();

//     // 确保在组件卸载时清理定时器
//     return () => {
//       if (intervalIdRef.current) {
//         clearInterval(intervalIdRef.current);
//         console.log("Cleanup on unmount")
//       }
//     };
//   }, [pause]);

//   // 点击处理函数来更新暂停状态
//   const onPauseHandler = () => {
//     setPause(!pause);
//   };

//   // 视图
//   return (
//     <Col className="d-flex justify-content-center mb-4">
//       <Card className="d-flex justify-content-center">
//         <img
//           src={image} // 如果 image 为 null，显示默认图片
//           onClick={onPauseHandler}
//           style={{ width: "500px", borderRadius: "10px" }}
//           alt="View"
//         />
//       </Card>
//     </Col>
//   );
// }

// export default Viewer;