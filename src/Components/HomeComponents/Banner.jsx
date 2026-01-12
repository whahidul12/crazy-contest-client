import heroImg from "../../assets/hero-img.jpg";

const Banner = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      {/* Custom keyframe animation for infinite scrolling */}
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .infinite-scroll {
            animation: infiniteScroll 20s linear infinite;
          }
        `}
      </style>
      <main className="mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="max-w-lg text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl">
                Unleash Your Skill, Claim Your Prize.
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400">
                The ultimate proving ground for coders, creatives, and
                innovators. Join high-stakes global challenges and turn talent
                into reward.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-secondary-o rounded-lg px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
                Get started for free
              </button>
              <button className="rounded-lg bg-slate-100 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:scale-105 hover:bg-slate-200 active:scale-95 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
                Request a demo
              </button>
            </div>
            <div className="space-y-4 pt-8">
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                Trusted by teams at
              </p>
              <div className="overflow-hidden">
                <div className="infinite-scroll flex w-max items-center gap-x-8">
                  {/* First set of logos */}
                  <img
                    alt="Netflix logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  />
                  <img
                    alt="Google logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  />
                  <img
                    alt="Microsoft logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                  />
                  <img
                    alt="Apple logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  />
                  <img
                    alt="Amazon logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  />
                  <img
                    alt="Meta logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                  />
                  <img
                    alt="Tesla logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                  />
                  <img
                    alt="Spotify logo"
                    className="h-8 shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  />

                  {/* Duplicate set for seamless loop */}
                  <img
                    alt="Netflix logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  />
                  <img
                    alt="Google logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  />
                  <img
                    alt="Microsoft logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                  />
                  <img
                    alt="Apple logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  />
                  <img
                    alt="Amazon logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  />
                  <img
                    alt="Meta logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                  />
                  <img
                    alt="Tesla logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg"
                  />
                  <img
                    alt="Spotify logo"
                    className="h-8 flex-shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <img
                alt="Abstract creative collaboration illustration"
                className="rounded-3xl shadow-2xl transition-all duration-300 dark:shadow-slate-900"
                src={heroImg}
              />
              <div className="absolute -top-6 -left-6 hidden animate-bounce rounded-xl border border-slate-100 bg-white p-4 shadow-xl [animation-duration:4s] md:block dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <span className="text-sm">✏️</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 w-16 rounded bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-2 w-10 rounded bg-slate-100 dark:bg-slate-700"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-10 hidden animate-bounce rounded-xl border border-slate-100 bg-white p-4 shadow-xl [animation-duration:3.5s] md:block dark:border-slate-700 dark:bg-slate-800">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Project Launch
                    </span>
                  </div>
                  <div className="h-3 w-32 rounded bg-slate-100 dark:bg-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="pointer-events-none fixed top-0 left-0 -z-10 h-full w-full opacity-40">
        <div className="absolute top-[10%] left-[5%] h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Banner;
