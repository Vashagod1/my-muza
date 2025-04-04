import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import PlaylistsHome from "./PlaylistsHome";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const selections = [
    {
        id: 1,
        title: "Ритмы Вселенной",
        texts: "Музыка, открывающая бескрайние просторы космоса.",
        info: "341 531",
        cover: "/images/Selection/Ритмы_Вселенной.jpg",
    },
    {
        id: 2,
        title: "Тёмная Сторона",
        texts: "Звуки, скрытые в тенях ночи.",
        info: "85 081",
        cover: "/images/Selection/Тёмная_Сторона.jpg",
    },
    {
        id: 3,
        title: "Пульс Города",
        texts: "Динамика улиц, энергия мегаполиса.",
        info: "160 683",
        cover: "/images/Selection/Пульс_Города.jpg",
    },
    {
        id: 4,
        title: "Рассветные Огни",
        texts: "Музыка для начала нового дня.",
        info: "583 830",
        cover: "/images/Selection/Рассветные_Огни.jpg",
    },
    {
        id: 5,
        title: "Ночная Симфония",
        texts: "Глубокие мелодии под свет фонарей.",
        info: "300 278",
        cover: "/images/Selection/Ночная_Симфония.jpg",
    },
    {
        id: 6,
        title: "Забытые Мелодии",
        texts: "Музыка, несущая ностальгию и тёплые воспоминания.",
        info: "111 989",
        cover: "/images/Selection/Забытые_Мелодии.jpg",
    },
];

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
                {selections.map((selection) => (
                    <SwiperSlide key={selection.id}>
                        <PlaylistsHome {...selection} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
