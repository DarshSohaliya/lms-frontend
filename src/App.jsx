import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import NotFound from './Pages/NotFound'
import Login from './Pages/LoginPage'
import Signup from './Pages/Signup'
import CourseList from './Pages/Course/CourseList'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
         <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='courses' element={<CourseList/>}/>
      </Routes>
      
    </div>
   
  )
}

export default App
