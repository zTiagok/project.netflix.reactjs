type MovieProps = {
  title: string;
  description: string;
  tags: string[];
  logo: string;
  hero: string;
  thumbnail: string;
};

type MovieCardProps = {
  id: number;
  movie: MovieProps;
};

export default function MovieCard(props: MovieCardProps) {
  return (
    <div
      className={`mx-8 flex h-full flex-col justify-end rounded-md bg-orange-500 bg-cover transition-transform duration-400 hover:scale-110 hover:cursor-pointer`}
      style={{ backgroundImage: `url(${props.movie.thumbnail})` }}
    >
      <div
        className={`relative -left-6 flex w-fit items-center justify-center text-[86px] font-[1000] text-white select-none before:absolute before:flex-1 before:text-[79px] before:text-black before:content-[attr(data-number)]`}
        data-number={props.id + 1}
      >
        {props.id + 1}
      </div>
    </div>
  );
}
