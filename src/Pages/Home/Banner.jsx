// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerOne from "../../assets/banner-1.jpg";
import bannerTwo from "../../assets/banner-2.jpg";
import bannerThree from "../../assets/banner-3.jpg";
import bannerFour from "../../assets/banner-4.jpg";
import bannerFive from "../../assets/banner-5.jpg";
import bannerSix from "../../assets/banner-6.jpg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Banner slides data
  const slides = [
    {
      id: 6,
      image: bannerThree,
      title: "Unleash Your Skill, Claim Your Prize",
      description:
        "The ultimate proving ground for coders, creatives, and innovators. Join high-stakes global challenges and turn talent into reward.",
    },
    {
      id: 5,
      image: bannerTwo,
      title: "Where Imagination Meets Execution",
      description:
        "Compete in high-stakes design sprints—from cyberpunk concept art to minimalist brand identities that leave a lasting mark.",
    },
    {
      id: 4,
      image: bannerOne,
      title: "Code Your Way to the Top",
      description:
        "From optimized MongoDB schemas to complex AI integrations, prove your technical prowess and win the ultimate dev prize",
    },
    {
      id: 3,
      image: bannerFour,
      title: "Craft Stories That Matter",
      description:
        "Deep-dive into technical guides, security audits, and industry trends. Your perspective is the bridge between data and understanding",
    },
    {
      id: 2,
      image: bannerFive,
      title: "Evaluate the Experience",
      description:
        "Break down mechanics, lore, and performance. Your deep-dive reviews help define what makes a masterpiece and what falls short",
    },
    {
      id: 1,
      image: bannerSix,
      title: "From Vision to Venture",
      description:
        "Present your roadmap for change. We’re looking for the next generation of sustainable, scalable, and socially impactful business models.",
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="relative min-h-[700px] w-full">
      <div className="relative h-[700px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className={`absolute inset-0 ${index === currentSlide ? "z-10" : "z-0"}`}
            initial={{ opacity: index === currentSlide ? 1 : 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="px-4 text-center text-white">
                  <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 text-5xl font-bold text-shadow-lg/50 text-shadow-black md:text-7xl"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mx-auto mb-8 max-w-4xl text-xl text-shadow-lg/50 text-shadow-black md:text-2xl"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link to="/all-contests">
                      <button className="btn bg-secondary-o btn-lg hover:bg-secondary-o/80 border-none duration-300">
                        Explore ArtWork
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
