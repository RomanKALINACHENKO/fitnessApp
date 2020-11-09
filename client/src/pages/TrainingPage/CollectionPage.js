import React from 'react'
import { Header } from './Header'
import {connect} from 'react-redux'
import ButtonAddTraining from './CollectionPage/ButtonAddTraining'

 const CollectionPage = (props) => {
    const CollectionPrograms = props.CollectionPrograms 
    console.log("CollectionPrograms")
    console.log(CollectionPrograms)

    return (
      <div>
        <Header/>
        <div className="mainContent">
            <div className="container">
            <>
                <div className="d-flex align-items-center p-3  text-white-50 bg-success rounded box-shadow">
                   <img className="mr-3" src="http://localhost:5000/api/users/avatars/default.jpg" width="48px" height="48px" alt="img" />
               <div className="lh-100">
                   <h6 className="mb-0 text-white lh-100">
                        Тренеровки созданные вами
                   </h6>
                   <small>Количество: {
                            CollectionPrograms.myPrograms.length ? CollectionPrograms.myPrograms.length : 0  
                                        }</small>
               </div>
                </div>
                {
                !!(CollectionPrograms.myPrograms.length) && CollectionPrograms.myPrograms.map((Program)=>(
            <div className=" p-3 mb-3 bg-white rounded-bottom box-shadow">
                        <div className="media text-muted pt-3">
                            <img className="mr-2 rounded"  alt="imgProgram" width="32px" height="32px"  src="http://localhost:5000/api/users/avatars/default.jpg" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
    <strong className="d-block text-gray-dark">{Program.Program_name}</strong>           
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                    </div>
    ))
                }
                        <div className="my-3 p-3 bg-white rounded box-shadow">
            <h6 className="border-bottom border-gray pb-2 mb-0">Функции  </h6>
            <ButtonAddTraining typeAdd="myPrograms" />
            {
             !!(CollectionPrograms.myPrograms.length) && (<div className="media text-muted pt-3">
                <button type="button" className="mx-auto btn btn-danger">Удалить свой комплекс тренеровок</button>
            </div>)
            }
        </div> 
            </>
            <>
                <div className="d-flex align-items-center p-3  text-white-50 bg-primary rounded box-shadow">
                   
               <div className="lh-100">
                   <h6 className="mb-0 text-white lh-100">
                   Добавленые тренеровки
                   </h6>
                   <small>Количество:  {
                            CollectionPrograms.addedPrograms.length ? CollectionPrograms.addedPrograms.length : 0  
                                        }</small>
               </div>
                </div>
                
                {
                !(CollectionPrograms.addedPrograms.length) && CollectionPrograms.addedPrograms.map((Program)=>(
            <div className=" p-3 mb-3 bg-white rounded-bottom box-shadow">
                        <div className="media text-muted pt-3">
                            <img className="mr-2 rounded"  alt="imgProgram" width="32px" height="32px"  src="http://localhost:5000/api/users/avatars/default.jpg" />
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
    <strong className="d-block text-gray-dark">{Program.addedPrograms}</strong>           
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                        </div>
                    </div>
    ))
                }
                </>
                <div className="my-3 p-3 bg-white rounded box-shadow">
                    <h6 className="border-bottom border-gray pb-2 mb-0">Функции </h6>
                    <div className="media text-muted pt-3">
                        <button type="button" className="mx-auto btn btn-danger">Добавить комплекс тренеровок</button>                   
                    </div>
                    {
             !!(CollectionPrograms.addedPrograms.length) && (<div className="media text-muted pt-3">
                <button type="button" className="mx-auto btn btn-danger">Удалить свой комплекс тренеровок</button>
            </div>)
            }
                </div>

            </div>
          </div>
        
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    CollectionPrograms: state.data.trainingPage}
  )
  
  const mapDispatchToProps = (dispatch) => ({
    
  })

  export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage)