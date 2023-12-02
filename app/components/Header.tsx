'use client'

import tw from "tailwind-styled-components"
import techecoLogo from '../assets/img/aura_simple.png'
import Input from "./Input"
import { useEffect, useState } from "react"
import Image from 'next/image'

import { 
  ChatBubbleBottomCenterTextIcon, 
  MagnifyingGlassIcon 
} from "@heroicons/react/20/solid"
import { BellIcon } from "@heroicons/react/24/solid"
import { Title } from "./Title"
import { Subtitle } from "./Subtitle"

import { usePathname } from 'next/navigation';
import { getFormattedDate } from "../[utils]/utils"
import { KeyValuePair } from "tailwindcss/types/config"
import  { ProfileSettings }  from "./ProfileSettings"


const matchTitle: KeyValuePair  = {
  'dashboard': 'Painel',
  'product': 'Produtos',
  'report': 'Relatórios',
  'service-order': 'Ordens de Serviço',
  'settings': 'Configurações',
  'transaction': 'Transações',
  'help-center': 'Central de Ajuda'
}


export const Header = () => {
  const [search, setSearch] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  const currentPage = usePathname();

  useEffect(() => {
    const pathWithoutSlash = currentPage.split('/');
    setTitle(pathWithoutSlash[1]);
  }, [currentPage])

  return (
    <Container>
      <LogoContainer>
        <Image width={110} src={techecoLogo} alt="" />
      </LogoContainer>
      <InnerContainer>
          <TitleContainer>
            <Title>{matchTitle[title]}</Title>
            <Subtitle>{getFormattedDate(new Date())}</Subtitle>
          </TitleContainer>
          {/* <HeaderDropDown classname='md:hidden flex' /> */}
          <SearchContainer>
            <Input
              icon={<MagnifyingGlassIcon width={30} className="text-graphite"/>} 
              onChange={({ target }: {target: HTMLInputElement}) => setSearch(target.value)} 
              value={search}
              type="text" 
              placeholder="procurar..." />
            <ChatBubbleBottomCenterTextIcon  width={30} className="text-graphite" />
            <BellIcon width={30} className="text-graphite" />
          

          </SearchContainer>
          <div className="flex pr-5">
            <ProfileSettings />
          </div>
      </InnerContainer>
    </Container>
  )
}

const Container = tw.div`
  bg-white
  h-[90px]
  flex
  items-center
  w-full
`

const LogoContainer = tw.div`
  lg:flex 
  hidden 
  justify-center 
  w-[200px]
`

const InnerContainer = tw.div`
  flex 
  flex-1 
  h-full 
  border-l-[1px] 
  border-lightGray
  justify-between
  md:justify-start
`

const TitleContainer = tw.div`
  max-w-[300px] 
  flex 
  flex-col 
  pl-5 
  justify-center
`

const SearchContainer = tw.div`
  flex-1 
  justify-end 
  items-center 
  gap-5
  md:flex
  hidden
  pr-5
`