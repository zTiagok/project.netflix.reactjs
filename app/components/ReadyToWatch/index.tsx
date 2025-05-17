export default function ReadyToWatch() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="flex w-full justify-center space-x-2">
        <input
          type="email"
          className="min-w-[350px] rounded-full border-2 border-neutral-600 bg-neutral-600/75 px-4 py-3 text-sm"
          placeholder="Email address"
        />
        <button className="min-w-[200px] cursor-pointer rounded-full bg-red-600 text-xl font-semibold text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
