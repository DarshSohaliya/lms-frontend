import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import NotFound from './Pages/NotFound'
import Login from './Pages/LoginPage'
import Signup from './Pages/Signup'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
         <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/courses' element={<CourseList/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/denied' element={<Denied/>}/>

      </Routes>
      
    </div>
   
  )
}

export default App
