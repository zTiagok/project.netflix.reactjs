import type { Route } from ".react-router/types/app/+types/root";
import Logo from "~/assets/logo.png";
import AboutCard from "~/components/AboutCard";
import Carousel from "~/components/Carousel";
import DetailsDropdown from "~/components/DetailsDropdown";
import { PopcornIcon } from "~/components/Icons";
import LanguageDropdown from "~/components/LanguageDropdown";
import ReadyToWatch from "~/components/ReadyToWatch";
import { common } from "~/data/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Watch TV Shows Online" },
    { name: "description", content: "https://github.com/zTiagok" },
  ];
}

export default function Home() {
  return (
    <div className="h-full bg-neutral-950 pb-24">
      <div
        className={`absolute inset-0 h-[90vh] bg-[url(/app/assets/landing_background.jpg)] opacity-20`}
      />

      <div className="relative flex h-[90vh] flex-col bg-linear-to-b from-black/75 from-10% to-transparent to-20% px-38">
        <header className="clear-start flex items-center justify-between py-6">
          <img src={Logo} alt="Netflix" className="w-[10vw]" />
          <div className="flex gap-4">
            <LanguageDropdown currentLanguage="English" />
            <button className="cursor-pointer rounded-md bg-red-600 px-4 transition-colors hover:bg-red-700 active:bg-red-900">
              Sign In
            </button>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="leading-18 tracking-wide">
                Unlimited movies, <br /> TV shows, and <br /> more
              </h1>
              <h4>Starts at BRL 20.90. Cancel anytime.</h4>
            </div>

            <ReadyToWatch />
          </div>
        </main>
      </div>

      <div className="-mt-16 h-16 w-full overflow-hidden">
        <div className="flex h-full w-full rounded-t-[60%] bg-gradient-to-t from-pink-600 to-red-500 before:relative before:top-1 before:flex-1 before:rounded-t-[50%] before:bg-radial-[at_50%_00%] before:from-indigo-900 before:to-neutral-950 before:to-50% before:content-['']" />
      </div>

      <div className="flex flex-col gap-16 px-38">
        <section className="group flex items-center transition-transform duration-400 hover:scale-105">
          <div className="flex w-fit scale-75 items-center justify-center">
            <PopcornIcon />
          </div>
          <div className="r-8 flex h-full w-full items-center justify-between rounded-2xl bg-linear-to-r from-[#482566]/50 to-[#161d52]/50 px-6 py-4 transition group-hover:from-[#482566]/100 group-hover:to-[#161d52]/100">
            <div className="flex flex-col -space-y-2">
              <h4>The Netflix you love for just BRL 20.90.</h4>
              <h5>Get our most affordable, ad-supported plan.</h5>
            </div>

            <button className="rounded-md bg-neutral-600/80 px-4 py-2 transition-colors hover:cursor-pointer hover:bg-neutral-600/50 active:opacity-80">
              Learn More
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h3>Trending Now</h3>
          <div className="flex h-[26vh]">
            <Carousel />
          </div>
        </section>

        <article className="flex flex-col gap-6">
          <h3>More Reasons to Join</h3>
          <div className="flex h-64 gap-4">
            {common.information_cards.map((data, index) => (
              <AboutCard
                title={data.title}
                description={data.description}
                icon={data.icon}
                key={index}
              />
            ))}
          </div>
        </article>

        <article className="flex flex-col gap-4">
          <h3>Frequently Asked Questions</h3>
          <div className="flex flex-col gap-2">
            {common.frequent_questions.map((data, index) => (
              <DetailsDropdown
                title={data.title}
                key={`frequently-questions-${index}`}
              >
                <p>{data.phrase_1}</p>
                {data.phrase_2 && <br />}
                <p>{data.phrase_2}</p>
              </DetailsDropdown>
            ))}
          </div>
        </article>

        <ReadyToWatch />

        <footer className="flex flex-col gap-8 text-sm font-medium text-neutral-400">
          <p>
            Questions? Call{" "}
            <span className="cursor-pointer underline select-none">
              0000 000 0000
            </span>{" "}
          </p>

          <div className="grid grid-cols-4 grid-rows-5 gap-3 select-none [&>*]:w-fit [&>*]:cursor-pointer [&>*]:underline">
            {common.footer_hiperlinks.map((data, index) => (
              <span key={`footer-hiperlink-${index}`}> {data.name} </span>
            ))}
          </div>

          <LanguageDropdown currentLanguage="English" />

          <span>
            <p>Replica made by Tiago Braga.</p>
            <p>
              Visit{" "}
              <a
                href="https://github.com/zTiagok"
                target="_blank"
                rel="noreferrer noopener"
                className="cursor-pointer underline"
              >
                https://github.com/zTiagok
              </a>{" "}
              for more details.
            </p>
          </span>
        </footer>
      </div>
    </div>
  );
}
