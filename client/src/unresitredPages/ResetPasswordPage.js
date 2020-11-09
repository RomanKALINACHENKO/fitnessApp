import React,{useState, useEffect} from 'react'
import {NavComponent} from './NavComponent'
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import './temp.scss'
import './loginPage.scss'

export const  ResetPasswordPage = (props) => {
    const hash = props.match.params.hash

    const message = useMessage()
    const { error, clearError, request} = useHttp()

    const [form, setform] = useState({
        email:'',
        hash   
    })

    const [passwordForm, setPasswordForm] = useState({
        password:'',
        confirmPassword:''
    })

    const [sendedMail,setSendedMail] = useState(false)
    const [sendedPassword,setSendedPassword] = useState(false)
    useEffect(() =>{
      message(error)
      clearError()
    }, [error, message, clearError])

    const changeHandler = (event) =>{
        setform({  ...form, [event.target.name]: event.target.value  })
    }
    const changeHandlerPassword = (event) =>{
        setPasswordForm({...passwordForm, [event.target.name]: event.target.value })
    }

    const sendDataHandler = async(event) =>{
        event.preventDefault()
      try {
       const  data = await request('/api/auth/isresetpassword','POST', form )
       if(data){
        setSendedMail(true)
       }
        
      } catch (e) {
        console.log(e)
      }
    }
    const sendPasswordHandler = async(event) =>{
        event.preventDefault()
        if(
            passwordForm.password === passwordForm.confirmPassword
        ){
      try {
       const  data = await request('/api/auth/resetpassword','POST', passwordForm )
       if(data){
        setSendedPassword(true)
        setSendedMail(false)
       }
        
      } catch (e) {
        console.log(e)
      }
    } else{
        message('Введите одинаковый пароль!')
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
              
              <h5 className="card-title text-center">Смена пароля</h5>
              {!sendedMail && !sendedPassword &&
              (
                <>
              <p className="text-center">Введите свой электронный адрес</p>
              <form className="form-signin" name="LoginForm" >
                <div className="form-label-group">
                  <input type="email" id="email" name="email" value={form.email}
                   onChange={changeHandler} className="form-control blue-input"
                    placeholder="Email address " required autoFocus />
                  <label className="blue-label" htmlFor="email">Email address </label>
                </div>
                  
                <button className="btn btn-lg btn-primary btn-block text-uppercase" 
                onClick={sendDataHandler}  type="submit">Подтвердить</button>
                
                <hr className="my-4 " />
                <p className="text-center">
                    <NavLink to="/privacypolicy" >
                    Политика конфеденциальности
                    </NavLink>
                    </p>
                
              </form>
              </>
              )
              }
              { sendedMail && !sendedPassword &&
               (<>
                <p className="text-center">Введите новый пароль</p>
              <form className="form-signin" name="PasswordForm" >
                <div className="form-label-group">
                  <input type="password" id="password" name="password" value={passwordForm.password}
                   onChange={changeHandlerPassword} className="form-control blue-input"
                    placeholder="password " required autoFocus />
                  <label className="blue-label" htmlFor="password">New password </label>
                </div>
                <div className="form-label-group">
                  <input type="password" id="confirmPassword" name="confirmPassword" value={passwordForm.confirmPassword}
                   onChange={changeHandlerPassword} className="form-control blue-input"
                    placeholder="password " required autoFocus />
                  <label className="blue-label" htmlFor="confirmPassword">Confirm password </label>
                </div>
                
                <button className="btn btn-lg btn-primary btn-block text-uppercase" 
                onClick={sendPasswordHandler}  type="submit">Сменить пароль</button>
                
                <hr className="my-4 " />
                <p className="text-center">
                    <NavLink to="/privacypolicy" >
                    Политика конфеденциальности
                    </NavLink>
                    </p>
                
              </form>
              </>)
                
              }
              { sendedPassword && !sendedMail && 
              (
              <>
                    <h5 className="card-title text-center">Пароль успешно изменён!</h5>
                <p className="text-center">Переходите к входу в аккаунт!</p>

                <p className="text-center">
                    <NavLink to="/login" >
                    Вход
                    </NavLink>
                    </p>
                    <hr className="my-4 " />
                <p className="text-center">
                    <NavLink to="/privacypolicy" >
                    Политика конфеденциальности
                    </NavLink>
                    </p>
              </>
              )
                
              }
            
          </div>
        </div>
      </div>
    </div>
</div>
   
        </div>
    )
}


