import { CheckIcon } from "lucide-react";

interface StepFiveInterface {
  onButtonClick: () => void;
}

export default function StepFive({ onButtonClick }: StepFiveInterface) {
  return (
    <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-6 text-center">
      <div className="flex flex-col items-center">
        <div className="mb-8 h-fit w-fit rounded-full border-2 border-red-500 p-2">
          <CheckIcon strokeWidth={4} className="text-red-500" />
        </div>
        <span className="text-sm uppercase">
          Step <b>5</b> of <b>5</b>
        </span>
        <h2 className="font-bold">Choose your plan.</h2>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <div className="flex items-start justify-start gap-2">
          <CheckIcon className="size-8 shrink-0 text-red-500" />
          <span className="text-start text-lg">
            No commitments, cancel anytime.
          </span>
        </div>

        <div className="flex items-start justify-start gap-2">
          <CheckIcon className="size-8 shrink-0 text-red-500" />
          <span className="text-start text-lg">
            Endless entertainment for one low price.
          </span>
        </div>

        <div className="flex items-start justify-start gap-2">
          <CheckIcon className="size-8 shrink-0 text-red-500" />
          <span className="text-start text-lg">
            Enjoy Netflix on all your devices.
          </span>
        </div>
      </div>

      <button
        onClick={onButtonClick}
        className="w-full cursor-pointer rounded-sm bg-red-600 py-4 text-xl font-bold tracking-wide text-white"
      >
        Next
      </button>
    </div>
  );
}
