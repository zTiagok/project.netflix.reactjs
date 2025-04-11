
export default function DetailsDropdown({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <details className="bg-neutral-800/50 h-full gap-4 w-full border-2 rounded-xl border-neutral-800">
      <summary className="p-5 text-lg font-bold">{title}</summary>
      <div className="px-5 pb-5">
        {children}
      </div>
    </details>
  )
}
