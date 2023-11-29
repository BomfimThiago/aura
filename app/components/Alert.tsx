'use client'
import React, { useEffect, useMemo, useState } from 'react'
import tw from 'tailwind-styled-components'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import {XCircleIcon} from '@heroicons/react/24/outline'

const IconWwidth = 40

const valuesByType = {
    'success': {
        title: 'Success',
        icon: <CheckCircleIcon color='#1f833e' width={IconWwidth}/>
    },
    'info': {
        title: 'Info',
        icon: <InformationCircleIcon color='#4888f4'  width={IconWwidth}/>
    },
    'warning': {
        title: 'Warning',
        icon: <ExclamationCircleIcon color='#ea8903' width={IconWwidth}/>
    },
    'error': {
        title: 'Error',
        icon: <XCircleIcon  color='#d7271e' width={IconWwidth}/>
    },
}

export const Alert = ({
   message,
   type,
   showAlert = true
}: {
   type: 'success' | 'info' | 'warning' | 'error'
   message: string
   showAlert: boolean
}) => {
  const [display, setDisplay] = useState<boolean>(showAlert)

  useEffect(() => {
    console.log('component called')
    setTimeout(() => {
        setDisplay(false)
    }, 2000)
  }, [])

  if(!display) {
    return <></>
  }

   return <Container $type={type}>
        <div className='flex gap-4'>
            {valuesByType[type].icon}
            <div className='flex flex-col gap-1'>
                <h1 className='text-2xl'>{valuesByType[type].title}</h1>
                <span className='text-sm'>{message}</span> 
        </div>
        </div>
        <button className='cursor-pointer' onClick={() => console.log('clicked')}>
            <XMarkIcon width={IconWwidth} color='#a7a7a7' className='curso-pointer'/>
        </button>
    </Container>
  
}


const Container = tw.div<{$type: 'success' | 'info' | 'warning' | 'error'}>`
    absolute
    right-2
    bottom-5
    bg-white
    shadow
    w-[500px]
    p-4
    flex
    items-center
    justify-between
    rounded
    border-l-8
    border-l-red-500
    ${({$type}) => $type == 'success' ? 'border-l-[#1f833e]' : $type == 'info' ? 'border-l-[#4888f4]' : $type == 'warning' ? 'border-l-[#ea8903]' : 'border-l-[#d7271e]'}
`
