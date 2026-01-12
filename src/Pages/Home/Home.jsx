import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../../Components/HomeComponents/Banner";
import PopularContests from "../../Components/HomeComponents/PopularContests";
import WinnerSection from "../../Components/HomeComponents/WinnerSection";
import StatsSection from "../../Components/HomeComponents/StatsSection";
import HowItWorks from "../../Components/HomeComponents/HowItWorks";
import Categories from "../../Components/HomeComponents/Categories";
import Testimonials from "../../Components/HomeComponents/Testimonials";
import FaqSection from "../../Components/HomeComponents/FaqSection";
import Newsletter from "../../Components/HomeComponents/Newsletter";
import WhyChooseUs from "../../Components/HomeComponents/WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark -mt-18 min-h-screen transition-colors duration-300">
      <Helmet>
        <title>ContestHub | Compete, Create, Win</title>
        <meta
          name="description"
          content="Join the world's leading contest platform. Participate in coding, design, and creative challenges to win prizes."
        />
      </Helmet>

      {/* 1. Hero / Banner Section */}
      {/* Adjusted specifically to meet the visual height requirement */}
      <div className="relative z-0">
        <Banner />
      </div>

      <div className="relative z-10 container mx-auto -mt-10 space-y-20 px-4 pb-20 sm:px-6 lg:px-8">
        {/* 2. Statistics Section (Social Proof) */}
        <StatsSection />

        {/* 3. Popular Contests (Existing) */}
        <section id="popular">
          <PopularContests />
        </section>

        {/* 4. Browse by Categories */}
        <Categories />

        {/* 5. Winner Showcase (Existing) */}
        <WinnerSection />

        {/* 6. How It Works (Process) */}
        <HowItWorks />

        {/* 7. Testimonials (User Feedback) */}
        <Testimonials />

        {/* 8. Why Choose Crazy Contest */}
        <WhyChooseUs />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Newsletter / CTA */}
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
