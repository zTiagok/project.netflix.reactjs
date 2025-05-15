type AboutCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="bg-neutral-800/50 p-4 h-full gap-4 w-full border-2 border-neutral-800 rounded-xl flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold">{props.title}</h5>
        <span className="font-medium text-neutral-400">
          {props.description}
        </span>
      </div>

      <img src={props.image || undefined} alt="Image" className="self-end" />
    </div>
  );
}
