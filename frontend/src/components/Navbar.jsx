import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser"
import { BellIcon, House, LogIn, LogOutIcon, Menu, Podcast } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";


const Navbar = () => {
    const { authUser } = useAuthUser();
    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");
    const isHomePage = location.pathname?.startsWith("/home"); 
    const isLandingPage = location.pathname === "/";


    const { logoutMutation } = useLogout();

    return (
        <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center ">
            <div className="container mx-auto px-4 sm:px-2 lg:px-8">
                <div className="flex  items-center justify-between w-full">
                    {/* Logo - Only in the chat page */}

                    {(isLandingPage || isChatPage) && (
                        <div className="">
                            <Link to={"/home"} className="flex items-center gap-2.5">
                                <Podcast className="size-9 text-primary " />
                                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                                    Vartalaap
                                </span>
                            </Link>
                        </div>

                    )}

                    {(!isLandingPage && !isChatPage) && (
                    <>
                    <div className="navbar-start hidden max-lg:flex">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <Menu />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-fit p-2 shadow">
                                <li ><Link to={"/home"} className="text-xl font-bold"> Homepage</Link></li>
                                <li><Link to={"/friends"} className="text-xl font-bold" >Friends</Link></li>
                                <li><Link to={"/ai"} className="text-xl font-bold" >ChatBot</Link></li>

                            </ul>
                        </div>
                    </div>
                        </>
                     )}


                    <div className="flex items-center gap-3 sm:gap-4 ml-auto">

                        {(!isLandingPage && !isHomePage)  &&  (
                            <>
                                <Link to={"/home"}>
                                    <button className="btn btn-ghost btn-circle">
                                        <House className="h-6 w-6 text-base-content opacity-70" />
                                    </button>
                                </Link>

                            </>
                        )}

                        {/* ThemeSelector completed */}
                        <ThemeSelector />

                        {isLandingPage && (
                            <>
                            <Link to={"/login"}>
                            <button className="btn btn-primary max-md:p-2"><LogIn/> Login</button>
                            </Link>
                            </>
                        )}

                        {!isLandingPage && (
                            <>
                           
                                <div className="flex items-center gap-3 sm:gap-4 ml-auto">
                                    <Link to={"/notifications"}>
                                        <button className="btn btn-ghost btn-circle">
                                            <BellIcon className="h-6 w-6 text-base-content opacity-70" />
                                        </button>
                                    </Link>
                                </div>



                                {/* Profile pic */}
                                <div className="avatar">
                                    <div className="w-8 rounded-full m-1">
                                        <img src={authUser?.profilePic} alt="User Avatar" rel="noreferrer" />
                                    </div>
                                </div>


                                {/* Logout button */}
                                
                                <button className="btn btn-ghost btn-circle z-40 " onClick={logoutMutation}>
                                    <LogOutIcon className="h-6 w-6 text-base-content opacity-70 ml-2" />
                                </button>

                                
                            </>
                        )}

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
