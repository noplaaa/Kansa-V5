import {FiUser} from "react-icons/fi"
import {IoLockClosedOutline} from "react-icons/io5"
import {AiFillGoogleCircle, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    const loginHandler = () => {
        navigate("/Dashboard");
    };

    return (
        <div className="bg-[#D4E7C5] w-screen h-screen dark:bg-[#423F3E]">
            <div
                className="container w-full h-screen flex lg:flex lg:items-center lg:justify-center mx-auto">
                <div className="flex flex-col">
                    {/* //*MOBILE */}
                    <img
                        src=""
                        className="w-[200px] h-[200px] lg:w-[90px] lg:h-[90px] mx-auto mb-4 lg:hidden dark:hidden"/>
                    <div
                        className="w-screen lg:w-[60vh] h-screen md:h-full bg-gray-100 p-8 rounded-t-[30px] md:rounded-[30px] shadow-2xl mt-auto align-bottom dark:bg-[#2B2B2B]">
                        {/* //*CARD */}
                        <img
                            src="../../images/logoNegative.png"
                            className="w-[100px] h-[100px] lg:w-[90px] lg:h-[90px] mx-auto mb-4 sm:flex hidden dark:hidden"/>
                        <form method="POST" id="login">
                            {/* welcome */}
                            <div className="justify-center item-center mb-5">
                                <p
                                    className="flex justify-center lg:justify-start font-bold text-gray-700 text-md lg:text-lg dark:text-white">Welcome back!</p>
                                <p className="flex justify-center lg:justify-start text-sm lg:text-md">please Log In to continue with us</p>
                            </div>

                            {/* <!-- username --> */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm lg:text-md mb-2 dark:text-white">Username</label>
                                <div className="relative mb-4">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <FiUser size={20}/>
                                    </div>
                                    <input
                                        type="text"
                                        id="username"
                                        className="input input-bordered input-sm pl-10 w-full lg:input-md lg:w-full lg:pl-10 outline outline-1 outline-gray-300"
                                        placeholder="example : user"
                                        autoComplete="off"
                                        required/>
                                </div>
                            </div>

                            {/* password */}
                            <div className="mb-7">
                                <label className="block text-gray-700 text-sm lg:text-md mb-2 dark:text-white">Password</label>
                                <div className="relative mb-4">
                                    <div
                                        className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <IoLockClosedOutline size={20}/>
                                    </div>
                                    <input
                                        type="password"
                                        name="pass"
                                        id="password"
                                        className="input input-bordered input-sm pl-10 w-full lg:input-md lg:w-full lg:pl-10 outline outline-1 outline-gray-300"
                                        placeholder="example : 123"
                                        required/>
                                </div>
                            </div>

                            {/*  submit  */}
                            <div className="flex flex-col mb-5 lg:mb-4">
                                <button
                                    id="loginButton"
                                    onClick={loginHandler}
                                    className="btn bg-green-500 btn-sm text-white lg:btn-md w-full g-recaptcha hover:bg-green-300 focus:btn-neutral"
                                    data-sitekey="6LcIEVooAAAAANWXcerxsKOuRAjo1sIVQfldVdQx"
                                    data-callback="onSubmit"
                                    data-action="submit">
                                    <span id="buttonText">Log In</span>
                                    <span id="loadingIndicator" className="loading loading-dots loading-md hidden"></span>
                                </button>
                            </div>

                            <div className="divider text-sm lg:text-md mb-7 lg:mb-4">or with</div>

                            {/* <!-- icon --> */}
                            <div
                                className="flex justify-center space-x-7 lg:space-x-10 mb-10 lg:mb-4 text-4xl lg:text-3xl">
                                <a href="#" className="text-blue-500" title="Google">
                                    <AiFillGoogleCircle/>
                                </a>
                                <a href="#" className="text-blue-500" title="Twitter">
                                    <AiFillTwitterCircle/>
                                </a>
                                <a href="#" className="text-blue-500" title="Facebook">
                                    <AiFillFacebook/>
                                </a>
                            </div>

                            <div
                                className="flex justify-center text-sm text-gray-700 sm:text-xs lg:text-md dark:text-white">Kansa © 2023 - All right reserved</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
