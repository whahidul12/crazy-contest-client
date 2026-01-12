import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import heroImg from "../../assets/hero-img.jpg";

const Banner = () => {
  return (
    <div className="h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-slate-100">
      <main className="mx-auto max-w-7xl px-6 pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl">
                Build something <br />
                <span className="text-slate-900 dark:text-white">
                  beautiful.
                </span>
              </h1>
              <p className="max-w-lg text-xl leading-relaxed text-slate-600 md:text-2xl dark:text-slate-400">
                Empower your team with tools designed for clarity and focus. All
                your work in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95">
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
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={32}
                  slidesPerView="auto"
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={5000}
                  className="!overflow-visible"
                >
                  <SwiperSlide className="!w-auto">
                    <img
                      alt="Netflix logo"
                      className="h-5 flex-shrink-0 opacity-60 grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvq_lN-rFGC_-zpJe6sa5RS-lP2rhUSzn0vygxMZezLnIorvqiuQQ2WlTviKsqWAS82TqwcQaK34ew3jmHK_Q7uAY82RI5-RAwdfZRyMiAf9hvgSlVEMyFIiuZN2lleVXQH8_2UmLyafP4KWixoWOC-BwK8KR1QXnyIHkD9J5YXEo52SresBw-BFAiEbc2l5HWJPXtWwBBg3wtPKDPG_gJAR7e1FdImk1h2jnu2kSHpcaNk1y-i0wZdoTjZ9u1Z3ZFuEgL69NmSpZ"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="!w-auto">
                    <img
                      alt="Meta logo"
                      className="h-6 flex-shrink-0 opacity-60 grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN7q7HlpeB9k3KnH4rQLuDjLJMOghaguZevfsLP18opMpNGmuoK9EguTx1k0Oy8fh9vu3B4Vpq4bo0iwMfEK0qnS44zWgBZ7aUJs6n293K8PEtLmahIY3RUMn23StVVyplqYigpNQuk0Z_5bwnmBxLgM7aRIwj51jgKaduBuRj9C6ibIieilYao87USBHqi2WXzgcw1FLHJcfoDI9dJbrGnO8yPYNM2pfGk69I4BOvWVAejgGZ0BvPjzQ_ZYLWVPOv4XlFTmD7T_ql"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="!w-auto">
                    <img
                      alt="Figma logo"
                      className="h-6 flex-shrink-0 opacity-60 grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ6TGqYnLWmHpYc8R-hRrCqwKnYPKQHkjFFKHtR0YmzDHlncQJ8pZ1NqeKZnk6jiYVik4c_AYiY4-eubJZqwbANoWPWh2XDgjQGuZir-MdpJfTz6GfzpPCZF-AxgijwUQ2NWIxmsu2iB0aNDxLuEgHJtXH8CgKu1SCWbsK5oNdhhSHLWXOnrEvDKxYMUyY9CuKqFCb2o-T4smXiI1c6HMbAFXLA-cw9CirDsd99J7ExGEbUEPsixlZhYtuqTk2pJySB7b3ih9gg7Kb"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="!w-auto">
                    <img
                      alt="Loom logo"
                      className="h-6 flex-shrink-0 opacity-60 grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI9yi0evYYm0JYjYaJ6-7vLVzngu87MYtJLaOYF_W7iZOHW1_C3wEZ4PQTC0nM2req_5vTrXktxLwNTDB7PUtzGZbjdbwASr1e6YhIPAWZAGcJB5Hhfa7cNcluyeu2prUt0C6FpTwJUzUKwZw3QCHyzkI8UZvmqlzghL7zFLvc8-JkpmN7JurHc3i_VyjEWklz8OY8LHBoJsGrMVZdvVJJk6tiKahN_5yOsnbRIJpzZhoy9gBkVzJ7JMZHm1vaNZRJ6ic2CVi91b8f"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="!w-auto">
                    <img
                      alt="Notion logo"
                      className="h-6 flex-shrink-0 opacity-60 grayscale"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeEaiFAIgPJOt6-yJrhxirqD3fSi4PrqWkeRqsOCTF89wwoRFMPmeGnykWZXezP1yM2F3bHcYdX2WJKYO3D1AODQHVfnJGXiyftZg_Wzqr1ox15_H88BLlEtffCWDH-dZIrJjfs7vCbYBQUMI_3BgCB9ZXJBIJ2X8dEUkbcTa_mu-TRMtR7xU1GgsSU3goLnMNaXRjonR5XrxwLSYja3pOdq4vU3WlHQjuxXrFwXRpBgbtDEtjQ06-XtTY_RLG8hubDNF4YAbC4bkY"
                    />
                  </SwiperSlide>
                </Swiper>
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
