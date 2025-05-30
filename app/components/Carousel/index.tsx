import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";

export default function Carousel() {
  return (
    <Swiper
      spaceBetween={48}
      slidesPerView={7}
      slidesOffsetBefore={48}
      slidesOffsetAfter={48}
      speed={1000}
      slidesPerGroup={7}
      allowTouchMove={false}
      navigation
      modules={[Navigation]}
      className="overflow-visible rounded-md bg-blue-500"
    >
      {Array.from({ length: 10 }).map((_data, index) => (
        <SwiperSlide className="overflow-visible" key={`movie-card-${index}`}>
          <MovieCard id={index} key={`movie-card-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
