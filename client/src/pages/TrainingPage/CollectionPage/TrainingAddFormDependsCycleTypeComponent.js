import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import './style.scss'



 const TrainingAddFormDependsCycleTypeComponent = (props) => {
  
    const [type, setType] = useState({
        type1:false,
        type2:false,
        type3:false,
        type4:false,
        type5:false
    })
const typeProps = props.type
console.log(`Props =  in TrainingAddFormDependsCycleTypeComponent`)
console.log(typeProps)

    useEffect(()=>{

        setType((state)=>{
            const tempState= {
                ...state
            }
            
             for (let prop in tempState){
                tempState[prop]= false
             } // поменять все ключи на фолс
            tempState[typeProps] = true
            return tempState
        })

    },[props])

        
const Type1 = () =>{
    return (
        <>
        <h6>Упражнения</h6>
        <div className="my-3 p-3 bg-light rounded box-shadow">
        <strong className="text-muted">Упражнение №1</strong>
        <p className="text-muted">Название упражнения</p>
        <input type="text" className="form-control" placeholder="Введите название упражнения"/>
        
        <p className="text-muted">Добавьте картинки этапов упражнения</p>
    <div className="custom-file">
    {
    //Нужно сделать чтобы отображались  картинки загруженные снизу, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
    }
    <input type="file" id="customFile" className="custom-file-input" placeholder="Choose file" />
    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
    </div>
    <h6>Сеты</h6>
    <strong className="text-muted">Сет №1</strong>
    <p className="text-muted">Количество повторений</p>
        <input type="text" className="form-control" placeholder="Введите количество повторений"/>
    <p className="text-muted">Размер утяжеления</p>
        <input type="text" className="form-control" placeholder="Введите размер утяжеления"/>
    <p className="text-muted">Время на выполнение сета</p>
        <input type="text" className="form-control" placeholder="Введите время"/>
    <p className="text-muted">Время на отдых между сетами</p>
        <input type="text" className="form-control" placeholder="Введите время"/>
    <hr/>
    <button type="button" className="btn btn-outline-primary">Добавить ещё один сет!</button>
    </div>
    <button type="button" className="btn btn-outline-primary">Добавить ещё одно упражнение!</button>
            
        </>
    )
}

const Type2 = () =>{
    return (<>
        <h6><strong>День 1</strong></h6>
        <div >
            
        <h6>Упражнения</h6>
        <div className="my-3 p-3 bg-light rounded box-shadow">
        <strong className="text-muted">Упражнение №1</strong>
        <p className="text-muted">Название упражнения</p>
        <input type="text" className="form-control" placeholder="Введите название упражнения"/>
        
        <p className="text-muted">Добавьте картинки этапов упражнения</p>
    <div className="custom-file">
    {
    //Нужно сделать чтобы отображались  картинки загруженные снизу, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
    }
    <input type="file" id="customFile" className="custom-file-input" placeholder="Choose file" />
    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
    </div>
    <h6>Сеты</h6>
    <strong className="text-muted">Сет №1</strong>
    <p className="text-muted">Количество повторений</p>
        <input type="text" className="form-control" placeholder="Введите количество повторений"/>
    <p className="text-muted">Размер утяжеления</p>
        <input type="text" className="form-control" placeholder="Введите размер утяжеления"/>
    <p className="text-muted">Время на выполнение сета</p>
        <input type="text" className="form-control" placeholder="Введите время"/>
    <p className="text-muted">Время на отдых между сетами</p>
        <input type="text" className="form-control" placeholder="Введите время"/>
    <hr/>
    <button type="button" className="btn btn-outline-primary">Добавить ещё один сет!</button>
    </div>
    <button type="button" className="btn btn-outline-primary">Добавить ещё одно упражнение!</button>
    </div> 
    <h6><strong>День 2</strong></h6> 
    <h1>Отдых</h1>  
        </>)
}
const Type3 = () =>{

    const [days,setDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    })
    console.log(days)
    const [daysCount, setDaysCount] = useState(0)

    useEffect(()=>{

        setDaysCount((state)=>{
            
            let count = 0
            for (let prop in days)
                if(days[prop] === true) count++
            return count
        })

    },[days])



    const onChangeDaysHandler = (e) =>{
        
        const nameProperty = e.target.name
   
        const valueInput = e.target.checked

        setDays((state)=>{
            const tempState = {...state}
            tempState[nameProperty]=valueInput
           return  tempState
        })
        
        
       
    }

    const ValidationSetDays = () =>{
          const valid = !!(daysCount <= 3 && daysCount > 2 )
          const SelectDaysComponent = ()=>{
              let tempArr = []
              let tmpArr = []
            for (let prop in days)
            if(days[prop] === true) tempArr.push(prop)
             tempArr.forEach((item)=>{
                switch (item) {
                    case 'Monday':
                        tmpArr.push('Понидельник')
                        break
                    case 'Tuesday':
                        tmpArr.push('Вторник')
                        break
                    case 'Wednesday':
                        tmpArr.push('Среда')
                        break
                    case 'Thursday':
                        tmpArr.push('Четверг')
                        break
                    case 'Friday':
                        tmpArr.push('Пятница')
                        break
                    case 'Saturday':
                        tmpArr.push('Субота')
                        break
                    case 'Sunday':
                        tmpArr.push('Воскресенье')
                        break
                    default:
                        break
                }
             })
             return (<>
                {
                    tmpArr.map((item,index)=>(
                        <div key={index}>
                <h6><strong>{item}</strong></h6>
                <div >
                    
                <h6>Упражнения</h6>
                <div className="my-3 p-3 bg-light rounded box-shadow">
                <strong className="text-muted">Упражнение №1</strong>
                <p className="text-muted">Название упражнения</p>
                <input type="text" className="form-control" placeholder="Введите название упражнения"/>
                
                <p className="text-muted">Добавьте картинки этапов упражнения</p>
            <div className="custom-file">
            {
            //Нужно сделать чтобы отображались  картинки загруженные снизу, такое делал чел с Чехии с Ютуба.Видео о челендже о формах
            }
            <input type="file" id="customFile" className="custom-file-input" placeholder="Choose file" />
            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
            </div>
            <h6>Сеты</h6>
            <strong className="text-muted">Сет №1</strong>
            <p className="text-muted">Количество повторений</p>
                <input type="text" className="form-control" placeholder="Введите количество повторений"/>
            <p className="text-muted">Размер утяжеления</p>
                <input type="text" className="form-control" placeholder="Введите размер утяжеления"/>
            <p className="text-muted">Время на выполнение сета</p>
                <input type="text" className="form-control" placeholder="Введите время"/>
            <p className="text-muted">Время на отдых между сетами</p>
                <input type="text" className="form-control" placeholder="Введите время"/>
            <hr/>
            <button type="button" className="btn btn-outline-primary">Добавить ещё один сет!</button>
            </div>
            <button type="button" className="btn btn-outline-primary">Добавить ещё одно упражнение!</button>
            </div> 
            
        </div>
                    )
                        
                    )
                }
             </>)

             
          }


          return (
              <>
              {!!(valid) && (<>
              <SelectDaysComponent/>
              </>)}
              </>
          )
          
        
    }

    return (
        <>
        <h6><strong>Выберете 3 нужных дня из 7 </strong></h6>
        
        <div className="my-3 p-3 bg-light rounded box-shadow">
        <div className="form-check ">
        <input className="form-check-input" name="Monday" checked={days.Monday} 
        onChange={onChangeDaysHandler}  type="checkbox" />
        <label className="form-check-label" htmlFor="gridCheck1">
          Понидельник
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Tuesday"  checked={days.Tuesday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Вторник
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Wednesday" checked={days.Wednesday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Среда
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Thursday" checked={days.Thursday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Четверг
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Friday" checked={days.Friday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Пятница
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Saturday" checked={days.Saturday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Субота
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" name="Sunday" checked={days.Sunday} 
        onChange={onChangeDaysHandler} type="checkbox"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Воскресенье
        </label>
      </div>
       </div>
    <strong className="">Вырбрано  {daysCount}</strong>
        
        <ValidationSetDays/>
        
      
        </>
    )
}

const Type4 = () =>{
    return (
        <>4444444</>
    )
}

const Type5 = () =>{
    return (
        <>555555</>
    )
}
    

    return (<>
    {type.type1 && <Type1/>}
    {type.type2 && <Type2/>}
    {type.type3 && <Type3/>}
    {type.type4 && <Type4/>}
    {type.type5 && <Type5/>}   
        </>
    )

  }

const mapStateToProps = (state) => ({
    
})
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

  export default connect(mapStateToProps, mapDispatchToProps)(TrainingAddFormDependsCycleTypeComponent)