import { type ReactNode } from 'react'
type LinkProps ={ 
    children:ReactNode;
    path:string;
}

const Link = ({path,children}:LinkProps) => {
  return (
    <a href={path} target='_blank'>
        {children}
    </a>
  )
}

export default Link