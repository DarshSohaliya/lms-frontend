import { useState } from "react"
import HomeLayout from "../Layouts/HomeLayout"
import toast from "react-hot-toast";
import { isEmail } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axiosInstance";

function Contact() {

  const [userInput , setUserInput] = useState({
    name:"",
    email:"",
    message:""
  })

   function handleInputChange(e){
      const {name,value} = e.target
      console.log(name,value);
      setUserInput({
        ...userInput,
        [name] : value
      })
   }

  async function onFormSubmit(e){
              e.preventDefault()

              if(!userInput.email || !userInput.name || !userInput.message ){
                     toast.error("Plese Fill All The Filed")
                     return
              }

         if (!isEmail(userInput.email)) {
            toast.error("Invalid Email")
            return
         }   
        
         try {
            console.log("ghj");
            const response = axiosInstance.post('/contact',userInput)
           toast.promise(response,{
            loading:"Submitting your message...",
            success:"Form submitted successfully",
            error:"Failed to submit the form"
           })
           console.log(response);
           const contactResponse = await response
           if (contactResponse?.success) {
             setUserInput({
                name:"",
                email:"",
                message:""
             })
           }
         } catch (error) {
            toast.error("Operation Failed")
         }
   }

     return(
       <HomeLayout>
        <div className="flex items-center justify-center h-[100vh]">
        <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
               <h1 className="text-3xl font-semibold">
                Contact Form
               </h1>
               <div className="flex flex-col w-full gap-1">
                  <label htmlFor="name" className="text-xl font-semibold">Name</label>
                  <input type="text" name="name" id="name" onChange={handleInputChange} value={userInput.name} placeholder="Enter Your Name" className="bg-transparent border px-2 py-1 rounded-sm"/>
               </div>
               <div className="flex flex-col w-full gap-1">
                  <label htmlFor="email" className="text-xl font-semibold">Email</label>
                  <input type="text" name="email" id="email" onChange={handleInputChange} value={userInput.email} placeholder="Enter Your Email" className="bg-transparent border px-2 py-1 rounded-sm"/>
               </div>     
               <div className="flex flex-col w-full gap-1">
                  <label htmlFor="message" className="text-xl font-semibold">Message</label>
                  <textarea  name="message" id="message" onChange={handleInputChange} value={userInput.message} placeholder="Enter Your Message" className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"/>
               </div>     
            
                <button className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer" type="submit">
                    Submit</button>

        </form>
        </div>
       </HomeLayout>
     )
}
export default Contact