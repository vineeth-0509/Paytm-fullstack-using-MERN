import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { Button } from '../components/Button';
import { InputBox } from '../components/InputBox';
import { ButtonWarning } from '../components/ButtonWarning';

export default function SignIn() {
  return (
    <div className='bg-slate-900 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
    <Heading label={"SignIn"}/>
   <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
   <InputBox plaeceholder='vineeththungani@gmail.com' label={'Email'}></InputBox>
   <InputBox plaeceholder='12345' label={'password'}></InputBox>
   <div className='pt-4'>
    <Button label={"Sign In"}></Button>
   </div>
    <ButtonWarning label={"Don't have an account?"} buttonText={"Signup"} to="/signup"></ButtonWarning>
        </div>
      </div>
    </div>
  )
}
