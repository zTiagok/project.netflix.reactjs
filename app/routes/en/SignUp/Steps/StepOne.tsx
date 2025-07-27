import Devices from "~/assets/devices.png";

interface StepOneInterface {
  email: string;
  onButtonClick: () => void;
}

export default function StepOne({ email, onButtonClick }: StepOneInterface) {
  return (
    <div className="flex h-full w-2/3 max-w-2xl flex-col items-center justify-center gap-6 text-center">
      <img src={Devices} className="h-20" />
      <div className="">
        <span className="text-sm uppercase">
          Step <b>1</b> of <b>4</b>
        </span>
        <h2 className="font-bold">Finish setting up your account</h2>
      </div>

      <p className="text-lg text-black">
        We'll send a sign-up link to <b>{email}</b> so you can use Netflix
        without a password on any device at any time.
      </p>

      <button
        onClick={onButtonClick}
        className="mt-4 w-full cursor-pointer rounded-sm bg-red-600 py-6 text-2xl font-bold text-white hover:brightness-80"
      >
        Send Link
      </button>
    </div>
  );
}
