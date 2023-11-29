import { ReactNode } from "react"

export const Title = ({children, classname}: {children: ReactNode, classname?: string}) => {
  return (
    <span className={`font-medium text-2xl text-black  ${classname}`}>{children}</span>
  )
}

