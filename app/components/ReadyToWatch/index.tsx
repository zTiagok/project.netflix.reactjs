import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod/v4";

type FormData = {
  email: string;
};

export default function ReadyToWatch() {
  const schema: ZodType<FormData> = z.object({
    email: z.email(),
  });

  const {} = useForm({ resolver: zodResolver(schema) });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <form
        id="ready-to-watch-form"
        className="flex w-full justify-center space-x-2 select-none"
        onSubmit={(event) => handleSubmit(event)}
      >
        <input
          type="email"
          className="min-w-[350px] rounded-sm border border-neutral-600 bg-neutral-900/70 px-4 py-3 text-lg"
          placeholder="Email address"
          required
        />
        <button
          type="submit"
          form="ready-to-watch-form"
          className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-sm bg-red-600 text-2xl text-white transition-colors hover:bg-red-700 active:bg-red-900"
        >
          Get Started
          <ChevronRight />
        </button>
      </form>
    </div>
  );
}
