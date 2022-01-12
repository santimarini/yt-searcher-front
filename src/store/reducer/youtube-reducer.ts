import { IVideoState } from "../interfaces/IVideoState";
import { IAction, ActionTypes } from "../interfaces/IAction";
import { SearchResult } from "../types";

let initialState: IVideoState = {
    isYoutubeClientLoaded: false,
    videos: [],
    categories: [],
    videosByCategories: {},
    videosLoading: false,
    searchResults: {},
    trendingVideos: {},
    video: {},
    searchText: '',
}

export const YoutubeReducer = (currentState: IVideoState = initialState, action: IAction) => {
    if (action.type === ActionTypes.YoutubeClientLoaded) {
        let state = { ...currentState };
        state.isYoutubeClientLoaded = true;
        return state;
    }
    else if (action.type === ActionTypes.VideosLoading) {
        let state = { ...currentState };
        state.videosLoading = true;
        return state;
    }
    else if (action.type === ActionTypes.SearchVideos) {
        let state = { ...currentState };
        state.videosLoading = false;
        state.searchText = action.payload.searchText;
        let videos: SearchResult[] = (state.searchResults.items || []).concat(action.payload.payload.items) || []
        state.searchResults = { ...state.searchResults, ...action.payload.payload };
        state.searchResults.items = [...videos];
        return state;
    }
    else if (action.type === ActionTypes.ClearSearchResult) {
        let state = { ...currentState };
        state.searchResults = {};
        return state;
    }

    return currentState;
}