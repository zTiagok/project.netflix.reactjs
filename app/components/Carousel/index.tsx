import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={7}
      slidesOffsetBefore={8}
      slidesPerGroup={7}
      allowTouchMove={false}
      navigation
      modules={[Navigation]}
      className="overflow-visible rounded-md bg-blue-500 px-32"
    >
      {Array.from({ length: 10 }).map((_data, index) => (
        <SwiperSlide key={`movie-card-${index}`}>
          <MovieCard id={index} key={`movie-card-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
