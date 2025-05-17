import AboutCard from "~/components/AboutCard";
import DetailsDropdown from "~/components/DetailsDropdown";
import LanguageDropdown from "~/components/LanguageDropdown";
import MovieCard from "~/components/MovieCard";
import ReadyToWatch from "~/components/ReadyToWatch";
import type { Route } from "../../+types/root";

import Logo from "~/assets/logo.png";
import CommonData from "~/data/common.data.json";

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
        className={`absolute inset-0 h-screen bg-[url(/app/assets/landing_background.jpg)] object-contain opacity-30`}
      />

      <div className={`relative h-screen`}>
        <header className="clear-start flex items-center justify-between bg-linear-to-b from-black to-transparent px-38 py-6">
          <img src={Logo} alt="Netflix" className="w-[10vw]" />
          <div className="flex gap-4">
            <LanguageDropdown currentLanguage="English" />
            <button className="cursor-pointer rounded-md bg-red-600 px-4 transition-colors hover:bg-red-700">
              Sign In
            </button>
          </div>
        </header>

        <main className="flex flex-col">
          <div className="flex flex-col items-center">
            <div>
              <h1>Unlimited movies, TV shows, and more</h1>
              <h4>Starts at BRL 20.90. Cancel anytime.</h4>
            </div>

            <ReadyToWatch />
          </div>
        </main>
      </div>

      <div className="px-38">
        <section className="flex items-center justify-between">
          <div className="flex flex-col">
            <h4>The Netflix you love for just BRL 20.90.</h4>
            <h5>Enjoy savings and Netflix with a few ad breaks.</h5>
          </div>

          <button>Learn More</button>
        </section>

        <section className="flex flex-col">
          <h3>Trending Now</h3>
          <div className="flex h-[36vh] gap-4">
            {Array.from({ length: 5 }).map((_data, index) => (
              <MovieCard id={index} key={`movie-card-${index}`} />
            ))}
          </div>
        </section>

        <article className="flex flex-col">
          <h3>More Reasons to Join</h3>
          <div className="flex h-48 gap-3">
            {CommonData["information-cards"].map((data, index) => (
              <AboutCard
                title={data.title}
                description={data.description}
                image={data.image}
                key={index}
              />
            ))}
          </div>
        </article>

        <article className="flex flex-col gap-2">
          <h3>Frequently Asked Questions</h3>
          {CommonData["frequent-questions"].map((data, index) => (
            <DetailsDropdown
              title={data.title}
              key={`frequently-questions-${index}`}
            >
              <p>{data.phrase_1}</p>
              {data.phrase_2 && <br />}
              <p>{data.phrase_2}</p>
            </DetailsDropdown>
          ))}
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
            {CommonData["footer-hiperlinks"].map((data, index) => (
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
