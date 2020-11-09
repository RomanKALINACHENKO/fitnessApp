import React from 'react'



export const Chat = () => {
    
    return (
        <>
        
        <div className="layout">


<div className="navigation navbar navbar-light justify-content-center py-xl-7">

   
    <a href="!#" className="d-none d-xl-block mb-6">
        <img src="assets/images/brand.svg" className="mx-auto fill-primary" data-inject-svg="" alt="" height="46px" />
    </a>

    
    <ul className="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0" role="tablist">

       
        <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
            <a className="nav-link position-relative p-0 py-xl-3" href="!#" title="">
                <i className="icon-lg fe-x"></i>
            </a>
        </li>

    
        <li className="nav-item">
            <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="!#tab-content-create-chat" title="Create chat" role="tab">
                <i className="icon-lg fe-edit"></i>
            </a>
        </li>

       
        <li className="nav-item mt-xl-9">
            <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="!#tab-content-friends" title="Friends" role="tab">
                <i className="icon-lg fe-users"></i>
            </a>
        </li>

        
        <li className="nav-item mt-xl-9">
            <a className="nav-link position-relative p-0 py-xl-3 active" data-toggle="tab" href="!#tab-content-dialogs" title="Chats" role="tab">
                <i className="icon-lg fe-message-square"></i>
                <div className="badge badge-dot badge-primary badge-bottom-center"></div>
            </a>
        </li>

        
        <li className="nav-item mt-xl-9">
            <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="!#tab-content-user" title="User" role="tab">
                <i className="icon-lg fe-user"></i>
            </a>
        </li>

        
        <li className="nav-item mt-xl-9 d-none d-xl-block flex-xl-grow-1">
            <a className="nav-link position-relative p-0 py-xl-3" data-toggle="tab" href="!#tab-content-demos" title="Demos" role="tab">
                <i className="icon-lg fe-layers"></i>
            </a>
        </li>

       
        <li className="nav-item mt-xl-9">
            <a className="nav-link position-relative p-0 py-xl-3" href="settings.html" title="Settings">
                <i className="icon-lg fe-settings"></i>
            </a>
        </li>

    </ul>
    

</div>

<div className="sidebar">
    <div className="tab-content h-100" role="tablist">
        <div className="tab-pane fade h-100" id="tab-content-create-chat" role="tabpanel">
            <div className="d-flex flex-column h-100">

                <div className="hide-scrollbar">
                    <div className="container-fluid py-6">

                        
                        <h2 className="font-bold mb-6">Create group</h2>
                        
                        <form className="mb-6">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                <div className="input-group-append">
                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                        <i className="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                      
                        <ul className="nav nav-tabs nav-justified mb-6" role="tablist">
                            <li className="nav-item">
                                <a href="!#create-group-details" className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                            </li>

                            <li className="nav-item">
                                <a href="!#create-group-members" className="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                            </li>
                        </ul>
                     
                        <div className="tab-content" role="tablist">

                        
                            <div id="create-group-details" className="tab-pane fade show active" role="tabpanel">
                                <form action="!#">
                                    <div className="form-group">
                                        <label className="small">Photo</label>
                                        <div className="position-relative text-center bg-secondary rounded p-6">
                                            <div className="avatar bg-primary text-white mb-5">
                                                <i className="icon-md fe-image"></i>
                                            </div>

                                            <p className="small text-muted mb-0">You can upload jpg, gif or png files. <br/> Max file size 3mb.</p>
                                            <input id="upload-chat-photo" className="d-none" type="file" />
                                            <label className="stretched-label mb-0" htmlFor="upload-chat-photo"></label>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="small" htmlFor="new-chat-title">Name</label>
                                        <input className="form-control form-control-lg" name="new-chat-title" id="new-chat-title" type="text" placeholder="Group Name" />
                                    </div>

                                    <div className="form-group">
                                        <label className="small" htmlFor="new-chat-topic">Topic (optional)</label>
                                        <input className="form-control form-control-lg" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                                    </div>

                                    <div className="form-group mb-0">
                                        <label className="small" htmlFor="new-chat-description">Description</label>
                                        <textarea className="form-control form-control-lg" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                    </div>

                                </form>
                            </div>
                          
                            <div id="create-group-members" className="tab-pane fade" role="tabpanel">
                                <nav className="list-group list-group-flush mb-n6">

                                    <div className="mb-6">
                                        <small className="text-uppercase">A</small>
                                    </div>

                                   
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                <div className="avatar avatar-online mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="Anna Bridges" />
                                                </div>
                                                
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Anna Bridges</h6>
                                                    <small className="text-muted">Online</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-1" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-1"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                      
                                        <label className="stretched-label" htmlFor="id-user-1"></label>
                                    </div>
                                  

                                    <div className="mb-6">
                                        <small className="text-uppercase">B</small>
                                    </div>

                                   
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/6.jpg" alt="Brian Dawson" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Brian Dawson</h6>
                                                    <small className="text-muted">last seen 2 hours ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-2" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-2"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                     
                                        <label className="stretched-label" htmlFor="id-user-2"></label>
                                    </div>
                                 

                                    <div className="mb-6">
                                        <small className="text-uppercase">L</small>
                                    </div>

                                  
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/5.jpg" alt="Leslie Sutton" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Leslie Sutton</h6>
                                                    <small className="text-muted">last seen 3 days ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-3" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-3"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                     
                                        <label className="stretched-label" htmlFor="id-user-3"></label>
                                    </div>
                                  

                                    <div className="mb-6">
                                        <small className="text-uppercase">M</small>
                                    </div>

                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/4.jpg" alt="Matthew Wiggins" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Matthew Wiggins</h6>
                                                    <small className="text-muted">last seen 3 days ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-4" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-4"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        
                                        <label className="stretched-label" htmlFor="id-user-4"></label>
                                    </div>
                                    

                                    <div className="mb-6">
                                        <small className="text-uppercase">S</small>
                                    </div>

                                  
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Simon Hensley" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Simon Hensley</h6>
                                                    <small className="text-muted">last seen 3 days ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-5" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-5"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        
                                        <label className="stretched-label" htmlFor="id-user-5"></label>
                                    </div>
                                    

                                    <div className="mb-6">
                                        <small className="text-uppercase">W</small>
                                    </div>

                                    
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/9.jpg" alt="William Wright" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">William Wright</h6>
                                                    <small className="text-muted">last seen 3 days ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-6" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-6"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    
                                        <label className="stretched-label" htmlFor="id-user-6"></label>
                                    </div>
                                    
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/3.jpg" alt="William Greer" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">William Greer</h6>
                                                    <small className="text-muted">last seen 10 minutes ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-7" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-7"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                     
                                        <label className="stretched-label" htmlFor="id-user-7"></label>
                                    </div>
                                   

                                    <div className="mb-6">
                                        <small className="text-uppercase">Z</small>
                                    </div>

                                    
                                    <div className="card mb-6">
                                        <div className="card-body">

                                            <div className="media">
                                                
                                                
                                                <div className="avatar mr-5">
                                                    <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Zane Mayes" />
                                                </div>
                                                

                                                <div className="media-body align-self-center mr-6">
                                                    <h6 className="mb-0">Zane Mayes</h6>
                                                    <small className="text-muted">last seen 3 days ago</small>
                                                </div>

                                                <div className="align-self-center ml-auto">
                                                    <div className="custom-control custom-checkbox">
                                                        <input className="custom-control-input" id="id-user-8" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="id-user-8"></label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                  
                                        <label className="stretched-label" htmlFor="id-user-8"></label>
                                    </div>
                                

                                </nav>
                            </div>
                   

                        </div>
                  
                    </div>
                </div>

            
                <div className="pb-6">
                    <div className="container-fluid">
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Create group</button>
                    </div>
                </div>

            </div>
        </div>

        <div className="tab-pane fade h-100" id="tab-content-friends" role="tabpanel">
            <div className="d-flex flex-column h-100">

                <div className="hide-scrollbar">
                    <div className="container-fluid py-6">

                      
                        <h2 className="font-bold mb-6">Friends</h2>
                      
                        <form className="mb-6">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                <div className="input-group-append">
                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                        <i className="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                       
                        <button type="button" className="btn btn-lg btn-block btn-secondary d-flex align-items-center mb-6" data-toggle="modal" data-target="!#invite-friends">
                            Invite friends
                            <i className="fe-users ml-auto"></i>
                        </button>

                       
                        <nav className="mb-n6">

                            <div className="mb-6">
                                <small className="text-uppercase">A</small>
                            </div>

                         
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        <div className="avatar avatar-online mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="Anna Bridges" />
                                        </div>
                                        
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Anna Bridges</h6>
                                            <small className="text-muted">Online</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <a href="chat-2.html" className="stretched-link"> </a>

                                </div>
                            </div>
                        

                            <div className="mb-6">
                                <small className="text-uppercase">B</small>
                            </div>

                         
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/6.jpg" alt="Brian Dawson" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Brian Dawson</h6>
                                            <small className="text-muted">last seen 2 hours ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                             
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                        

                            <div className="mb-6">
                                <small className="text-uppercase">L</small>
                            </div>

                         
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/5.jpg" alt="Leslie Sutton" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Leslie Sutton</h6>
                                            <small className="text-muted">last seen 3 days ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                  
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                           

                            <div className="mb-6">
                                <small className="text-uppercase">M</small>
                            </div>

                           
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/4.jpg" alt="Matthew Wiggins" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Matthew Wiggins</h6>
                                            <small className="text-muted">last seen 3 days ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                              
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                          

                            <div className="mb-6">
                                <small className="text-uppercase">S</small>
                            </div>

                           
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Simon Hensley" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Simon Hensley</h6>
                                            <small className="text-muted">last seen 3 days ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                           

                            <div className="mb-6">
                                <small className="text-uppercase">W</small>
                            </div>

                            
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/9.jpg" alt="William Wright" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">William Wright</h6>
                                            <small className="text-muted">last seen 3 days ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                            
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/3.jpg" alt="William Greer" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">William Greer</h6>
                                            <small className="text-muted">last seen 10 minutes ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                            

                            <div className="mb-6">
                                <small className="text-uppercase">Z</small>
                            </div>

                            
                            <div className="card mb-6">
                                <div className="card-body">

                                    <div className="media">
                                        
                                        
                                        <div className="avatar mr-5">
                                            <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Zane Mayes" />
                                        </div>
                                        
                                        <div className="media-body align-self-center">
                                            <h6 className="mb-0">Zane Mayes</h6>
                                            <small className="text-muted">last seen 3 days ago</small>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown z-index-max">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        New chat <span className="ml-auto fe-edit-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                   
                                    <a href="!#" className="stretched-link"> </a>

                                </div>
                            </div>
                           

                        </nav>
                     

                    </div>
                </div>

            </div>
        </div>

        <div className="tab-pane fade h-100 show active" id="tab-content-dialogs" role="tabpanel">
            <div className="d-flex flex-column h-100">

                <div className="hide-scrollbar">
                    <div className="container-fluid py-6">

                      
                        <h2 className="font-bold mb-6">Chats</h2>
                      
                        <form className="mb-6">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                <div className="input-group-append">
                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                        <i className="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                      
                        <div className="text-center hide-scrollbar d-flex my-7" data-horizontal-scroll="">
                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm avatar-online mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/2.jpg" alt="Description" />
                                </div>
                                <div className="small">William</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm avatar-online mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/3.jpg" alt="Description" />
                                </div>
                                <div className="small">Simon</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm avatar-online mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/4.jpg" alt=" Description" />
                                </div>
                                <div className="small">Thomas</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm avatar-online mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/5.jpg" alt=" Description" />
                                </div>
                                <div className="small">Zane</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/6.jpg" alt=" Description" />
                                </div>
                                <div className="small">Thomas</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/7.jpg" alt=" Description" />
                                </div>
                                <div className="small">William</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/8.jpg" alt=" Description" />
                                </div>
                                <div className="small">Simon</div>
                            </a>

                            <a href="!#" className="d-block text-reset mr-7 mr-lg-6">
                                <div className="avatar avatar-sm mb-3">
                                    <img className="avatar-img" src="assets/images/avatars/9.jpg" alt="Description" />
                                </div>
                                <div className="small">Thomas</div>
                            </a>
                        </div>
                     
                        <nav className="nav d-block list-discussions-js mb-n6">
                            
                            <a className="text-reset nav-link p-0 mb-6" href="chat-1.html">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/11.jpg" alt="Bootstrap Themes" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Bootstrap Themes</h6>
                                                    <p className="small text-muted text-nowrap ml-4">10:42 am</p>
                                                </div>
                                                <div className="text-truncate">Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                    <div className="badge badge-circle badge-primary badge-border-light badge-top-right">
                                        <span>3</span>
                                    </div>
                                    
                                </div>
                            </a>
                           
                            <a className="text-reset nav-link p-0 mb-6" href="chat-2.html">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            <div className="avatar avatar-online mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="Anna Bridges" />
                                            </div>
                                            
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Anna Bridges</h6>
                                                    <p className="small text-muted text-nowrap ml-4">10:42 am</p>
                                                </div>
                                                <div className="text-truncate">is typing<span className='typing-dots'><span>.</span><span>.</span><span>.</span></span></div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                            
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/7.jpg" alt="Simon Hensley" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Simon Hensley</h6>
                                                    <p className="small text-muted text-nowrap ml-4">10:38 am</p>
                                                </div>
                                                <div className="text-truncate">I’m sorry, this question would be out of my expertise.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                            
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/9.jpg" alt="William Wright" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">William Wright</h6>
                                                    <p className="small text-muted text-nowrap ml-4">10:20 am</p>
                                                </div>
                                                <div className="text-truncate">Hello! Let me transfer you to the marketing department.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                           
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/5.jpg" alt="Leslie Sutton" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Leslie Sutton</h6>
                                                    <p className="small text-muted text-nowrap ml-4">09:55 am</p>
                                                </div>
                                                <div className="text-truncate"><h6 className='d-inline'>You:</h6> I’m sorry, I don’t have the information on that.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                            
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/4.jpg" alt="Matthew Wiggins" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Matthew Wiggins</h6>
                                                    <p className="small text-muted text-nowrap ml-4">09:25 am</p>
                                                </div>
                                                <div className="text-truncate">Matthew, let me transfer you to the marketing department.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                            
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/3.jpg" alt="Thomas Walker" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Thomas Walker</h6>
                                                    <p className="small text-muted text-nowrap ml-4">09:00 am</p>
                                                </div>
                                                <div className="text-truncate">I am really sorry to hear that. Is there anything I can do to help you?</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                           
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/2.jpg" alt="Zane Mayes" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Zane Mayes</h6>
                                                    <p className="small text-muted text-nowrap ml-4">08:05 am</p>
                                                </div>
                                                <div className="text-truncate">That is a good question, let me find out for you.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                           
                            <a className="text-reset nav-link p-0 mb-6" href="!#">
                                <div className="card card-active-listener">
                                    <div className="card-body">

                                        <div className="media">
                                            
                                            
                                            <div className="avatar mr-5">
                                                <img className="avatar-img" src="assets/images/avatars/6.jpg" alt="Brian Dawson" />
                                            </div>
                                            
                                            <div className="media-body overflow-hidden">
                                                <div className="d-flex align-items-center mb-1">
                                                    <h6 className="text-truncate mb-0 mr-auto">Brian Dawson</h6>
                                                    <p className="small text-muted text-nowrap ml-4">08:00 am</p>
                                                </div>
                                                <div className="text-truncate">I’m not sure, but let me find out for you.</div>
                                            </div>
                                        </div>

                                    </div>

                                    
                                </div>
                            </a>
                            

                        </nav>
                        

                    </div>
                </div>

            </div>
        </div>

        <div className="tab-pane fade h-100" id="tab-content-demos" role="tabpanel">
            <div className="d-flex flex-column h-100">

                <div className="hide-scrollbar">
                    <div className="container-fluid py-6">

                       
                        <h2 className="font-bold mb-6">Demos</h2>
                        
                        <form className="mb-6">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                <div className="input-group-append">
                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                        <i className="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                       
                        <div className="card mb-6">
                            <div className="card-body">

                                <div className="media align-items-center">
                                    <div className="mr-5">
                                        <img src="assets/images/brand.svg" className="fill-primary" data-inject-svg="" alt=" " height=" 46px" width="46px" />
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mb-0">
                                            <a href="documentation/index.html" className="text-basic-inverse stretched-link">Documentation</a>
                                        </h5>
                                        <p>Quick setup and build tools.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        

                        <h5 className="my-6">Chat Pages:</h5>

                      
                        <div className="card mb-6">
                            <img className="card-img-top" alt="" src="assets/images/demos/chat.jpg" />
                            <div className="card-body border-top">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mb-0">Light mode</h5>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="demo-light/" className="text-muted stretched-link">
                                            <i className="fe-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card mb-6">
                            <img className="card-img-top" alt="" src="assets/images/demos/chat-dark.jpg" />
                            <div className="card-body border-top">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mb-0">Dark mode</h5>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="demo-dark/" className="text-muted stretched-link">
                                            <i className="fe-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                        <h5 className="my-6">Account Pages:</h5>

                        
                        <div className="card mb-6">
                            <img className="card-img-top" alt="" src="assets/images/demos/sign-in-dark.jpg" />
                            <div className="card-body border-top">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mb-0">Sign In</h5>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="signin.html" className="text-muted stretched-link">
                                            <i className="fe-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card mb-6">
                            <img className="card-img-top" alt="" src="assets/images/demos/sign-up-dark.jpg" />
                            <div className="card-body border-top">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mb-0">Sign Up</h5>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="signup.html" className="text-muted stretched-link">
                                            <i className="fe-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="card mb-6">
                            <img  className="card-img-top" alt="" src="assets/images/demos/password-reset-dark.jpg" />
                            <div className="card-body border-top">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mb-0">Password Reset</h5>
                                    </div>
                                    <div className="align-self-center">
                                        <a href="password-reset.html" className="text-muted stretched-link">
                                            <i className="fe-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>
        </div>

        <div className="tab-pane fade h-100" id="tab-content-user" role="tabpanel">
            <div className="d-flex flex-column h-100">

                <div className="hide-scrollbar">
                    <div className="container-fluid py-6">

                        
                        <h2 className="font-bold mb-6">Profile</h2>
                        

                        
                        <form className="mb-6">
                            <div className="input-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                                <div className="input-group-append">
                                    <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                        <i className="fe-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        

                        
                        <div className="card mb-6">
                            <div className="card-body">
                                <div className="text-center py-6">
                                  
                                    <div className="avatar avatar-xl mb-5">
                                        <img className="avatar-img" src="assets/images/avatars/12.jpg" alt="" />
                                    </div>

                                    <h5>Matthew Wiggins</h5>
                                    <p className="text-muted">Bootstrap is an open source toolkit for developing web with HTML.</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="card mb-6">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 py-6">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Country</p>
                                                <p>Warsaw, Poland</p>
                                            </div>
                                            <i className="text-muted icon-sm fe-globe"></i>
                                        </div>
                                    </li>

                                    <li className="list-group-item px-0 py-6">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Phone</p>
                                                <p>+39 02 87 21 43 19</p>
                                            </div>
                                            <i className="text-muted icon-sm fe-mic"></i>
                                        </div>
                                    </li>

                                    <li className="list-group-item px-0 py-6">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Email</p>
                                                <p>anna@gmail.com</p>
                                            </div>
                                            <i className="text-muted icon-sm fe-mail"></i>
                                        </div>
                                    </li>

                                    <li className="list-group-item px-0 py-6">
                                        <div className="media align-items-center">
                                            <div className="media-body">
                                                <p className="small text-muted mb-0">Time</p>
                                                <p>10:03 am</p>
                                            </div>
                                            <i className="text-muted icon-sm fe-clock"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="card mb-6">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 py-6">
                                        <a href="!#" className="media text-muted">
                                            <div className="media-body align-self-center">
                                                Twitter
                                            </div>
                                            <i className="icon-sm fe-twitter"></i>
                                        </a>
                                    </li>

                                    <li className="list-group-item px-0 py-6">
                                        <a href="!#" className="media text-muted">
                                            <div className="media-body align-self-center">
                                            Facebook
                                            </div>
                                            <i className="icon-sm fe-facebook"></i>
                                        </a>
                                    </li>

                                    <li className="list-group-item px-0 py-6">
                                        <a href="!#" className="media text-muted">
                                            <div className="media-body align-self-center">
                                                Github
                                            </div>
                                            <i className="icon-sm fe-github"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                       

                        <div className="form-row">
                            <div className="col">
                                
                                <button type="button" className="btn btn-lg btn-block btn-basic d-flex align-items-center">
                                    Settings
                                    <span className="fe-settings ml-auto"></span>
                                </button>
                            </div>

                            <div className="col">
                                
                                <button type="button" className="btn btn-lg btn-block btn-basic d-flex align-items-center">
                                    Logout
                                    <span className="fe-log-out ml-auto"></span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    </div>
</div>

<div className="main main-visible" data-mobile-height="">

    
    <div id="chat-2" className="chat dropzone-form-js" data-dz-url="some.php">

        
        <div className="chat-body">

            
            <div className="chat-header border-bottom py-4 py-lg-6 px-lg-8">
                <div className="container-xxl">

                    <div className="row align-items-center">

                        
                        <div className="col-3 d-xl-none">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a className="text-muted px-0" href="!#" data-chat="open">
                                        <i className="icon-md fe-chevron-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        
                        <div className="col-6 col-xl-6">
                            <div className="media text-center text-xl-left">
                                <div className="avatar avatar-sm avatar-online d-none d-lg-inline-block mr-5">
                                    <img src="assets/images/avatars/10.jpg" className="avatar-img" alt="" />
                                </div>

                                <div className="media-body align-self-center text-truncate">
                                    <h6 className="text-truncate mb-n1">Anna Bridges</h6>
                                    <span className="badge badge-dot badge-success d-inline-block d-xl-none mr-1"></span>
                                    <small className="text-muted">Online</small>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-3 col-xl-6 text-right">
                            <ul className="nav justify-content-end">
                                <li className="nav-item list-inline-item d-none d-xl-block mr-3">
                                    <a className="nav-link text-muted px-3" data-toggle="collapse" data-target="!#chat-2-search" href="!#" title="Search this chat">
                                        <i className="icon-md fe-search"></i>
                                    </a>
                                </li>

                                <li className="nav-item list-inline-item d-none d-xl-block mr-0">
                                    <a className="nav-link text-muted px-3" href="!#" data-chat-sidebar-toggle="!#chat-2-info" title="Details">
                                        <i className="icon-md fe-more-vertical"></i>
                                    </a>
                                </li>

                                
                                <li className="nav-item list-inline-item d-block d-xl-none">
                                    <div className="dropdown">
                                        <a className="nav-link text-muted px-0" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="icon-md fe-more-vertical"></i>
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" data-toggle="collapse" data-target="!#chat-2-search" href="!#">
                                                Search <span className="ml-auto pl-5 fe-search"></span>
                                            </a>

                                            <a className="dropdown-item d-flex align-items-center" href="!#" data-chat-sidebar-toggle="!#chat-2-info">
                                                Chat Info <span className="ml-auto pl-5 fe-more-horizontal"></span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
           
            <div className="collapse border-bottom px-lg-8" id="chat-2-search">
                <div className="container-xxl py-4 py-lg-6">

                    <div className="input-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Search this chat" aria-label="Search this chat" />

                        <div className="input-group-append">
                            <button className="btn btn-lg btn-ico btn-secondary btn-minimal" type="submit">
                                <i className="fe-search"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className="chat-content px-lg-8">
                <div className="container-xxl py-6 py-lg-10">

                    
                    <div className="message">
                        
                        <a className="avatar avatar-sm mr-4 mr-lg-5" href="!#" data-chat-sidebar-toggle="!#chat-2-info">
                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="" />
                        </a>

                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center">

                                    
                                    <div className="message-content bg-light">
                                        <h6 className="mb-2">Anna Bridges</h6>
                                        <div>Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                    

                                    
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 ml-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                   

                                </div>
                            </div>
                          

                        </div>
                        
                    </div>
                   
                    <div className="message message-right">
                        
                        <div className="avatar avatar-sm ml-4 ml-lg-5 d-none d-lg-block">
                            <img className="avatar-img" src="assets/images/avatars/12.jpg" alt="" />
                        </div>

                        
                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center justify-content-end">

                                    
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 mr-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                   

                                    
                                    <div className="message-content bg-primary text-white">
                                        <div>Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            
                            <div className="message-row">
                                <div className="d-flex align-items-center justify-content-end">

                                   
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 mr-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="message-content bg-primary text-white">
                                        <div className="media">
                                            <a href="!#" className="icon-shape mr-5">
                                                <i className="fe-paperclip"></i>
                                            </a>
                                            <div className="media-body overflow-hidden flex-fill">
                                                <a href="!#" className="d-block text-truncate font-medium text-reset">bootstrap.min.js</a>
                                                <ul className="list-inline small mb-0">
                                                    <li className="list-inline-item">
                                                        <span className="t">79.2 KB</span>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <span className="text-uppercase">js</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                   

                                </div>
                            </div>
                           

                        </div>
                        
                    </div>
                   
                    <div className="message-divider my-9 mx-lg-5">
                        <div className="row align-items-center">

                            <div className="col">
                                <hr/>
                            </div>

                            <div className="col-auto">
                                <small className="text-muted">Today</small>
                            </div>

                            <div className="col">
                                <hr/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="message">
                       
                        <a className="avatar avatar-sm mr-4 mr-lg-5" href="!#" data-chat-sidebar-toggle="!#chat-2-info">
                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="" />
                        </a>

                        
                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center">

                                    
                                    <div className="message-content bg-light w-100">
                                        <h6 className="mb-2">Anna Bridges shared 3 photos:</h6>
                                        <div className="form-row py-3">
                                            <div className="col">
                                                <img className="img-fluid rounded" src="https://themes.2the.me/Boomerang/1.2/assets/images/team/1.jpg" data-action="zoom" alt="" />
                                            </div>
                                            <div className="col">
                                                <img className="img-fluid rounded" src="https://themes.2the.me/Boomerang/1.2/assets/images/team/2.jpg" data-action="zoom" alt="" />
                                            </div>
                                            <div className="col">
                                                <img className="img-fluid rounded" src="https://themes.2the.me/Boomerang/1.2/assets/images/team/3.jpg" data-action="zoom" alt="" />
                                            </div>
                                        </div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                   
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 ml-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                  

                                </div>
                            </div>
                            
                            <div className="message-row">
                                <div className="d-flex align-items-center">

                                    
                                    <div className="message-content bg-light">
                                        <div>Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                              
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 ml-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                   

                                </div>
                            </div>
                           

                        </div>
                       
                    </div>
                  
                    <div className="message message-right">
                        
                        <div className="avatar avatar-sm ml-4 ml-lg-5 d-none d-lg-block">
                            <img className="avatar-img" src="assets/images/avatars/12.jpg" alt="" />
                        </div>

                        
                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center justify-content-end">

                                    
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 mr-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="message-content bg-primary text-white">
                                        <div>I'm going to meet a friend of mine at the department store. Yeah, I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                   
                    <div className="message">
                        
                        <a className="avatar avatar-sm mr-4 mr-lg-5" href="!#" data-chat-sidebar-toggle="!#chat-2-info">
                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="" />
                        </a>

                        
                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center">

                                   
                                    <div className="message-content bg-light">
                                        <h6 className="mb-2">Anna Bridges</h6>
                                        <div>I'm going to meet a friend of mine at the department store. Yeah, I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                    
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 ml-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
                   
                    <div className="message message-right">
                        
                        <div className="avatar avatar-sm ml-4 ml-lg-5 d-none d-lg-block">
                            <img className="avatar-img" src="assets/images/avatars/12.jpg" alt="" />
                        </div>

                        
                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center justify-content-end">

                                  
                                    <div className="dropdown">
                                        <a className="text-muted opacity-60 mr-3" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fe-more-vertical"></i>
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Edit <span className="ml-auto fe-edit-3"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Share <span className="ml-auto fe-share-2"></span>
                                            </a>
                                            <a className="dropdown-item d-flex align-items-center" href="!#">
                                                Delete <span className="ml-auto fe-trash-2"></span>
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="message-content bg-primary text-white">
                                        <div>Yeah, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents.</div>

                                        <div className="mt-1">
                                            <small className="opacity-65">8 mins ago</small>
                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        

                        </div>
                       
                    </div>
                  

                    
                    <div className="message">
                        
                        <a className="avatar avatar-sm mr-4 mr-lg-5" href="!#" data-chat-sidebar-toggle="!#chat-2-info">
                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="" />
                        </a>

                        <div className="message-body">

                            
                            <div className="message-row">
                                <div className="d-flex align-items-center">

                                    
                                    <div className="message-content bg-light">
                                        <div>Anna is typing<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span></div>
                                    </div>
                                    

                                </div>
                            </div>
                         

                        </div>
                       
                    </div>
                    

                </div>

                
                <div className="end-of-chat"></div>
            </div>
            

           
            <div className="chat-files hide-scrollbar px-lg-8">
                <div className="container-xxl">
                    <div className="dropzone-previews-js form-row py-4"></div>
                </div>
            </div>
           
            <div className="chat-footer border-top py-4 py-lg-6 px-lg-8">
                <div className="container-xxl">

                    <form id="chat-id-2-form" action="assets/php/upload.php" data-emoji-form="">
                        <div className="form-row align-items-center">
                            <div className="col">
                                <div className="input-group">

                               
                                    <textarea id="chat-id-2-input" className="form-control bg-transparent border-0" placeholder="Type your message..." rows="1" data-emoji-input="" data-autosize="true"></textarea>

                              
                                    <div className="input-group-append">
                                        <button className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0" type="button" data-emoji-btn="">
                                            <img src="assets/images/smile.svg" data-inject-svg="" alt="" />
                                        </button>
                                    </div>

                          
                                    <div className="input-group-append">
                                        <button id="chat-upload-btn-2" className="btn btn-ico btn-secondary btn-minimal bg-transparent border-0 dropzone-button-js" type="button">
                                            <img src="assets/images/paperclip.svg" data-inject-svg="" alt="" />
                                        </button>
                                    </div>

                                </div>

                            </div>

                   
                            <div className="col-auto">
                                <button className="btn btn-ico btn-primary rounded-circle" type="submit">
                                    <span className="fe-send"></span>
                                </button>
                            </div>

                        </div>

                    </form>

                </div>
            </div>
    
        </div>


  
        <div id="chat-2-info" className="chat-sidebar">
            <div className="d-flex h-100 flex-column">

             
                <div className="border-bottom py-4 py-lg-6">
                    <div className="container-fluid">

                        <ul className="nav justify-content-between align-items-center">
                           
                            <li className="nav-item list-inline-item">
                                <a className="nav-link text-muted px-0" href="!#" data-chat-sidebar-close="">
                                    <i className="icon-md fe-chevron-left"></i>
                                </a>
                            </li>

                        
                            <li className="text-center d-block d-lg-none">
                                <h6 className="mb-n2">Anna Bridges</h6>
                                <small className="text-muted">Chat Details</small>
                            </li>

                           
                            <li className="nav-item list-inline-item">
                                <div className="dropdown">
                                    <a className="nav-link text-muted px-0" href="!#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-md fe-sliders"></i>
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item d-flex align-items-center" href="!#">
                                            Mute
                                            <span className="ml-auto fe-bell"></span>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="!#">
                                            Delete
                                            <span className="ml-auto fe-trash-2"></span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
               
                <div className="hide-scrollbar flex-fill">

                    <div className="border-bottom text-center py-9 px-10">
                       
                        <div className="avatar avatar-xl mx-5 mb-5">
                            <img className="avatar-img" src="assets/images/avatars/10.jpg" alt="" />
                        </div>
                        <h5>Anna Bridges</h5>
                        <p className="text-muted">Bootstrap is an open source toolkit for developing web with HTML, CSS, and JS.</p>
                    </div>

                  
                    <div className="nav nav-tabs nav-justified bg-light rounded-0" role="tablist">
                        <a className="nav-item nav-link active" href="!#chat-2-user-details" data-toggle="tab" aria-selected="true" role="tab">Details</a>
                        <a className="nav-item nav-link" href="!#chat-2-user-files" data-toggle="tab"  role="tab">Files</a>
                    </div>
               

                    <div className="tab-content" role="tablist">
                   
                        <div id="chat-2-user-details" className="tab-pane fade show active" role="tabpanel">
                            <ul className="list-group list-group-flush mb-8">
                                <li className="list-group-item py-6">
                                    <div className="media align-items-center">
                                        <div className="media-body">
                                            <p className="small text-muted mb-0">Country</p>
                                            <p>Warsaw, Poland</p>
                                        </div>
                                        <i className="text-muted icon-sm fe-globe"></i>
                                    </div>
                                </li>

                                <li className="list-group-item py-6">
                                    <div className="media align-items-center">
                                        <div className="media-body">
                                            <p className="small text-muted mb-0">Phone</p>
                                            <p>+39 02 87 21 43 19</p>
                                        </div>
                                        <i className="text-muted icon-sm fe-mic"></i>
                                    </div>
                                </li>

                                <li className="list-group-item py-6">
                                    <div className="media align-items-center">
                                        <div className="media-body">
                                            <p className="small text-muted mb-0">Email</p>
                                            <p>anna@gmail.com</p>
                                        </div>
                                        <i className="text-muted icon-sm fe-mail"></i>
                                    </div>
                                </li>

                                <li className="list-group-item py-6">
                                    <div className="media align-items-center">
                                        <div className="media-body">
                                            <p className="small text-muted mb-0">Time</p>
                                            <p>10:03 am</p>
                                        </div>
                                        <i className="text-muted icon-sm fe-clock"></i>
                                    </div>
                                </li>
                            </ul>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-6">
                                    <a href="!#" className="media text-muted">
                                        <div className="media-body align-self-center">
                                            Twitter
                                        </div>
                                        <i className="icon-sm fe-twitter"></i>
                                    </a>
                                </li>

                                <li className="list-group-item py-6">
                                    <a href="!#" className="media text-muted">
                                        <div className="media-body align-self-center">
                                        Facebook
                                        </div>
                                        <i className="icon-sm fe-facebook"></i>
                                    </a>
                                </li>

                                <li className="list-group-item py-6">
                                    <a href="!#" className="media text-muted">
                                        <div className="media-body align-self-center">
                                            Github
                                        </div>
                                        <i className="icon-sm fe-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                  

                        <div id="chat-2-user-files" className="tab-pane fade" role="tabpanel">
                            <ul className="list-group list-group-flush list-group-no-border-first">
                             
                                <li className="list-group-item py-6">
                                    <div className="media">

                                        <div className="icon-shape bg-primary text-white mr-5">
                                            <i className="fe-paperclip"></i>
                                        </div>

                                        <div className="media-body align-self-center overflow-hidden">
                                            <h6 className="text-truncate mb-0">
                                                <a href="!#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                            </h6>

                                            <ul className="list-inline small mb-0">
                                                <li className="list-inline-item">
                                                    <span className="text-muted">79.2 KB</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-muted text-uppercase">txt</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Download <span className="ml-auto fe-download"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Share <span className="ml-auto fe-share-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                               
                                <li className="list-group-item py-6">
                                    <div className="media">

                                        <div className="icon-shape bg-primary text-white mr-5">
                                            <i className="fe-paperclip"></i>
                                        </div>

                                        <div className="media-body align-self-center overflow-hidden">
                                            <h6 className="text-truncate mb-0">
                                                <a href="!#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                            </h6>

                                            <ul className="list-inline small mb-0">
                                                <li className="list-inline-item">
                                                    <span className="text-muted">79.2 KB</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-muted text-uppercase">psd</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Download <span className="ml-auto fe-download"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Share <span className="ml-auto fe-share-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                             
                                <li className="list-group-item py-6">
                                    <div className="media">

                                        <div className="icon-shape bg-primary text-white mr-5">
                                            <i className="fe-paperclip"></i>
                                        </div>

                                        <div className="media-body align-self-center overflow-hidden">
                                            <h6 className="text-truncate mb-0">
                                                <a href="!#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                            </h6>

                                            <ul className="list-inline small mb-0">
                                                <li className="list-inline-item">
                                                    <span className="text-muted">79.2 KB</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-muted text-uppercase">pdf</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Download <span className="ml-auto fe-download"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Share <span className="ml-auto fe-share-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                               
                                <li className="list-group-item py-6">
                                    <div className="media">

                                        <div className="icon-shape bg-primary text-white mr-5">
                                            <i className="fe-paperclip"></i>
                                        </div>

                                        <div className="media-body align-self-center overflow-hidden">
                                            <h6 className="text-truncate mb-0">
                                                <a href="!#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                            </h6>

                                            <ul className="list-inline small mb-0">
                                                <li className="list-inline-item">
                                                    <span className="text-muted">79.2 KB</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-muted text-uppercase">txt</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Download <span className="ml-auto fe-download"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Share <span className="ml-auto fe-share-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            
                                <li className="list-group-item py-6">
                                    <div className="media">

                                        <div className="icon-shape bg-primary text-white mr-5">
                                            <i className="fe-paperclip"></i>
                                        </div>

                                        <div className="media-body align-self-center overflow-hidden">
                                            <h6 className="text-truncate mb-0">
                                                <a href="!#" className="text-reset" title="E5419783-047D-4B4C-B30E-F24DD8247731.JPG">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                            </h6>

                                            <ul className="list-inline small mb-0">
                                                <li className="list-inline-item">
                                                    <span className="text-muted">79.2 KB</span>
                                                </li>
                                                <li className="list-inline-item">
                                                    <span className="text-muted text-uppercase">pdf</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="align-self-center ml-5">
                                            <div className="dropdown">
                                                <a href="!#" className="btn btn-sm btn-ico btn-link text-muted w-auto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fe-more-vertical"></i>
                                                </a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Download <span className="ml-auto fe-download"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Share <span className="ml-auto fe-share-2"></span>
                                                    </a>
                                                    <a className="dropdown-item d-flex align-items-center" href="!#">
                                                        Delete <span className="ml-auto fe-trash-2"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                            


                            </ul>
                        </div>
                  
                    </div>

                </div>
          

            </div>
        </div>
     
    </div>
 

</div>


</div>



<div id="dropzone-template-js">
<div className="col-lg-4 my-3">
    <div className="card bg-light">
        <div className="card-body p-3">
            <div className="media align-items-center">

                <div className="dropzone-file-preview">
                    <div className="avatar avatar rounded bg-secondary text-basic-inverse d-block mr-5">
                        <i className="fe-paperclip"></i>
                    </div>
                </div>

                <div className="dropzone-image-preview">
                    <div className="avatar avatar mr-5">
                        <img src="!#" className="avatar-img rounded" data-dz-thumbnail="" alt="" />
                    </div>
                </div>

                <div className="media-body overflow-hidden">
                    <h6 className="text-truncate small mb-0" data-dz-name> </h6>
                    <p className="extra-small" data-dz-size></p>
                </div>

                <div className="ml-5">
                    <a href="!#" className="btn btn-sm btn-link text-decoration-none text-muted" data-dz-remove>
                        <i className="fe-x"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<div className="modal fade" id="invite-friends" tabindex="-1" role="dialog" aria-hidden="true">
<div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">

        <div className="modal-header">
            <div className="media flex-fill">
                <div className="icon-shape rounded-lg bg-primary text-white mr-5">
                    <i className="fe-users"></i>
                </div>
                <div className="media-body align-self-center">
                    <h5 className="modal-title">Invite friends</h5>
                    <p className="small">Invite colleagues, clients and friends.</p>
                </div>
            </div>

            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <div className="modal-body">
            <form action="!#">
                <div className="form-group">
                    <label htmlFor="invite-email" className="small">Email</label>
                    <input type="text" className="form-control form-control-lg" id="invite-email" />
                </div>

                <div className="form-group mb-0">
                    <label htmlFor="invite-message" className="small">Invitation message</label>
                    <textarea className="form-control form-control-lg" id="invite-message" data-autosize="true"></textarea>
                </div>
            </form>
        </div>

        <div className="modal-footer">
            <button type="button" className="btn btn-lg btn-block btn-primary d-flex align-items-center">
                Invite friend
                <i className="fe-user-plus ml-auto"></i>
            </button>
        </div>

    </div>
</div>
</div>
        
 </>
    )
  }