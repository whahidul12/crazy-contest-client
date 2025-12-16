import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularContests from "./PopularContests";
import WinnerSection from "./WinnerSection";

const Home = () => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark -mt-20">
      <Helmet>
        <title>Crazy Contest | Home</title>
      </Helmet>
      <Banner />
      <div className="container mx-auto">
        <PopularContests />
        <WinnerSection />

        {/* Extra Static Section */}
        <div className="px-4 pb-16 text-center sm:px-0">
          <h2 className="text-secondary-c dark:text-primary-light mb-8 text-3xl font-bold sm:text-4xl">
            Why Choose ContestHub?
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="bg-base-100 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Secure Payments</h3>
              <p>We use industry-standard encryption for all transactions.</p>
            </div>
            <div className="bg-base-100 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Fair Judging</h3>
              <p>Transparent winner selection process for every contest.</p>
            </div>
            <div className="bg-base-100 rounded-lg border p-6 shadow-sm">
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p>Connect with participants from over 50 countries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
