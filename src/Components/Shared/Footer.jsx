import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

// --- Configuration for Framer Motion Variants ---

// Controls the initial appearance and entry animation of the whole footer
const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: 0.5, // Start animation after a short delay
    },
  },
};

// Controls the hover/tap animation for individual social icons
const iconVariants = {
  hover: {
    scale: 1.2,
    y: -5,
    rotate: 5,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.9,
  },
};

// --- The Footer Component ---

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social Media Links Data
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/whahidul12", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/whahidul12",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/whahidul12",
      label: "Twitter",
    },
    {
      icon: FaEnvelope,
      href: "mailto:whahidul.islam.tech@gmail.com",
      label: "Email",
    },
  ];

  return (
    <motion.footer
      // Apply the entry animation variants
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      // Tailwind CSS for styling (replace with your preferred CSS solution)
      className="bg-secondary-c w-full overflow-hidden py-8 text-gray-400 shadow-2xl"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-primary-dark dark:text-primary-light flex items-center justify-center text-xl font-bold"
        >
          Crazy Contest
          <img src={logo} alt="crazy contest logo" className="-ml-2 w-10" />
        </Link>
        {/* Social Icons Section */}
        <div className="my-6 flex space-x-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                // Apply the hover/tap animation variants
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={link.label}
                className="text-primary-light transition-colors duration-300 hover:text-white"
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        {/* Navigation/Information Links (Optional) */}
        <div className="text-primary-light mb-4 flex space-x-6 text-sm">
          <a href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms" className="transition-colors hover:text-white">
            Terms of Service
          </a>
          <a href="/contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>

        {/* Copyright Text */}
        <motion.p
          className="text-primary-light text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          &copy; {currentYear} Crazy Contest. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
