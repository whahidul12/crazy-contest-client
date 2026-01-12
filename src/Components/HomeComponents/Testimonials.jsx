import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    quote:
      "ContestHub completely launched my career. I won my first design challenge here and got hired by a top agency the next week! The feedback from judges was invaluable.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    company: "Microsoft",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    quote:
      "The code review process is incredibly fair. Unlike other platforms, I actually get constructive feedback on my submissions. It's helped me grow tremendously as a developer.",
  },
  {
    id: 3,
    name: "Amara Okonjo",
    role: "Digital Marketer",
    company: "Meta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    quote:
      "I love the variety of contests available. It's a great way to build a portfolio and earn some extra income on the side. The community is incredibly supportive too.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Graphic Designer",
    company: "Adobe",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    quote:
      "Won $15,000 in my first month! The quality of contests and the professionalism of the platform is unmatched. This has become my primary source of freelance income.",
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Content Writer",
    company: "HubSpot",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: 5,
    quote:
      "The writing contests here are top-notch. I've improved my skills significantly and built relationships with amazing clients. The payment process is seamless too.",
  },
  {
    id: 6,
    name: "James Park",
    role: "Mobile Developer",
    company: "Spotify",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 4,
    quote:
      "Great platform for showcasing mobile app development skills. The contests are challenging and the rewards are worth the effort. Highly recommend to fellow developers.",
  },
  {
    id: 7,
    name: "Lisa Thompson",
    role: "Photographer",
    company: "National Geographic",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    quote:
      "As a photographer, finding the right contests was always challenging. ContestHub made it easy to find opportunities that match my style and expertise.",
  },
  {
    id: 8,
    name: "Alex Kumar",
    role: "Game Developer",
    company: "Unity",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    rating: 5,
    quote:
      "The game development contests are fantastic! I've learned so much from other participants and the judges' feedback has been incredibly valuable for my career growth.",
  },
  {
    id: 9,
    name: "Maria Gonzalez",
    role: "Video Editor",
    company: "Netflix",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    rating: 4,
    quote:
      "Love the video production contests! The creative briefs are inspiring and the competition pushes me to create my best work. The prizes are generous too.",
  },
  {
    id: 10,
    name: "Robert Kim",
    role: "Data Scientist",
    company: "Tesla",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    rating: 5,
    quote:
      "The data science challenges are intellectually stimulating and relevant to real-world problems. It's a great way to stay sharp and earn money while learning.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 h-32 w-32 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-28 w-28 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
            Trusted by Creators
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Join a community where talent is recognized and rewarded. Here's
            what our winners and participants have to say about their
            experience.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !bg-gray-300 dark:!bg-gray-600",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800"
                >
                  {/* Background Elements */}
                  <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-pink-500/10 to-red-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80"></div>

                  {/* Quote Icon */}
                  <FaQuoteLeft className="absolute top-6 right-6 text-3xl text-gray-100 dark:text-gray-700" />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Rating */}
                    <div className="mb-4 flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < testimonial.rating
                              ? "fill-current"
                              : "text-gray-300 dark:text-gray-600"
                          }
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-6 flex-grow leading-relaxed text-gray-600 italic dark:text-gray-300">
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border-2 border-blue-500 object-cover shadow-lg"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
