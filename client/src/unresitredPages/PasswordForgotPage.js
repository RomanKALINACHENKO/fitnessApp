import React,{useState, useEffect} from 'react'
import {NavComponent} from './NavComponent'
import {NavLink} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import './temp.scss'
import './loginPage.scss'

export const  PasswordForgotPage = () => {
    
    const message = useMessage()
    const { error, clearError, request} = useHttp()

    const [form, setform] = useState({
        email:''   
    })

    const [sended,setSended] = useState(false)

    useEffect(() =>{
      message(error)
      clearError()
    }, [error, message, clearError])

    const changeHandler = (event) =>{
        setform({  ...form, [event.target.name]: event.target.value  })
    }

    const sendDataHandler = async(event) =>{
        event.preventDefault()
      try {
       const  data = await request('/api/auth/forgotpassword','POST', form )
       if(data){
        setSended(true)
       }
        
      } catch (e) {
        console.log(e)
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
              {!sended && 
              (
                <>
              <h5 className="card-title text-center">Не удается войти?</h5>
              <p className="text-center">Введите свой электронный адрес,
                       и мы отправим вам ссылку для восстановления доступа к аккаунту.</p>
              <form className="form-signin" name="LoginForm" >
                <div className="form-label-group">
                  <input type="email" id="email" name="email" value={form.email}
                   onChange={changeHandler} className="form-control blue-input"
                    placeholder="Email address or login" required autoFocus />
                  <label className="blue-label" htmlFor="email">Email address </label>
                </div>
                  
                <button className="btn btn-lg btn-primary btn-block text-uppercase" 
                onClick={sendDataHandler}  type="submit">Отправить</button>
                
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
              { sended &&
               (<>
                <h5 className="card-title text-center">Сообщение отправлено!</h5>
                <p className="text-center">Перейдите по ссылке в сообщении полученом
                 на указаный вами адресс!</p>
              </>)
                
              }
            
          </div>
        </div>
      </div>
    </div>
</div>
   
        </div>
    )
}


