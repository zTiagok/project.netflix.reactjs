export default function MovieCard({ id }: { id: number }) {
  return (
    <div className="ml-4 bg-orange-500 w-full h-full rounded-md">
      <div className="text-white font-[1000]  text-6xl relative -left-4 top-4">{id+1}</div>
    </div>
  )
}
