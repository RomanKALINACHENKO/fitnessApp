import React from 'react'

import {NavLink} from 'react-router-dom'
import './temp.scss'

export const  NavComponent = () => {
    

    return (
       
            <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco_navbar ">
<div className="container">
<NavLink className="navbar-brand" to ="/" >FitColab</NavLink>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
<span className="oi oi-menu"></span> Menu
</button>
<div className="collapse navbar-collapse ftco-nav " id="ftco-nav">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
            <NavLink className="nav-link active" to ="/" >Главная </NavLink>
             </li>
        <li className="nav-item">
            <NavLink className="nav-link active" to ="/registration" >Регистрация</NavLink>
            </li>
        <li className="nav-item">
        <NavLink className="nav-link active" to ="/login" >Личный кабинет</NavLink>
        </li>
    </ul>
</div>
</div>
</nav>
</div>
          
      
 
    )
}
