import React,{useState,useEffect} from 'react'
import './temp.scss'
import {NavComponent} from './NavComponent'
import {NavLink} from 'react-router-dom'
import './loginPage.scss'
import './registrationPage.scss'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const  RegistrationPage = () => {
  const message = useMessage()
  const {loading, error, request, clearError} = useHttp()

  const [form, setform] = useState({
    email:'',
    username:'',
    password:''
    })

    useEffect(() =>{
      message(error)
      clearError()
    }, [error, message, clearError])

  const changeHandler = (event) =>{
      setform({  ...form, [event.target.name]: event.target.value  })
  }

  const registrationHandler = async() =>{
    try {
      const data = await request('/api/auth/registration', 'POST', {...form})
      message(data.message)
      
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
            <h6 className="card-title text-center"><strong>Регистрация</strong></h6>
            
            <form className="form-signin" name="RegistrationForm" action="/api/registration" method="post">
              
              <div className="form-label-group">
                <input type="email" id="email" value={form.email} onChange={changeHandler} name="email" className="form-control blue-input" placeholder="Email address" required autoFocus />
                <label className="blue-label"  htmlFor="email">Введите ваш Email address</label>
              </div>

              <div className="form-label-group">
                <input type="text" id="username" value={form.username} onChange={changeHandler} name="username" className="form-control blue-input" placeholder="Ivan Ivanov" required  />
                <label className="blue-label" htmlFor="username">Введите ваше Имя</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="password" value={form.password} onChange={changeHandler} name="password" className="form-control blue-input" placeholder="Password" required />
                <label className="blue-label" htmlFor="password">Password</label>
              </div>
              
              <input type="submit" className="btn btn-lg btn-danger btn-block text-uppercase"
               value="Registration" onClick={registrationHandler} disabled={loading} / >
              <hr className="my-4" />
              <p className="text-center">
              <NavLink to="/privacypolicy" >
                  Политика конфеденциальности
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