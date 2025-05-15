export default function ReadyToWatch() {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-sm">
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="space-x-2 w-full flex justify-center">
        <input
          type="email"
          className="rounded-full px-4 py-3 bg-neutral-600/75 border-2 border-neutral-600 min-w-[350px] text-sm"
          placeholder="Email address"
        />
        <button className="rounded-full text-xl font-semibold bg-red-600 cursor-pointer text-white min-w-[200px]">
          Get Started
        </button>
      </div>
    </div>
  );
}
