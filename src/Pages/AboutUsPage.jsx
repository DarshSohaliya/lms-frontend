import HomeLayout from "../Layouts/HomeLayout"
import aboutMainImage from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billGates from '../assets/Images/billGates.png'
import einstein from '../assets/Images/einstein.png'
import nelsonMandela from '../assets/Images/nelsonMandela.png'
import steveJobs from '../assets/Images/steveJobs.png'

function AboutUs() {
    return (
          <HomeLayout>
            <div className="  pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10 ">
                    <section className="w-1/2 space-y-10">
                     <h1 className="text-5xl text-yellow-500 font-semibold">
                        Affordable and quality education
                     </h1>
                     <p className="text-xl text-gray-200 ">
                        Our goal is to provider the affordable and quality education to the world.
                        We are providing the platform for the aspiring teachers and students to share
                        their skills , creativity and knowledge to each other to empower and contribute
                         in the growth and wellness of mankind.               
                          </p>
                    </section>
                 <div className="w-1/2">
                   <img src={aboutMainImage} className="drop-shadow-2xl" id="test1" style={{
                    filter :'drop-ShadowRoot(0px 10px 10px rgb(0,0,0))'

                   }}  alt="about main image"/>
                  
                 </div>

                </div>
  <div className="carousel w-1/2 my-16 m-auto">
  <div id="slide1" className="carousel-item relative w-full">
   <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
   <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
   <p className="text-xl text-gray-200">
    {"“To succeed in your mission, you must have single-minded devotion to your goal.”"}
   </p>
   <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
   </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-xl text-gray-200">
    {"“Patience is a key element of success.”"}
   </p>
   <h3 className="text-2xl font-semibold">Bill Gates</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
   <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
   <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
   <p className="text-xl text-gray-200">
    {"Be a yardstick of quality."}
   </p>
   <h3 className="text-2xl font-semibold">Steve Jobs</h3>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle ">❯</a>
    </div>
   </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
    <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
    <p className="text-xl text-gray-200">
    {"Learn from yesterday, live for today, hope for tomorrow..."}
   </p>
   <h3 className="text-2xl font-semibold">Einstein</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
    </div>
    </div>
   
    <div id="slide5" className="carousel-item relative w-full">
   <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
   <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
   <p className="text-xl text-gray-200">
    {"“Education is the most powerful weapon which you can use to change the world.” "}
   </p>
   <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
    <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
   </div>
  </div>
</div>
</div>

            </HomeLayout>
    )
}


export default AboutUs