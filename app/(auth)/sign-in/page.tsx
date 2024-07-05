import AuthForm from '@/components/AuthForm'
import React from 'react'

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6"> 
      {/* we will make form as a component so that it is resusable  */}
      <AuthForm type="sign-in"/>
    </section>
  )
}

export default SignIn
