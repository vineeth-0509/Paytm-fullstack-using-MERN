import { useState } from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { SignUp } from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/sendmoney' element={<SendMoney/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
