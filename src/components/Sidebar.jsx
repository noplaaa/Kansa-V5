import {FaPowerOff} from "react-icons/fa";
import {CgMenuGridO} from "react-icons/cg";
import {MdOutlineRecommend} from "react-icons/md";
import {LuHistory} from "react-icons/lu";
import logoNegative from "../images/logoNegative.png"

const Sidebar = () => {
    return (
        <div
            className="sidebar bg-transparent flex flex-col justify-center fixed left-0 w-fit h-full ">
            {/* logo */}

            {/* menu */}
            <ul className="menu menu-vertical align-middle">
                    <div className="">
                        <img src={logoNegative} width="65px" height="65px"/>
                    </div>
                <li className="mb-4">
                    <a
                        href="dashboard.blade.php"
                        className="w-fit h-[55px] flex items-center mx-auto space-x-2 transition duration-100 ease-in-out transform hover:scale-110 bg-[#99BC85] hover:bg-[#E1F0DA] rounded-2xl shadow-xl">
                        <MdOutlineRecommend size={25}/>
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href="dashboard.blade.php"
                        className="w-fit h-[55px] flex items-center mx-auto space-x-2 transition duration-100 ease-in-out transform hover:scale-110 bg-[#99BC85] hover:bg-[#E1F0DA] rounded-2xl shadow-xl">
                        <CgMenuGridO size={25}/>
                    </a>
                </li>
                <li className="mb-4">
                    <a
                        href="menu.blade.php"
                        className="w-fit h-[55px] flex items-center mx-auto space-x-2 transition duration-100 ease-in-out transform hover:scale-110 bg-[#99BC85] hover:bg-[#E1F0DA] rounded-2xl shadow-xl">
                        <LuHistory size={25}/>
                    </a>
                </li>
                <li>
                    <a
                        href="history.blade.php"
                        className="w-fit h-[55px] flex items-center mx-auto space-x-2 transition duration-100 ease-in-out transform hover:scale-110 bg-[#99BC85] hover:bg-[#E1F0DA] rounded-2xl shadow-xl">
                        <FaPowerOff size={25}/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
