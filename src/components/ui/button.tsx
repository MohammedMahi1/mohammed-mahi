import  { type ReactNode } from 'react'


type ButtonProps = {
    children:ReactNode;
} & React.ComponentProps<"button">

const Button = ({children,...props}:ButtonProps) => {
  return (
    <button className='btn' {...props}>
        {children}
    </button>
  )
}

export default Button