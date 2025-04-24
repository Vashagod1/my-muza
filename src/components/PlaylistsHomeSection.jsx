import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import PlaylistsHome from "./PlaylistsHome";
import playlistsData from "../../public/data/PlaylistsData";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function PlaylistsHomeSection() {
    return (
        <div className="set-section">
            <h2 className="set-section__title">Послушаем?</h2>
            <Swiper
                allowTouchMove={true}
                simulateTouch={true}
                spaceBetween={20}
                slidesPerView={2.5}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Navigation, Pagination]}
                grabCursor={true}
                speed={650}

            >
                {playlistsData.map((playlist) => (
                    <SwiperSlide key={playlist.id}>
                        <PlaylistsHome {...playlist} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    );
}
