import React, { useState } from 'react'

const Auth = () => {
    const [state, setState] = useState(true)

    const handleSignIn = () => {
        console.log('SignIn success')
    }
    const handleSignUp = () => {
        console.log('SignUp success')
    }

  return (
    <div>
        <button onClick={() => setState(!state)}>Click</button>
        <span>{state ? 
            <div onSubmit={handleSignUp}>
                <button type='submit'>SignUp</button>
            </div> 
            :
            <div onSubmit={handleSignIn}>
                <button type='submit'>SignIn</button>
            </div>
        }</span>
    </div>
  )
}

export default Auth