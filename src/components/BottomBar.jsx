// import React from 'react';

const Sidebar = () => {

    return (
        <div>
            {/* <!-- BOTTOM BAR--> */}
            <div
                className="fixed bottom-0 left-0 right-0 z-10  flex item-center justify-center mx-auto bg-base-100 border-t border-gray-300 lg:hidden">
                <ul className="menu menu-horizontal flex items mx-auto py-2 gap-5">
                    <li>
                        <a
                            href="dashboard.blade.php"
                            className="flex items-center space-x-2 transition duration-100 ease-in-out transform hover:scale-110 hover:bg-[99BC85]">
                            {/*
                    <!-- recommendation --> */}
                            {/* <?php include "icons/home.svg" ?> */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="menu.blade.php"
                            className="flex items-center space-x-2 transition duration-100 ease-in-out transform hover:scale-110 hover:bg-[99BC85]">
                            {/*
                    <!-- menu --> */}
                            {/* <?php include "icons/menu.svg" ?> */}
                        </a>
                    </li>
                    <li>
                        <a
                            href="history.blade.php"
                            className="flex items-center space-x-2 transition duration-100 ease-in-out transform hover:scale-110 hover:bg-[99BC85]">
                            {/*
                    <!-- history --> */}
                            {/* <?php include "icons/history.svg" ?> */}
                        </a>
                    </li>
                    <li>
                        {/* <!-- Ikon History --> */}
                        <div className="dropdown dropdown-top">
                            <label tabIndex="0">
                                {/* <?php include "icons/setting.svg" ?> */}
                            </label>
                            <ul
                                tabIndex="0"
                                className="mb-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-200 rounded-box w-52 ">
                                <li>
                                    <a
                                        className="flex justify-between items-center transition duration-100 ease-in-out transform hover:scale-110">
                                        <span className="font-bold">Profile</span>
                                        {/*
                                <!-- Ikon User --> */}
                                        {/* <span className="badge badge-warning"> <?php echo $_SESSION['Rolenya']; ?></span>
                                */}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="flex justify-between items-center transition duration-100 ease-in-out transform hover:scale-110">
                                        <span className="font-bold">Settings</span>
                                        {/*
                                <!-- Ikon Settings --> */}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="../../../config/controllers/logout/Logout.php"
                                        className="flex justify-between items-center transition duration-100 ease-in-out transform hover:scale-110">
                                        <span className="font-bold">Logout</span>
                                        {/*
                                <!-- Ikon Logout --> */}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {/* BOTTOM BAR */}
        </div>
    );
};

export default Sidebar;