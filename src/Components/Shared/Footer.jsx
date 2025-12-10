import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content mt-10 rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">All Contests</a>
        <a className="link link-hover">Help Center</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-600" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-blue-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-sky-500" />
          </a>
        </div>
      </nav>
      <aside>
        <div className="flex flex-col items-center gap-2">
          {/* Placeholder for Logo */}
          <div className="text-xl font-bold">ContestHub</div>
          <p>Copyright © 2025 - All right reserved by ContestHub</p>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
