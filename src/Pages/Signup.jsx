import { useState } from "react"
import HomeLayout from "../Layouts/HomeLayout"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import {toast} from 'react-hot-toast'
import { createAccount } from "../Redux/Slices/AuthSlice"
import { isEmail,isValidPassword } from "../Helpers/regexMatcher"

function Signup () {

   const dispatch = useDispatch()
   const navigate = useNavigate()

  const [previewImage, setPreviewImage] = useState("")

  const [signupData, setSignupData] = useState({
    fullName:"",
    email:"",
    password:"",
    avatar: ""
  })

  function handleUserInput(e){
      const {name,value} = e.target
      setSignupData({
        ...signupData,
        [name]:value
      })
  }

   function getImage(event) {
        event.preventDefault()

        const uploadedImage = event.target.files[0]

        if (uploadedImage) {
          setSignupData({
            ...signupData,
            avatar:uploadedImage
          })

          const fileReader = new FileReader()
          fileReader.readAsDataURL(uploadedImage)
          fileReader.addEventListener('load',function () {
            setPreviewImage(this.result)
            return
          })


        }
   }

   async function createNewAccount(event){
    event.preventDefault()
   
    console.log(signupData);

    if (!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar ) {
      toast.error("Plese fill all the details")
      return;
    }

    if (signupData.fullName.length < 5) {
       toast.error("Name should ne atleast of 5 characters")
       return;
    }

    if (!isEmail(signupData.email)) {
      toast.error("Invalid email id")
    }
    if(!isValidPassword(signupData.password))
    {
      toast.error("Password should be 6 - 16 character long with atleast a number and special character")
      return
    }
    
    // const formData = new FormData();
    //     formData.append("fullName", signupData.fullName);
    //     formData.append("email", signupData.email);
    //     formData.append("password", signupData.password);
    //     formData.append("avatar", signupData.avatar);



   const response = await dispatch(createAccount(signupData))
   console.log(response);

    if(response?.payload?.success)
      navigate('/')
     

      

      setSignupData({
        fullName: "",
        email: "",
        password: "",
        avatar:""
      })
      setPreviewImage("")
   }

  return ( 
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh] ">
        <form noValidate  onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px]">
            <h1 className="text-center text-2xl font-bold ">Registration Page</h1>
            <label htmlFor="image_upload" className="cursor-pointer">
                {previewImage ? (
                    <img src={previewImage}  className="w-24 h-24 rounded-full m-auto"/> ) :
                    (
                        <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                    )

                }
            </label>
            <input onChange={getImage} type="file" className="hidden"id='image_upload' name="image_upload"  accept='.jpg,.jpeg,.png,.svg' />
             
            <div className="flex flex-col gap-1 ">
              <label htmlFor="fullName" className="font-semibold">Full Name</label>
              <input type="text" required name='fullName' id = 'fullName' placeholder="Enter Your FullName" value={signupData.fullName} className="bg-transparent px-2 py-1 border" onChange={handleUserInput} />
              </div>
            <div className="flex flex-col gap-1 ">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input type="email" required name='email' id = 'email' placeholder="Enter Your Email" value={signupData.email} className="bg-transparent px-2 py-1 border" onChange={handleUserInput}/>
              </div>
              <div  className="flex flex-col gap-1 ">
              <label htmlFor="password" className="font-semibold">password</label>
              <input type="password" required name='password' id = 'password' value={signupData.password} placeholder="Enter Your password" className="bg-transparent px-2 py-1 border" onChange={handleUserInput}/>
              </div>
              
             <button type="submit" className="mt-2 w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
              Create account
             </button>

             <p className="text-center">
              Alrady have an account ? <Link className='link text-accent' to="/login">Login</Link>
             </p>
        </form>

      </div>
    </HomeLayout>
  )
 
}

export default Signup