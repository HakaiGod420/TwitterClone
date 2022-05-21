import {Comment} from '../typings'
export const fetchComments = async (tweetID: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetID}`)
    const comments : Comment[] = await res.json()
    return comments
} 