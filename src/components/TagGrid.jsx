import '../styles/Component.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TagListContext } from '../pages/Home'
import { useSpring, animated } from '@react-spring/web'

function TagGrid({className,hint=false}){

    const navigate = useNavigate()

    const{tagList} = useContext(TagListContext)

    // const spring = useSpring({
    //     from: {translateY:'-3rem',opacity:'0'},
    //     to: {translateY:'0px',opacity:'1'},
    //     // config: {mass:5,friction:40,tension:180}
    // })

    const handleOnClick = (id) => {
        // navigate(`/sort/${id}`);
        window.location.href = `/?tag=${id}`;
    }

    const Tag = ({id,name}) => {
        return (
            <div key={id} className="tag-item" onClick={() => handleOnClick(id)}>
                <p className="grid-tag-text">{name}</p>
            </div>
        )
    }

    // if(tagList.length === 0){
    //     return <></>
    // }else{
        return (
            <animated.div className={`${className}`} >
                {hint?<div className="categrory-hint"># Tag</div>:<></>}
                {tagList.map(
                    (tag) => {
                        return (
                            <Tag key={tag.id} id={tag.id} name={tag.name}/>
                        )
                    }
                )}
            </animated.div>
        )
    // }
}

export default TagGrid;