import { useState,useEffect,useContext } from "react";

export function useResize(breakpoint){
    const [isLarge,setIsLarge] = useState(window.innerWidth >= breakpoint)

    useEffect(
        () => {
            const handleResize = () => {
                setIsLarge(window.innerWidth >= breakpoint)
            };
            window.addEventListener('resize',handleResize);
            return () => window.removeEventListener('resize',handleResize);
        },[breakpoint]
    )

    return isLarge;
}

