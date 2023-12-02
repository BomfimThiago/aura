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
import Cookies from 'js-cookie';


export default function Login ()  {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('') 

    const router = useRouter()

    const onLogin = async (event: any) => {
        event.preventDefault()
        const response = await fetch(`http://168.75.102.81:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: email, password: password})
        })

        const data = await response.json()
        if (response.ok) {
            // Login successful, redirect to the desired page
            console.log(data)
            const token = data.token
            const in1Hour = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set(
                'accessToken', token, 
                { 
                    expires: in1Hour
                });
            router.push('/dashboard'); // Replace with your desired redirect path
        } else {
            // Handle login failure
            console.log({response})
            console.log(data)
            toast.error(`${data.status} ${data.title}`)
        }
    }

    return (
        <Container>
            <FormContainer>
                <form onSubmit={onLogin} className='w-full'>
                    <div className='flex justify-center my-12'>
                        <Image width={180} className='text-center' color='black' src={logo} alt="Techeco Logo" />
                    </div>
                    <div className='w-full px-10'>
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
        </Container>
    )
}

const Container = tw.div`
    flex
    h-full
    md:bg-[url('./assets/image2.jpeg')]
    bg-white
    bg-cover 
    bg-center 
    justify-center
    items-center
`

const FormContainer = tw.div`
    bg-white
    md:max-w-[500px]
    md:shadow-md
    md:rounded-md
    md:border
    h-[550px]

    w-full
    flex 
    flex-col 
    items-center
`
