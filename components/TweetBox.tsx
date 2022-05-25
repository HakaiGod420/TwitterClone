import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
    CheckIcon
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props{
    setTweets: Dispatch<SetStateAction<Tweet[]>>
}

function TweetBox({setTweets} : Props) {
    const [input, setInput] = useState<string>('')
    const [image, setImage] = useState<string>('')
    const {data: session} = useSession()
    const [immageUrlBoxIsOpen,setImageUrlBoxIsOpen] = useState<boolean>(false)
    const imageInputRef = useRef<HTMLInputElement>(null)
    const addImageToTweet = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();

        if(!imageInputRef.current?.value) return;

        setImage(imageInputRef.current.value)
        imageInputRef.current.value = '';
        setImageUrlBoxIsOpen(false);

    }

    const postTweet = async () =>{
        const tweetInfo: TweetBody = {
            text: input ,
            username: session?.user?.name || 'Unknow user',
            profileImg: session?.user?.image || 'https://links.papareact.com/gll',
            image: image,    
        }

        
        const result  = await fetch(`/api/addTweet`,{
            body: JSON.stringify(tweetInfo),
            method: 'POST',
        })

        const json = await result.json();

        const newTweets = await fetchTweets();
        setTweets(newTweets)

        toast('Tweet Posted!',{
            icon:'✔️',
        })

        return json;

    }

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
         e.preventDefault();

         postTweet()

         setInput('')
         setImage('')
         setImageUrlBoxIsOpen(false)
    }
    
  return (
    <div className='flex space-x-2 p-5'>
        <img className='h-14 w-14 object-cover rounded-full
        mt-4' src={session?.user?.image ||"https://links.papareact.com/gll"}/>

        <div className='flex items-center flex-1 pl-2'>
            <form className='flex flex-1 flex-col'>
                <input value={input} onChange={e => setInput(e.target.value)} className='h-24 w-full text-xl outline-none placeholder:text-xl' type='text' placeholder="What's Happening?" />
                <div className='flex items-center'>
                    <div className='flex flex-1 space-x-2 text-twitter'>
                        <PhotographIcon onClick={() =>setImageUrlBoxIsOpen(!immageUrlBoxIsOpen)} className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <SearchCircleIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <EmojiHappyIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <CalendarIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <LocationMarkerIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                    </div>
                    <button onClick={handleSubmit} disabled={!input || !session } className='disabled:opacity-40 bg-twitter px-5 py-2 font-bold text-white rounded-full'>
                        Tweet
                    </button>
                </div>
                {immageUrlBoxIsOpen && (
                    <form className='mt-5 flex rounded-lg    bg-twitter/80 py-2 px-4'>
                        <input className='flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white 
                        ' type="text" placeholder='Enter immage url...'
                        ref={imageInputRef} 
                        />
                        <button type='submit'  onClick={addImageToTweet} className='font-bold text-white'>Add image</button>
                    </form>
                )}
                {image &&(
                    <img className='mt-10 h-40 w-full rounded-xl object-contain shadow-lg' src={image} />
                )}
            </form>
        </div>
    </div>
  )
}

export default TweetBox