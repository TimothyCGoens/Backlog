import axios from 'axios'

export const addGameToBacklog = (card) => {
    

    let body = {
        name: card.name,
        image: card.image.medium_url,
        developer: card.developers,
        publisher: card.publishers,
        genre: card.genres,
        deck: card.deck,
        releasedate: card.card.original_release_date,
        platforms: card.platforms,
        videos: card.card.videos,
        gb: card.card.site_detail_url,
        userId: card.userId
    }

    console.log(body)
    return (dispatch) => {
        axios.post('http://localhost:8080/backlog', body)
    // fetch('http://localhost:8080/backlog', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'applicatin/json',
    //         'Accept': 'application/json'
    //     },
    //     body: body
    // })
    .then((json)  => {
        console.log(json)
        dispatch({type: 'ADD_TO_BACKLOG', card: body })
        alert('Game added to backlog!')
        })
    }
}
