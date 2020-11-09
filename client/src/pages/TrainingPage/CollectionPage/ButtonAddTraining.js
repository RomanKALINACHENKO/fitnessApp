import React, { useState } from 'react'
import {connect} from 'react-redux'
import TrainingAddFormDependsCycleTypeComponent from './TrainingAddFormDependsCycleTypeComponent'
import './style.scss'
 const ButtonAddTraining = (props) => {
    const [showAddForm, setShowAddForm] = useState(false)
   
    const [cycleType, setCycleType] = useState('type1')
    const typeAdd = props.typeAdd

    console.log("typeAdd = ")
    console.log(typeAdd)

    console.log("cycleType = ")
    console.log(cycleType)
    const AddButtonHandler = ()=>{
        setShowAddForm((state)=>(true))
    }

    

    const cycleTrainingHandler = (e) =>{
       const value = e.target.value
        setCycleType((state)=>{
            console.log("cycleTrainingHandler value = ")
            console.log(value)
            return value
        })
        
    }
    
    // const TrainingAddFormDependsCycleTypeComponent = ({type}) =>{
    //     console.log("TrainingAddFormDependsCycleTypeComponent type = ",type)

    return (
        <>
        {
        showAddForm && (<>
            <div data-spy="scroll" data-offset="0" className="modal absModal"  >
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
        <h6 className="modal-title " >Создание персональной тренировки</h6>
            </div>
            <div className="modal-body">
            <form className="text-reset">

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Название тренинга</p>
                <input type="text" className="form-control" placeholder="Название програмы"/>

            </div>

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Тип тренинга</p>
                <select type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                </select>
            </div>

            

                <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Добавьте изображение для фонового отображения програмы</p>
            <div className="custom-file">
            {
            //Нужно сделать чтобы отображалось что картинка загружена, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
            }
            <input type="file" id="customFile" className="custom-file-input" placeholder="Choose file" />
            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>

            </div>

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Интенсивность тренеровки</p>
                <select type="text" className="form-control" >
                    <option value="1">1</option>
                    <option  value="2">2</option>
                    <option  value="3">3</option>
                    <option  value="4">4</option>
                </select>
            </div>

            <div className="my-3 p-3 bg-light rounded box-shadow">
                <p className="text-muted">Цикличность</p>
                <select  type="text" className="form-control"
                 value={cycleType} onChange={cycleTrainingHandler} >
                    <option value="type1">Каждый день</option>
                    <option  value="type2">Через день</option>
                    <option  value="type3">Сплит 3 раза в неделю</option>
                    <option  value="type4">Сплит 5 раз в неделю</option>
                    <option  value="type5">Недельный(7 уникальных тренеровочных дней)</option>
                </select>
            </div>

            

               <TrainingAddFormDependsCycleTypeComponent type={cycleType}  />
{                // Нужно будет следать стейт по каторому определять
                // что показывать для каждого вида цикличности
            }
            
            {
                //FOR Каждый день
            //     (<>
            //     <h6>Упражнения</h6>
            //     <div className="my-3 p-3 bg-light rounded box-shadow">
            //     <strong className="text-muted">Упражнение №1</strong>
            //     <p className="text-muted">Название упражнения</p>
            //     <input type="text" class="form-control" placeholder="Введите название упражнения"/>
                
            //     <p className="text-muted">Добавьте картинки этапов упражнения</p>
            // <div class="custom-file">
            // {
            // //Нужно сделать чтобы отображались  картинки загруженные снизу, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
            // }
            // <input type="file" id="customFile" class="custom-file-input" placeholder="Choose file" />
            // <label class="custom-file-label" htmlFor="customFile">Choose file</label>
            // </div>
            // <h6>Сеты</h6>
            // <strong className="text-muted">Сет №1</strong>
            // <p className="text-muted">Количество повторений</p>
            //     <input type="text" class="form-control" placeholder="Введите количество повторений"/>
            // <p className="text-muted">Размер утяжеления</p>
            //     <input type="text" class="form-control" placeholder="Введите размер утяжеления"/>
            // <p className="text-muted">Время на выполнение сета</p>
            //     <input type="text" class="form-control" placeholder="Введите время"/>
            // <p className="text-muted">Время на отдых между сетами</p>
            //     <input type="text" class="form-control" placeholder="Введите время"/>
            // <hr/>
            // <button type="button" class="btn btn-outline-primary">Добавить ещё один сет!</button>
            // </div>
            // <button type="button" class="btn btn-outline-primary">Добавить ещё одно упражнение!</button>
                    
            //     </>)
   
            }
                    {
                //FOR через день день
            //     (<>
            //     <h6><strong>День 1</strong></h6>
            //     <div >
                    
            //     <h6>Упражнения</h6>
            //     <div className="my-3 p-3 bg-light rounded box-shadow">
            //     <strong className="text-muted">Упражнение №1</strong>
            //     <p className="text-muted">Название упражнения</p>
            //     <input type="text" className="form-control" placeholder="Введите название упражнения"/>
                
            //     <p className="text-muted">Добавьте картинки этапов упражнения</p>
            // <div className="custom-file">
            // {
            // //Нужно сделать чтобы отображались  картинки загруженные снизу, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
            // }
            // <input type="file" id="customFile" className="custom-file-input" placeholder="Choose file" />
            // <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            // </div>
            // <h6>Сеты</h6>
            // <strong className="text-muted">Сет №1</strong>
            // <p className="text-muted">Количество повторений</p>
            //     <input type="text" className="form-control" placeholder="Введите количество повторений"/>
            // <p className="text-muted">Размер утяжеления</p>
            //     <input type="text" className="form-control" placeholder="Введите размер утяжеления"/>
            // <p className="text-muted">Время на выполнение сета</p>
            //     <input type="text" className="form-control" placeholder="Введите время"/>
            // <p className="text-muted">Время на отдых между сетами</p>
            //     <input type="text" className="form-control" placeholder="Введите время"/>
            // <hr/>
            // <button type="button" className="btn btn-outline-primary">Добавить ещё один сет!</button>
            // </div>
            // <button type="button" className="btn btn-outline-primary">Добавить ещё одно упражнение!</button>
            // </div> 
            // <h6><strong>День 2</strong></h6> 
            // <h1>Отдых</h1> 
            //     </>)
            }
            




            </form>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={()=>{setShowAddForm((state)=>(false))}} >Отмена</button>
            <button type="button" className="btn btn-primary">Предосмотр</button>
            {
                //После нажатия кнопки предосмотра нужно вывести в красивом виде Тренинг созданый пользывателем(допустим  как структурное дерево редакса или просто в виде диограммы и там чтобы были кнопки снизу сохранить и редактировать)
            }
            </div>
        </div>
        </div>
        </div>
        </>)
         }  




         
     {
        !(showAddForm) && (
        <div className="media text-muted pt-3">
        <button type="button" onClick={AddButtonHandler} className="mx-auto btn btn-danger">
            Добавить свой комплекс тренеровок
            </button>                   
        </div>
        )
         }
    
    </>
    )
  }

const mapStateToProps = (state) => ({
    
})
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

  export default connect(mapStateToProps, mapDispatchToProps)(ButtonAddTraining)