"use client"

import tw from 'tailwind-styled-components'
import logo from '../../assets/img/aura_simple.png'
import { Text } from '../../components/Text'
import { useState } from 'react'
import Input from '../../components/Input'
import { Button } from '../../components/Button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login ()  {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()

    const onLogin = async (event: any) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:5099/api/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: email, password: password})
        })
        
        const data = await response.json()
        if (response.ok) {
            // Login successful, redirect to the desired page
            router.push('/dashboard'); // Replace with your desired redirect path
        } else {
            // Handle login failure
            console.log({response})
            console.log(data)
            toast.error(`${response.status} ${data.message}`)
        }
    }

    return (
        <Container>
            <LeftContainer>
                <FormContainer>
                    <form onSubmit={onLogin} className='md:w-[500px] w-full'>
                        <div className='flex justify-center my-12'>
                            <Image width={180} className='text-center' color='black' src={logo} alt="Techeco Logo" />
                        </div>
                        <div className='w-full md:px-10 px-0'>
                            <Input
                                label='Email'
                                type="text"
                                placeholder="Digite o email"
                                value={email}
                                onChange={({ target }: {target: HTMLInputElement}) => setEmail(target.value)}
                            />
                            <Input
                                classname='my-5'
                                label='Senha'
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={({ target }: {target: HTMLInputElement}) => setPassword(target.value)}
                            />
                            <div className='w-full md:text-end text-center'>
                                <Text>Esqueci a senha</Text>
                            </div>
                            <Button classname='text-white bg-[#ba3b36] mt-12'>Fazer Login</Button>
                        </div>
                    </form>
                </FormContainer>
            </LeftContainer>
        </Container>
    )
}


// #9a8896
// #f3dbc9

const Container = tw.div`
    flex
    h-full
    bg-[url('./assets/image2.jpeg')]
    bg-cover bg-center 
    justify-center
`

const LeftContainer = tw.div`
    max-w-[600px]
    flex 
    justify-center
    items-center
`

const FormContainer = tw.div`
    bg-white
    w-full
    h-[550px]
    flex 
    flex-col 
    items-center
    rounded-md
    shadow-md
    border
`
