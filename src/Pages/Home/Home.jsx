import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PopularContests from "./PopularContests";
import WinnerSection from "./WinnerSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ContestHub | Home</title>
      </Helmet>
      <Banner />
      <div className="container mx-auto">
        <PopularContests />
        <WinnerSection />

        {/* Extra Static Section */}
        <div className="my-16 px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose ContestHub?</h2>
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
