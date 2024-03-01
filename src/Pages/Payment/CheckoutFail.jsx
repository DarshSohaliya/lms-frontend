import { RxCrossCircled } from "react-icons/rx"
import HomeLayout from "../../Layouts/HomeLayout"
import { Link } from "react-router-dom"

function CheckoutFail() {
    return (
         <HomeLayout>
            <div className="  min-h-[90vh] flex items-center justify-center text-white">
                    <div className=" relative w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg">
                      <h1 className="bg-red-500 absolute top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg text-center">Payment Failed</h1>
                      <div className="px-4 flex flex-col items-center justify-center space-y-2">
                        <div className="text-center space-y-1"> 
                            <h2 className="text-lg font-semibold">Oops ! Your payment failed.</h2>
                            <p className="text-left">
                               Plese try again later
                            </p>
                        </div>
                        <RxCrossCircled className="text-red-500 text-5xl"/>
                      </div>
                      <Link to='/checkout' className="bg-red-500 hover:bg-red-600 transition-all ease-in-out  duration-300 absolute bottom-0 py-2 w-full text-lg font-semibold text-center rounded-br-lg rounded-bl-lg">
                        <button>
                       try again
                        </button>
                      </Link>
                    </div>
                    
            </div>
         </HomeLayout>
    )
}
export default CheckoutFail