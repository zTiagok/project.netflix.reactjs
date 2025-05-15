import AboutCard from "~/components/AboutCard";
import DetailsDropdown from "~/components/DetailsDropdown";
import LanguageDropdown from "~/components/LanguageDropdown";
import MovieCard from "~/components/MovieCard";
import ReadyToWatch from "~/components/ReadyToWatch";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Netflix - Watch TV Shows Online" },
    { name: "description", content: "https://github.com/zTiagok" },
  ];
}

export default function Home() {
  return (
    <div className="bg-neutral-950 h-full pb-24">
      <div className="px-10">
        <header className="items-center flex justify-between bg-red-500 clear-start px-10">
          <h1>Netflix</h1>
          <div className="flex gap-4">
            <LanguageDropdown currentLanguage="English" />
            <button className="cursor-pointer">Sign In</button>
          </div>
        </header>

        <main className="flex flex-col ">
          <div className="bg-red-500/50 flex flex-col items-center">
            <div>
              <h1>Unlimited movies, TV shows, and more</h1>
              <h2>Starts at BRL 20.90. Cancel anytime.</h2>
            </div>

            <ReadyToWatch />
          </div>
        </main>
      </div>

      <div className="px-38">
        <section className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3>The Netflix you love for just BRL 20.90.</h3>
            <span>Enjoy savings and Netflix with a few ad breaks.</span>
          </div>

          <button>Learn More</button>
        </section>

        <section className="flex flex-col">
          <h2>Trending Now</h2>
          <div className="flex gap-4 h-60">
            {Array.from({ length: 9 }).map((_data, index) => (
              <MovieCard id={index} key={`movie-card-${index}`} />
            ))}
          </div>
        </section>

        <article className="flex flex-col">
          <h2>More Reasons to Join</h2>
          <div className="flex h-48 gap-3">
            <AboutCard
              title="Enjoy on your TV"
              description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
              image=""
            />
            <AboutCard
              title="Download your shows to watch offline"
              description="Save your favorites easily and always have something to watch."
              image=""
            />
            <AboutCard
              title="Watch everywhere"
              description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
              image=""
            />
            <AboutCard
              title="Create profiles for kids"
              description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
              image=""
            />
          </div>
        </article>

        <article className="flex flex-col gap-2 select-none">
          <h2>Frequently Asked Questions</h2>
          <DetailsDropdown title="What is Netflix?">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices.
            </p>
            <br />
            <p>
              You can watch as much as you want, whenever you want without a
              single ad — all for one low monthly price. There's always
              something new to discover and new TV shows and movies are added
              every week!
            </p>
          </DetailsDropdown>

          <DetailsDropdown title="How much does Netflix cost?">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              BRL 20.90 to BRL 200.00 a month. No extra costs, no contracts.
            </p>
          </DetailsDropdown>

          <DetailsDropdown title="Where can I watch?">
            <p>
              Watch anywhere, anytime, on an unlimited number of devices. Sign
              in with your Netflix account to watch everywhere you go, including
              the web, iOS, Android, Firefox, Chrome, and more.
            </p>
            <br />
            <p>
              You can also download your favorite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're offline and
              without an internet connection. Take Netflix with you anywhere.
            </p>
          </DetailsDropdown>

          <DetailsDropdown title="How do I cancel?">
            <p>
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees — start or stop your
              account anytime.
            </p>
          </DetailsDropdown>

          <DetailsDropdown title="What can I watch on Netflix?">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </DetailsDropdown>

          <DetailsDropdown title="Is Netflix good for kids?">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space.
            </p>
            <br />
            <p>
              Kids profiles come with PIN-protected parental controls that let
              parents restrict the maturity rating of content kids can watch and
              block specific titles you don't want kids to see.
            </p>
          </DetailsDropdown>
        </article>

        <ReadyToWatch />

        <footer className="text-sm text-neutral-400 font-medium flex flex-col gap-8">
          <p>
            Questions? Call{" "}
            <span className="underline cursor-pointer select-none">
              0000 000 0000
            </span>{" "}
          </p>

          <div className="grid grid-cols-4 grid-rows-5 gap-3 [&>*]:w-fit [&>*]:underline [&>*]:cursor-pointer select-none">
            <span>FAQ</span>
            <span>Help Center</span>
            <span>Account</span>
            <span>Media Center</span>

            <span>Investor Relations</span>
            <span>Jobs</span>
            <span>Redeem Gift Cards</span>
            <span>Buy Gift Cards</span>

            <span>Ways to Watch</span>
            <span>Terms of Use</span>
            <span>Privacy</span>
            <span>Cookie Preferences</span>

            <span>Corporate Information</span>
            <span>Contact Us</span>
            <span>Speed Test</span>
            <span>Legal Notices</span>

            <span>Only on Netflix</span>
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
                className="underline cursor-pointer"
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
