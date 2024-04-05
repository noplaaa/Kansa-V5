// import React from 'react';
import BottomBar from '../../components/BottomBar';
import SearchBar from '../../components/SearchBar';
import Swiper from '../../components/Swiper';
import Anigas from '../../components/menuSwiper';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import '../../App.css'

// import {FaSearch} from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className='w-full h-full inter'>
            {/* navigation */}
            <Sidebar/>
            <BottomBar/>

            <div className=''>
                <SearchBar/>
                <div className='p-10 pl-280059886079 -z-10'>
                    <p className='text-3xl font-bold mb-4'>Apa yang baru?</p>
                    <Swiper/>
                    <p className='text-3xl font-bold mb-4'>Kategori</p>
                    <Anigas/>
                </div>
                <br/>
                <br/>
                <br/>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Dashboard;