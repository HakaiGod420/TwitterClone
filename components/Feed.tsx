import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponenet from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props{
  tweets: Tweet[]
}

function Feed({tweets:tweetsProp} : Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)

  
  const handleRefresh =async () => {
    const refreshToast = toast.loading('Refreshing...');
    const tweets =  await fetchTweets();
    setTweets(tweets)
    toast.success('Feed updated!',{
      id: refreshToast,
    })
  }
  //console.log(tweets)
  return (
    <div className='col-span-8 lg:col-span-5 max-h-screen overflow-scroll scrollbar-hide border-x'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-x font-bold'>Home</h1>
            <RefreshIcon onClick={handleRefresh} className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter
            transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
        </div>

        {/*TweetBox*/}
        <div>
          <TweetBox setTweets={setTweets  } />
        </div>

        {/* tweets*/}

        <div>
          {tweets.map(tweet => (
            <TweetComponenet key={tweet._id} tweet={tweet}/>
          ))}
        </div>
    </div>
  )
}

export default Feed