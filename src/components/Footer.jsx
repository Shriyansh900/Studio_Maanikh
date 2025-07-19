import { Link } from "react-scroll";
import {
  Instagram,
  Facebook,
  Pointer as Pinterest,
  ArrowUp,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-black dark:bg-slate-700 dark:text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif mb-4  dark:text-yellow-400 font-bold text-2xl">
              Studio Maanikh
            </h2>
            <p className="text-black dark:text-white font-light mb-6">
              Creating timeless, elegant spaces that reflect your unique
              lifestyle.
            </p>
<div className="flex space-x-4">
  <a
    href="https://www.instagram.com/studiomaanikh?utm_source=ig_web_button_share_sheet&igsh=YmU1Y2tsdHVvbHF2"
    aria-label="Instagram"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center  hover:text-[#E4405F] hover:bg-white/20 transform transition-all duration-300 hover:scale-110"
  >
    <Instagram size={18} />
  </a>
  <a
    href="#"
    aria-label="Facebook"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center  hover:text-[#1877F2] hover:bg-white/20 transform transition-all duration-300 hover:scale-110"
  >
    <Facebook size={18} />
  </a>
  <a
    href="#"
    aria-label="LinkedIn"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center  hover:text-[#0A66C2] hover:bg-white/20 transform transition-all duration-300 hover:scale-110"
  >
    <Linkedin size={18} />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black dark:text-white  transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black dark:text-white  transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black  dark:text-white   transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-black dark:text-white ">
                <a href="#">Residential Design</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Commercial Spaces</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Space Planning</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Furniture Selection</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Renovation Consulting</a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li className="text-black dark:text-white ">
                <a href="#">LinkedIn</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Facebook</a>
              </li>
              <li className="text-black dark:text-white ">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <p className="text-black dark:text-white mb-4">
              420/falana nagar , dhimkani street ,prithvi Gola
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Studio Maanikh. All rights
            reserved.
          </p>
          {/* <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center text-gray-400  hover:text-white transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp size={16} className="ml-1" />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
