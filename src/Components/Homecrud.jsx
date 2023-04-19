import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
const Homecrud=()=>  {


    
  return (
    <section id={style.nav}>
        <Link to="/" className={style.create} >CREATE USER</Link>
        <Link to="/users" className={style.user} >USERS</Link>

        
    </section>
  )
}

export default Homecrud
