import React,{useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './temp.scss'

export const ModalWindow = (method) => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
      }
    const hideModalAdditional = () => {
        method(false)
    }

    return (
        <div className="fullScreenGray" onBlur={hideModalAdditional}>
            <div className="header-modal-Additional">
                <p className="center m-1">Настройки</p>
                <hr className="bolt"/>
                <p className="center m-1 p-2">Увидомления</p>
                <p className="center m-1 p-2"><a href="/"   onClick={logoutHandler}>Exit</a></p>
                
                
            </div>
        </div>
    )
}