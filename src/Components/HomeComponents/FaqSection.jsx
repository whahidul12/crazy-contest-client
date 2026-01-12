import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Is it free to join contests?",
    answer:
      "Yes! Most contests on ContestHub are completely free to join. Some premium high-stakes contests may require a small entry fee.",
  },
  {
    question: "How do I get paid?",
    answer:
      "We support PayPal, Stripe, and direct Bank Transfer. Winners are processed within 48 hours of the result announcement.",
  },
  {
    question: "Can I submit multiple entries?",
    answer:
      "It depends on the specific contest rules. Check the 'Rules' tab on the contest details page.",
  },
  {
    question: "Who owns the rights to my work?",
    answer:
      "You retain full copyright until you are selected as a winner. If you win, the rights transfer to the contest holder in exchange for the prize money.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mx-auto max-w-3xl">
      <h2 className="text-secondary-c dark:text-primary-light mb-8 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="dark:bg-card-dark overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700"
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-5 text-left focus:outline-none"
            >
              <span className="text-primary-dark text-lg font-semibold dark:text-gray-200">
                {faq.question}
              </span>
              <span className="text-secondary-o">
                {activeIndex === idx ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="border-t border-gray-100 p-5 pt-0 text-gray-600 dark:border-gray-700 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
