import { Plus } from "lucide-react";

type DetailsDropdownProps = {
  title: string;
  children: React.ReactNode;
};

export default function DetailsDropdown(props: DetailsDropdownProps) {
  return (
    <details className="h-full w-full bg-neutral-700/60 text-2xl">
      <summary className="flex list-none justify-between border-b border-neutral-950 p-6">
        {props.title}
        <Plus size={32} />
      </summary>
      <div className="px-5 py-5">{props.children}</div>
    </details>
  );
}
