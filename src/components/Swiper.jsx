import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    return (
            <Swiper
                slidesPerView={'1.4'}
                spaceBetween={20}
                loop={true}
                pagination={{
                clickable: true
            }}
                effect={'creative'}
                modules={[Pagination]}
                className="swiper h-full mb-10">
                <SwiperSlide className="relative">
                    <img
                        src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                        className="w-full h-[250px]"/>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                        className="w-full h-[250px]"/>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                        className="w-full h-[250px]"/>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img
                        src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                        className="w-full h-[250px]"/>
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                </SwiperSlide>
            </Swiper>
    );
};

export default Slider;
