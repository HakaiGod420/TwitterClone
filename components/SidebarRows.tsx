import React, { SVGProps } from 'react'
interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}
function SidebarRows({Icon,title} : Props) {
  return (
      <div className='flex max-w-fit items-center space-x-2 rounded-full 
      px-4 py-3 hover:bg-gray-100 transition-all duration-200 group'>
        <Icon className='h-6 w-6 '/>
        <p className='hidden text-base font-light md:inline-flex group-hover:text-twitter lg:text-2xl'>{title}</p>         
      </div>

  )
}

export default SidebarRows