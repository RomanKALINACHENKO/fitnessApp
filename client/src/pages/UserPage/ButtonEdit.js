import React,{useState} from 'react'
 import {useAuth} from '../../hooks/auth.hook'

import {connect} from 'react-redux'





const ButtonEdit = (props) => {
    const [showForm,setShowForm] = useState(false)
    const {token}  = useAuth()

    const userData = props.userData

    

    const editUserHandler = async(e) =>{
    e.preventDefault()

    //  Object.defineProperty(e.target.NewfileAvatar.files[0], 'name', {
    //     writable: true,
    //     value: `${userData._id}.jpg`
    //   })
      
 
     const formData = new FormData()
     console.log(`start`)
     console.log(e.target.NewfileAvatar.files[0])
     console.log(`finish`)
     formData.append('Avatar', e.target.NewfileAvatar.files[0])
   formData.append('UserAvatar',userData.Avatar)
   formData.append('Username',e.target.newName.value)
   formData.append('Email',e.target.newEmail.value)
   formData.append('FoodQuality',e.target.QuelityEat.value)
   formData.append('Gender',e.target.newMale.value)
   formData.append('Height',e.target.newHeight.value)
   formData.append('PhysicalForm',e.target.PhisycForm.value)
   formData.append('SleepQuality',e.target.newQualitySleep.value)
   formData.append('Training_experience',e.target.TrainingExp.value)
   formData.append('Weight',e.target.newWeight.value)
   formData.append('Workload',e.target.newDaysWorkload.value)
   formData.append('_id', userData._id)
    const XHR = new XMLHttpRequest()
    XHR.open("POST", "/api/userPage/editUser")
    XHR.setRequestHeader('Authorization', `Bearer ${token}`)
    XHR.setRequestHeader('_id', `${userData._id}`)
    XHR.send(formData)
    
    // сделать фетч отправку на сервер и сделать на сервере прием этих данных + вносить изминения в БД
    }

    return (<>
        {
           !showForm && (<button onClick={setShowForm.bind(null,true)} className="btn btn-danger  " >
        Редактировать
        </button>)
        }
         
      {
          showForm && (
    <div data-spy="scroll" data-offset="0" className="modal absModal"  >
        <div className="modal-dialog">
        <div className="modal-content">
        <form encType="multipart/form-data" className="text-reset" onSubmit={editUserHandler} >
            <div className="modal-header">
        <h6 className="modal-title " >Редактирование профиля</h6>
            </div>
            <div className="modal-body">
            

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Изменить имя</p>
                <input type="text"  name="newName" className="form-control" defaultValue={userData.Username} placeholder="Ваше новое имя"/>

            </div>

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Нажмите чтобы изменить</p>
            
            <div className="userImage-block"> 
            <input type="file" name="NewfileAvatar"  className="custom-file-inputEdit " placeholder="Choose file" />
          <img className="userImage" alt="UserImage" src={userData.Avatar} /> 
          </div>
            {
            //Нужно сделать чтобы отображалось что картинка загружена, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
            }
            </div>

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Изменить Email</p>
                <input type="text" name="newEmail" className="form-control" defaultValue={userData.Email} placeholder="Ваш новый Email"/>

            </div>
            


            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Пол</p>
                <select name="newMale" defaultValue={userData.Gender} type="text" className="form-control" >
                    <option value={true}>Мужской</option>
                    <option  value={false}>Женский</option>
                </select>

                <p className="text-muted">Рост</p>
                <input type="text" name="newHeight"  defaultValue={userData.Height} className="form-control" placeholder="Ваш рост"/>

                <p className="text-muted">Вес</p>
                <input type="text" name="newWeight" defaultValue={userData.Weight} className="form-control" placeholder="Ваш вес"/>

                <p className="text-muted">Качество сна</p>
                <select defaultValue={userData.SleepQuality} name="newQualitySleep" type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option value="3">3</option>
                    <option  value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="text-muted">Дневная загрузка</p>
                <select defaultValue={userData.Workload} name="newDaysWorkload" type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option value="3">3</option>
                    <option  value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="text-muted">Тренеровочный опыт</p>
                <select defaultValue={userData.Training_experience} name="TrainingExp" type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option value="3">3</option>
                    <option  value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="text-muted">Качество питания</p>
                <select defaultValue={userData.FoodQuality} name="QuelityEat" type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option value="3">3</option>
                    <option  value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p className="text-muted">Физическая форма</p>
                <select defaultValue={userData.PhysicalForm} name="PhisycForm" type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option value="3">3</option>
                    <option  value="4">4</option>
                    <option value="5">5</option>
                </select>

            </div>

            
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={setShowForm.bind(null,false)} >Отмена</button>
            <button type="submit" className="btn btn-primary">Сохранить</button>
         </div>
         </form>
       </div>
       </div>
       </div>
          )
      }
           
        </>
      )  
}

  const mapStateToProps = (state) => ({
    userData: state.data.userPage}
  )
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ButtonEdit)


  // mern-stack 2:20:00 смотреть