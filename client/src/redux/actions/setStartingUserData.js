export const setStartingUserPage = (value) => {
    console.log(`in setStartingUserPage value  = `)
    console.log(value)
    return {
    type: 'SET_STARTING_USER',
    payload: value
}
}

export const setStartingTrainingPage = (value) => ({
    type: 'SET_STARTING_TRAINING',
    payload: value
})

export const setStartingAnalyzeUserPage = (value) => ({
    type: 'SET_STARTING_ANALYZE',
    payload: value
})

export const setStartingChatsPage = (value) => ({
    type: 'SET_STARTING_CHATS',
    payload: value
})

export const setStartingCoachPage = (value) => ({
    type: 'SET_STARTING_COACH',
    payload: value
})

export const setStartingSearchPage = (value) => ({
    type: 'SET_STARTING_SEARCH',
    payload: value
})