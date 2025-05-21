import type { IconNames } from "~/data";

type AboutCardProps = {
  title: string;
  description: string;
  icon: IconNames;
};

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 rounded-xl border-neutral-800 bg-linear-to-br from-[#192247] to-[#210e17] p-4">
      <div className="flex flex-col gap-2">
        <h5 className="font-bold">{props.title}</h5>
        <span className="font-medium text-neutral-400">
          {props.description}
        </span>
      </div>
    </div>
  );
}
