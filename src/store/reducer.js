import Axios from "axios";

const initialState = {
    isAuthenticated: false,
    uid: 0,
    selectedGame: {},
    developers: [],
    image: null,
    genres: [],
    platforms: [],
    publishers: []

}

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'ON_AUTHENTICATED' :
        console.log(action)
            return {
                ...state,
                isAuthenticated: action.token != null ? true : false,
                uid: action.uid
            }
        case 'LOG_OUT':
        return {
            ...state,
            isAuthenticated: false
        }
        case 'CARD_LOADED':
        return {
            ...state,
            selectedGame: action.value,
            publishers: action.value.publishers,
            developers: action.value.developers,
            image: action.value.image,
            genres: action.value.genres,
            platforms: action.value.platforms,
            releaseDate: action.value.original_release_date,
            moreDetails: action.value.site_detail_url
        }
        // case 'ADD_TO_BACKLOG':
        // return {
        //     ...state
        // }
        // .then(() => Axios.post)
        default:
        return state
    }
}

export default reducer