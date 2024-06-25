import "../styles/Component.css"
import NavBar from "./NavBar";
import { useGetList } from "../hooks/useGetList"
import TagGrid from "./TagGrid";
import { TagListContext } from "../pages/Home";

function CategoryList(){

    const {data: tagList, error: tagListError} = useGetList('/api/tags');

    return (
        <div className="post-list">
            <TagListContext.Provider value={{tagList}}>
                <TagGrid className='category-tag-grid' hint={true}/>
            </TagListContext.Provider>
        </div>
    )
}

export default CategoryList;