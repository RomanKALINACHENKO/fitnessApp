const initialState = {
    User: {
        first:'pervii'
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STARTING_COACH':
            return  {
                ...action.payload
 
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