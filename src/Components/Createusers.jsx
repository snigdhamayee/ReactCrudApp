import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./home.module.css"
import {toast} from 'react-toastify'
function Createusers() {
  let[ name, setName] = useState("")
    let[salary, setSalary] =useState("")
    let[company, setCompany] =useState("")
     
    let abc=useNavigate() 

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
          toast.success("Sucessfully registered")
          console.log("Data sucessfully stored");
        }).catch(()=>{
          console.log("Something went wrong");
        })
        abc("/users")
    }
  return (
    <section id={style.createuser}>
      <div className={style.craeteuserdiv}>
        <form action="" className={style.form}>
          <h4>CREATE USER</h4>
          <label for=""></label>
          <input type="text" required value={name}  placeholder="NAME" onChange={nameData}/><br />
          <label for=""></label>
          <input type="text" placeholder="SALARY" value={salary} onChange={salaryData}/><br />
          <label for=""></label>
          <input type="text" placeholder="COMPANY" value={company} onChange={companyData}/><br />
          <input type="submit" value="SUBMIT" onClick={formHandle} id={style.submit}/>
          </form>
      </div>
    </section>
  )
}

export default Createusers
