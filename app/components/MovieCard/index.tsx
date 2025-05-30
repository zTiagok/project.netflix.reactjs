type MovieCardProps = {
  id: number;
};

export default function MovieCard(props: MovieCardProps) {
  return (
    <div className="flex h-full flex-col justify-end rounded-md bg-orange-500 transition-transform duration-400 hover:scale-110">
      <div
        className={`relative -left-6 flex w-fit items-center justify-center text-[86px] font-[1000] text-white before:absolute before:flex-1 before:text-[79px] before:text-black before:content-[attr(data-number)]`}
        data-number={props.id + 1}
      >
        {props.id + 1}
      </div>
    </div>
  );
}
