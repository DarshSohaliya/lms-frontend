import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function HomeLayout({ children }) {
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
          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 taex-base-content relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {children}

      <Footer />
    </div>
  );
}

export default HomeLayout;
