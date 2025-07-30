import React from 'react'
type LabelProps = {
    children?: React.ReactNode;
} & React.ComponentProps<"label">

const Label = ({children,className, ...props}:LabelProps) => {
  return (
    <label className={"label "+className} {...props}>
        {children}
    </label>
  )
}

export default Label