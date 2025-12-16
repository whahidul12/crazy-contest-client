import { Helmet } from "react-helmet-async";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaBook,
  FaBullhorn,
} from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="bg-primary-light dark:bg-primary-dark mx-auto -mt-20 px-4 pt-24 pb-10">
      <Helmet>
        <title>Crazy Contest | Help Center</title>
      </Helmet>
      <h1 className="text-secondary-c dark:text-primary-light mb-10 flex items-center justify-center gap-3 text-center text-4xl font-bold">
        <FaQuestionCircle /> ContestHub Help Center
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* FAQ Section */}
        <div className="bg-card-light/50 dark:bg-card-dark/50 text-primary-dark dark:text-primary-light rounded-xl p-6 shadow-xl">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <FaBook /> Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            <div className="collapse-arrow bg-card-light dark:bg-card-dark collapse">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                How do I declare a winner?
              </div>
              <div className="collapse-content">
                <p>
                  As a Contest Creator, navigate to your Dashboard, then
                  "Submitted Tasks". If the contest deadline has passed and no
                  winner has been declared, you will see a "Declare Winner"
                  button next to each submission.
                </p>
              </div>
            </div>
            <div className="collapse-arrow bg-card-light dark:bg-card-dark collapse">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What is the entry fee used for?
              </div>
              <div className="collapse-content">
                <p>
                  The entry fee primarily contributes to the prize money pool
                  and platform operational costs to ensure smooth contest
                  execution and timely prize distribution.
                </p>
              </div>
            </div>
            <div className="collapse-arrow bg-card-light dark:bg-card-dark collapse">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How is the Leaderboard ranking determined?
              </div>
              <div className="collapse-content">
                <p>
                  The Leaderboard is ranked dynamically based on the total
                  number of contests a user has officially won.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact and Support Section */}
        <div className="text-primary-dark dark:text-primary-light bg-card-light/50 dark:bg-card-dark/50 rounded-xl p-6 shadow-xl">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <FaBullhorn /> Contact & Support
          </h2>
          <div className="space-y-4">
            <div className="alert alert-info shadow-lg">
              <FaEnvelope className="text-2xl" />
              <div>
                <h3 className="font-bold">General Inquiries</h3>
                <p className="text-sm">support@crazycontest.com</p>
              </div>
            </div>
            <div className="alert alert-success shadow-lg">
              <FaQuestionCircle className="text-2xl" />
              <div>
                <h3 className="font-bold">Technical Issues</h3>
                <p className="text-sm">
                  Submit a ticket for technical support.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm">
              We strive to respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
