import React,{useState, useEffect, useContext} from 'react'
import {NavComponent} from './NavComponent'
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'
import './temp.scss'
import './loginPage.scss'

export const  LoginPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()

    const [form, setform] = useState({
        email:'',
        password:''
    })

    useEffect(() =>{
      message(error)
      clearError()
    }, [error, message, clearError])

    const changeHandler = (event) =>{
        setform({  ...form, [event.target.name]: event.target.value  })
    }

    const loginHandler = async() =>{
      try {
        const data = await request('/api/auth/login', 'POST', {...form})
        auth.login(data.token, data.userId)
      } catch (e) {
        
      }
    }



    return (
        <div className="black">
            <NavComponent/>
            
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Личный кабинет</h5>
            <form className="form-signin" name="LoginForm" action="/api/login" method="post" >
              <div className="form-label-group">
                <input type="email" id="email" name="email" value={form.email}
                 onChange={changeHandler} className="form-control blue-input"
                  placeholder="Email address or login" required autoFocus />
                <label className="blue-label" htmlFor="email">Email address or login</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="password" name="password" value={form.password}
                 onChange={changeHandler} className="form-control blue-input"
                  placeholder="Password" required />
                <label className="blue-label" htmlFor="password">Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
              </div>
              <button className="btn btn-lg btn-primary btn-block text-uppercase" 
              onClick={loginHandler} disabled={loading} type="submit">Sign in</button>
              <NavLink to="/registration"  className="btn btn-lg btn-danger btn-block text-uppercase" >
              Registration
                  </NavLink>
              <hr className="my-4 " />
              <p className="text-center">
                  <NavLink to="/privacypolicy" >
                  Политика конфеденциальности
                  </NavLink>
                  </p>
              <p className="text-center">
                  <NavLink to="/passwordforgot" >
                  Забыли пароль?
                  </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
   
        </div>
    )
}


