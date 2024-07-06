
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Help from './pages/Help'
import Contact from './pages/Contact'
import Layout from './Layoute/Layout'
import LayoutTwo from './Layoute/LayoutTwo'
import Services from './PagesTwo/Services'
import Laptop from './PagesTwo/Laptop'
import Blog from './PagesTwo/Blog'
import Network from './PagesTwo/Network'
import Printer from './PagesTwo/Printer'
import LayoutThree from './Layoute/LayoutThree'
import Monitor from './PagesThree/Monitor'
import Tebletpc from './PagesThree/Tebletpc'
import Gaming from './PagesThree/Gaming'
import SoundSystem from './PagesThree/SoundSystem'
import OfficeItems from './PagesThree/OfficeItems'
import LayoutFour from './Layoute/LayoutFour'
import Camera from './PagesFour/Camera'
import SecuritySystem from './PagesFour/SecuritySystem'
import Software from './PagesFour/Software'
import Accessories from './PagesFour/Accessories'
import Store from './PagesFour/Store'
import Data from './SubComponent/Data'
import Login from './Component/Login'
import Card from './SubComponent/Card'

// import { ToastContainer } from 'react-toastify'

function App() {
 const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     <Route path='/' element = {<Layout/>}>
     
     <Route index element = {<Home/>}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/help' element = {<Help/>}/>
      <Route path='/contact' element = {<Contact/>}/>
     </Route>
      <Route path='/data' element = {<Data/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/card' element = {<Card/>}/>
       
      <Route path='/layoutTwo' element = {<LayoutTwo/>}>
      <Route index element = {<Laptop/>}/>
      <Route path='/layoutTwo/blog' element = {<Blog/>}/>
      <Route path='/layoutTwo/network' element = {<Network/>}/>
      <Route path='/layoutTwo/printer' element = {<Printer/>}/>
      <Route path='/layoutTwo/Services' element = {<Services/>}/>
      </Route>

      <Route path='/layoutThree' element = {<LayoutThree/>}>

       <Route index element = {<Monitor/>}/>
       <Route path='/layoutThree/tebletpc' element = {<Tebletpc/>}/>
       <Route path='/layoutThree/gaming' element = {<Gaming/>}/>
       <Route path='/layoutThree/soundSystem' element = {<SoundSystem/>}/>
       <Route path='/layoutThree/officeitems' element = {<OfficeItems/>}/>

      </Route>
     
     <Route path='/layoutFour' element = {<LayoutFour/>}>
       
     <Route index element = {<Camera/>}/>
    <Route path='/layoutFour/software' element = {<Software/>}/>
     
    
     
     
     
     </Route>



    </Route>
  )
 )

  return (
    <>
    
      <RouterProvider router={route}/>
    </>
  )
}

export default App
