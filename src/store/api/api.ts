import axios from "axios"
import { apiBaseUrl } from "../../constants/constants"


export const searchVideos = async (query: string, nextPageToken: string | null, maxResults: number = 10) => {
    try {
        return await axios.get(
            apiBaseUrl + `/search?q=${query}&nextPageToken=${nextPageToken}&maxResults=${maxResults}`
        )
    } catch (error) {
        console.log(error)
    }

}

