import type { Route } from ".react-router/types/app/+types/root";
import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import Logo from "~/assets/logo.png";
import LanguageDropdown from "~/components/LanguageDropdown";
import { common } from "~/data";
import { useUserStore } from "~/store";

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
  const navigate = useNavigate();
  const userEmail = useUserStore((state) => state.email);

  useEffect(() => {
    if (!userEmail) {
      navigate("/en/home");
    }
  }, [userEmail]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInterface>();

  const onSubmit: SubmitHandler<FormInterface> = (data) => {
    console.log(data);
  };

  const onLogoClick = () => {
    navigate("/en/home");
  };

  return (
    <main className="flex h-screen flex-col items-center gap-8 bg-white text-slate-800">
      <header className="flex max-h-[80px] w-full items-center justify-between border-b border-gray-400/30 px-14 py-6">
        <button className="cursor-pointer" onClick={onLogoClick}>
          <img src={Logo} className="max-h-[40px]" alt="Netflix" />
        </button>
        <button className="text-lg font-semibold">Sign In</button>
      </header>

      <form
        className="flex max-w-[440px] flex-1 flex-col gap-6"
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
            <b>{userEmail}</b>
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

      <footer className="flex w-full flex-col justify-between border-t border-gray-200 bg-gray-100 px-24 py-8 pb-4 text-gray-500">
        <p className="pb-8"> Questions? Call 0000 000 0000</p>

        <div className="grid max-w-[1000px] grid-cols-4 grid-rows-2 gap-2 pb-4 text-sm select-none">
          {common.signin_footer_hiperlinks.map((data, index) => (
            <span
              key={`signup-footer-hiperlink-${index}`}
              className="w-fit cursor-pointer hover:underline"
            >
              {data.name}
            </span>
          ))}
        </div>

        <LanguageDropdown />
      </footer>
    </main>
  );
}
