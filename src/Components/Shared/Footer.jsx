import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/whahidul12", label: "GitHub", color: "hover:text-gray-400" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/whahidul12", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaTwitter, href: "https://twitter.com/whahidul12", label: "Twitter", color: "hover:text-sky-400" },
    { icon: FaEnvelope, href: "mailto:whahidul.islam.tech@gmail.com", label: "Email", color: "hover:text-red-400" },
  ];

  const quickLinks = [
    { name: "Browse Contests", href: "/contests" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Winners", href: "/winners" },
    { name: "Pricing", href: "/pricing" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Community", href: "/community" },
    { name: "Blog", href: "/blog" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gradient-to-r from-green-500/10 to-teal-500/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 h-28 w-28 rounded-full bg-gradient-to-r from-pink-500/10 to-red-500/10 blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="mb-6 flex items-center text-2xl font-bold text-white">
                Crazy Contest
                <img src={logo} alt="Crazy Contest Logo" className="-ml-2 w-10" />
              </Link>
              
              <p className="mb-6 text-gray-400 leading-relaxed">
                The world's leading platform for creative contests. Join thousands of creators 
                competing for amazing prizes and building their careers.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>San Francisco, CA 94102</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-red-400" />
                  <span>hello@crazycontest.com</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="transition-colors duration-300 hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-bold text-white">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="transition-colors duration-300 hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-lg font-bold text-white">Legal</h3>
              <ul className="mb-8 space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="transition-colors duration-300 hover:text-blue-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h4 className="mb-4 font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-all duration-300 ${link.color} hover:bg-gray-700`}
                        aria-label={link.label}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm text-gray-400"
              >
                &copy; {currentYear} Crazy Contest. All rights reserved. Made with ❤️ for creators worldwide.
              </motion.p>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300 hover:shadow-lg"
                aria-label="Back to top"
              >
                <FaArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
        >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h4 className="font-semibold text-white">Stay in the loop</h4>
                <p className="text-sm text-gray-400">Get notified about new contests and opportunities</p>
              </div>
              <Link
                to="#newsletter"
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:shadow-lg"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;