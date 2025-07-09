import type { Route } from ".react-router/types/app/+types/root";
import { TriangleAlert } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Logo from "~/assets/logo.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Sign Up" },
    { name: "description", content: "https://github.com/zTiagok" },
  ];
}

interface FormInterface {
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log(data);
  };

  return (
    <main className="flex h-screen flex-col items-center gap-8 bg-white text-slate-800">
      <header className="flex w-full justify-between border-b border-gray-400/30 px-14 py-6">
        <img src={Logo} className="w-[16vh]" alt="Netflix" />
        <button className="text-lg font-semibold">Sign In</button>
      </header>

      <form
        className="flex max-w-[440px] flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.password && (
          <div className="flex gap-4 rounded-sm bg-yellow-600 p-2">
            <TriangleAlert fill="black" color="#d08600" />
            <span>{errors.password.message}</span>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <span className="text-sm uppercase">
            Step <b>1</b> of <b>3</b>
          </span>
          <h2>
            Welcome back! <br />
            Joining Netflix is easy.
          </h2>
          <h5>Enter your password and you'll be watching in no time.</h5>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p>Email</p>
            <b>EMAIL AQUI!</b>
          </div>

          <input
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 4,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
              maxLength: {
                value: 60,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
            })}
            type="password"
            className="w-full border border-gray-400 px-2 py-4"
            placeholder="Enter your password"
          />

          <span className="text-blue-500 select-none hover:cursor-pointer hover:underline">
            Forgot your password?
          </span>

          <button className="w-full rounded-sm bg-red-600 py-4 text-xl font-medium tracking-wide text-white">
            Next
          </button>
        </div>
      </form>
    </main>
  );
}
