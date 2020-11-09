import React from 'react'
import {Footer} from './components/Footer'
import {Switch, Route, Redirect} from 'react-router-dom'
import {TrainingPage} from './pages/TrainingPage/TrainingPage'
import CollectionPage from './pages/TrainingPage/CollectionPage'
import AnalyzeUserPage from './pages/AnalyzeUserPage'
import {CoachPage} from './pages/CoachPage'
import {SearchPage} from './pages/SearchPage'
import UserPage from './pages/UserPage'
import {ChatsPage} from './pages/ChatsPage'
import {LoginPage} from './unresitredPages/LoginPage'
import {IndexPage} from './unresitredPages/IndexPage'
import {RegistrationPage} from './unresitredPages/RegistrationPage'
import {PolicyPage} from './unresitredPages/PolicyPage'
import {PasswordForgotPage} from './unresitredPages/PasswordForgotPage'
import {ResetPasswordPage} from './unresitredPages/ResetPasswordPage'
import { ChatPage } from './pages/ChatsPage/ChatPage'


export const useRoutes = (isAuthenticated =false) => {

  if (isAuthenticated) {
    
    return (
      <Switch>
        <Route path="/training" exact>
          <TrainingPage />
          <Footer/>
        </Route>
        <Route path="/collections" exact>
          <CollectionPage />
          <Footer/>
        </Route>
        <Route path="/analyze" exact>
          <AnalyzeUserPage />
          <Footer/>
        </Route>
        <Route path="/coach" exact>
          <CoachPage />
          <Footer/>
        </Route>
        <Route path="/search" exact>
          <SearchPage />
          <Footer/>
        </Route>
        <Route path="/user" exact> 
          <UserPage />
          <Footer/>
        </Route>
        <Route path="/chats" exact> 
          <ChatsPage />
          <Footer/>
        </Route>
        <Route path="/chats/:email" exact> 
          <ChatPage />
        </Route>
        <Redirect to="/training" />
      </Switch>
    )}
  //  }
  return (
      <Switch>
        <Route path="/" exact>
          <IndexPage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/registration" exact>
          <RegistrationPage  />
        </Route>

        <Route path="/privacypolicy" exact>
          <PolicyPage  />
        </Route>

        <Route path="/passwordforgot" exact>
          <PasswordForgotPage  />
        </Route>

        <Route path="/resetpassword/:hash" component={ResetPasswordPage }  exact>
          
        </Route>

        <Redirect to="/" />
      </Switch>
    )

  
}
