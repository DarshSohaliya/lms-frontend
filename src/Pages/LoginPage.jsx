import { useState } from "react"
import HomeLayout from "../Layouts/HomeLayout"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {toast} from 'react-hot-toast'
import {login} from '../Redux/Slices/AuthSlice'
function Login () {

   const dispatch = useDispatch()
   const navigate = useNavigate()


  const [loginData, setLoginData] = useState({
 
    email:"",
    password:"",

  })

  function handleUserInput(e){
      const {name,value} = e.target
      setLoginData({
        ...loginData,
        [name]:value
      })
  }

   

   async function onLogin(event){
    event.preventDefault()
   
    console.log(loginData);

    if (!loginData.email || !loginData.password  ) {
      toast.error("Plese fill all the details")
      return;
    }

   const response = await dispatch(login(loginData))
   console.log(response);

    if(response?.payload?.success)
      navigate('/')
     

      setLoginData({
       
        email: "",
        password: "",
      
      })
     
   }

  return ( 
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh] ">
        <form noValidate  onSubmit={onLogin} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px]">
            <h1 className="text-center text-2xl font-bold ">Login Page</h1>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input type="email" required name='email' id = 'email' placeholder="Enter Your Email" value={loginData.email} className="bg-transparent px-2 py-1 border" onChange={handleUserInput}/>
              </div>
              <div  className="flex flex-col gap-1 ">
              <label htmlFor="password" className="font-semibold">password</label>
              <input type="password" required name='password' id = 'password' value={loginData.password} placeholder="Enter Your password" className="bg-transparent px-2 py-1 border" onChange={handleUserInput}/>
              </div>
              
             <button type="submit" className="mt-2 w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                Login
             </button>

             <p className="text-center">
             Donot have an account ? <Link className='link text-accent' to="/signup">Signup</Link>
             </p>
        </form>

      </div>
    </HomeLayout>
  )
 
}

export default Login