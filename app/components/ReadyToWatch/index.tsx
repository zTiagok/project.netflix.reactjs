import { ChevronRight } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInterface {
  email: string;
}

export default function ReadyToWatch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="flex w-fit flex-col items-center gap-3 self-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="flex w-full justify-center space-x-2 select-none">
        <input
          type="email"
          className="min-w-[350px] rounded-sm border border-neutral-600 bg-neutral-900/70 px-4 py-3 text-lg"
          placeholder="Email address"
          {...register("email", {
            required: "Email is required.",
            validate: (value) => value.includes("@") || "Email must be valid.",
          })}
        />
        <button className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-sm bg-red-600 text-2xl text-white transition-colors hover:bg-red-700 active:bg-red-900">
          Get Started
          <ChevronRight />
        </button>
      </div>
      {errors.email && (
        <span className="self-start text-sm text-red-600">
          {errors.email.message}
        </span>
      )}
    </form>
  );
}
