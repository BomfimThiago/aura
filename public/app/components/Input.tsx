import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

// Por Padrão o input irá ocupar toda a div pai
// se precisar de um tamanho menor só passar no classname ou innerClassName
const Input = ({
    label,
    type,
    name,
    value,
    error,
    onChange,
    onBlur,
    placeholder,
    classname,
    innerClassname,
    icon
}: {
    label?: string
    type: string
    value: string | number
    error?: string
    name?: string
    icon?: ReactNode
    placeholder?: string
    classname?: string
    innerClassname?: string
    onChange: any
    onBlur?: any
}) => {
  return (
    <div className={classname}>
      {label && <LabelStyle htmlFor={name}>
        {label}
      </LabelStyle>}
      <InputInnerWrapper className={innerClassname}>
        {icon && icon}
        <InputStyle
          id={name}
          name={name}
          type={type}
          value={value? value : ''}
          onChange={onChange}
          onBlur={() => onBlur}
          placeholder={placeholder}
        />
      </InputInnerWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default Input;

const InputInnerWrapper = tw.div`
  flex
  items-center
  bg-white
  border
  border-lightGray
  text-base
  px-2
  rounded-md
`

const InputStyle = tw.input`
  text-base
  bg-transparent
  p-3
  flex-1
  &:focus-visible {
    outline-none
  }
  placeholder-graphite
`
const LabelStyle = tw.label`
  block
  text-base
  pb-1
`

const ErrorMessage = tw.p`
  text-[#f31]
  text-base
  mt-1
`