import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Universities from './Pages/Universities'
import University from './Pages/University'
import Error from './Pages/Error'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
<Router>
  <Navbar />
<Routes>
  <Route  path='/' element={<Universities />}/>
  <Route  path='/university/:id' element={<University />}/>
  <Route  path='/about' element={<About />}/>
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />}/>
  <Route  path='*' element={<Error />}/>
</Routes>
<Footer />
</Router>
  )
}

export default App
