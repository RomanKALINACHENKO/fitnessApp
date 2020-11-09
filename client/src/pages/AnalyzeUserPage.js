import React from 'react'
import { Header } from './AnalyzeUserPage/Header'
import {connect} from 'react-redux'


const AnalyzeUserPage = (props) => {
   // const { mainContent } = props.analyzePage
  //  console.log(props)
    //const { setExapleValue } = props
   // const newSomeValue1 = 'the new value'
    return (
      <div>
      <Header/>
      <div className="main">
    main
    <h3>
    {
     
    }
    </h3>
    
    
      </div>
    </div>
    )
  }

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(AnalyzeUserPage)