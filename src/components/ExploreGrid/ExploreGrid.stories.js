import ExploreGrid from "./ExploreGrid";

export default{
    title:"Explore Grid",
    component:ExploreGrid
};
export const Primary = () => <ExploreGrid bol={true} onClick={(value)=>{console.log(value)}}></ExploreGrid>;