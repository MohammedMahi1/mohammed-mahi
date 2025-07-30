import React from 'react'
type LabelProps = {
    children?: React.ReactNode;
} & React.ComponentProps<"label">

const Label = ({children, ...props}:LabelProps) => {
  return (
    <label className='label' {...props}>
        {children}
    </label>
  )
}

export default Label