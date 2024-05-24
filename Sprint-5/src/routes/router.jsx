import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layout/DefaultLayout'
import Home from '../Pages/Home/Home'
import Concelhos from '../Pages/ConcelhosIA'

export function Router() {
 return (
  <>
   <Routes>
    <Route path='/' element={<DefaultLayout/>}>
     <Route path='/' element={<Home/>}/>
     <Route path='/concelhos' element={<Concelhos/>}/>
    </Route>
   </Routes>
  </>
 )
}