import React from 'react'
import {NavLink} from 'react-router-dom'
 
export const Header = () => {
    return (
      <>
        <div className="header">
         
          <div className="HeaderAppName-block ">
            <h1 className=" ">
              Fitness Diary
            </h1>
              <h2 className=" ">by Rocky Road</h2>
          </div>

          <NavLink to ="/chats">
          <div className="messageIcon">

          <svg enableBackground="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"  xmlns="http://www.w3.org/2000/svg" >
            <g ><path clipRule="evenodd" d="M16,7c-5.963,0-11,3.206-11,7c0,0.276,0.224,0.5,0.5,0.5   S6,14.276,6,14c0-3.196,4.673-6,10-6c0.275,0,0.5-0.224,0.5-0.5S16.276,7,16,7z" fill="#333333" fillRule="evenodd"/>
            <path clipRule="evenodd" d="M16,2C7.163,2,0,7.373,0,14c0,4.127,2.779,7.766,7.008,9.926   C7.008,23.953,7,23.971,7,24c0,1.793-1.339,3.723-1.928,4.736c0.001,0,0.002,0,0.002,0C5.027,28.846,5,28.967,5,29.094   C5,29.594,5.405,30,5.906,30C6,30,6.165,29.975,6.161,29.986c3.125-0.512,6.069-3.383,6.753-4.215C13.913,25.918,14.943,26,16,26   c8.835,0,16-5.373,16-12C32,7.373,24.836,2,16,2z M16,24c-0.917,0-1.858-0.07-2.796-0.207c-0.097-0.016-0.194-0.021-0.29-0.021   c-0.594,0-1.163,0.264-1.546,0.73c-0.428,0.521-1.646,1.684-3.085,2.539c0.39-0.895,0.695-1.898,0.716-2.932   c0.006-0.064,0.009-0.129,0.009-0.184c0-0.752-0.421-1.439-1.09-1.781C4.212,20.252,2,17.207,2,14C2,8.486,8.28,4,16,4   c7.718,0,14,4.486,14,10C30,19.514,23.719,24,16,24z" fill="#333333" fillRule="evenodd"/>
            </g></svg>

          </div>
        </NavLink>

      </div>
      <div className="headerTraining bg-dark rounded-bottom">
      <NavLink  to ="/training">
      <p className="navbar-brand text-white pl-3">Журнал тренеровок</p>
      </NavLink>
      <NavLink to ="/collections">
      <p className="navbar-brand text-white">Моя колекция</p>
      </NavLink> 
        </div>
        </>
    )
}