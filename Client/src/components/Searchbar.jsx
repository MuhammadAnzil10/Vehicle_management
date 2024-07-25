import { useState } from "react";
import { Form, FormControl } from 'react-bootstrap';

const Searchbar =({searchText, setSearchText})=>{
 


  return(
     <div className="search-bar">
       <Form className="mb-3">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Form>
     </div>
  )
}
export default Searchbar;