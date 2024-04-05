import {useState} from 'react';
import {FaSearch, FaUser, FaCog} from 'react-icons/fa';

const SearchBar = () => {
    const [searchTerm,
        setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='flex justify-between items-center gap-5 pt-7'>
            <div className="relative w-full pl-28">
                <input
                    type="text"
                    id="username"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="input input-bordered w-full lg:input-md lg:w-full outline-double outline-offset-4 outline-1 outline-gray-300 rounded-full"
                    placeholder="Search here"
                    autoComplete="off"/>
                <div
                    className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                    <FaSearch className="text-gray-400" size={15}/>
                </div>
            </div>
            <div className='flex gap-4 pr-10'>
                <div className="">
                    <FaUser className="text-gray-400 mt-1 space-x-2 transition duration-100 ease-in-out transform hover:scale-110 hover:text-gray-800" size={20}/>
                </div>

                <div className="">
                    <FaCog className="text-gray-400 mt-1 space-x-2 transition duration-100 ease-in-out transform hover:scale-110 hover:text-gray-800" size={20}/>
                </div>

                <div className="avatar">
                    <div
                        className="w-8 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2 hover:ring-gray-800">
                        <img
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SearchBar;
