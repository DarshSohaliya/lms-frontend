import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUsPage'
import NotFound from './Pages/NotFound'
import Login from './Pages/LoginPage'
import Signup from './Pages/Signup'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourseDescription from './Pages/Course/CourseDescription'
import RequireAuth from './components/Auth/RequireAuth'
import CreateCourse from './Pages/Course/CreateCourse'
import Profile from './Pages/User/Profile'
import EditProfile from './Pages/User/EditProfile'
import Checkout from './Pages/Payment/Checkout'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import CheckoutFail from './Pages/Payment/CheckoutFail'
import Displaylecture from './Pages/Dashboard/Displaylecture'
import AddLecture from './Pages/Dashboard/AddLecture'

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
        <Route path="/denied" element={<Denied />} />
        <Route path='/course/description' element={<CourseDescription/>}/>
            
          <Route element={<RequireAuth allowedRole={["ADMIN"]}/>}>
                 <Route path='/course/create' element={<CreateCourse/>}/>
        <Route path='/course/addlecture' element={<AddLecture/>}/>

          </Route>
          <Route element={<RequireAuth allowedRole={["ADMIN","USER"]}/>}>
        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/user/editprofile' element={<EditProfile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/checkout/success' element={<CheckoutSuccess/>}/>
        <Route path='/checkout/fail' element={<CheckoutFail/>}/>
        <Route path='/course/displaylecture' element={<Displaylecture/>}/>

          </Route>
      </Routes>
      
    </div>
   
  )
}

export default App
