import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const Lists = () => {
    const URL = 'http://localhost:8000/api/v1/lists'
    const [lists, setlists] = useState("")

    async function getLists() {
         await axios.get(URL).then((response) => {
                   console.log(response.data.lists);
                   setlists(response.data.lists);
                   console.log(lists)
        
                 })
    }

    
    useEffect(() => {
      getLists()
    }, [])
    
  return (

    <div>
        {/* <button onClick={getLists()}>manor</button> */}
       {lists.length > 0 && <div>{lists.map((list, index) =>
  <li key={index}>
    {list.name}
  </li>
  )
} </div>}
    </div>
  )
//   <div>
//     {lists.map(list => <div>
//         list.name
//     </div>)}
//   </div>
  
  
}

export default Lists