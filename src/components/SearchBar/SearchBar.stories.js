import SearchBar from "./SearchBar";
export default{
    title:"SearchBar",
    component:SearchBar
};
export const Primary = ()=><SearchBar handleinput={(value)=>console.log(value.target.value)}/>;