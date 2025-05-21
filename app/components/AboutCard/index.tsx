import { IconNames } from "~/data";
import { ArrowBubbleIcon, BuddiesIcon, TelescopeIcon, TVIcon } from "../Icons";

type AboutCardProps = {
  title: string;
  description: string;
  icon: IconNames;
};

const iconMap = {
  [IconNames.TV]: <TVIcon />,
  [IconNames.ArrowBubble]: <ArrowBubbleIcon />,
  [IconNames.Telescope]: <TelescopeIcon />,
  [IconNames.Buddies]: <BuddiesIcon />,
};

export default function AboutCard(props: AboutCardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 rounded-xl border-neutral-800 bg-linear-to-br from-[#192247] to-[#210e17] p-4">
      <div className="flex h-full flex-col justify-between gap-2">
        <div className="space-y-2">
          <p className="text-2xl">{props.title}</p>
          <p className="leading-tight text-neutral-400">{props.description}</p>
        </div>

        <div className="self-end">{iconMap[props.icon]}</div>
      </div>
    </div>
  );
}
