import { useState } from "react";

const Searchbar =()=>{
const [search, setSearch] = useState('')

const handleClick = ()=>{

}
  return(
     <div className="search-bar">
      <input type="text"  value={search}  placeholder="Search by name" onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={handleClick}>Search</button>
     </div>
  )
}
export default Searchbar;