const initialState = {
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STARTING_ANALYZE':
            return  {
                ...action.payload
 
            }
        case 'SET':
            return {
                ...state,
                mainContent:  action.payload
            }
    
        default:
            return state
    }
}