import { EmailLetterIcon } from "~/components/Icons";

interface StepTwoInterface {
  email: string;
  onButtonClick: () => void;
}

export default function StepTwo({ email, onButtonClick }: StepTwoInterface) {
  return (
    <div className="flex h-full w-full max-w-lg flex-col items-center justify-center gap-6 text-center">
      <EmailLetterIcon />
      <div className="">
        <span className="text-sm uppercase">
          Step <b>2</b> of <b>4</b>
        </span>
        <h2 className="font-bold">Check your inbox</h2>
      </div>

      <p className="text-lg text-black">
        We sent a sign-up link to <b>{email}</b>.
        <br />
        Tap the link in the email to finish setting up your account.
      </p>

      <button
        onClick={onButtonClick}
        className="w-full cursor-pointer rounded-sm bg-red-600 py-4 text-2xl font-bold text-white hover:brightness-80"
      >
        Resend Link
      </button>
      <button
        onClick={onButtonClick}
        className="w-full cursor-pointer rounded-sm bg-gray-300 py-4 text-2xl font-bold text-black hover:brightness-110"
      >
        Create Password Instead
      </button>
    </div>
  );
}
