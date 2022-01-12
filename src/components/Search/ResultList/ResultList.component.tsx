import React from 'react';
import { Video } from '../../../store/types';
import { VideoPreview } from './VideoGrid/VideoPreview/VideoPreview.component';
import './ResultList.css'
import { InfiniteScroll } from '../../InfiniteScroll/InfiniteScroll.component';
import { Waypoint } from 'react-waypoint';

interface IResultList {
    videos: Video[],
    callBack(args: Waypoint.CallbackArgs): void
    isLoading: boolean,
    searchText: string | null
}

export const ResultList = (props: IResultList) => {
    const previews = props.videos.map((item) => <VideoPreview isVertical video={item} key={item.id} />)

    return <div className="result_list">
        {props.videos && props.videos.length !== 0 && <h3>Search results for "{props.searchText}"</h3>}

        <InfiniteScroll callBack={props.callBack} isLoading={props.isLoading}>
            <div>
                {previews}
            </div>
        </InfiniteScroll>
    </div>
} 