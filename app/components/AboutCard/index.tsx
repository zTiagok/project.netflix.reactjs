
export default function AboutCard({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <div className='bg-neutral-800/50 p-4 h-full gap-4 w-full border-2 border-neutral-800 rounded-xl flex flex-col justify-between'>
      <div className="flex flex-col gap-2">
        <h5 className="font-bold">
          {title}
        </h5>
        <span className="font-medium text-neutral-400">
          {description}
        </span>
      </div>

      <img src={image || ""} alt="Image" className="self-end"/>
    </div>
  )
}
