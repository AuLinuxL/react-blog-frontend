import CategoryList from "../components/CategoryList";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import TagGrid from "../components/TagGrid";

function Category(){
    // return (
    //     <div>
    //         <NavBar/>
    //         <CategoryList/>
    //     </div>
    // )

    return (
        <div>
            <NavBar/>
            {/* <div className="list-container my-4 justify-content-center"> */}
            {/* <TagListContext.Provider value={{tagList}}> */}
                <div className="page-body">
                    {/* <div className="mid-are"> */}
                    <div className="left-are">
                        <SideBar/>
                    </div>
                    <CategoryList/>
                    <div className="right-are">
                        {/* <TagGrid/> */}
                    </div>
                </div>
            {/* </TagListContext.Provider> */}
        </div>
    )
}
export default Category;