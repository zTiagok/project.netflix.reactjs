import { CertifiedBadgeIcon } from "~/components/Icons";

interface StepFourInterface {
  email: string;
  onButtonClick: () => void;
}

export default function StepFour({ email, onButtonClick }: StepFourInterface) {
  return (
    <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-6 text-center">
      <div className="">
        <div className="mb-8">
          <CertifiedBadgeIcon />
        </div>
        <span className="text-sm uppercase">
          Step <b>4</b> of <b>4</b>
        </span>
        <h2 className="font-bold text-black">
          Great, now let’s verify your email
        </h2>
      </div>

      <p className="text-black">
        Click the link we sent to <b>{email}</b> to verify.
      </p>

      <p className="text-black">
        Verifying your email will improve account security and help you receive
        important Netflix communications.
      </p>

      <button
        onClick={onButtonClick}
        className="w-full cursor-pointer rounded-sm bg-gray-300 py-4 text-2xl font-bold text-black hover:brightness-110"
      >
        Skip
      </button>
    </div>
  );
}
