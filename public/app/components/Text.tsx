import { ReactNode } from "react"

export const Text = ({children, classname}: {children: ReactNode, classname?: string}) => {
  return (
    <span className={`text-base ${classname}`}>{children}</span>
  )
}

