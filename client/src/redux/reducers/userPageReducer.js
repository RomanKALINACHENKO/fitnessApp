const initialState = {
   
}

export default (state = initialState, action) => {
    console.log(`ACTION = `)
    console.log(action)
    switch (action.type) {
        case 'SET_STARTING_USER':
            return  {
            ...action.payload
            }  
        case 'SET_EXAMPLE_VALUE':
            return  {
                ...state,
                User:{ 
                    first:  action.payload}
                   
                
            }
        case 'SET':
            return {
                ...state,
                User:  action.payload
            }
    
        default:
            return state
    }
}