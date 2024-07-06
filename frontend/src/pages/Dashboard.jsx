import React from 'react'
import  {AppBar} from '../components/AppBar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export default function Dashboard() {
  return (
    <div>
      <AppBar/>
      <div className='m-8'>
        <Balance value={"10,000"}/>
        <Users/>
      </div>
    </div>
  )
}
