export interface IAction {
    type: ActionTypes,
    payload: any
}

export enum ActionTypes {
    YoutubeClientLoaded,
    VideosLoading,
    SearchVideos,
    ClearSearchResult,
    GetVideoById
}