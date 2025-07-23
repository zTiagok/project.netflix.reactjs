import type { Route } from ".react-router/types/app/+types/root";
import { useEffect, type JSX } from "react";
import { useNavigate } from "react-router";
import Logo from "~/assets/logo.png";
import LanguageDropdown from "~/components/LanguageDropdown";
import { common } from "~/data";
import { useSignUpStore, useUserStore } from "~/store";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Sign Up" },
    { name: "description", content: "https://www.github.com/zTiagok" },
  ];
}

export default function SignUp() {
  const navigate = useNavigate();
  const { step, setStep } = useSignUpStore((state) => state);
  const { email, setEmail } = useUserStore((state) => state);

  useEffect(() => {
    setStep(1);

    if (!email) {
      navigate("/en/home");
    }
  }, []);

  const onLogoClick = () => {
    navigate("/en/home");
  };

  const onButtonClick = () => {
    setStep(step + 1);
  };

  const stepRenderer: Record<number, JSX.Element> = {
    1: <StepOne email={email} onButtonClick={onButtonClick} />,
    2: <StepTwo email={email} onButtonClick={onButtonClick} />,
    3: (
      <StepThree
        email={email}
        setEmail={setEmail}
        onButtonClick={onButtonClick}
      />
    ),
    4: <StepFour email={email} onButtonClick={onButtonClick} />,
    5: <StepFive onButtonClick={onButtonClick} />,
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

      <div className="flex flex-1 justify-center">{stepRenderer[step]}</div>

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
