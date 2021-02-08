import React from 'react'
import { Header } from './UserPage/Header'
import ButtonEdit from './UserPage/ButtonEdit'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'



const UserPage = (props) => {


    const userData = props.userData

    return (
        <div className="bg-classic">
        
        <Header/>
        <div className=" main ">
          <div className="userNickname-block"> 
           <p className="UserProperty"> Имя : &nbsp; </p>
            <p className="userNickname">{userData.Username}</p>
          </div>
          <div className="userImage-block"> 
          <img className="userImage" alt="UserImage" src={userData.Avatar} />
          </div>
          <div className="userNickname-block"> 
          <p className="UserProperty"> Email: &nbsp; </p>
            <p className="userNickname">{userData.Email}</p>
          </div>
          <div className="userCoach-block"> 
              <p className="UserProperty userGroup">Тренеры</p>
              {userData.Coachs && userData.Coachs.map((coach)=>(
                <p> <NavLink to="/" className="UserProperty"> {coach} </NavLink></p>
              )) }

          </div>
          <div className="userCoach-block"> 
              <p className="UserProperty userGroup">Остальные важные параметры</p>
              
              <p className="UserProperty">  Рост:&nbsp; {userData.Height} см </p>
              <p className="UserProperty "> Вес: &nbsp; {userData.Weight} кг </p>
              <p className="UserProperty "> Пол: &nbsp; {userData.Gender} </p>
              <p className="UserProperty "> Качество сна: {
                userData.SleepQuality
              /*
              Cделать компонент что будет отображать столько звездочек, какой показатель в БД
               и аналогично с другими показателями
              3(из 5) звездочек &nbsp;
              */
              } </p>
              <p className="UserProperty" > Дневная загрузка:&nbsp; {userData.Workload} </p>
              <p className="UserProperty "> Тренеровочный опыт:&nbsp;
               {userData.Training_experience} </p>
              <p className="UserProperty "> Качество питания: &nbsp; {userData.FoodQuality}</p>
              <p className="UserProperty "> Физическая форма: &nbsp; {userData.PhysicalForm} </p>
              
          </div>
        <ButtonEdit/>
        
        </div>
        
      </div>
      )  
  }
  const mapStateToProps = (state) => ({
    userData: state.data.userPage}
  )
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

  export default connect(mapStateToProps, mapDispatchToProps)(UserPage)


  // mern-stack 2:20:00 смотреть