
'use client'

import { UserCircleIcon } from '@heroicons/react/24/solid'
import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import { ArrowLeftOnRectangleIcon }from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';


export const ProfileSettings = () => {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()
  
    const handleOpen = () => {
        setOpen(!open);
    };

    const onLogOut = async (event: any) => {
      event.preventDefault()
      const response = await fetch(`http://localhost:5099/api/auth/logout`, {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      })
      
      const data = await response.json()
      if (response.ok) {
          // Login successful, redirect to the desired page
          router.push('/login'); // Replace with your desired redirect path
      } else {
          // Handle login failure
          toast.error(`${response.status} ${data.message}`)
      }
    }


    return (
        <Container>
          <ButtonStyle onClick={handleOpen}>
            <UserCircleIcon width={35} color={open ? '#000' : "#5D6975"} className='text-graphite hover:text-black'/>
          </ButtonStyle>
          {open ? (
            <AbsoluteBox >
              <Menu className="menu">
                <MenuItem>
                  <button onClick={onLogOut} className='flex gap-1 items-cente mt-1 cursor-pointer'>
                      <ArrowLeftOnRectangleIcon width={20}/>
                      <span className='text-sm'>Log out</span>
                  </button>
                </MenuItem>
              </Menu>
            </AbsoluteBox>
            
          ) : null}
        </Container>
      );
}


const Container = tw.div`
  flex 
  item
  relative
`

const AbsoluteBox = tw.div`
  absolute
  top-16
  -left-[70px]
  flex
  flex-col
  items-end
  bg-transparent

`

const ArrowBox = tw.div`
  border-solid 
  border-b-gray-100
  border-b-8
  border-x-transparent 
  border-x-8 
  border-t-0
  z-10
  -mb-[2px]
  mr-[1px]
`

const Menu = tw.ul`
  bg-white
  w-[100px]
  z-10
  rounded
  px-2
  h-10
  shadow
`

const MenuItem = tw.li`
  mt-[9px]
  text-graphite
  hover:text-black
`


const ButtonStyle = tw.button`
   
`