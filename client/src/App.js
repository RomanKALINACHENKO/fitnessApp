import React,{useCallback, useEffect} from 'react'
import { useRoutes } from './routess'
import {BrowserRouter} from 'react-router-dom'
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from './context/AuthContext'
import {Loader} from './components/Loader'
import {useHttp} from './hooks/http.hook'
import {connect} from 'react-redux'
import {setStartingUserPage,
  setStartingTrainingPage,
  setStartingAnalyzeUserPage,
  setStartingChatsPage,
  setStartingCoachPage,
  setStartingSearchPage} from './redux/actions/setStartingUserData'

function App(props) {
  const {token, login, logout, userId, ready}  = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)
//----------------------------------------------
const {request,loading} = useHttp()

  const getUserData = useCallback( async()=>{
    try {
      if(ready && isAuthenticated){
        
         
    const fetchedData = await request('/api/users/userdata', 'GET', null, {
        Authorization: `Bearer ${token}`
      })
      const data = fetchedData
      const { setStartingUserPage,
        setStartingTrainingPage,
        setStartingAnalyzeUserPage,
        setStartingChatsPage,
        setStartingCoachPage,
        setStartingSearchPage
        //Нужно тут обработать все данные с сервера.
        // На сервере нужно оправлять все что надо для полного фукционала страницы
       } = props
       console.log('Starting setting DATA')
        console.log(data)
        console.log('- - - - -- - - - -- -- - - -- - -- - - -')
        console.log(`Data.user = `)
        console.log({...data.user})
       await setStartingUserPage({...data.user})
       await setStartingAnalyzeUserPage({...data.userAnalyze})
       await setStartingChatsPage({...data.userChats})
       await setStartingCoachPage({...data.userCoach})
       await setStartingTrainingPage({...data.userProgram})
       await setStartingSearchPage({...data.standardProgram})

    }} catch (e) {
      console.log('have some problem on fedched data'+ e)
    }
  },[token, request])
  useEffect(()=>{
    getUserData()
  },[getUserData])
    

    


    if(loading) {
      return (
      <Loader/>
 )
  }


  
  if (!ready){
    return(<Loader/>)
  }

  
  return (
 
    <AuthContext.Provider value={
      {token, login, logout, userId, isAuthenticated}
      }>
    <BrowserRouter>
    <div className="body">
      {routes}  
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  )
}



const mapDispatchToProps = (dispatch) => ({
  setStartingUserPage: someValue => dispatch(setStartingUserPage(someValue)),
  setStartingTrainingPage: someValue => dispatch(setStartingTrainingPage(someValue)),
  setStartingAnalyzeUserPage: someValue => dispatch(setStartingAnalyzeUserPage(someValue)),
  setStartingChatsPage: someValue => dispatch(setStartingChatsPage(someValue)),
  setStartingCoachPage: someValue => dispatch(setStartingCoachPage(someValue)),
  setStartingSearchPage: someValue => dispatch(setStartingSearchPage(someValue))

})


export default connect(null, mapDispatchToProps)(App)