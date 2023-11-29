import { 
  ArchiveBoxIcon, 
  BookOpenIcon, 
  DocumentMinusIcon, 
  QuestionMarkCircleIcon, 
  QueueListIcon, 
  SquaresPlusIcon 
} from "@heroicons/react/24/solid"
import Link from "next/link"

import tw from "tailwind-styled-components"

type IconSVGProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & React.RefAttributes<SVGSVGElement>
type IconProps = IconSVGProps & {
    title?: string
    titleId?: string
}

type Link = {
  Icon: React.FC<IconProps>,
  text: string,
  href: string
}


export const Sidebar = () => {
  const links: Link[] = [
    {
      Icon: SquaresPlusIcon,
      text: 'Painel',
      href: '/dashboard'
    },
    {
      Icon: QueueListIcon,
      text: 'Produtos',
      href: '/product'
    },
    {
      Icon: ArchiveBoxIcon ,
      text: 'Ordens de Serviço',
      href: '/service-order'
    },
    {
      Icon: BookOpenIcon ,
      text: 'Transações',
      href: '/transaction'
    },
    {
      Icon: DocumentMinusIcon ,
      text: 'Relatórios',
      href: '/report'
    },
    {
      Icon: QuestionMarkCircleIcon ,
      text: 'Central de Ajuda',
      href: '/help-center'
    },
  ]

  return (
    <Container>
      {links.map(({Icon, text, href}, index) => (
        <Link href={href} key={index} className="group cursor-pointer">
          <InnerContainer>
            <Icon width={20} className="text-graphite group-hover:text-auraRed" />
              <span className="sm:flex hidden">{text}</span>
          </InnerContainer>
        </Link>
       
      ))}
    </Container>
  )
}

const Container = tw.div`
  bg-white 
  sm:w-[230px]
  w-10
  h-[calc(100vh-90px)]
  border-t-[1px] 
  border-lightGray
  px-3
  pt-5
  sm:items-start
  flex
  flex-col
  items-center
`

const InnerContainer = tw.div`
  p-2
  text-graphite
  group-hover:text-auraRed
  ease-linear
  duration-50
  flex
  items-center
  gap-2 
  mt-2
`