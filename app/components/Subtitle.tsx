import { ReactNode } from "react"

export const Subtitle = ({children, classname}: {children: ReactNode, classname?: string}) => {
  return (
    <span className={`text-sm text-graphite ${classname}`}>{children}</span>
  )
}
