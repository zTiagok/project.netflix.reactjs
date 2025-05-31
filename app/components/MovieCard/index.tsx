import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ChevronRight, X } from "lucide-react";
import { useState } from "react";

type MovieProps = {
  title: string;
  description: string;
  tags: string[];
  logo: string;
  hero: string;
  thumbnail: string;
};

type MovieCardProps = {
  id: number;
  movie: MovieProps;
};

export default function MovieCard(props: MovieCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mx-8 flex h-full flex-col justify-end rounded-md bg-orange-500 bg-cover transition-transform duration-400 hover:scale-110 hover:cursor-pointer`}
      onClick={() => setIsOpen(true)}
      style={{ backgroundImage: `url(${props.movie.thumbnail})` }}
    >
      <div
        className={`relative -left-6 flex w-fit items-center justify-center text-[86px] font-[1000] text-white select-none before:absolute before:flex-1 before:text-[79px] before:text-black before:content-[attr(data-number)]`}
        data-number={props.id + 1}
      >
        {props.id + 1}
      </div>

      <Dialog className="" onClose={() => setIsOpen(false)} open={isOpen}>
        <div className="fixed inset-0 z-50 flex w-screen items-center justify-center bg-black/60 p-4">
          <DialogPanel className="relative flex h-[60vh] max-w-2xl flex-col space-y-4 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-900">
            <div
              className="z-0 h-[35vh] max-w-2xl bg-cover"
              style={{ backgroundImage: `url(${props.movie.hero})` }}
            />

            <div className="absolute inset-0 h-[35vh] max-w-2xl bg-gradient-to-t from-neutral-900 from-5% to-transparent" />

            <button
              className="absolute self-end p-6 hover:cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="z-20 -mt-32 flex flex-1 flex-col justify-between gap-8 p-8">
              <div className="flex flex-col gap-4">
                <DialogTitle className="w-[45%] select-none">
                  <img src={props.movie.logo} alt={props.movie.title} />
                </DialogTitle>

                <div className="flex gap-2">
                  {props.movie.tags.map((tag) => (
                    <p
                      key={tag}
                      className="rounded-sm bg-neutral-700 px-2 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </p>
                  ))}
                </div>

                <Description>{props.movie.description}</Description>
              </div>

              <div className="flex">
                <button
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-sm bg-red-600 px-2 py-2 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <p>Get Started</p>

                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
