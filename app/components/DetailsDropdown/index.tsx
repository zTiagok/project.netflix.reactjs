type DetailsDropdownProps = {
  title: string;
  children: React.ReactNode;
};

export default function DetailsDropdown(props: DetailsDropdownProps) {
  return (
    <details className="bg-neutral-800/50 h-full gap-4 w-full border-2 rounded-xl border-neutral-800">
      <summary className="p-5 text-lg font-bold">{props.title}</summary>
      <div className="px-5 pb-5">{props.children}</div>
    </details>
  );
}
