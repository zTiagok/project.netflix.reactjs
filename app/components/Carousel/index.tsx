import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { common } from "~/data";
import MovieCard from "../MovieCard";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={7}
      speed={1000}
      slidesPerGroup={7}
      allowTouchMove={false}
      navigation
      modules={[Navigation]}
      className="rounded-md"
    >
      {/* {Array.from({ length: 10 }).map((_data, index) => (
        <SwiperSlide className="overflow-visible" key={`movie-card-${index}`}>
          <MovieCard id={index} key={`movie-card-${index}`} />
        </SwiperSlide>
      ))} */}
      {common.movie_cards.map((data, index) => (
        <SwiperSlide className="" key={`movie-card-${index}`}>
          <MovieCard movie={data} id={index} key={`movie-card-${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
