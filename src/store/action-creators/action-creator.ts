import { ActionTypes } from "../interfaces/IAction"
import { searchVideos } from "../api/api"

export const YoutubeClientLoaded = () => {
    return {
        type: ActionTypes.YoutubeClientLoaded
    }
}

export const VideosLoading = () => {
    return {
        type: ActionTypes.VideosLoading
    }
}

export const ClearSearchResult = () => {
    return {
        type: ActionTypes.ClearSearchResult
    }
}

export const SearchVideos = (query: string, nextPageToken: string | null) => {
    return (dispatch: any) => {
        searchVideos(query, nextPageToken).then((response) => {
            console.log('nextPageToken is', nextPageToken)

            dispatch({
                type: ActionTypes.SearchVideos,
                payload: {
                    searchText: query,
                    payload: response ? response.data : response
                }
            })
        })
            .catch(err => console.log('ERROR', err))
    }
}
