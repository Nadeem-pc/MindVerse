import * as React from 'react';

const Input = ({ type, ...props }: React.ComponentProps<"input">) => {
  return (
    <input
        type= {type}
        {...props}
    />
  )
}
 
export default Input