const initialState = {
    isAuthenticated: false,
    uid: 0,
    selectedGame: {},
    publishers: [],
    developers: [],
    image: [],
    genres: [],
    platforms: []

}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ON_AUTHENTICATED' :
            return {
                ...state,
                isAuthenticated: action.token != null ? true : false,
                uid: action.id
            }
        case 'LOG_OUT':
        return {
            ...state,
            isAuthenticated: false
        }
        case 'CARD_LOADED':
        console.log(action.value.image)
        return {
            ...state,
            selectedGame: action.value,
            publishers: state.publishers.concat(action.value.publishers),
            developers: state.developers.concate(action.value.developers),
            image: state.image.concat(action.value.image),
            genres: state.genres.concat(action.value.genres),
            platforms: state.platforms.concat(action.value.platforms)
        }
    }
    return state 
}

export default reducer