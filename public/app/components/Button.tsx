import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

export const Button = ({ 
    children, 
    classname, 
    onClick
}: {
    classname?: string,
    children: ReactNode, 
    props?:  React.ButtonHTMLAttributes<HTMLButtonElement>,
    onClick?: any
}) => {
  return (
    <ButtonStyle onClick={onClick} className={classname}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = tw.button`
  text-base
  cursor-pointer
  border
  text-black
  min-w-[8rem]
  p-5
  w-full
`