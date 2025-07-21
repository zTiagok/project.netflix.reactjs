import type { Route } from ".react-router/types/app/+types/root";
import type { JSX } from "react";
import { useNavigate } from "react-router";
import Logo from "~/assets/logo.png";
import LanguageDropdown from "~/components/LanguageDropdown";
import { common } from "~/data";
import { useSignUpStore } from "~/store";
import StepForm from "./StepForm";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Sign Up" },
    { name: "description", content: "https://github.com/zTiagok" },
  ];
}

export default function SignUp() {
  const navigate = useNavigate();
  const step = useSignUpStore((state) => state.step);

  const onLogoClick = () => {
    navigate("/en/home");
  };

  const stepRenderer: Record<number, JSX.Element> = {
    0: <StepForm />,
    1: <StepOne />,
    2: <StepTwo />,
  };

  return (
    <main className="flex h-screen flex-col items-center gap-8 bg-white text-slate-800">
      <header className="flex max-h-[80px] w-full items-center justify-between border-b border-gray-400/30 px-14 py-6">
        <button className="cursor-pointer" onClick={onLogoClick}>
          <img src={Logo} className="max-h-[40px]" alt="Netflix" />
        </button>
        <button className="cursor-pointer text-lg font-semibold hover:underline">
          Sign In
        </button>
      </header>

      <div className="flex-1">{stepRenderer[step]}</div>

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
