import React from 'react'
import { useHistory } from 'react-router-dom'





export const ButtonBack = () => {
  
    const history = useHistory()
    const ButtonBackHandler = ()=>{
      history.goBack()
    }
    return (
      <div className="ButtonBack" onClick={ButtonBackHandler}>
          <h3>{'<'}</h3>
      </div>
    )
  }