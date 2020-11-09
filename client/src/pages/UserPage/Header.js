import React,{ useState, useContext } from 'react'
//import {ModalWindow} from './ModalWindow'
import {useHistory} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './temp.scss'



export const Header = () => {
    const [modalAdditional,setModaladditional] = useState(false)
    
    
    const headerAdditionalHandler = (e) =>{
              setModaladditional(true)
    }
    const headerAdditionalHandlerClose = (e) =>{
      setModaladditional(false)
}

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
      }
  

    

    return (
        <div className="header ">
          <div className="headerUserleftItem">
            <h3 >Профиль</h3>
            </div>
          

          <div className="headerUserIcon" onClick={headerAdditionalHandler}>
          <svg  id="Layer_1" height="30px" width="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
             <title/><path className="cls-2" d="M16,9a3,3,0,1,0-3-3A3,3,0,0,0,16,9Zm0-4.46A1.46,1.46,0,1,1,14.54,6,1.46,1.46,0,0,1,16,4.54Z"/><path className="cls-2" d="M16,19a3,3,0,1,0-3-3A3,3,0,0,0,16,19Zm0-4.46A1.46,1.46,0,1,1,14.54,16,1.46,1.46,0,0,1,16,14.54Z"/><path className="cls-2" d="M16,29a3,3,0,1,0-3-3A3,3,0,0,0,16,29Zm0-4.46A1.46,1.46,0,1,1,14.54,26,1.46,1.46,0,0,1,16,24.54Z"/></svg>
          </div>
          {modalAdditional && (
             <div className="fullScreenGray" >
             <div className="header-modal-Additional" onMouseLeave={headerAdditionalHandlerClose} >
                 <p className="center m-1"> Настройки</p>
                 <hr className="bolt" />
                 <p className="center m-1 p-2">Увидомления</p>
                 <hr  />
                 <p className="center m-1 p-2"><a href="/"   onClick={logoutHandler}>Exit</a></p>
                 
             </div>
         </div>
          )
          }
          
      </div>
    )
}