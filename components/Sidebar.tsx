import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/outline'
import SidebarRows from './SidebarRows'

function Sidebar() {
  return (
    <div className='flex flex-col col-span-2 items-center 
    px-4 md:items-start'>
        <img className='m-6 h-10 w-10' src='https://links.papareact.com/drq' />
        <SidebarRows Icon={HomeIcon} title="Home" />
        <SidebarRows Icon={HashtagIcon} title="Explore" />
        <SidebarRows Icon={BellIcon} title="Notifications" />
        <SidebarRows Icon={MailIcon} title="Messages" />
        <SidebarRows Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRows Icon={CollectionIcon} title="Lists" />
        <SidebarRows Icon={UserIcon} title="Sign In" />
        <SidebarRows Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  )
}

export default Sidebar