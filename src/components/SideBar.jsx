import { Home } from "../assets/icons";
import { Tag } from "../assets/icons";
import { Search } from "../assets/icons";
import { Bell } from "../assets/icons";
import { Face } from "../assets/icons";
// import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from "@use-gesture/react";
import { useEffect,useRef } from "react";

function SideBar(){

    const homeOnClick = () => {
        window.location.href = '/'
    }

    const categoryOnClick = () => {
        window.location.href = '/category'
    }

    // const enter = useSpring({
    //     from: {translateY:'-3rem',opacity:'0'},
    //     to: {translateY:'0px',opacity:'1'},
    // })

    // const [hover,setHover] = useSpring(() => ({
    //     scale: 1,
    //     // config: {mass:5,friction:60,tension:250}
    // }))

    // const handleMouseEnter = () => {
    //     setHover({scale: 1.1,config: { mass: 5, tension: 350, friction: 40 }});
    // }

    // const handleMouseLeave = () => {
    //     setHover({scale: 1,config: { mass: 5, tension: 350, friction: 40}});
    // }

    return (
        <div className="side-bar">
            <div 
                className="side-bar-icon">
                    <Face/>
                    <div className="side-bar-text">
                        Hello
                    </div>

            </div>
            {/* <div className="decorator-1"></div> */}
            {/* <div className="decorator-2"></div> */}
            <div className="side-bar-item" onClick={homeOnClick}>
                <Home/>
                <div>Home</div>
            </div>
            <div className="side-bar-item" onClick={categoryOnClick}>
                <Tag/>
                <div>Tag</div>
            </div>
            {/* <div className="side-bar-item">
                <Bell/>
                <div>About</div>
            </div> */}
        </div>
    )
}

export default SideBar;