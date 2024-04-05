import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Anigas = () => {
    return (
        <Swiper
            slidesPerView={4.5}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
            clickable: true
        }}
            effect={'creative'}
            modules={[Pagination]}
            className="mySwiper w-[750px] mx-auto ">
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                    alt="Burger"/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                    alt="Burger"/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Anigas;
