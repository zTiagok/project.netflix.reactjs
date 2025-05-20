import { Plus } from "lucide-react";

type DetailsDropdownProps = {
  title: string;
  children: React.ReactNode;
};

export default function DetailsDropdown(props: DetailsDropdownProps) {
  return (
    <details className="h-full w-full bg-neutral-700/60">
      <summary className="flex list-none justify-between p-5 text-lg font-bold">
        {props.title}
        <Plus size={32} />
      </summary>
      <div className="px-5 pb-5">{props.children}</div>
    </details>
  );
}
