import { combineReducers } from 'redux'
import analyzePageReducer  from './analyzePageReducer'
import userPageReducer  from './userPageReducer'
import chatsPageReducer  from './chatsPageReducer'
import coachPageReducer  from './coachPageReducer'
import searchPageReducer  from './searchPageReducer'
import trainingPageReducer  from './trainingPageReducer'


export const rootReducer = combineReducers({
    data:combineReducers({
        analyzePage:analyzePageReducer,
        userPage: userPageReducer,
        chatsPage: chatsPageReducer,
        coachPage: coachPageReducer,
        searchPage: searchPageReducer,
        trainingPage:trainingPageReducer
        } 
    ),
    actions:combineReducers({
        analyzePage:analyzePageReducer,
        userPage: userPageReducer,
        chatsPage: chatsPageReducer,
        coachPage: coachPageReducer,
        searchPage: searchPageReducer,
        trainingPage:trainingPageReducer
        } 
    )
    }
    
)

