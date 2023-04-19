import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from "./home.module.css"
const EditUser=()=> {

  let[ name, setName] = useState("")
  let[salary, setSalary] =useState("")
  let[company, setCompany] =useState("")

  let abc=useNavigate()

  let {index} =useParams()
  console.log(index)
  
  let nameData=(e)=>{
    setName(e.target.value)
  }
  let salaryData=(e)=>{
    setSalary(e.target.value)
  }

  let formHandle=(e)=>{
    e.preventDefault()
    let payload={name,salary,company}
    axios.put(`http://localhost:3000/users/${index}`,payload)
    .then(()=>{
      console.log("Data sucessfully stored");
    }).catch(()=>{
      console.log("Something went wrong");})
     abc("/users")
}

  let companyData=(e)=>{
    setCompany(e.target.value)
  }

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${index}`)
    .then((response)=>{
      setName(response.data.name)
      setSalary(response.data.salary)
      setCompany(response.data.company)
    }).catch(()=>{
      console.log("Something went wrong");
    })
  },[])


  return (
    <section id={style.createuser}>
      <div className={style.craeteuserdiv}>
        <form action="/users" className={style.form}>
          <h4>UPDATE USER</h4>
          <label for=""></label>
          <input type="text"  placeholder="NAME" value={name} onChange={nameData}/><br />
          <label for=""></label>
          <input type="text" placeholder="SALARY" value={salary} onChange={salaryData}/><br />
          <label for=""></label>
          <input type="text" placeholder="COMPANY" value={company} onChange={companyData}/><br />
          <input type="submit" value="UPDATE"  id={style.submit} onClick={formHandle}/>
          </form>
      </div>
    </section>
  )
}

export default EditUser
