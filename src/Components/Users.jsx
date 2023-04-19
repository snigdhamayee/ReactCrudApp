import { isContentEditable } from '@testing-library/user-event/dist/utils';
import style from "./home.module.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Users=()=> {

  let[content, setContent] = useState([])
  let abc=useNavigate()

  let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
  }


useEffect(()=>{
  axios.get("http://localhost:3000/users")
  .then((response)=>{
    console.log("Data sucessfully get");
    setContent(response.data)
  }).catch(()=>{
    console.log("Something went wrong");
  })
}
)
  return (
    <section>
      <div id={style.pad}>

      </div>
      <h1 id={style.usertabe}>User Table</h1>
    <div className={style.app}>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Company</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {content.map((x)=>{
          return (
            <tr>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.salary}</td>
              <td>{x.company}</td>
              <td ><Link to={`/edit/${x.id}`}><i class="fa-solid fa-pen-to-square" style={{color:"white"}} id={style.edit}></i></Link></td>
              <td onClick={()=>deleteData(x.id)}><i class="fa-sharp fa-solid fa-trash" style={{color:"white"}} id={style.delete}></i></td>
            </tr>
          )
        })}
      </table>
      </div>
    </section>
  )
}

export default Users
