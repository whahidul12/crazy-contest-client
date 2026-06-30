import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/hero-img.jpg";
import { FaTrophy } from "react-icons/fa";

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
              <Link
                to={"/all-contests"}
                className="bg-secondary-o rounded-lg px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
              >
                Explore Contest
              </Link>
              <Link
                to={"/help-center"}
                className="rounded-lg bg-slate-100 px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:scale-105 hover:bg-slate-200 active:scale-95 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
              >
                Learn More
              </Link>
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
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 animate-bounce rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm [animation-duration:4s] dark:bg-gray-800/90"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <FaTrophy size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">
                      Contest Winner
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      $5,000 Prize
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -right-6 -bottom-6 animate-bounce rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-sm [animation-duration:3.5s] dark:bg-gray-800/90"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-bold text-gray-600 uppercase dark:text-gray-400">
                      Live Contest
                    </span>
                  </div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                    234 Participants
                  </div>
                </div>
              </motion.div>
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
