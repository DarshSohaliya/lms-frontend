import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";
import HomeLayout from "../../Layouts/HomeLayout";
import CourseCard from "../../components/CourseCard";
import toast from "react-hot-toast";
// import {useLocation } from "react-router-dom";
// import courseData from '../../Redux/Slices/CourseSlice'

 function CourseList () {
    const dispatch = useDispatch()
    // console.log(courseData);
    // const location = useLocation();

    const courseData = useSelector((state) => state.courses.courseData);

//    console.log(coursesData );
    
   useEffect(() => {
    console.log(courseData);
    (async () => {
        try {
      await dispatch(getAllCourses());
            
        } catch (error) {
            toast.error("Error fetching",error);
        }
    })();
  }, []);


    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white ">
                <h1 className="text-center text-3xl font-semibold mb-5">Explore the courses made by <span className="font-bold text-yellow-500">Industry experts</span> </h1>
               {/* <CourseCard> */}
               <div className="mb-10 flex flex-wrap gap-14">
                       {courseData?.map((element) => {
                        return <CourseCard key={element._id} data={element}/>
                       })}  
                </div>
               {/* </CourseCard> */}
            </div>
        </HomeLayout>
    )
}

export default CourseList