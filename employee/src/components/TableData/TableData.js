import React, { useEffect, useState } from "react"

function TableData(){
    const [data, setData] = useState({people:[]})
    const [searched, searchData] = useState({searched:[]})
    const [filtered, filterEmp] = useState({filter: []})

    useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=10")
      let res = await response.json()
      setData({people: res.results})
    }
    doFetch();
  }, []);
  let filteredEmps= [...data.people]

// const columns = useMemo(
//   () => [
//     {
//       Header: "Title",
//       accessor: "name.title",
//     },
//     {
//       Header: "First Name",
//       accessor: "name.first",
//     },
//     {
//       Header: "Last Name",
//       accessor: "name.last",
//     },
//     {
//       Header: "Email",
//       accessor: "email",
//     },
//     {
//       Header: "City",
//       accessor: "location.city",
//     },
//   ],
//   []
// )

function sort(e){
  console.log(e.target, "event")

   ;
  let newsort = filteredEmps.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  });
      filterEmp({filter: newsort})

}

function search(e){
  e.preventDefault();
  let name = e.target.value
  let searching = filteredEmps.filter((i)=> i.name.first.toLowerCase().includes(name.toLowerCase()))
 
  if(searching){
  searchData({searched: searching})}
}



    return(
        <div>
                {console.log(searched)}

           <form>  <input onChange={(e)=>{search(e)}}></input></form>
            <table>
            <tr>
            <th>Image</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th><button onClick={(e)=>sort(e)}>Age</button></th>
            </tr>
           { searched?
            data.people.map( 
              i=>
                 <tr>
                   <td><img src={i.picture.thumbnail}></img></td>
                 <td>{i.name.first}</td>
                 <td>{i.name.last}</td>
                 <td>{i.dob.age}</td>
                 </tr>
            ) : searched.searched.map( 
              i=>
                 <tr>
                   <td><img src={i.picture.thumbnail}></img></td>
                 <td>{i.name.first}</td>
                 <td>{i.name.last}</td>
                 <td>{i.dob.age}</td>
                 </tr>
            ) 
          }
            </table>
      </div>
    )
};

export default TableData;