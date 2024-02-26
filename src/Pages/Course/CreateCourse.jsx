import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createNewCourse } from "../../Redux/Slices/CourseSlice"
import HomeLayout from "../../Layouts/HomeLayout"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

function CreateCourse() {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userInput,setUserInput] = useState({
    title:"",
    category:"",
    createdBy:"",
    description:"",
    thumbnail:null,
    previewImage:""

  })

  const handleImageUpload = (e) => {
    e.preventDefault()
    const uploadImage = e.target.files[0]
    if (uploadImage) {
       const fileReader = new FileReader()
       fileReader.readAsDataURL(uploadImage)
       fileReader.addEventListener("load",function() {
        setUserInput({
          ...userInput,
          previewImage:this.result,
          thumbnail:uploadImage
        })
       })

    }
  }

  const handleUserInput = (e) => {
    const {name,value} = e.target
    setUserInput({
      ...userInput,
      [name]:value
    })
  }

 async function onFormSubmit (e) {
    e.preventDefault()

    if(!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy){
      toast.error("All Field Are Required")
      return
    }

    const response = await dispatch(createNewCourse(userInput))
       if (response?.payload?.success) {
          setUserInput({
            title:"",
            category:"",
            createdBy:"",
            description:"",
            thumbnail:null,
            previewImage:""  
          })
       }
    navigate('/courses')
  }

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
      <form on Submit={onFormSubmit} className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative">

         <Link className='absolute top-8  text-2xl link text-accent cursor-pointer'>
          <AiOutlineArrowLeft/>
          
         </Link>
         <h1 className="text-center text-2xl font-bold">
          Create New Course
         </h1>
         <main className="grid grid-cols-2 gap-x-10">
          <div className="gap-y-6">
           <div >
             <label className="cursor-pointer" htmlFor="image_uploads">
                    {userInput.previewImage ? (<img className="w-full h-44 m-auto border" src={userInput.previewImage}/>) : (
                      <div className="w-full h-44 m-auto flex items-center justify-center border" >
                        <h1 className="font-bold text-lg ">Upload Your Course thumbnail</h1>
                      </div>
                    )}
             </label>
             <input type="file" className="hidden" id="image_uploads" accept=".jpg,.jpeg,.png"  name="image_uploads" onChange={handleImageUpload}/>
           </div>
           <div className="flex flex-col gap-1 ">
               <label className="text-lg font-semibold " htmlFor="title">
                Course title
               </label>
               <input type="text" name="title" id="title" required placeholder="Enter Course title" className="bg-transparent px-2 py-1 border" value={userInput.title} onChange={handleUserInput}/>
           </div>
          </div>
         <div className="flex flex-col gap-1">
         <div className="flex flex-col gap-1 ">
               <label className="text-lg font-semibold " htmlFor="createdBy">
                Course Instructor
               </label>
               <input type="text" name="createdBy" id="createdBy" required placeholder="Enter Course instructor" className="bg-transparent px-2 py-1 border" value={userInput.createdBy} onChange={handleUserInput}/>
           </div>
           <div className="flex flex-col gap-1 ">
               <label className="text-lg font-semibold " htmlFor="category">
                Course Category
               </label>
               <input type="text" name="category" id="category" required placeholder="Enter Course category" className="bg-transparent px-2 py-1 border" value={userInput.category} onChange={handleUserInput}/>
           </div>
           <div className="flex flex-col gap-1 ">
               <label className="text-lg font-semibold " htmlFor="description">
                Course description
               </label>
               <textarea type="text" name="description" id="description" required placeholder="Enter Course description" className="bg-transparent px-2 py-1 h-24 overflow-y-scroll resize-none border" value={userInput.description} onChange={handleUserInput}/>
           </div>
         </div>
         </main>
           <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all duration-300 py-2 rounded-sm font-semibold text-lg">
            Create Course
           </button>
      </form>
      </div>
    </HomeLayout>
  )
}
export default CreateCourse