import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';

function HomeLayout({ children }) {

     const dispath = useDispatch()
     const navigate = useNavigate()

     const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)

     const role = useSelector((state) => state?.auth?.role)
    
  function changeWidth() {
    const drawerSide = document.querySelector('.drawer-side');
    drawerSide.style.left = '0';
  }

  function hideDrawer() {
    const element = document.querySelector('.drawer-toggle');
    element.checked = false;

    const drawerSide = document.querySelector('.drawer-side');
    drawerSide.style.left = '-100%';
  }

  function handleLogout (e) {
     e.preventDefault()

    //  const res = await dispath(logout())

    // if (res?.payload?.success) {
      navigate('/')
    }
   
  

  return (
    <div className="min-h-[90vh]">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" type="checkbox" id="my-drawer" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer text-gray-500 relative"
          >
            <FiMenu
              size={'32px'}
              className="font-bold m-4"
              onClick={changeWidth}
            />
          </label>
        </div>
        <div className="drawer-side w-fit" style={{ left: '-100%' }}>
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 taex-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn && role === 'ADMIN' && (
                <li>
                    <Link to='/admin/dashboard'>Admin DashBoard</Link>
                </li>
            )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className='absolute bottom-4 w-[90%] mt-4'>
                <div className="w-full flex items-center justify-center">
                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full bg-yellow-500 '>
                        <Link to='/login'>Login</Link>
                    </button>
            
                 <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-yellow-500'>
                     <Link to='/signup'>Signup</Link>
                 </button>
                 </div>
             </li>
            )}

                  {isLoggedIn && (
              <li className='absolute bottom-4 w-[90%]'>
                <div className="w-full flex items-center justify-center">
                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full bg-yellow-500 '>
                        <Link to='/user/profile'>Profile</Link>
                    </button>
            
                 <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full bg-yellow-500'>
                     <Link onClick={handleLogout}>Logout</Link>
                 </button>
                 </div>
             </li>
            )}
          

          </ul>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
