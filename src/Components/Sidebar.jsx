import { Link } from "react-router-dom";
import user from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";
import { useNavigate } from "react-router-dom";





function Sidebar() {
    let navigate = useNavigate();

    const  logOut = () => {
        localStorage.removeItem('token');

        navigate(`/login`)
       
      }

    return (
        <>
        <div className="flex md:flex-col justify-between items-center  w-full md:w-28 py-6 h-15 md:h-screen dark:bg-gray-800 text-center text-white bottom-0 absolute md:static">
            <div className="md:w-full mx-1 md:mx-0 flex md:flex-col items-center">
                <img className="md:w-1/2" src={user} alt="User icon" />
                <span className="px-1 md:p-0">
                    Username
                </span>
            </div>

            <ul className="flex md:block">
                <li className="rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link className="inline-block px-2 md:p-0 md:py-3 " to="/ships">Ships</Link>
                </li>
                <li className="rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Link className="inline-block px-2 md:p-0 md:py-3" to="/reservations">Reservations</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <button onClick={logOut} className="flex items-center">
                        Logout
                        <img className="mx-1 -mb-0.5 w-6" src={logout} alt="Logout button" />
                    </button>
                </li>
            </ul>
        </div>

      
        
          </>

    );
}

export default Sidebar;