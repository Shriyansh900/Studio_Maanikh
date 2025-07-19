import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "../UI/SplitText";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Modern Living Spaces",
      subtitle: "Contemporary design meets functionality",
    },
    {
      url: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Elegant Interiors",
      subtitle: "Sophisticated spaces for modern living",
    },
    {
      url: "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Luxury Design",
      subtitle: "Premium finishes and timeless aesthetics",
    },
    {
      url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Custom Solutions",
      subtitle: "Tailored designs for every lifestyle",
    },
    {
      url: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
      title: "Commercial Spaces",
      subtitle: "Professional environments that inspire",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${heroImages[currentSlide].url}')`,
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl font-medium text-white/90 mb-4"
          >
            Welcome to 
          </motion.h2> */}

          {/* SplitText Animates Only Once */}
          <SplitText
            text="Studio Maanikh"
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            delay={150}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Subtitle Animation */}
          <div className="h-16 flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl md:text-2xl text-white/90 font-light"
              >
                {heroImages[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                View Our Work
              </motion.div>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.8,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
        }}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-10 sm:bottom-12 md:bottom-16 text-white z-20"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <motion.span
            className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
            whileHover={{ y: -2 }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown
              size={20}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
