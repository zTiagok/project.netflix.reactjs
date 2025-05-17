type MovieCardProps = {
  id: number;
};

export default function MovieCard(props: MovieCardProps) {
  return (
    <div className="ml-4 h-full w-full max-w-[12vw] rounded-md bg-orange-500">
      <div className="relative top-4 -left-4 text-6xl font-[1000] text-white">
        {props.id + 1}
      </div>
    </div>
  );
}
