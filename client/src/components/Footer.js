import React from 'react'
import {AnalyzeIcon} from './Footer/AnalyzeIcon'
import {CoachIcon} from './Footer/CoachIcon'
import { SearchIcon } from './Footer/SearchIcon'
import { TrainingIcon } from './Footer/TrainingIcon'
import { UserIcon } from './Footer/UserIcon'
import {NavLink} from 'react-router-dom'




export const Footer = () => {
  

    return (
      <div className="footer">
      <div className="footerBar">

        <NavLink to ="/training">
          <TrainingIcon/>
        </NavLink>
        <NavLink to ="/analyze">
          <AnalyzeIcon/>
        </NavLink>
        <NavLink to ="/coach">
          <CoachIcon/>
        </NavLink>
        <NavLink to ="/search">
          <SearchIcon/>
        </NavLink>
        <NavLink to ="/user">
          <UserIcon/> 
        </NavLink>
        
      </div>
      </div>
    )
  }