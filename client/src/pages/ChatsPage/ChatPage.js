import React from 'react'
import {ButtonBack} from '../../components/ButtonBack'
import './Chat.scss'

export const ChatPage = () => {
    
    return (
        <>
        <div className="headerChat">
            <div className="headerChat-left">
            <ButtonBack/> 
            <div className="iconAvatarBlock">
                <img src="http://localhost:5000/api/users/avatars/default.jpg"
                 alt="avatar icon" className="iconAvatar" />
            </div>
            <h1 className="targetName">Victor Yanukivich</h1>
         </div>
         
         <div className="headerUserIcon" >
          <svg  id="Layer_1" height="30px" width="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
             <title/><path className="cls-2" d="M16,9a3,3,0,1,0-3-3A3,3,0,0,0,16,9Zm0-4.46A1.46,1.46,0,1,1,14.54,6,1.46,1.46,0,0,1,16,4.54Z"/><path className="cls-2" d="M16,19a3,3,0,1,0-3-3A3,3,0,0,0,16,19Zm0-4.46A1.46,1.46,0,1,1,14.54,16,1.46,1.46,0,0,1,16,14.54Z"/><path className="cls-2" d="M16,29a3,3,0,1,0-3-3A3,3,0,0,0,16,29Zm0-4.46A1.46,1.46,0,1,1,14.54,26,1.46,1.46,0,0,1,16,24.54Z"/></svg>
          </div>
         </div>
         
         <div className=" mainChat  px-3 ">
        <div className="chatMessage chatMessage-left">
            
        <a className="chatMessageAvatar" href="/5">
        <img src="http://localhost:5000/api/users/avatars/default.jpg"
                 alt="avatar icon" className="iconAvatar" />
             </a>
        <div className="chatMessageBody bg-light">
            <div>I write message for you.</div>
            <div className="mt-1">
                <small className="opacity-65">9 mins ago</small> </div>
        </div>
            
        </div>
        <div className="chatMessage chatMessage-left">
            
        <a className="chatMessageAvatar" href="/5">
        <img src="http://localhost:5000/api/users/avatars/default.jpg"
                 alt="avatar icon" className="iconAvatar" />
             </a>
        <div className="chatMessageBody bg-light">
            <div>I write message for you.</div>
            <div className="mt-1">
                <small className="opacity-65">9 mins ago</small> </div>
        </div>
            
        </div>
        <div className="chatMessage chatMessage-left">
            
        <a className="chatMessageAvatar" href="/5">
        <img src="http://localhost:5000/api/users/avatars/default.jpg"
                 alt="avatar icon" className="iconAvatar" />
             </a>
        <div className="chatMessageBody bg-light">
            <div>I write message for you.</div>
            <div className="mt-1">
                <small className="opacity-65">9 mins ago</small> </div>
        </div>
            
        </div>
        <div className="chatMessage chatMessage-right">
            
            <a className="chatMessageAvatar" href="/5">
            <img src="http://localhost:5000/api/users/avatars/default.jpg"
                     alt="avatar icon" className="iconAvatar" />
                 </a>
            <div className="chatMessageBody bg-light">
                <div>I write message for you.</div>
                <div className="mt-1">
                    <small className="opacity-65">9 mins ago</small> </div>
            </div>
                
            </div>
        </div>
        <div className="chatFooter border-top py-2">
          <form>
              <div className="form-row align-items-center">
                  <div className="col">
                      <div className="input-group">
                          <textarea  placeholder="Type your message..." rows="1"
                           className="form-control bg-transparent border-0 inputChat">
                          </textarea>
                          <div className="input-group-append">
                            <button type="button" 
                             className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 footerButtonNone">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="feather feather-smile injected-svg">
                                     <circle cx="12" cy="12" r="10"></circle>
                                     <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                     <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                     <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                 </svg>
                            </button>
                          </div>
                          <div className="input-group-append">
                              <button type="button" className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 dropzone-button-js dz-clickable">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-paperclip injected-svg">
                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                </svg>
                              </button>
                          </div>
                      </div>
                  </div>
                  <div className="col-auto">
                      <button className="btn btn-ico btn-primary rounded-circle" type="submit">
                      <svg className="pr-1" height="25" viewBox="0 0 1792 1792" width="25" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zm-342 1499l221-1323-1434 827 336 137 863-639-478 797z"/>
                          </svg>
                      </button>
                  </div>
              </div>
          </form>
        </div>
        </>
    )
  }